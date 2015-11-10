module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {
			es6: ['build']
		},

		copy: {

		},

		watch: {
			files: ['src6/*.js'],
			tasks: ['compile-es6']
		},

		traceur: {
			options: {
				includeRuntime: true
				// traceurOptions: "--experimental --source-maps"
			},
			main: {
				files: [{
					expand: false,
					src: 'src6/**/*.js', 
					dest: 'build/es5.js'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks("grunt-traceur-simple");
	

	// Default task(s).
	grunt.registerTask('look', ['watch']);
	grunt.registerTask('compile-es6', ['clean:es6', 'traceur:main']);
	grunt.registerTask('default', ['compile-es6']);
};