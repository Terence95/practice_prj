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
        scope: {
            counter: "=counter"
        },
        link: function(scope, element, attrs) {
            element.on("click", function(event) {
                // 输出那一个城市被点击
                // event.target应该是得到了被点击的那个按钮元素
                console.log("Button click: " + event.target.innerText);
                scope.$apply(function() {
                    scope.counter++;
                });
            });
        }
    };
});


app.controller('LoadDataCtrl', ['$scope', '$http', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'package.json'
    }).success(function(data, status, headers, config) {
        console.log("success...");
        console.log("data");
        $scope.users = data;
    }).error(function(data, status, headers, config) {
        console.log("error");
    });
}]);


// 创建一个自己的服务
app.factory('userListService', ['$http',
    function($http) {
        var doRequest = function(username, path) {
            return $http({
                method: 'GET',
                url: 'package.json'
            });
        };
        return {
            userList: function(username) {
                return doRequest(username, 'userList');
            }
        };
    }
]);

myServiceApp.controller('ServiceController', ['$scope', '$timeout', 'userListService',
    function($scope, $timeout, userListService) {
        var timeout;
        $scope.$watch('username', function(newUsername) {
            if (newUsername) {
                if (timeout) {
                    $timeout.cancel(timeout);
                }
                timeout = $timeout(function() {
                    userListService.userList(newUsername)
                        .success(function(data, status) {
                            $scope.users = data;
                        });
                }, 350);
            }
        });
    }
]);
