var app = angular.module('MyApp', ['ngRoute', 'satellizer', 'mgcrea.ngStrap', 'ngAnimate', ]);
app.config(function($routeProvider, $locationProvider, $authProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/contact', {
                templateUrl: 'partials/contact.html',
                controller: 'ContactCtrl'
            })
            .when('/adminlogin', {
                templateUrl: 'partials/adminlogin.html',
                controller: 'AdminCtrl',
                resolve: {
                    skipIfAuthenticated: skipIfAuthenticated,
                    checkWho: checkWho
                }
            })
            .when('/adminsignup', {
                templateUrl: 'partials/adminsignup.html',
                controller: 'AdminSignupCtrl',
                resolve: {
                    skipIfAuthenticated: skipIfAuthenticated,
                    checkWho: checkWho
                }
            })
            .when('/', {
                templateUrl: 'partials/login.html',
                controller: 'LoginCtrl',
                resolve: {
                    skipIfAuthenticated: skipIfAuthenticated,
                    checkWho: checkWho
                }
            })
            .when('/signup', {
                templateUrl: 'partials/signup.html',
                controller: 'SignupCtrl',
                resolve: {
                    skipIfAuthenticated: skipIfAuthenticated,
                    checkWho: checkWho
                }
            })
            .when('/account', {
                templateUrl: 'partials/profile.html',
                controller: 'ProfileCtrl',
                resolve: { loginRequired: loginRequired }
            })
            .when('/forgot', {
                templateUrl: 'partials/forgot.html',
                controller: 'ForgotCtrl',
                resolve: { skipIfAuthenticated: skipIfAuthenticated }
            })
            .when('/reset/:token', {
                templateUrl: 'partials/reset.html',
                controller: 'ResetCtrl',
                resolve: { skipIfAuthenticated: skipIfAuthenticated }
            })
            .when('/task', {
                templateUrl: 'partials/task.html',
                controller: 'TaskCtrl',
                resolve: { loginRequired: loginRequired }
            })
            .when('/task/update', {
                templateUrl: 'partials/update.html',
                controller: 'TaskUpdateCtrl',
                resolve: { loginRequired: loginRequired }

            })
            .otherwise({
                templateUrl: 'partials/404.html'
            });

        $authProvider.loginUrl = '/login';
        $authProvider.signupUrl = '/signup';

        function skipIfAuthenticated($location, $auth) {
            if ($auth.isAuthenticated()) {
                $location.path('/');
            }
        }

        function loginRequired($location, $auth) {
            if (!$auth.isAuthenticated()) {
                $location.path('/login');
            }
        }

        function checkWho($location) {
            console.log($location.path());
            if ($location.path() == '/') {
                $authProvider.loginUrl = '/login';
            } else if ($location.path() == '/signup') {
                $authProvider.signupUrl = '/signup';
            } else if ($location.path() == '/adminlogin') {
                $authProvider.loginUrl = '/adminlogin';
            } else {
                $authProvider.signupUrl = '/adminsignup';
            }
        }
    })
    .run(function($rootScope, $window) {
        if ($window.localStorage.user) {
            console.log($window.localStorage.user);
            $rootScope.currentUser = JSON.parse($window.localStorage.user);
        } else {
            $rootScope.currentAdmin = JSON.parse($window.localStorage.admin);
        }
    });