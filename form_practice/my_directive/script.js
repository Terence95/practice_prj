var app = angular.module("myApp", []);

app.directive('myDirective', function() {
    return {
        scope: {
            myUrl: '@someAttr', //绑定策略
            myLinkText: '@'
        },
        restrict: 'A',
        replace: true,
        // template: '<a href="http://google.com">Click me to go to Google</a>'
        template: '<a href="{{ myUrl }}">{{ myLinkText }}</a>'
    };
});

app.run(function($rootScope) {
    //  使用.run 访问$rootScope
    $rootScope.rootProperty = "root scope";
});

app.controller('ParentController', function($scope) {
    // 使用.controller访问 ‘ng-controller’ 内部属性
    // 在DOM忽略的$scope中，根据当前控制器进行推断
    $scope.parentProperty = "parent scope";
});

app.controller('ChildController', function($scope) {
    //
    $scope.childProperty = 'child scope';
    // 同在DOM中一样，我们可以通过当前$scope 直接访问原型中的任意属性
    $scope.fullSentenceFromChild = 'Same $scope: We can access: ' +
        $scope.rootProperty + ' and ' +
        $scope.parentProperty + ' and ' +
        $scope.childProperty;
});
