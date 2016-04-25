angular.module("MyApp", [])
    .controller("MyController", function($scope){
        // j1 我们在作用域里初始化两个变量
        $scope.name = "dreamapple";
        $scope.age = 20;
        // j2 创建一个方法，修改我们创建的对象的年龄
        $scope.changeAge = function() {
          $scope.age = 100;
        }
    })



    // 创建我们的指令
    .directive("myDirective", function() {
      var obj = {
        // j4 指令声明模式为“AE” 属性和元素
        restrict:"AE",
        // j5 指令继承父作用域的属性和方法
        // scope: false,

        // j5.1 如果把scope设置成true会发生什么呢
        // scope: true,


        // j5.2 当把scope的属性设置为{}时，我们可以做更多的事情
        // Angular 最强大的地方之一就是它可以构建组件，无论放在哪里都是可以使用的
        // 当属性设置为{}的时候，意味着我们创建的一个新的与父作用域隔离的新作用域，这使得我们
        // 在不知道外部环境的情况下，就可以正常工作，不依赖外部环境
        // 我们使用了隔离的作用域，不代表我们不可以使用父作用域的属性和方法

        // 1、我们可以通过向scope的{}中传入特殊的前缀标识符（prefix），来进行数据绑定
        // 2、创建了隔离的作用域，可以通过@ ，& ， = 引用应用指令的元素属性

        // @
        // 这个是一个单项绑定的前缀标识符
        // <div my-directive my-name="{{name}}"></div>
        // 属性的名字要用 - 来链接， 因为是单项绑定所以通过{{}}来绑定数据


        // =
        // 双向绑定的前缀标识符
        // <div my-directive age="age"></div>
        // 双向绑定通过 = 来实现，不可以使用{{}}

        // &
        // 这是一个绑定函数方法的前缀标识符
        // 使用方法： 在元素中使用属性，好比
        // <div my-directive change-my-age="changeAge()"></div>
        // ，注意，属性的名字要用-将多个个单词连接。


        // 我们的指令是如何利用这些前缀标识来寻找我们想要的属性和函数的呢？

        // @ 当指令编译到模板的name时，就会到scope中寻找是否含有name的键值对

        scope: {
          name: '@myName', // 就是原来元素中的 'my-name'
          age: '=', //
          changeAge: '&changeMyAge'  // 'changeMyAge' 就是原来元素中的 'change-my-age'
        },
        replace: true,
        template: "<div class='my-directive'>" +
            "<h3>下面部分是我们创建的指令生成的</h3>" +
            "我的名字是：<span ng-bind='name'></span><br/>" +
            "我的年龄是：<span ng-bind='age'></span><br/>" +
            "<input type='text' ng-model='name'>"+
            "<button ng-click='changeAge()'>修改年龄</button>" +
            " </div>"
      }
      return obj;
    });
