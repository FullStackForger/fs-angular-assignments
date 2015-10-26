'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('app.modules.bill', function() {
	describe('view1', function() {

		beforeEach(function() {
			browser.get('#/bill');
		});

		describe('statement view', function() {
			it('should display "Current billing period" /bill', function() {
				var el = element.all(by.css('[ng-view] .statement p')).first().getText();
				expect(el).toMatch(/Current billing period/);
			});

			it('should display total amount', function() {
				var el = element.all(by.css('[ng-view] .statement .currency')).first().getText();
				expect(el).toMatch(/\d{0,3}.\d{0,2}\sGBP/);
			});

			it('should display bill dates', function() {
				var els = element.all(by.css('[ng-view] .statement .date'))
				els.each(function(element, index) {
					expect(element.getText()).toMatch(/\d{0,4}-\d{0,2}-\d{0,2}/);
				});
			});
		});
		
	});
});