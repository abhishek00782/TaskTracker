angular.module('MyApp')
    .service('taskService', function() {
        return {
            'selectedTask': null,
            'taskData': [{
                    'subject': 'mail sending issues',
                    'body': 'mail is not being sent ',
                    'assignedDate': '27/07/2017',
                    'deadline': '30/07/2017',
                    'status': 'working',
                    'priority': 'high',
                    'members': [{ name: 'ankit', email: 'ankit@discoverdollar.com' }, { name: 'abhishek', email: 'abhishek@discoverdollar.com' }],
                    'remark': '',
                    'ratings': ''
                },
                {
                    'subject': 'small bug fixes',
                    'body': 'small bugs needs to be fixed',
                    'assignedDate': '25/07/2017',
                    'deadline': '27/07/2017',
                    'status': 'compeleted',
                    'priority': 'high',
                    'members': [{ name: 'ankit', email: 'ankit@discoverdollar.com' }],
                    'remark': '',
                    'ratings': ''
                }
            ]
        }
    });


angular.module('MyApp')
    .factory('taskFactory', function($http) {
        return {
            acquire: function(data) {
                return $http.get('/task', data);
            }
        };
    });