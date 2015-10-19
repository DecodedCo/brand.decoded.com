var gulp = require('gulp');
var seq = require('run-sequence');
var tasks = require('./gulp-tasks');
var util = require('util');

var c = global.config = {};

c.siteDir = './src';
c.outputDir = './build';
c.jsDir = util.format('%s/js', c.siteDir);
c.js = util.format('%s/**/*.js', c.jsDir);
c.unitTestJs = util.format('%s/**/*.spec.js', c.jsDir);
c.unitTestHelpersJs = util.format('%s/**/*.helper.js', c.jsDir);
c.cssDir = util.format('%s/css', c.siteDir);
c.css = util.format('%s/**/*.css', c.cssDir);
c.imageDir = util.format('%s/images', c.siteDir);
c.fontDir = util.format('%s/fonts', c.siteDir);
c.templates = util.format('%s/**/*.hbs', c.jsDir);

Object.keys(tasks).forEach(function (name) {
    gulp.task(name, tasks[name]);
});

gulp.task('start', function (cb) {
    seq('build', 'watch', cb);
});

gulp.task('build', function (cb) {
    seq('clean', ['css', 'browserify'], cb);
});

gulp.task('watch', function () {
    gulp.watch(c.css, ['css']);
    gulp.watch([c.js, c.templates], ['browserify']);
});
