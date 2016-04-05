angular.module('trophyDraw')
    .controller('WelcomeCtrl', function ($scope, $location) {
        $scope.welcomeClick = function welcomeClick () {
            $location.path('/login');
        };
    });
