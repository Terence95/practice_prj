var app = angular.module("myApp", []);

app.directive('myDirective', function() {
  return {
    restrict: 'E',
    template: '<a href="https://www.baidu.com/">click me to go to baidu</a>'
  };
});
