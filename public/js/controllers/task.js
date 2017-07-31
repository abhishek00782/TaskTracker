angular.module('MyApp')
    .controller('TaskCtrl', function($scope, $location, taskService, taskFactory, $window, $rootScope, $auth) {
        $scope.profile = $rootScope.currentUser;
        taskFactory.acquire($scope.currentUser)
            .then(function(response) {
                taskService.taskData = response.data.task;
                $rootScope.task2 = response.data.task;
                $window.localStorage.task = JSON.stringify(response.data.task);
                $scope.messages = {
                    success: [response.data.msg]
                };
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
    .controller('TaskUpdateCtrl', function($scope, $location, taskService, taskFactory, $window, $rootScope, $auth) {
        $scope.profile = $rootScope.currentUser;

        console.log($rootScope.currentUser);
        $scope.updateTask = function() {
            taskFactory.updateTask($scope.task.selectedTask)
                .then(function(response) {
                    // taskService.taskData = response.data.task;
                    // $rootScope.task2 = response.data.task;
                    // $window.localStorage.task = JSON.stringify(response.data.task);
                    $scope.messages = {
                        success: [response.data.msg]
                    };
                    console.log($scope.messages.success);
                    console.log(response.data.task);
                });
        }
        $scope.task = taskService;
        $location.path('/task/update');
    });