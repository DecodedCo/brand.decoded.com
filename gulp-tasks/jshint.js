/**
 * Lints the JavaScript using JSHint. Settings are taken from the .jshintrc file in the project
 * root, although three streams are created in this task that adjust the options slightly for
 * browser vs. Node vs. unit test (browser) JavaScript.
 *
 * Additionally the 'NODE_FAIL' env var is
 * used to control whether the task should just beep the shell when a lint error is encountered
 * (for development), or cause the process to exit with an error (for continuous integration).
 */

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var gutil = require('gulp-util');
var map = require('map-stream');
var merge = require('merge-stream');

function lint (src, ops) {

    var stream = gulp
        .src(src)
        .pipe(jshint(ops))
        .pipe(jshint.reporter(stylish));

    if (process.env.NODE_FAIL) {
        stream.pipe(jshint.reporter('fail'));
    } else {
        var success = true;
        stream
            .pipe(map(function (file, cb) {
                if (!file.jshint.success) {
                    success = false;
                }
                cb(null, file);
            }))
            .on('end', function () {
                if (!success) {
                    gutil.beep();
                }
            });
    }

    return stream;
}

module.exports = function () {

    var browserJs = lint(global.config.lintableBrowserJs, {
        predef: [
            '$',
            '_',
            'console',
            'require',
            'module',
            'Handlebars'
        ],
        node: false,
        browser: true,
        globalstrict: true
    });

    return browserJs;
};
