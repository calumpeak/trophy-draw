angular.module('trophyDraw')
    .controller('PublicLoginCtrl', function ($scope, UserSvc) {
        $scope.publicLogin = function (username) {
            $scope.requesting = true;
            UserSvc.publicTrophies(username)
                .then(function (data) {
                    $scope.requesting = false;
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
