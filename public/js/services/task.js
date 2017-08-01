app.service('taskService', function() {
    return {
        'selectedTask': null,
        'taskData': []
    }
});


app.service('statsService', function() {
    return {
        // 'selectedTask': null,
        'statsData': []
    }
});



app.factory('taskFactory', function($http) {
    return {
        getTasks: function(data) {
            return $http.post('/task', data);
        },
        updateTask: function(data) {
            return $http.put('/task/update', data);
        },
        createTask: function(data) {
            return $http.post('/task/create', data);
        },
        getStats: function(data) {
            return $http.post('/stats', data)
        }
    };
});