/*
 * Pre-compiled Handlebar templates
 * we only need the handlebar runtime in the browser
 * which reduces file size and load times.
 */

var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var path = require('path');

module.exports = function () {

    // Load handlebars dynamic partials helper
    var dynamicpartials = gulp.src(global.config.jsDir + '/helpers/dynamicpartial.js');

    // Assume all partials start with an underscore
    // You could also put them in a folder such as source/templates/partials/*.hbs
    var partials = gulp.src(global.config.templatePartials)
        .pipe(handlebars({handlebars: require('handlebars')}))
        .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
            imports: {
                processPartialName: function (fileName) {
                    // Strip the extension and the underscore
                    // Escape the output with JSON.stringify
                    return JSON.stringify(path.basename(fileName, '.js').substr(1));
                }
            }
        }));

    var templates = gulp.src(global.config.templates)
        // Compile each Handlebars template source file to a template function
        .pipe(handlebars({handlebars: require('handlebars')}))
        .pipe(wrap('Handlebars.template(<%= contents %>)'))
        .pipe(declare({
            root: 'exports',
            noRedeclare: true, // Avoid duplicate declarations
            processName: function (filePath) {
                // Allow nesting based on path using gulp-declare's processNameByPath()
                // You can remove this option completely if you aren't using nested folders
                // Drop the templates/ folder from the namespace path by removing it from the filePath
                return declare.processNameByPath(filePath.replace('src/templates/', ''));
            }
          }));

    // Output both the partials and the templates as build/js/templates.js
    return merge(dynamicpartials, partials, templates)
        .pipe(concat('templates.js'))
        // Add the Handlebars module in the final output
        .pipe(wrap('var Handlebars = require("../../node_modules/handlebars/dist/handlebars.runtime.min");\n <%= contents %>'))
        .pipe(gulp.dest(global.config.outputDir + '/js'));
};
