module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// annotates dependencies injections
		ngAnnotate: {
			options: {
				singleQuotes: true,
				add: true
			},
			app: {
				files: [
					{
						expand: true,
						src: ['app/**/*.js', '!app/**/*.test.js', '!app/**/*.annotated.js'],
						ext: '.annotated.js'
					}
				]
			}
		},

		// concatenation and obfuscation
		uglify: {
			options: {
				report: 'min',
				sourceMap: true,
				sourceMapIncludeSources: true,
				sourceMapName: 'dist/js/app.min.js.map',
				//mangle: true
			},
			app: {
				files: {
					'dist/js/app.min.js': ['app/**/*.annotated.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['ngAnnotate', 'uglify']);
};