app.controller('TaskCtrl', function($scope, $location, $modal, taskService, taskFactory, $window, $rootScope, $auth) {
    $scope.profile = $rootScope.currentUser;
    taskFactory.getTasks($scope.profile)
        .then(function(response) {
            taskService.taskData = response.data.task;


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


    $scope.showCreateModal = function() {
        $scope.task.selectedTask = {};
        $scope.createModal = $modal({
            scope: $scope,
            templateUrl: 'partials/modal.create.tpl.html',
            show: true
        })
    };

    $scope.createTask = function() {
        console.log("createTask");
        taskFactory.createTask($scope.task.selectedTask)
            .then(function() {
                $scope.createModal.hide();
                taskFactory.getTasks($scope.profile);
            })


    };

    $scope.showUpdateModal = function() {
        $scope.task.selectedTask = {};
        $scope.updateModal = $modal({
            scope: $scope,
            templateUrl: 'partials/modal.update.tpl.html',
            show: true
        })
    };


    $scope.updateTask = function() {
        taskFactory.updateTask($scope.task.selectedTask)
            .then(function(response) {

                $scope.messages = {
                    success: [response.data.msg]
                };
                console.log($scope.messages.success);
                console.log(response.data.task);
                $scope.updateModal.hide();
            });
    }
});

app.controller('TaskUpdateCtrl', function($scope, $location, taskService, taskFactory, $window, $rootScope, $auth) {
    $scope.profile = $rootScope.currentUser;
    $scope.updateTask = function() {
        taskFactory.updateTask($scope.task.selectedTask)
            .then(function(response) {

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