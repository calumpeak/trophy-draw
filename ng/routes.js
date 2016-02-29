angular.module('trophyDraw')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'PublicLoginCtrl',
                templateUrl: 'templates/login.html'
            })
            .when('/trophies', {
                controller: 'trophyCtrl',
                templateUrl: 'templates/trophies.html'
            })
    });
