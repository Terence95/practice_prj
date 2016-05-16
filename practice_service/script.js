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


// 一个实例
var app = angular.module('myApp', []);

app.factory('githubService', function($http) {
    // serviceInstance可以在函数定义中访问$http服务
    var githubUrl = 'https://api.github.com';

    var runUserRequest = function(username, path) {
      // 从使用jsonp调用git api 的$http 服务中返回promise
      return $http({
        methd: 'JSONP',
        url: githubUrl + '/users' +
              username + '/' +
              path + '?callback = JSON_CALLBACK'
      });
    };

    // 返回一个带有events函数的服务对象
    return {
      events: function(username) {
        return runUserRequest(username, 'events');
      },
      setUsername: function(username) {
        githubUsername = username;
      }
    };
});

app.controller('ServiceController', function($scope, githubService) {
      // 我们可以调用对象的事件函数
      // $scope.events = githubService.events('auser');
      $scope.$watch('username', function (newUsername) {
        //
        githubService.events(newUsername)
        .success(function(data, status, headers){
            $scope.events = data.data;
        });
      });
});
