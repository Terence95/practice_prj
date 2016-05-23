var appModule = angular.module('app', []);

appModule.controller('loadCtrl', ['$scope', function($scope) {
    $scope.loadData = function() {
        console.log("loading data...1111");
    };
}]);
appModule.controller('loadCtrl2', ['$scope', function($scope) {
    $scope.loadData2 = function() {
        console.log("loading data...2222");
    };
}]);
// 在指令之中调用控制器中的方法
appModule.directive('loader', function() {
    return {
        restrict: "AE",
        link: function(scope, element, attrs) {
            element.bind("mouseenter", function() {
                // 这里的坑，howToload类似这种
                scope.$apply(attrs.howtoload);
            });
        }
    };
});


appModule.directive("superman", function() {
    return {
        scope: {},
        restrict: 'AE',
        controller: function($scope) {
            $scope.abilities = [];
            this.addStrength = function() {
                $scope.abilities.push("strength");
            };
            this.addSpeed = function() {
                $scope.abilities.push("speed");
            };
            this.addLight = function() {
                $scope.abilities.push("light");
            };
        },
        link: function(scope, element, attrs) {
            element.addClass('btn btn-primary');
            element.bind("mouseenter", function() {
                console.log(scope.abilities);
            });
        }
    };
});


appModule.directive("strength", function() {
    return {
        restrict: 'A',
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addStrength();
        }
    };
});
appModule.directive("speed", function() {
    return {
        restrict: 'A',
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addSpeed();
        }
    };
});
appModule.directive("light", function() {
    return {
        restrict: 'A',
        require: '^superman',
        link: function(scope, element, attrs, supermanCtrl) {
            supermanCtrl.addLight();
        }
    };
});


// 理解@绑定
appModule.controller('myCtrl1', ['$scope', function($scope) {
    // 控制器往scope上面赋了一个属性叫 flavor 百威
    $scope.ctrlFlavor1 = "百威";
}]);
// 定义一个drink指令
appModule.directive("drink1", function() {
    return {
        restrict: 'AE',
        template: "<div>{{flavor}}</div>",
        // 这个时候可以用下面这段代码来实现和link等价的效果
        scope: {
            flavor: '@'
        }
        // link:function(scope, element,attrs) {
        //     scope.flavor = attrs.flavor;
        // }
    };
});

// 理解 = 绑定
appModule.controller('myCtrl2', ['$scope', function($scope) {
    // 控制器往scope上赋值属性 叫 “coke” 的
    $scope.ctrlFlavor2 = "coke";
}]);
appModule.directive("drink2", function () {
    return {
        restrict: 'AE',
        scope: {
          flavor: '='
        },
        template: '<input type="text" ng-model="flavor"/>'
    };
});


// 理解 & 绑定
appModule.controller('myCtrl3', ['$scope', function ($scope) {
    // 控制器暴露了一个方法
    // 这个方法中的name需要传递进来
    $scope.sayHello = function (name) {
        alert("hello " + name);
    };
}]);

appModule.directive("greeting", function () {
    return {
        restrict: 'AE',
        scope: {
          greet: '&' // 这个名字 greet 跟html文件里面的 <greeting greet="sayHello(name)"></greeting> 中的greet对应着
        },
        template: '<input type="text" ng-model="userName"/><br>' +
          // 这里 greet({name:userName}) 这个传递一个对象 name 用冒号绑定到userName上
          '<button class="btn btn-default" ng-click="greet({name:userName})">Greet</button><br>'
    };
});

appModule.controller('TestFormModule', function ($scope) {
    // 这个user是一个对象 
    $scope.user = {
        userName: 'Ter',
        password:''
    };
    $scope.save = function () {
        alert("save success");
    };
});
