angular.module('MyApp')
    .service('adminuserService', function() {
        return {
            'user':{},
            'selectedUser': null,
            'userData': [],
            'selectedUserTasks':[]
        }
    });
    angular.module('MyApp')
    .factory('usersFactory', function($http) {
        return {
            userGet: function(data) {
                return $http.post('/admin/user', data);
            },
            // updateTask: function(data) {
            //     return $http.put('/task/update', data);
            // }
        };
    });

angular.module('MyApp')
    .factory('usertaskFactory', function($http) {
        return {
            getuserTasks: function(data) {
                return $http.post('/admin/user/task', data);
            }
        };
    });