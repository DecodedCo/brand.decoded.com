var gulp = require('gulp');
var seq = require('run-sequence');
var tasks = require('./gulp-tasks');
var util = require('util');

var c = global.config = {};

c.siteDir = './src';
c.outputDir = './build';
c.jsDir = util.format('%s/js', c.siteDir);
c.js = util.format('%s/**/*.js', c.jsDir);
c.jsHelpers = util.format('%s/helpers/*.js', c.jsDir);
c.cssDir = util.format('%s/css', c.siteDir);
c.css = util.format('%s/**/*.css', c.cssDir);
c.imageDir = util.format('%s/images', c.siteDir);
c.fontDir = util.format('%s/fonts', c.siteDir);

c.componentsDir = util.format('%s/components', c.siteDir);
c.componentsJs = util.format('%s/**/*.js', c.componentsDir);
// partials start with an underscore
c.templatePartials = util.format('%s/**/_*.hbs', c.siteDir);
// templates have no underscore
c.templates = util.format('%s/**/[^_]*.hbs', c.siteDir);
c.allTemplates = util.format('%s/**/*.hbs', c.jsDir);

c.lintableBrowserJs = [c.js, '!' + c.jsHelpers];
c.lintableNodeJs = ['gulpfile.js', 'gulp-tasks/*.js'];
c.allLintableJs = c.lintableBrowserJs.concat(c.lintableNodeJs);

Object.keys(tasks).forEach(function (name) {
    gulp.task(name, tasks[name]);
});

gulp.task('lint', function (cb) {
    seq(['jshint', 'jscs'], cb);
});

gulp.task('start', function (cb) {
    seq('lint','build', 'watch', cb);
});

gulp.task('build', function (cb) {
    seq('clean', ['css', 'handlebars', 'browserify'], cb);
});

gulp.task('watch', function () {
    gulp.watch(c.css, ['css']);
    gulp.watch(c.allTemplates, ['handlebars']);
    gulp.watch([c.js, c.componentsJs], ['browserify']);
});
