/**
 * A Gulp task which empties the contents of the output directories.
 */

var del = require('del');

module.exports = function () {
    del([
        global.config.outputDir + '/css/**/*',
        global.config.outputDir + '/fonts/**/*',
        global.config.outputDir + '/images/**/*',
        global.config.outputDir + '/js/**/*',
        '!.gitkeep'
    ]);
};
