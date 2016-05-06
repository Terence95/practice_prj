//  script.js
// create the module and name it scotchApp
// 我们创建一个单页应用，并且不希望页面刷新，那么我们会用到angular路由能力
// 使用 $routeProvider 处理路由
// var myApp = angular.('myApp', ['ngRoute']);
// var myApp = angular.module('myApp', ['ngRoute']);

var myApp = angular.module('myApp', ['ngRoute'], function($routeProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
            template: 'pages/home.html',
            controller: 'aboutController'
        })
        // route for the about page
        .when('/about', {
            templateUrl: 'pages/about.html',
            controller: 'aboutController'
        })
        .when('/contact', {
            templateUrl: 'pages/contact.html',
            controller: 'contactController'
        });
});


// config for the home page

//  Create the controller and inject angular's $scope
myApp.controller('mainController', function($scope) {
    // Create
    $scope.message = 'Hi I am Terence95';
});
myApp.controller('aboutController', function($scope) {
    // create a message to display in our view
    $scope.message = 'About page.';
});
myApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us';
});
