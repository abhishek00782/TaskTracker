angular.module('MyApp')
    .service('taskService', function() {
        return {
            'selectedTask': null,
            'taskData': []
        }
    });


// angular.module('MyApp')
//     .factory('taskFactory', function($http) {
//         return {
//             acquire: function(data) {
//                 return $http.get('/task', data);
//             }
//         };
//     });



angular.module('MyApp')
    .factory('taskFactory', function($http) {
        return {
            acquire: function(data) {
                return $http.get('/task', data);
            },
            updateTask: function(data) {
                return $http.put('/task/update', data);
            }
        };
    });