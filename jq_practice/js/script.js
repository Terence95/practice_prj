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

    $(".ex .hide").click(function () {
        $(this).parents(".ex").hide("slow");
    });

    $(".flip").click(function () {
        $(".part4").slideToggle("slow");
    });


    $(".button2").click(function () {
        var div = $(".part5 .div1");
        div.animate({height:'300px', opacity:'0.4'}, "slow");
        div.animate({width:'300px', opacity:'0.8'}, "slow");
        div.animate({height:'100px', opacity:'0.4'}, "slow");
        div.animate({width:'100px', opacity:'0.8'}, "slow");
    });
});
