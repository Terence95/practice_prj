var app = angular.module("myApp", []);
app.directive('ensureUnique', function($http) {
    return {
        require: 'ngModel',
        link: function(scop, attrs, c) {
            scope.$watch(attrs.ngModel, function(n) {
                if (!n) {
                    return;
                }
                $http({
                    method: 'POST',
                    url: '/api/check/' + attrs.ensureUnique,
                    data: {
                        field: attrs.ensureUnique,
                        value: scope.ngModel
                    }
                }).success(function(data) {
                    c.$setValidity('unique', data.isUnique);
                }).error(function(data) {
                    c.$setValidity('unique', false);
                });
            });
        }
    };
});
