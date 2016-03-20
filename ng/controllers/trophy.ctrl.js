angular.module('trophyDraw')
    .controller('trophyCtrl', function ($scope, $mdDialog, UserSvc) {
        // Use to filter trophy objects in right order
        $scope.trophyOrder = ['bronze', 'silver', 'gold', 'platinum'];

        $scope.showDialog = function (event, game) {
            $mdDialog.show({
                templateUrl: 'templates/trophyDialog.html',
                parent: angular.element(document.body),
                targetEvent: event,
                clickOutsideToClose: true,
                locals: {
                    game: game
                },
                controller: TrophyDialog
            });
        };

        function TrophyDialog ($scope, $mdDialog, game) {
            $scope.game = game;

            UserSvc.gameSearch(game.title).then(function (searchData) {
                if (searchData.error === 'OK') {
                    var data;

                    searchData.results.some(function (result) {
                        if (result.deck) {
                            data = result;
                            return true;
                        }
                    });

                    if (data.description) {
                        var tmp = document.createElement("DIV");
                        tmp.innerHTML = data.description;
                        data.description = tmp.textContent || tmp.innerText || "";
                    }
                    
                    // Rudimentary way of returning data from results
                    // Issue - may be wrong title as this is a generic search
                    $scope.gameData = data;
                }
            });

            $scope.hide = function () {
                $mdDialog.hide();
            };

            $scope.cancel = function() {
                $mdDialog.cancel();
            };

            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        }
    });
