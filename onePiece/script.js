var onePiece = angular.module('OnePiece', ['ngRoute']);

onePiece.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'view.html'
        });
}]);

onePiece.controller('OnePieceCtrl', function($scope) {
    $scope.friends = [{
            name: 'Monkey D Luffy',
            reward: 400000000
        }, {
            name: 'Brook',
            reward: 83000000
        }, {
            name: 'Roronoa Zoro',
            reward: 320000000
        }, {
            name: 'Nami',
            reward: 66000000
        }, {
            name: 'Usopp',
            reward: 200000000
        }, {
            name: 'Sanji',
            reward: 177000000
        }, {
            name: 'Chopper',
            reward: 100
        }, {
            name: 'Nico Robin',
            reward: 130000000
        }, {
            name: 'Franky',
            reward: 94000000
        }
    ];
});
