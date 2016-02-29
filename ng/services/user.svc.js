angular.module('trophyDraw')
    .service('UserSvc', function ($http) {
        var svc = this;

        svc.publicTrophies = function (username) {
            return $http.post('/publicTrophies', {
                PSNID: username
            }).then(function (response) {
                return response.data;
            });
        }

        svc.publicID = function (username) {
            return $http.post('publicID', {
                PSNID: username
            }).then(function (response) {
                return response.data;
            })
        }
    });
