##Angular note
一、<br>
####1、什么是服务？<br>
服务是一个单例对象或者函数，对外提供特定功能

- 单例，无论这个服务被注入到任何地方，对象始终是只有一个实例
- 服务和定义function不同，因为服务被定义在一个模块中，其使用范围是可以被管理的

####2、服务能干甚么？
可以把服务注入到controller、指令或者其他服务中


###二、自定义的服务 <br> 
如同指令，系统内置的服务以$开头，也可以自己定义服务

- 使用内置$provide 服务
- 使用 Module 的 factory 方法
- 使用 Module 的 service 方法

例子在 script.js文件里

####Service 的特性
- Service 都是单例的
- Service 由$injector负责实例化
- Service 在整个应用的生命周期中存在，可以用来共享数据
- 在需要使用的地方利用依赖注入机制注入Service
- 自定义的Service需要写在内置Service后面
- 内置Service的命名以$符号开头，自定义Service应该避免


####Service、Provider、Factory本质都是Provider

- Service、Provider、Factory本质上都是Provider
- Provider模式是“策略模式” + “抽象工厂模式的混合体”


####使用$filter服务

- $filter是用来进行数据格式化的专用服务
- AngularJS内置了9个filter
- currency（货币），date，filter，json，limitTo，lowercase，number，orderby，uppercase
- filter可以嵌套使用（用管道符号 | 分隔）
- filter是可以传递参数的
- 用户可以定义自己的filter


#### 其他常用的Service：内置的共24个
- $compile: 编译服务
- $filter: 数据格式化工具，内置了8个
- $interval
- $timeout
- $locale
- $location
- $log
- $parse
- $http: 封装了 Ajax


#### 简单项目的开发流程
- 界面原型设计
- 切分功能模块
- 使用 Angular-ui 和 bootstrap 编写 UI （UIRouter、ngGrid、表单检验）
- 编写 Controller
- 编写 Service
- 编写 Filter
- 单元测试和集成测试


#### 双向数据绑定
- ng-bind 解决 出现 {{}} 的问题
- index.html 加载 Angular 库，在index中用ng-bind



#### AngularJS 四大核心特性
- mvc
- 模块化和依赖注入
- 双向数据绑定
- 指令


#### 指令
需要了解

- comile与link(操作元素、添加css样式、绑定事件) 
- 指令与控制器之间的交互
- 指令之间的交互
- scope的类型与独立scope
- 现实项目中，指令的使用会非常之多
- 第三方指令库 angular-ui

######指令的配置项
- restrict:(AEMC) 四种
	- <hello></hello> Element
	- <div hello></div> Attribute
	- <div class="hello"> Class
	- \<!-- directive:hello -->

这四种分别对应 AEMC 四种指令的属性，A（默认） C 和 M 不是经常使用


- template
- replace 
- transclue


- 指令的三个阶段： 加载-》编译 -》链接
	- 加载：加载angular.js 找到ng-app 指令，确定应用边界
	- 编译：遍历 dom，找到所有指令，根据指令代码中template，replace，transclue转换dom结构，如果存在compile函数则调用
	- 链接阶段：对于每条指令的link，在angular中在 link里面进行dom的操作，他可以给dom元素绑定事件，可以绑定作用域、绑定事件监听器
		- link函数一共有四个参数：scope，element，attr，父控制器







`看下面一段代码`
	
```
appModule.directive("superman", function() {
    return {
        scope: {},
        restrict: 'AE',
        controller: function($scope) {
            $scope.abilities = [];
            this.addStrength = function() {
                $scope.abilities.push("strength");
            };
            this.addSpeed = function() {
                $scope.abilities.push("speed");
            };
            this.addLight = function() {
                $scope.abilities.push("Light");
            };
        },
        link: function(scope, element, attrs) {
            element.addClass('btn btn-primary');
            element.bind("mouseenter", function() {
                console.log(scope.abilities);
            });
        }
    };
});
```
`scope` 配置成了一个空的对象，创建独立作用域 <br>
`controller` 和mvc里的controller不同，这个是给我们的指令暴露出一组public方法给外部调用的<br>
`link` dom操作 <br>

####疑问：什么时候该把逻辑写在controller内，什么时候该把逻辑写在link里面呢？
- controller： 暴露方法给外部调用
- link：处理指令内部逻辑的



####独立的scope
- 在指令配置项中加入 scope:{}，为指令创建了一个独立作用域
- scope 中的绑定策略
	- @ ：把当前属性作为字符串传递，还可以绑定来自外层scope的值，在属性值中插入{{}}即可
	- = ：与父scope中的属性进行双向绑定
	- & ：传递一个来自父scope的函数，稍后调用



###AngularJS 的form指令
- HTML原生的form表单是不能嵌套的，而AngularJS封装之后的form可以嵌套
- Angular为form扩展了自动校验功能，防止重复提交等功能
- Angular对input元素的type进行了扩展，一共提供了以下10种类型
	- text、number、url、email、radio、checkbox、hidden、button、submit、reset
- Angular为表单内置了4种css样式
	- ng-valid、ng-invalid、ng-pristine、ng-dirty
- 内置校验器：require、minlength、maxlength
    

		


















