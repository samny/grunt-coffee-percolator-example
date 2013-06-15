'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %>\n' + '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' + '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' + ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        clean: {
            files: ['dist']
        },
        jshint: {
            gruntfile: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: 'Gruntfile.js'
            },
            src: {
                options: {
                    jshintrc: 'src/.jshintrc'
                },
                src: ['src/**/*.js']
            },
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            src: {
                files: '<%= jshint.src.src %>',
                tasks: ['jshint:src']
            },
        },

        
        percolator: {

                /* Coffee Script */
                // source: 'src/coffee',
                // output: 'dist/main.js',
                // main: 'app.coffee',                

                /* JavaScript (if the 'main' file is a .js file */
                source: 'src/js',
                output: 'dist/main.js',
                main: 'app.js',            
        },
        coffee: {
            options: {
                bare: true,
                join: false,
                sourceMap: false
            },
            files: {
                expand: true,
                flatten: false,
                cwd: 'src/coffee',
                src: ['**/*.coffee'],
                dest: 'src/js/',
                ext: '.js'
            }
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-coffee-percolator');


    // Default task.
    grunt.registerTask('default', ['clean', 'percolator']);

};