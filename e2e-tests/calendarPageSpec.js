describe('calendar page', function(){
	beforeEach(function(){
		browser.get('/');
	});

	it('should display the selected month range and year', function(){
		element(by.cssContainingText('.monthSelector option', 'January')).click();
		element(by.cssContainingText('.yearSelector option', '2018')).click();
		element(by.css('.go-button')).click();
		expect(element(by.css('.month-year')).getText()).toBe('January 2018');
		expect(element.all(by.css('.day')).count()).toBe(35);
	});

});