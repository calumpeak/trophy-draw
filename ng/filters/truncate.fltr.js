angular.module('trophyDraw')
    .filter('truncate', function () {
        return function (text, length, end) {
            end = isNaN(end) ? end : 10;

            if (end === undefined) {
                end = '\u2026';
            }

            if (text.length <= length ||
                text.length - end.length <= length
            ) {
                return text;
            }
            else {
                return String(text).substring(0, length-end.length) + end;
            }

        };
    });
