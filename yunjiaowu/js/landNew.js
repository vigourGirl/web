/**
 * Created by lenovo on 2017/5/31.
 */
//忘记密码提示框显示设置
$(function(){
    $('.landNew div.remember a').hover(
        function(){
            $('.landNewhide').css({
                display:'block'
            });
            $('.landNew .san').css({
                display:'block'
            })
        },
        function(){
            $('.landNewhide').css({
                display:'none'
            });
            $('.landNew .san').css({
                display:'none'
            })
        }
    );

    //点击提交
    $('#btn').click(function(){
        console.log(111);
        $('.container form').attr({
            action:'http://'+$('#domain').val()+'.vip.yunjiaowu.cn/account/doLogin'
        });
        $('.container form').submit();
    })
});