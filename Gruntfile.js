module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jsdoc: {
      dist: {
        jsdoc: './node_modules/jsdoc/jsdoc.js',
        src: [ 'lib/*.js' ],
      }
    },
    shell: {
        generateReadme: {
            command: './node_modules/jsdoc-to-markdown/bin/cli.js --src lib/index.js -P -t README.tpl.hbs -d 3 > README.md'
        },
        checkCodingStyle: {
            command: './node_modules/jscs/bin/jscs -c jscs.json lib/index.js'
        }
    }
  });

  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-shell');
  grunt.registerTask('doc', [ 'jsdoc' ]);
};
