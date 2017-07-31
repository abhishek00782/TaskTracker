angular.module('MyApp')
    .controller('TaskCtrl', function($scope, $location, taskService, taskFactory, $window, $rootScope) {
        taskFactory.acquire($scope.currentUser)
            .then(function(response) {
                taskService.taskData=response.data.task;
                $rootScope.task2 = response.data.task;
                $window.localStorage.task = JSON.stringify(response.data.task);
                $scope.messages = {
                    success: [response.data.msg]
                };
                console.log($scope.messages.success);
                console.log($rootScope.task2);
            });
        $scope.task = taskService;
        $scope.search = '';
        $location.path('/task');
        $scope.sensitiveSearch = function(tas) {
            if ($scope.search) {
                return tas.subject.indexOf($scope.search) == 0 ||
                    tas.status.indexOf($scope.search) == 0;
            }
            return true;
        };
    });
angular.module('MyApp')
    .controller('TaskUpdateCtrl', function($scope, $location, taskService) {
        $scope.task = taskService;
        $location.path('/task/update');
    });