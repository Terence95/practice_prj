var appModule = angular.module('app', []);

appModule.directive('hello', function() {
    return {
        restrict: 'E',
        template: '<div> Hi there </div>',
        replace: true
    };
});


appModule.directive('hello1', function() {
    return {
        restrict: 'E',
        template: '<div>Hi ter <span ng-transclude></span>',
        transclude: true,
        replace: true // 设置为true之后，hello1标签不见了
    };
});

appModule.directive('hello2', function() {
    return {
        restrict: 'E',
        template: '<span>Hi there</span>',
        replace: true
    };
});

appModule.controller('MyController', function($scope) {
    $scope.things = [1, 2, 3, 4, 5, 6];
});

// appModule.directive('expander', function() {
//     return {
//         restrict: 'EA',
//         replace: true,
//         transclude: true,
//         scope: {
//             title: '=expanderTitle'
//         },
//         template: '<div>' + '<div class="title" ng-click="toggle()">{{title}}</div>' + '<div class="body" ng-show="showMe" ng-transclude></div>' + '</div>',
//         link: function(scope, element, attrs) {
//             scope.showMe = false;
//             scope.toggle = function toggle() {
//                 scope.showMe = !scope.showMe;
//             };
//         }
//     };
// });
//
// appModule.controller('SomeController', function($scope) {
//     $scope.title = 'click show';
//     $scope.text = 'internal content';
// });
//
appModule.directive('accordion', function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        template: '<div ng-transclude></div>',
        controller: function() {
            var expanders = [];
            this.gotOpend = function(selectedExpander) {
                angular.forEach(expanders, function(expander) {
                    if (selectedExpander != expander) {
                        expander.showMe = false;
                    }
                });
            };
            this.addExpander = function(expander) {
                expanders.push(expander);
            };
        }
    };
});



appModule.directive('expander', function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        require: '^?accordion',
        scope: {
            title: '=expanderTitle'
        },
        template: '<div>' + '<div class="title" ng-click="toggle()"> {{title}} </div>' + '<div class="body" ng-show="showMe" ng-transclude></div>' + '</div>',
        link: function(scope, element, attrs, accordionController) {
            scope.showMe = false;
            accordionController.addExpander(scope);
            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
                accordionController.gotOpend(scope);
            };

        }
    };
});


appModule.controller('controller1', function($scope) {
    $scope.expanders = [{
        title: 'click me to expand',
        text: 'Hi there folks, I am the content that was hidden but is now shown.'
    }, {
        title: 'click this',
        text: 'I am even better text than you have seen previously'
    }, {
        title: 'Test',
        text: 'test'
    }];
});


appModule.factory('MathService', function() {
    var factory = {};
    factory.multiply = function(a, b) {
        return a * b;
    };


    factory.add = function(a,b) {
       return a + b;
    };
    return factory; // 返回了一个包含 add 和 multiply的一个对象
});


// 将factory注入service中，因此在其中可以调用multiply方法
appModule.service('CalcService', function(MathService) {
    this.square = function(a) {
        return MathService.multiply(a,a);
    };

    this.add = function(a) {
       return MathService.add(a,a);
    };
});

// 将服务注入controller中，使得在作用域中可以调用服务
appModule.controller('CalcController', function($scope, CalcService) {
    $scope.square = function() {
        $scope.result = CalcService.square($scope.number);
    };

    $scope.add = function() {
        $scope.result1 = CalcService.add($scope.number);
    };
});
