angular.module('trophyDraw')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'WelcomeCtrl',
                templateUrl: 'templates/welcome.html'
            })
            .when('/login', {
                controller: 'PublicLoginCtrl',
                templateUrl: 'templates/login.html'
            })
            .when('/trophies', {
                controller: 'trophyCtrl',
                templateUrl: 'templates/trophies.html'
            });
    });
