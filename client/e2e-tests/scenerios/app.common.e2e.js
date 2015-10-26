'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('app.common', function () {

	it('should automatically redirect to /home when location hash/fragment is empty', function () {
		browser.get('index.html');
		expect(browser.getLocationAbsUrl()).toMatch('/home');
	});

	it('should have a title "FS Angular Assignments"', function () {
		expect(browser.getTitle()).toMatch('FS Angular Assignments');
	});

});
