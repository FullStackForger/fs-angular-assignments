module.exports = function (config) {
	config.set({

		basePath: './',

		files: [
			// dependencies
			'bower_components/angular/angular.js',
			'bower_components/angular-route/angular-route.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'bower_components/angular-sanitize/angular-sanitize.js',
			'bower_components/angular-bootstrap/ui-bootstrap.js',
			'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
			'bower_components/showdown/dist/showdown.js',
			'bower_components/ng-showdown/dist/ng-showdown.js',
			// app modules
			'app/app.js',
			'app/modules/**/*-module.js', // load module definitions first
			'app/modules/**/*.js',
			//
			'app/modules/**/*.tpl.html'
		],

		exclude: [
			'app/**/*.annotated.js',
		],

		autoWatch: true,

		frameworks: ['jasmine'],

		browsers: ['Chrome'],

		preprocessors: {
			'app/modules/**/*.tpl.html': ['ng-html2js']
		},

		plugins: [
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-jasmine',
			'karma-junit-reporter',
			'karma-ng-html2js-preprocessor'
		],

		junitReporter: {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		},

		ngHtml2JsPreprocessor: {
			moduleName: function (htmlPath, originalPath) {
				return htmlPath;
			}
		},
	});
};
