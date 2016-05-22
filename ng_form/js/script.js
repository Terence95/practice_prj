var userInfoModule = angular.module('userInfoModule', []);

//  [] 里面的告诉angular帮我注入 $scope
userInfoModule.controller('UserInfoCtrl', ['$scope', function($scope) {
    $scope.userInfo = {
        email: "222222@qq.com",
        password: "111",
        autoLogin: true
    };

    $scope.getFormData = function() {
        console.log($scope.userInfo);
    };

    $scope.setFormData = function() {
        $scope.userInfo = {
            email: "aaaaaa@qq.com",
            password: "12222222",
            autoLogin: false
        };
    };
    $scope.resetForm = function() {
        $scope.userInfo = {
            email: "222222@qq.com",
            password: "111",
            autoLogin: true
        };
    };
}]);


userInfoModule.controller('cssCtrl', ['$scope',
    function($scope) {
        $scope.color = "red";
        $scope.setGreen = function() {
            $scope.color = "green";
        };

        $scope.setRed = function() {
            $scope.color = "red";
        };
    }
]);
