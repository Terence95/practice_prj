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

















