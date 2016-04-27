var app = angular.module('myApp', ['emailParser']);
var epaser = angular.module('emailParser', []);
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

app.controller("thirdController", ['$scope', 'EmailParser', function($scope, EmailParser){
  // 设置监听
  $scope.$watch("emailBody2", function(body){
    if (body) {
      $scope.previewText = EmailParser.parse(body, {
        to: $scope.to
      });
    }
  });
}]);

epaser.config(['$interpolateProvider', function($interpolateProvider){
  $interpolateProvider.startSymbol('__');
  $interpolateProvider.endSymbol('__');
}])
.factory('EmailParser', ['$interpolate', function($interpolate) {
  // 处理解析的服务
  return{
    parse: function(text, context) {
      var templete = $interpolate(text);
      return templete(context);
    }
  };
}]);
