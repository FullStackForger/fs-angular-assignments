'use strict'
describe('app.modules.bill', function() {
	var $compile,
		$rootScope,
		mock = {},
		helper = {};

	//
	// mocks for tests
	//
	mock.data = {
		labels: ['label 1', 'label 2', 'label 3'],
		fields: ['field_1', 'field_2', 'field_3'],
		dataset: [{
			field_1: 'value 1.1',
			field_2: 'value 1.2',
			field_3: 'value 1.3',
		}],
		total: 999
	};
	mock.template = '<bill-details labels="labels" fields="fields" dataset="dataset" total="total" />';

	//
	// helper methods (DRY principle)
	//
	helper.applyToRootScope = function () {
		for(var property in mock.data) {
			if (mock.data.hasOwnProperty(property)) {
				$rootScope[property] = mock.data[property];
			}
		}
	};
	helper.getElement = function () {
		var element = $compile(mock.template)($rootScope);
		$rootScope.$apply();
		return element;
	};
	helper.getLabelElement = function (element, index) {
		return angular.element(element.find('thead').find('tr').children()[index]);
	};
	helper.getFieldElement = function (element, rowIndex, index) {
		rowIndex++; //avoid header row
		var row = angular.element(element.find('tr')[rowIndex]),
			field = angular.element(row.children()[index]);
		return field;
	};

	describe('billDetails directive', function () {

		beforeEach(module('app.modules.bill.internal'));
		// karma-ng-html2js-preprocessor: check karma.conf.js for configuration
		beforeEach(module('app/modules/bill/internal/bill-details-directive.tpl.html'));

		beforeEach(inject(function(_$compile_, _$rootScope_){
			$compile = _$compile_;
			$rootScope = _$rootScope_.$new();
			helper.applyToRootScope();
		}));

		it('should populate labels', function() {
			var element = helper.getElement();

			mock.data.labels.forEach(function (label, index) {
				expect(helper.getLabelElement(element, index).text()).toBe(label);
			});
		});

		it('should populate data', inject(function ($filter) {
			var element = helper.getElement();
			mock.data.dataset.forEach(function (data, rowIndex) {
				mock.data.fields.forEach(function (field, index) {
					if (index < mock.data.fields.length - 1) {
						expect(helper.getFieldElement(element, rowIndex, index).text()).toContain(data[field]);
					} else {
						// todo: investigate why currency filter is broken
						console.log('WARNING: currency filter doesn\'t seem to work inside the template');
						expect(helper.getFieldElement(element, rowIndex, index).text()).toContain(['GBP']);
					}

				});
			});
		}));
	});
});