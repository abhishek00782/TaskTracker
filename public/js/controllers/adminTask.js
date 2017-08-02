app.controller('AdminTaskCtrl', function($scope, $location, statsService, taskFactory, $window, $rootScope, $auth) {


    taskFactory.getAdminTasks()
        .then(function(response) {
            $scope.stats = statsService;
            statsService.statsData = response.data.stats;
            $scope.messages = {
                success: [response.data.msg]
            };

            console.log($scope.messages.success);
            console.log($scope.stats.statsData);
        });


    // $location.path('/stats');
});