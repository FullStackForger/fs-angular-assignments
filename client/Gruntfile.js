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
		}
	});

	grunt.loadNpmTasks('grunt-ng-annotate');

	grunt.registerTask('default', ['ngAnnotate']);
};