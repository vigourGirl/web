/**
 * Created by lenovo on 2017/5/10.
 */

//*************************************************
//导航条高亮设置

function navText(text){
    $(".navbar-collapse>ul>li.daohang").each(function(){
        var thisText=$(this).children("a").text();
        if(thisText==text){
            $(this).addClass("navbarLi");
        }
    });
}
//***************************************************
//产品页面
//第二部分选择部分
$(function(){
    var li=document.querySelectorAll('.productSectionfirst li');
    var div=document.querySelectorAll('.productSeclct');
    for(var i=0;i<li.length;i++){
        li[i].onclick=function(){
            $(this).addClass('productLi').siblings().removeClass('productLi');
           $(div[$(this).index()]).addClass('productShow').siblings().removeClass('productShow');
        }
    }
});

//************************************************************************
//页面简体繁体的切换
$(function(){
   var btn=document.querySelector('.footer button.btn ');
    var li=document.querySelectorAll('.footer .dropdown ul li');
    for(var i=0;i<li.length;i++){
        $(li[i]).click(function(){
           $(btn).children('a').text($(this).children('a').text());
        })
    }
});

//产品导航下的二级导航设置下拉缓出

$(function(){

    var s=$(window).width();
    if(s>991){
        $('.indexNavbarsecond').css({
            display:'none'
        });
        $('.indexNavbarfirst.daohang.lifirstRg').mouseenter(
            function(){
                $(".navlist").slideDown();
                $(' .navlist').css({
                    borderBottom:'1px solid #C1C1C1'
                });

            }
        );
        $(".navlist").mouseleave(
            function(){
                $(".navlist").slideUp("slow");
            }
        );
    }else{
        $('.indexNavbarsecond').css({
            display:'none'
        });
        $(' .navlist').css({
            display:'none'
        });
        $('.indexNavbarfirst.daohang.lifirstRg').mouseenter(function(){
            $(' .navlist').css({
                display:'none'
            });
        });
        $('.indexNavbarfirst.daohang.lifirstRg').mouseleave(function(){
            $(' .navlist').css({
                display:'none'
            });
        });
    }

});

$(function(){
    //销售的，锚点跳转
    var sale=$('.momayun .saleclick li a');
    for(var i=0;i<sale.length;i++ ){
        $(sale[i]).click(function(){
            console.log(11);
            $('.productSectionfirst .saleli').addClass('productLi').siblings().removeClass('productLi');
            $('.productSeclct.salediv').addClass('productShow').siblings().removeClass('productShow');
        })
    }
//教务的锚点跳转
    var jiaowu=$('.momayun .jiaowuclick li a');
    for(var j=0;j<jiaowu.length;j++ ){
        $(jiaowu[j]).click(function(){
            $('.productSectionfirst .jiaowuli').addClass('productLi').siblings().removeClass('productLi');
            $('.productSeclct.jiaowudiv').addClass('productShow').siblings().removeClass('productShow');
        })
    }
//微信锚点跳转
    var wechat=$('.momayun .wechatclick li a');
    for(var c=0;c<wechat.length;c++ ){
        $(wechat[c]).click(function(){
            $('.productSectionfirst .wechatli').addClass('productLi').siblings().removeClass('productLi');
            $('.productSeclct.wechatdiv').addClass('productShow').siblings().removeClass('productShow');
        })
    }
//   财务锚点跳转
    var caiwu=$('.momayun .caiwuclick li a');
    for(var d=0;d<caiwu.length;d++ ){
        $(caiwu[d]).click(function(){
            $('.productSectionfirst .caiwuli').addClass('productLi').siblings().removeClass('productLi');
            $('.productSeclct.caiwudiv').addClass('productShow').siblings().removeClass('productShow');
        })
    }

});

//*******************************
//下拉时导航条下边框显示
$(function(){
    $(window).scroll(function(){
        //获得鼠标滚动的距离
        var s=$(window).width();
        var t =document.documentElement.scrollTop||document.body.scrollTop;
        if(s<=768){
            $('.indexNavbarsecond').css({
                display:'none'
            });
            $(' .navlist').css({
                display:'none'
            });
            $('.indexNavbarfirst.daohang.lifirstRg').mouseenter(function(){
                $(' .navlist').css({
                    display:'none'
                });
            });
            $('.indexNavbarfirst.daohang.lifirstRg').mouseleave(function(){
                $(' .navlist').css({
                    display:'none'
                });
            });
        }
        if(t>0){
            $('div.navbar-default').css({
                borderBottom:'1px solid #C1C1C1',
                opacity:'0.90'
            });
            $(' .indexNavbarsecond').css({
                backgroundColor:'#fff',
                opacity:'0.90'
            });
            $('.words>a').css({
                display:'block'
            });
        }else if(t<=0 && s<768){                      //手机屏幕时
            $('div.navbar-default').css({
                borderBottom:'none',
                opacity:'1'
            });
        }else if(t<=0 && s>=768) {          //  全屏滚轮未动时
            $('div.navbar-default').css({
                borderBottom: 'none',
                opacity:'1'
            });
            $('.words>a').css({
                display:'none'
            });
        }
    });


    //网页右侧咨询、联系、demo、试用设置
    $('.words .wordsDemo').click(function(){
        //div点击跳转到一个新的网页
        window.open('http://u.yunjiaowu.cn/account/login');
        //window.history.back(-1);
    });

    $('.words .wordsTry').click(function(){
        window.location.href='register.html';
    });

    //电话咨询设置
    $('.telP').mouseenter(
        function(){
            $('.telN').show('slow')
        }
    );
        $('.telN').mouseout(
        function(){
            $('.telN').hide('slow')
        }
    );

    //在线咨询设置，百度商桥部分
    $('.shangqiao').click(function(){
                openWin();
    });

    function openWin() {
        var iWidth = 600;                          //弹出窗口的宽度;
        var iHeight =600;                         //弹出窗口的高度;
        //获得窗口的垂直位置
        var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
        //获得窗口的水平位置
        var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
        window.open('http://p.qiao.baidu.com/cps/chat?siteId=10800231&userId=11134164', 'newwindow',
            'height=' + iHeight + ',,innerHeight=' + iHeight + ',width=' + iWidth + '' +
            ',innerWidth=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',' +
            'status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=0,titlebar=no');
    }


});






