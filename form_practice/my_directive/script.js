var app = angular.module("myApp", []);
app.run(function($rootScope, $timeout) {
    $timeout(function() {
        $rootScope.myHref = "https://www.zhihu.com/";
        $rootScope.imgSrc = "../img/testimg.jpg";
    }, 2000);
});
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
    $scope.someBareValue = "hello computer";
    $scope.parentAction = function(){
      $scope.someBareValue = "hello human, from parent";
    };
});

app.controller('ChildController', function($scope) {
    //
    $scope.childProperty = 'child scope';
    // 同在DOM中一样，我们可以通过当前$scope 直接访问原型中的任意属性
    $scope.fullSentenceFromChild = 'Same $scope: We can access: ' +
        $scope.rootProperty + ' and ' +
        $scope.parentProperty + ' and ' +
        $scope.childProperty;
    $scope.childAction = function () {
      // 在childctrl中设置 {{}}
      $scope.someBareValue = 'hello homan,from child';
    };
});
app.controller('SomeController', function($scope) {
    // 创建模型
    $scope.someModel = {
        // 添加属性，
        someProperty: 'Hello Computer'
    };
    // 设置$scope自身的操作
    $scope.someAction = function() {
        $scope.someModel.someProperty = 'hello human';
    };
});
