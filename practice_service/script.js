// $provide 定义
// var app = angular.module('myApp', [], function($provide) {
//     $provide.factory('remoteData', function() {
//       var data = {name: 'n', value: 'v'};
//     });
// });

// 使用$factory 来定义
// app.factory('remoteData', function() {
//   var data = {name: 'n', value: 'v'};
//   return data;
// });

// 使用service方法
// app.service('remoteData', function() {
//   this.name = 'n';
//   this.value = 'v';
// });

var app = angular.module('myApp', []);
app.controller('defaultCtrl', function($scope) {
    $scope.data = {
      cities: ['London', 'New York', 'Paris'],
      totalClicks: 0
    };

    $scope.$watch('data.totalClicks', function(newVal) {
      console.log("Total click count: " + newVal);
    });
});

app.directive('triButton', function() {
    return {
      scope: {counter: "=counter"},
      link: function(scope,element,attrs) {
        element.on("click", function(event) {
          // 输出那一个城市被点击
          // event.target应该是得到了被点击的那个按钮元素
          console.log("Button click: " + event.target.innerText);
          scope.$apply(function(){
            scope.counter++;
          });
        });
      }
    };
});
