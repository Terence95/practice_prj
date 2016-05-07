/**
  获取url的相关方法
  现在有一个url：‘http://localhost/$location/21.1%20$location.html#/foo?name=bunny#myhash’

  1. 获取当前完整url路径
   $location.absUrl():
  --// http://localhost/$location/21.1%20$location.html#/foo?name=bunny#myhash’


  *2. 获取当前url路径(当前url#后面的内容，包括参数和哈希值)
  $location.url()
  --// /foo?name=bunny#myhash

  *3. $location.path()
  获取当前url的子路径(也就是当前url#后面的内容，不包括参数)
  -- /foo

  *4. $location.protocol()
  获取当前url的协议(http https)
  -- // http

  5. 获取当前url主机名
  $location.host()
  // localhost

  6.获取当前url端口
  $location.port()
  // 80  （80端口）

  *7. 获取当前url的哈希值
  $location.hash()
  // myhash


  *8. 获取当前url的参数的序列化json对象
  $location.search()
  // {"name":"bunny"}


  修改url的方法
  上述方法中带*的方法可以传入参数进行修改，该情况下函数的返回值都是$location本身：

  1. 修改url的子路径(url#后面所有的内容，不包括参数)
  $location.url('/foo2?name=bunny2&age=12#myhash2')
  // http://localhost/$location/21.1%20$location.html#/foo2?name=bunny2&age=12#myhash2



  2. 修改url子路径部分，就是foo那部分
  $location.path('/foo2/foo3')
  // http://localhost/$location/21.1%20$location.html#/foo2/foo3/?name=bunny2&age=12#myhash2


  3. 修改url哈希值部分
  $location.hash('myHash3');
  // http://localhost/$location/21.1%20$location.html#/foo2/foo3/?name=bunny2&age=12#myhash3


  4.修改url的参数部分
  1. 传入两个参数，第一个参数格式为字符串

  1、第二个参数的格式也是字符串

  第一个参数表示url参数的属性名，第二个参数是该属性名的属性值，如果是已有属性名，则修改，如果
  不是则新增

  $location.search('name', 'code_bunny')
  // http://localhost/$location/21.1%20$location.html#/foo2/foo3/?name=code_bunny2&age=12#myhash3

  2、第二个参数的格式为数组，数组中各个值也是字符串或者布尔值
  第一个参数表示url参数的属性名，第二个参数是该属性名的值，有多少个值，url就会依次重复出现多少个

  $location.search('love', ['zxg','mitu'])
  // http://localhost/$location/21.1%20$location.html#/foo2/foo3/?name=code_bunny2&age=12&love=zxg&love=mitu#myhash3


  3、传入一个参数，格式为json对象
  直接用这个json对象里的键值对替换整个url的参数部分
    1、普通键值对
    $location.search({name:'papamibunny',age:'16',love:'zxg'})
    // http://localhost/$location/21.1%20$location.html#/foo2/foo3/?name=papamibunny&age=16&love=zxg#myhash3
    用里面的值替换了url中的参数部分


    2、属性为一个数组
    $location.search({name:['code_bunny','white_bunny','hua_bunny'],age:16,love:'zxg'})
    // http://localhost/$location/21.1%20$location.html#/foo2/foo3/?name=code_bunny&name=white_bunny&name=hua_bunny&age=16&love=zxg#myhash3

  4. 传入一个参数，格式为字符串
  直接用这个字符串替换整个url的参数部分(没有键值对，参数部分就是一个属性名)
  但如果转换成json对象的话，这个属性的值就是true
  // http://localhost/$location/21.1%20$location.html#/foo2/foo3/?bunnybaobao#myhash3
  // {"bunnybaobao":true}


   以上的修改url的方法的时候，每修改一次，url都会被存入历史记录，可以使用后退按钮回到之前的url
   如果不想要这种效果，而是替换当前记录，可以使用

   $location.replace()

   $location.path('/foo2/foo3').replace();
   // 修改第二次后调用replace():
   // http://localhost/$location/21.1%20$location.html#/foo2/foo3?name=bunny2&age=12#myhash2

   // 按下后退,不会回到第二次修改前的url,而是回到第一次修改前的url:
   // http://localhost/$location/21.1%20$location.html#/foo?name=bunny#myhash


   $locationChangeStart 和 $locationChangeSuccess 事件
   这两个事件分别发生在当url开始发生改变，以及url改变完成，都绑定在$rootScope里面

   $rootScope.$on('$locationChangeStart', function(){
      console.log('开始改变$location');
    });
    $rootScope.$on('$locationChangeSuccess', function(){
      console.log('结束改变$location')
    });
**/
var app = angular.module('locationApp', []);

app.controller('locationCtrl', function($scope, $location, $timeout, $rootScope) {
    $scope.absurl = $location.absUrl();
    $scope.url = $location.url();
    $scope.path = $location.path();
    $scope.protocol = $location.protocol();
    $scope.host = $location.host();
    $scope.port = $location.port();
    $scope.hash = $location.hash();
    $scope.search = $location.search();


    $scope.refresh = function() {
        $scope.absurl = $location.absUrl();
        $scope.url = $location.url();
        $scope.path = $location.path();
        $scope.hash = $location.hash();
        $scope.search = $location.search();
    };

    // 重写url部分，相应的absurl,url,path,hash,search都会改变
    $scope.changeUrl = function() {
        $location.url('/foo2?name=bunny2&age=12#myhash2');
    };
    // 重写path部分，相应的absurl，url，path都会改变
    $scope.changePath = function() {
        $location.path('/foo2/foo3');
    };
    // 重写hash部分，相应的absurl，url，hash都会改变
    $scope.changeHash = function() {
        $location.hash('myhash3');
    };

    // 修改search部分 方法1，相应的absurl，url，search，hash都改变
    // 指定两个参数，第一个参数是属性名，第二个参数是属性值
    //如果属性名是已有属性,则修改,如果属性名不是已有的,则新增.
    //属性值也可以是一个数组,参考方法6
    $scope.changeSearch_1 = function() {
        $location.search('name', 'code_bunny');
    };

    //修改search部分(方法2),相应的absurl,url,search,hash都会改变
    //指定两个参数,第二个参数是null:删除第一个参数所指定的属性名.不再有这个属性
    //若第一个参数不是已有的,则不发生任何改变
    $scope.changeSearch_2 = function() {
        $location.search('age', null);
    };

    //修改search部分(方法3),相应的absurl,url,search,hash都会改变
    //指定一个参数,json对象,直接重写整个search部分.不管是不是已有属性,全部重写.
    //这里属性的值可以是一个数组,参考方法5
    $scope.changeSearch_3 = function() {
        $location.search({
            name: 'papamibunny',
            age: 16,
            love: 'zxg'
        });
    };

    //修改search部分(方法4),相应的absurl,url,search,hash都会改变
    //指定一个参数,字符串,整个search部分就变为这个字符串.注意是没有属性值的.
    $scope.changeSearch_4 = function() {
        $location.search('bunnybaobao');
    };

    //修改search部分(方法5),相应的absurl,url,search,hash都会改变
    //其余和方法3一样.全部重写search:
    //指定一个参数,json格式,属性值是一个数组,那么最后的search会变成name=code_bunny&name=white_bunny&name=hua_bunny
    $scope.changeSearch_5 = function() {
        $location.search({
            name: ['code_bunny', 'white_bunny', 'hua_bunny']
        });
    };

    //修改search部分(方法6),相应的absurl,url,search,hash都会改变
    //其余和方法1一样,修改指定的属性名(或新增)
    //第二个参数是一个数组,最后search中的love部分会变成love=zxg&love=mitu
    //它和方法5的区别,就像方法1和方法3的区别,一个是修改或新增某个属性值,一个是重置整个search
    $scope.changeSearch_6 = function() {
        $location.search('love', ['zxg', 'mitu']).replace();
    };

    //使用$location.replace(),则这一次的修改路径不会被记录到历史记录中,点击后退,不会后退到改变前的路径,而是后退到改变前的路径
    $rootScope.$on('$locationChangeStart', function() {
        console.log('开始改变$location');
    });
    $rootScope.$on('$locationChangeStart', function() {
        $scope.refresh();
        console.log('结束改变$location');
    });

    // 1.初始状态,输入如下url: http://localhost/$location/21.1%20$location.html#/foo?name=bunny#myhash




});
