angular.module('calendarDemoApp', [])
	.directive('calendar', function(){
		return {
			restrict: 'E',
			templateUrl: 'calendar.html',
			scope: true,
			controller: function($scope, $element, $attrs){
				$scope.range = CalendarRange.getMonthlyRange(new Date());
				
				$scope.weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
				$scope.currentMonth = $scope.range.start.getMonth();
				console.log($scope.currentMonth);
				console.log($scope.range.days[0].month);
			}
		};
	});

// your controller and directive code go here