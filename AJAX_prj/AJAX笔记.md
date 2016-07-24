###如何写一个自己的AJAX库

- AJAX请求

	1. 创建Ajax对象
	2. 连接服务器
	3. 发送请求
	4. 接收返回
	
	- 请求状态监控
		- onreadystatechange事件
			1. 0 (未初始化)还没有调用open()方法
			
			2. 1 (载入) 已调用send()方法，正在发送请求
			
			3. 2 (载入完成) send()方法完成，已经收到全部响应内容
			
			4. 3 (解析) 正在解析响应内容
			
			5. 4 (完成) 响应内容解析完成，可以在客户端调用
		- status属性：请求结果
		
		- responseText
	
	
- AJAX数据

	- XML\Json
	
	- 字符集（所有文件字符集相同）
	


CODE:
	
```
function ajax(url, funcSuccess, funFaild) {
	//  1. 创建Ajax对象
    var oAjax = null;
    
    if (window.XMLHttpRequest) {
        oAjax = new XMLHttpRequest();
    } else {
        // 兼容IE6
        oAjax = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // 2. 连接服务器
    // open(方法, url, 是否异步)
    oAjax.open('GET', url, true);
    // alert(oAjax);

    // 3. 发送请求
    oAjax.send();
    
    // 4. 接收返回信息
    oAjax.onreadystatechange = function() {
    		if (oAjax.readyState == 4) {
    		
            	if (oAjax.status == 200) {
                	
	                funcSuccess(oAjax.responseText);
    	        } else {

        	        if (funFaild) {
                    funFaild();
                }
            }
        }
    };
  }
```
