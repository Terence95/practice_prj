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
