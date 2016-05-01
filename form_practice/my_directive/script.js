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
    // $scope.someBareValue = "hello computer";
    $scope.someModel = {
        someValue: 'Hello computer'
    };
    // 最佳实践，永远使用一个模式
    $scope.parentAction = function() {
        $scope.someModel.someValue = "hello human, from parent";
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
    $scope.childAction = function() {
        // 在childctrl中设置 {{}}
        $scope.someModel.someValue = 'hello homan,from child';
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

app.controller('PeopleController', function($scope) {
    $scope.people = [{
        name: "Ari",
        city: "San Francisco"
    }, {
        name: "Erik",
        city: "Seattle"
    }];
});


app.controller('templateController', function($scope) {
    $scope.message = "hello";
    $scope._name = "terence";
});


app.controller('ngModelController', function($scope) {
    $scope.init = function() {
        $scope.greeting = "";
    };
});


app.controller('EquationController', function($scope) {
    $scope.equation = {};
    $scope.change = function() {
        $scope.equation.output = parseInt($scope.equation.x) + 2;
    };
});


app.controller('FormController', function($scope) {
    $scope.fields = [{
        placeholder: 'Username',
        isRequired: true
    }, {
        placeholder: 'Password',
        isRequired: true
    }, {
        placeholder: 'Email (optional)',
        isRequired: false
    }];

    $scope.submitForm = function() {
        alert("it works!");
    };
});


app.controller('CounterController', function($scope) {
    $scope.decrement = function() {
        $scope.count = $scope.count - 1;
    };
});


app.controller('CityController', function($scope) {
    $scope.cities = [{
        name: 'Seattle'
    }, {
        name: 'San Francisco'
    }, {
        name: 'Chicago'
    }, {
        name: 'New York'
    }, {
        name: 'Boston'
    }];

});
