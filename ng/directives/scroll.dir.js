angular.module('trophyDraw')
    .directive('navScroll', function ($window, $timeout) {
        var DELAY = 500;
        var SCROLL_BY = 30;
        var collapseDelay;

        /**
         * Returns boolean if pageYOffset is past the defined scroll point
         *
         * @function scrolled
         * @returns {Boolean}
         */
        function scrolled () {
            return this.pageYOffset > SCROLL_BY;
        }

        return function ($scope, element, attrs) {
            // Collapse/Expand the nav bar on user scroll
            angular.element($window).bind('scroll', function () {
                $scope.scrollAnimate = scrolled();
                $scope.$apply();
            });

            // Expand nav bar on mouse in if in scroll
            angular.element(element).bind('mouseenter', function () {
                var scroll = scrolled();

                if (scroll) {
                    if (collapseDelay) {
                        $timeout.cancel(collapseDelay);
                    }

                    $scope.scrollAnimate = !scroll;
                    $scope.$apply();
                }
            });

            // Collapse the nav bar on mouse out after a delay if in scroll
            angular.element(element).bind('mouseleave', function () {
                var scroll = scrolled();

                if (scroll) {
                    collapseDelay = $timeout(function () {
                        // Garbage collection
                        collapseDelay = false;

                        $scope.scrollAnimate = scroll;
                        $scope.$apply();
                    }, DELAY);
                }
            });
        }
    })
