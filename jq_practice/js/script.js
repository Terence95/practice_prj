$(document).ready(function() {
    // jq code
    $(".btn").click(function() {
        alert(Test.mutiple(8));
    });

    $("[name = 'input']").click(function() {
        alert('input');
    });

    var btn = $("p:eq(0)");
    btn.css("color", "blue");

    var btn1 = $("p:eq(1)");
    btn1.css("color", "orange");

    var btn2 = $("p:eq(2)");
    btn2.css("color", "green");

    var Test = {
        "P": 60,
        "mutiple": function(t) {
            return t * this.P;
        }
    };

    $("#btn1").click(function() {
        $(this).hide();
    });

    var p = $("#showandhide");
    $(".show").click(function() {
        p.show();
    });

    $(".hide").click(function() {
        p.hide();
    });

    $(".fadeout").click(function() {
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(3000);
    });

    $(".ex .hide").click(function() {
        $(this).parents(".ex").hide("slow");
    });

    $(".flip").click(function() {
        $(".part4").slideToggle("slow");
    });


    $(".button2").click(function() {
        var div = $(".part5 .div1");
        div.animate({
            height: '300px',
            opacity: '0.4'
        }, "slow");
        div.animate({
            width: '300px',
            opacity: '0.8'
        }, "slow");
        div.animate({
            height: '100px',
            opacity: '0.4'
        }, "slow");
        div.animate({
            width: '100px',
            opacity: '0.8'
        }, "slow");
    });

    // first选择器
    // $(".part2 div:first").css("background-color", "red");
    // even 偶数的选择器，index从0开始
    // $(".part2 div:even").css("background-color", "red");
    // odd 奇数的选择器，index从0开始
    // $(".part2 div:odd").css("background-color", "red");

    //
    // $(".part2 div:eq(2)").css("background-color", "red");

    // 选范围的选择器 gt greater than
    // $(".part2 div:gt(0)").css("background-color", "red");

    // 小于 less than

    // 一个枚举的例子，又要2，又要1
    $(".part2 div:eq(2), .part2 div:eq(1)").css("background-color", "red");


    // 内容选择器 找到包含“放假”的p标签
    $("p:contains(放假)").css("color", "red");

    // 空选择器 不包含子元素或文本的元素 <p></p> 这东西还不能有回车键
    $("p[name='msg']:empty").html("hello world");


    // 显示选择器
    // visible查找显示的控件 hidden 查找隐藏的控件


    // 属性选择器，比较万能的，[属性=“属性值”]

    // :checked 查找的是被选中的控件
    console.log($("input[name='sex']:checked").val());

    // jq对象转js对象
    var jsobj = $("input[name='sex']:checked")[0];


    // 如果是下拉列表呢，就使用 :selected 选择器
    console.log($("#city option:selected").val());


    // jq对象和js对象相互转换
    // 1.jq转js
    // var jsobj_2 = $("input[name='sex']:checked")[0];
    // jq想获得属性的方法，attr方法
    // jsobj_2.attr("name");

    // js对象转jq对象
    // $(js对象) 这样将js对象括起来就可以了

    var role = $("p[name='role']");
    for (var i = 0; i < role.length; i++) {
        console.log($(role[i]).html());
    }

    // jq的方法
    // 事件函数
    // 1. 就绪函数 - $(document).ready(function)
    // 2. 单击函数 - $(selector).click(function)
    // 3. 双击函数 - $(selector).dbclick(function)
    // 4. 焦点函数 - $(selector).focus(function)
    // 5. 失去焦点函数 - $(selector).blur(function)
    // 6. 内容改变事件 - $(selector).change(function)








});
