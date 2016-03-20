angular.module('trophyDraw')
    .controller('PublicLoginCtrl', function ($scope, UserSvc) {
        $scope.publicLogin = function (username) {
            UserSvc.publicTrophies(username)
                .then(function (data) {
                    $scope.$emit('publicTrophies', {
                        username: username,
                        games: data
                    });
                });

            UserSvc.publicID(username)
                .then(function (user) {
                    $scope.$emit('publicID', {
                        user: user
                    });
                });
        };

        $scope.privateLogin = function (username, password) {
            // Placeholder
        };
    });
