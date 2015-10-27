module.exports = function(grunt) {

	var SERVER_PORT = 8000,
		LIVERELOAD_PORT = 35729;

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		ngAnnotate: {
			options: {
				singleQuotes: true,
				add: true,
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

		concat: {
			options: {
				separator: ';\n',
			},
			styles: {
				options: {
					separator: '\n',
					process: function(src, filepath) {
						src = '/* Source: ' + filepath + '*/\n' + src;
						src = src.replace(/(url\()(\'|\")(img\/)/, '$1$2../../app/$3');
						return  src;
					},
				},
				files: {
					'dist/css/app.css': [
						'app/**/*.css'
					]
				}
			},
			vendor: {
				files: {
					'dist/js/vendor.min.js': [
						'!bower_components/**/.js',
						'bower_components/angular/angular.min.js',
						'bower_components/angular-sanitize/angular-sanitize.min.js',
						'bower_components/angular-route/angular-route.min.js',
						'bower_components/angular-bootstrap/ui-bootstrap.min.js',
						'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
						'bower_components/showdown/dist/showdown.min.js',
						'bower_components/ng-showdown/dist/ng-showdown.min.js'
					]
				}
			},
			app: {
				options: {
					banner: '(function(){\n\'use strict\';\n',
					process: function(src, filepath) {
						return '// Source: ' + filepath + '\n' +
							src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
					},
					footer: '\n})();'
				},
				'files': {
					'dist/js/app.min.js' : [
						'!app/**/*.annotated.js',
						'app/**/*-module.annotated.js',
						'app/**/*-config.annotated.js',
						'app/**/*.annotated.js'
					]
				}
			},
		},

		uglify: {
			options: {
				report: 'min',
				mangle: false,
				sourceMap: true,
				sourceMapIncludeSources: true,
				sourceMapName: 'dist/js/app.min.js.map'
			},
			app: {
				files: {
					'dist/js/app.min.js': ['dist/js/app.min.js']
				}
			}
		},

		connect: {
			server: {
				options: {
					port: SERVER_PORT,
					livereload: true,
					base: '.'
				}
			}
		},

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
				files: ['*.html', 'app/**/*.html']
			},
			css: {
				files: ['*.css', 'app/**/*.css']
			}
		},

		open: {
			dev: {
				path: 'http://localhost:' + SERVER_PORT + '/index-dev.html'
			},
			dist: {
				path: 'http://localhost:' + SERVER_PORT + '/index.html'
			}
		}
	});

	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-open');

	grunt.registerTask('dev', ['connect', 'open:dev', 'watch']);
	grunt.registerTask('try', ['ngAnnotate', 'concat']);
	grunt.registerTask('default', ['ngAnnotate', 'concat', 'uglify', 'connect', 'open:dist', 'watch']);
};