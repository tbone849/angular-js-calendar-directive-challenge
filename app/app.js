angular.module('calendarDemoApp', [])
	.directive('calendar', function(){
		return {
			restrict: 'E',
			templateUrl: 'calendar.html',
			scope: true,
			controller: function($scope, $element, $attrs){
				$scope.range = CalendarRange.getMonthlyRange(new Date());
				$scope.today = new Date();				
				$scope.weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
				$scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
				$scope.currentMonth = $scope.range.start.getMonth();
			}
		};
	});

// your controller and directive code go here