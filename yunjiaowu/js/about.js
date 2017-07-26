/**
 * Created by lenovo on 2017/5/26.
 */
$(".footer").load("footer.html");
$('div.navbar-default').css({
    backgroundColor:'#fff'
});


//$(function(){
//        aboutText("联系我们")
//});

$(function(){
    var li=document.querySelectorAll('.productSectionfirst li');
    var div=document.querySelectorAll('.productSeclct');
    var data0=sessionStorage.getItem("key0");
    var data1=sessionStorage.getItem("key1");
    var data2=sessionStorage.getItem("key2");
    $(li[data0]).addClass('productLi').siblings().removeClass('productLi');
    $(li[data1]).addClass('productLi').siblings().removeClass('productLi');
    $(li[data2]).addClass('productLi').siblings().removeClass('productLi');
    $(div[data0]).addClass('productShow').siblings().removeClass('productShow');
    $(div[data1]).addClass('productShow').siblings().removeClass('productShow');
    $(div[data2]).addClass('productShow').siblings().removeClass('productShow');
});

