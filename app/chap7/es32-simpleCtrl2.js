/**
 * Created by Stefano Cappa on 24/08/15.
 */

angular.module('simpleCtrl2App', [])
    .controller('SimpleCtrl2', ['$location', '$window', function ($location, $window) {
        var self = this;
        self.navigate1 = function () {
            $location.path('/some/where');
        };
        self.navigate2 = function () {
            $location.path('/some/where/else');
        };
    }]);