var app = angular.module('myApp', []);

app.controller("myController",
  function($scope, $parse) {
    $scope.$watch('expr', function(newVal, oldVal, scope) {
      if (newVal !== oldVal) {
        // 用表达式
        var parseFun = $parse(newVal);
        // 获取解析之后的表达式的值
        $scope.parseValue = parseFun(scope);
      }
    });
  });

app.controller("secController", function ($scope, $interpolate) {
  // 同时拥有访问 $scope 和 $interpolate 的权限
  $scope.$watch("emailBody", function(body) {
    // $scope.to = 'ari@fullstack.io';
    // $scope.emailBody = 'Hello {{ to }},\n\nMy name is Ari too!';
    if (body) {
      var templete = $interpolate(body);
      $scope.previewText = templete({to: $scope.to});
    }
  });
});
