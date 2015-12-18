angular.module('calendarDemoApp', [])
	.directive('calendar', function(){
		return {
			restrict: 'E',
			templateUrl: 'calendar.html',
			scope: true,
			controller: function($scope, $element, $attrs){
				$scope.weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

				// get month range
				$scope.range = CalendarRange.getMonthlyRange(new Date());
				$scope.rangeMonth = $scope.range.start.toLocaleString('en-us', {month: 'long'});
				$scope.rangeYear = $scope.range.start.getFullYear();
				
				// get todays date
				$scope.today = new Date();
				//get current year
				$scope.currentYear = $scope.today.getFullYear();
				// get todays month
				$scope.currentMonth = $scope.today.getMonth();
				// get todays day 
				$scope.currentDay = $scope.today.getDate();
				
				// set outer ranges for year selector
				var yearMax = $scope.currentYear + 20;
				var yearMin = $scope.currentYear - 20;
				$scope.yearRange = _.range(yearMin, yearMax);

				// set selected year
				$scope.selectedYear = $scope.currentYear;
				$scope.setYear = function(selectedYear){
					$scope.selectedYear = selectedYear;
				};
				
				// create months array to be used in select
				$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

				// set selected month
				$scope.selectedMonth = $scope.today.toLocaleString('en-us', {month: 'long'});
				$scope.setMonth = function(selectedMonth){
					$scope.selectedMonth = selectedMonth;
				};

				// update calendar when click "go"
				$scope.changeCalendar = function(){
					$scope.range = CalendarRange.getMonthlyRange(new Date($scope.selectedYear, $scope.months.indexOf($scope.selectedMonth), 1));
					$scope.rangeMonth = $scope.range.start.toLocaleString('en-us', {month: 'long'});
					$scope.rangeYear = $scope.range.start.getFullYear();
				};
			}
		};
	});

// your controller and directive code go here