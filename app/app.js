angular.module('calendarDemoApp', [])
	.directive('calendar', function(){
		return {
			restrict: 'E',
			templateUrl: 'calendar.html',
			scope: true,
			controller: function($scope, $element, $attrs){
				$scope.weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
				$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
				
				// get month range
				$scope.range = CalendarRange.getMonthlyRange(new Date());
				$scope.rangeMonthNumber = $scope.range.start.getMonth();
				$scope.rangeMonthName = $scope.months[$scope.rangeMonthNumber];
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

				// set selected month
				$scope.selectedMonth = $scope.months[$scope.currentMonth];
				$scope.setMonth = function(selectedMonth){
					$scope.selectedMonth = selectedMonth;
				};

				// update calendar when click "go"
				$scope.changeCalendar = function(){
					$scope.range = CalendarRange.getMonthlyRange(new Date($scope.selectedYear, $scope.months.indexOf($scope.selectedMonth), 1));
					$scope.rangeMonthNumber = $scope.range.start.getMonth();
					$scope.rangeMonthName = $scope.months[$scope.rangeMonthNumber];
					$scope.rangeYear = $scope.range.start.getFullYear();
				};
			}
		};
	});

// your controller and directive code go here