/**
 * Created by lenovo on 2017/5/15.
 */

$(".footer").load("footer.html");
$(function(){
    navText("产品");
});

$('div.navbar-default').css({
    backgroundColor:'#fff'
});


//滚动加载图片
$(function(){
    $(window).scroll(function(e){
        var num = document.getElementsByTagName('img').length;
        var img = document.getElementsByTagName("img");
        var n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
        lazyload(); //页面载入完毕加载可是区域内的图片
        //window.onscroll = lazyload;
        function lazyload() { //监听页面滚动事件
            var seeHeight = document.documentElement.clientHeight; //可见区域高度
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
            for (var i = n; i < num; i++) {
                if (img[i].offsetTop < seeHeight + scrollTop) {
                    if (img[i].getAttribute("src") == "") {
                        img[i].src = img[i].getAttribute("data-src");
                    }
                    n = i + 1;
                }
            }
        }
   });

});

//产品下拉菜单里的选项的锚点跳转
$(function(){
    var url=window.location.href;
    console.log(url);
    var c=url.split('#');   //从指定的地方将字符串分割成字符串数组
    console.log( c[1]);
    if(c[1]=='sale1'||c[1]=='sale2'||c[1]=='sale3'||c[1]=='sale4'||c[1]=='sale5'||c[1]=='sale6'||c[1]=='saleli'){
        $('.productSectionfirst .saleli').addClass('productLi').siblings().removeClass('productLi');
        $('.productSeclct.salediv').addClass('productShow').siblings().removeClass('productShow');
    }else if(c[1]=='jiaowu1'||c[1]=='jiaowu2'||c[1]=='jiaowu3'||c[1]=='jiaowu4'||c[1]=='jiaowu5'||c[1]=='jiaowu6'||c[1]=='jiaowuli'){
        $('.productSectionfirst .jiaowuli').addClass('productLi').siblings().removeClass('productLi');
        $('.productSeclct.jiaowudiv').addClass('productShow').siblings().removeClass('productShow');
    }else if(c[1]=='wechat1'||c[1]=='wechat2'||c[1]=='wechat3'||c[1]=='wechat4'||c[1]=='wechatli'){
        $('.productSectionfirst .wechatli').addClass('productLi').siblings().removeClass('productLi');
        $('.productSeclct.wechatdiv').addClass('productShow').siblings().removeClass('productShow');
    }else if(c[1]=='caiwu1'||c[1]=='caiwu2'||c[1]=='caiwu3'||c[1]=='caiwu4'||c[1]=='caiwuli'){
        $('.productSectionfirst .caiwuli').addClass('productLi').siblings().removeClass('productLi');
        $('.productSeclct.caiwudiv').addClass('productShow').siblings().removeClass('productShow');
    }

    var Allproductnava=$('.navlist a');
    for(var j=0;j<Allproductnava.length;j++){
        Allproductnava[j].onclick=function(){
            $('.productBananer .navlist').slideUp('fast');
        }
    }

});