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
        // readyState == 4仅仅代表完成，但是不代表是否成功
        if (oAjax.readyState == 4) {
            if (oAjax.status == 200) {
                // alert('success' + oAjax.responseText);

                funcSuccess(oAjax.responseText);
            } else {
                // alert('failed');
                if (funFaild) {
                    funFaild();
                }
            }
        }

    };
}
