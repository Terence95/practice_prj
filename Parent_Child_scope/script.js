var app = angular.module('app', []);
app.controller('FirstController', function ($scope){
  // 在scope中创建一个person对象，这个对象只有name这一个属性
  // $scope.person = {
  //   name: "Terence"
  // };

  $scope.person = {greeted: false};

  // ----------------------------- 我是分割线
  $scope.message = 'World';
  $scope.counter = 0;
  $scope.add = function(amount){
    $scope.counter += amount;
  }

  $scope.substract = function(amount){
    $scope.counter -= amount;
  }


});

app.controller('FirstChildController', function($scope){
  $scope.sayHello = function() {
    $scope.person.name = "tERENCE";
    $scope.person.greeted = true;
  }
});
