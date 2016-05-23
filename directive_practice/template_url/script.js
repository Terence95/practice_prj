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

appModule.directive("strength", function () {
    return {
      restrict: 'A',
      require: '^superman',
      link: function (scope, element, attrs, supermanCtrl) {
          supermanCtrl.addStrength();
      }
    };
});
appModule.directive("speed", function () {
    return {
      restrict: 'A',
      require: '^superman',
      link: function (scope, element, attrs, supermanCtrl) {
          supermanCtrl.addSpeed();
      }
    };
});
appModule.directive("light", function () {
    return {
      restrict: 'A',
      require: '^superman',
      link: function (scope, element, attrs, supermanCtrl) {
          supermanCtrl.addLight();
      }
    };
});
