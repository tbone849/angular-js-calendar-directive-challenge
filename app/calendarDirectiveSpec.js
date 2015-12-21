describe('calendar', function(){
	var scope;
    var element;
    var compiled;
    var html;
    var myScope;
    var newDate;
    
    beforeEach(module("calendarDemoApp"));
    beforeEach(module("calendar.html"));
    beforeEach(inject(function($rootScope, $compile){
		scope = $rootScope.$new();
		html = '<calendar></calendar>';
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();
        myScope = element.scope();
    }));

    it('should render the calendar correctly', function(){
		expect(myScope.weekdayNames.length).toBe(7);
		expect(myScope.months.length).toBe(12);
		expect(element.find('#Tuesday').text()).toContain('Tuesday');
		expect(element.find('.monthSelector').text()).toContain('March');
		expect(element.find('.yearSelector option').length).toBe(40);
		expect(element.find('.monthSelector option').length).toBe(12);
		expect(element.find('.weekdays').length).toBe(7);
    });

    describe('setYear', function(){
        it('should set the year', function(){
            spyOn(myScope, 'setYear').andCallThrough();
            myScope.setYear(myScope.selectedYear);
            expect(myScope.setYear).toHaveBeenCalled();
            expect(myScope.setYear).toHaveBeenCalledWith(myScope.selectedYear);
            myScope.setYear(2011);
            expect(myScope.setYear).toHaveBeenCalled();
            expect(myScope.setYear).toHaveBeenCalledWith(2011);
            expect(myScope.selectedYear).toBe(2011);
        });
    });

    describe('setMonth', function(){
        it('should set the month', function(){
            spyOn(myScope, 'setMonth').andCallThrough();
            myScope.setMonth(myScope.selectedMonth);
            expect(myScope.setMonth).toHaveBeenCalled();
            expect(myScope.setMonth).toHaveBeenCalledWith(myScope.selectedMonth);
            myScope.setMonth(10);
            expect(myScope.setMonth).toHaveBeenCalled();
            expect(myScope.setMonth).toHaveBeenCalledWith(10);
            expect(myScope.selectedMonth).toBe(10);
        });
    });
    
    ddescribe('setCalendarRange', function(){
        it('should set the calendar range', function(){
            spyOn(myScope, 'setCalendarRange').andCallThrough();
            myScope.setCalendarRange(myScope.today);
            expect(myScope.setCalendarRange).toHaveBeenCalled();
            expect(myScope.setCalendarRange).toHaveBeenCalledWith(myScope.today);
            // pass July 4, 1777
            newDate = new Date(1777, 6, 4);
            myScope.setCalendarRange(newDate);
            expect(myScope.setCalendarRange).toHaveBeenCalled();
            expect(myScope.setCalendarRange).toHaveBeenCalledWith(newDate);
            expect(myScope.rangeMonthNumber).toBe(6);
            expect(myScope.rangeMonthName).toBe('July');
            expect(myScope.rangeYear).toBe(1777);
        });
    });

});