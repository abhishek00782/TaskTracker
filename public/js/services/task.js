angular.module('MyApp')
    .service('taskService', function() {
        return {
            'selectedTask': null,
            'taskData': []
        }
    });




angular.module('MyApp')
    .factory('taskFactory', function($http) {
        return {
            getTasks: function(data) {
                return $http.post('/task', data);
            },
            updateTask: function(data) {
                return $http.put('/task/update', data);
            },
            createTask: function(data) {
                return $http.post('/task/create', data);
            }
        };
    });