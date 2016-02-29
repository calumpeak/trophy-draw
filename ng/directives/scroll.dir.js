angular.module('trophyDraw')
    .directive('navScroll', function ($window) {
        return function ($scope, element, attrs) {
            angular.element($window).bind('scroll', function () {
                $scope.scrollAnimate = this.pageYOffset > 30 ? true : false;
                $scope.$apply();
            });
        }
    })
