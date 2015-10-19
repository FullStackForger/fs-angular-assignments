module.exports = function(grunt) {

	var connectLiveReload = require('connect-livereload'),
		SERVER_PORT = 8000,
		LIVERELOAD_PORT = 35729;

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
		},

		// creates http server
		connect: {
			server: {
				options: {
					port: SERVER_PORT,
					livereload: true,
					base: '.'
				}
			}
		},

		// watching for changes in javascript/html files
		watch: {
			options: {
				reload: true,
				livereload: LIVERELOAD_PORT,
			},
			scripts: {
				files: ['app/**/*.js', '!app/**/*.test.js'],
				tasks: ['ngAnnotate', 'uglify']
			},
			html: {
				files: ['index.html', 'app/**/*.html']
			},
			css: {
				files: ['app/app.css']
			}
		},

		// opens web app in default browser
		open: {
			testServer: {
				path: 'http://localhost:' + SERVER_PORT + '/index.html'
			}
		}
	});

	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-open');

	grunt.registerTask('default', ['ngAnnotate', 'uglify', 'connect', 'open', 'watch']);
};