angular.module('calendarDemoApp', [])
	.directive('calendar', function(){
		return {
			restrict: 'E',
			templateUrl: 'calendar.html',
			scope: true,
			controller: function($scope, $element, $attrs){
				$scope.weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
				$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
				
				$scope.setYear = function(selectedYear){
					$scope.selectedYear = selectedYear;
				};

				$scope.setMonth = function(selectedMonth){
					$scope.selectedMonth = selectedMonth;
				};

				$scope.setCalendarDate = function(date) {
					$scope.range = CalendarRange.getMonthlyRange(date);
					$scope.rangeMonthNumber = $scope.range.start.getMonth();
					$scope.rangeMonthName = $scope.months[$scope.rangeMonthNumber];
					$scope.rangeYear = $scope.range.start.getFullYear();
				};

				// update calendar when click "go"
				$scope.changeCalendar = function(){
					$scope.setCalendarDate(new Date($scope.selectedYear, $scope.months.indexOf($scope.selectedMonth), 1));
				};

				$scope.isDayInCurrentMonth = function(day) {
					return (day.month !== $scope.range.start.getMonth());
				};

				$scope.isDayToday = function(day) {
					return (day.date.getDate() === $scope.today.getDate() &&
							day.date.getMonth() === $scope.today.getMonth() &&
							day.year === $scope.today.getFullYear() );
				};

				// get todays date
				$scope.today = new Date();

				// set selected month
				$scope.selectedMonth = $scope.months[$scope.today.getMonth()];
				// set outer ranges for year selector
				var yearMax = $scope.today.getFullYear() + 20;
				var yearMin = $scope.today.getFullYear() - 20;
				$scope.yearRange = _.range(yearMin, yearMax);

				// set selected year
				$scope.selectedYear = $scope.today.getFullYear();
				
				// get month range
				$scope.setCalendarDate($scope.today);
			}
		};
	});

// your controller and directive code go here