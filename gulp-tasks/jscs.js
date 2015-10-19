/**
 * Checks the JavaScript style using JSCS. Settings are taken from the .jscsrc file in the project
 * root. Additionally the 'NODE_FAIL' env var is used to control whether the task should just beep
 * the shell when a style error is encountered (for development), or cause the process to exit with
 * an error (for continuous integration).
 */

var gulp = require('gulp');
var jscs = require('gulp-jscs');
var map = require('map-stream');
var gutil = require('gulp-util');

module.exports = function () {

    var stream = gulp
        .src(global.config.allLintableJs)
        .pipe(jscs());

    if (!process.env.NODE_FAIL) {
        stream.on('error', function (err) {
            console.log(err.message);
            stream.emit('end');
            gutil.beep();
        });
    }

    return stream;
};
