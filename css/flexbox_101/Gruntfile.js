module.exports = function(grunt) {

	var autoprefixer = require('autoprefixer-core');

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'public/css/new/*.css',
				dest: 'public/css/new/<%= pkg.name %>.min.css'
			}
		},
		
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'scss',
					src: ['*.scss'],
					dest: 'css',
					ext: '.css'
				}]
			}
		},

		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: [{
					'build/output.min.css': ['build/*.css']
				}]
			}
		},

		clean: {
			sass: ['css'],
			autoprefixed: ['dest']
		},

		copy: {
			cssMin: {
				files: [{
					expand: true,
					cwd: 'scss/build',
					src: '*.min.css', 
					dest: 'css'
				}]
			},
			css: {
				files: [{
					expand: true,
					cwd: 'scss/build',
					src: '*.css', 
					dest: 'css'
				}]
			},
			autoprefixed: {
				files: [{
					expand: true,
					cwd: 'dest/',
					src: '*.css', 
					dest: 'css'
				}]
			}
		},

		watch: {
			files: ['scss/*.scss'],
			tasks: ['runsass']
		},

		autoprefixer: {
			options: {
				processors: [
					autoprefixer({
						browers: ['> 0.5%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
					}).postcss
				]
			},
			dist: {
				files: [{
					expand: true,
					flatten: true,
					src: ['css/*.css', '!*.css.map'], 
					dest: 'dest/'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	

	// Default task(s).
	grunt.registerTask('look', ['watch']);
	grunt.registerTask('runsass', ['clean:sass', 'sass:dist']);
	grunt.registerTask('auto-prefix', ['clean:autoprefixed', 'runsass', 'autoprefixer', 'clean:sass', 'copy:autoprefixed']);

	grunt.registerTask('default', ['runsass']);
};