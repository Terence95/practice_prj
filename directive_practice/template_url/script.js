var appModule = angular.module('app', []);

appModule.directive('form', function() {
    return {
        restrict: 'A',
        template: 'tpl/tpl1.html',
        replace: true
    };
});
