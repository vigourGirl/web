/**
 * Created by lenovo on 2017/5/27.
 */
//底部关于我们的跳转
$(function() {
    var s0=0;
    var s1=1;
    var s2=2;
    console.log(s1);
    $("#li0").click(function(){
        sessionStorage["key0"]=s0;
        window.location.href="about.html";
    });
    $("#li1").click(function(){
        sessionStorage["key1"]=s1;
        window.location.href="about.html";
    });
    $("#li2").click(function(){
        sessionStorage["key1"]=s2;
        window.location.href="about.html";
    })
});


