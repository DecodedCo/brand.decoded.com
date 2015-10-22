/**
 * A Gulp task which copies static files that don't need specific processing into the static folder.
 * Extra streams can be added here, for example for images, if and when we need them.
 */

var gulp = require('gulp');
var merge = require('merge-stream');
var rename = require('gulp-rename');

module.exports = function () {
    var partials = gulp
            .src([
                global.config.componentPartials
            ])
            .pipe(rename(function (path) {
              path.dirname = '';
              path.basename = path.basename.replace('_', '');
            }))
            .pipe(gulp.dest(global.config.siteDir + '/views/component-partials'));
    var templates = gulp
            .src([
                global.config.componentTemplates
            ])
            .pipe(rename({
                dirname: ""
            }))
            .pipe(gulp.dest(global.config.siteDir + '/views/component-templates'));

    return merge(templates, partials);
};
