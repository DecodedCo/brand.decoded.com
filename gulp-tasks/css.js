/**
 * Compiles the CSS.
 */

var gulp = require('gulp');
var postcss = require('gulp-postcss');

module.exports = function () {
    return gulp.src(global.config.cssDir + '/*.css')
        .pipe(postcss([
            require('postcss-import')(),
            require('postcss-custom-properties')(),
            require('postcss-custom-media')(),
            require('postcss-font-magician')({
              aliases: {
                'sans-serif': 'Source Sans Pro',
                'serif': 'Source Serif Pro',
                'monospace': 'Source Code Pro'
              }
            }),
            require('autoprefixer')()
        ]))
        .pipe(gulp.dest(global.config.outputDir + '/css'));
};
