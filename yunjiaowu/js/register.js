/**
 * Created by lenovo on 2017/5/17.
 */
$(function(){
    $('div.navbar-default').css({
        backgroundColor:'#fff'
    });
});

//表单提交及验证


function getimgdecode(){
    uphone= $.trim($("#phone").val());
    $('#discode').attr({
        src: 'http://crm.yunjiaowu.cn/api/cms/getimgdecode?phone='+uphone+'&data='+new Date()
    })
}
//手机号验证
$(function(){
    $("#phone").blur(function () {
        uphone= $.trim($("#phone").val());
        var regPhone= /^1[3578]\d{9}$/;
        if(uphone==''){
            $(this).css({
                borderColor:'#e4393c'
            });
            $("#errophone").show().text("手机号不能为空");
            return false;
        }else if(!regPhone.test(uphone)){
            $(this).css({
                borderColor:'#e4393c'
            });
            $("#errophone").show().text("填写正确手机号");
            return false;
        }else{
            $(this).css({
                borderColor:'#1B6D85'
            });
            $("#errophone").hide();
            $("#scode").removeAttr('disabled');
            $('#discode').css({
                display:'inline-block'
            });
            getimgdecode();
        }
    });

    //手机验证码发送
    $(function(){
        $("#scode").click(function(e){
            if($("#phone").val()==""||$('#discodeInput').val()==''){
                $("#errophone").show().text("未填写手机号或验证码");
                $("#scode").attr('disabled',"true");
            }else{
                var url ="http://crm.yunjiaowu.cn/api/cms/getcode";
                var n=60;
                var timer=null;
                $.ajax({
                    type:"get",
                    url:url,
                    data:{phone:$("#phone").val(),code : $("#discodeInput").val()},
                    dataType:'jsonp',
                    jsonp:'innerSignCallBack',
                    jsonpCallback:'innerSignCallBack',
                    success:function(d){
                        var data= JSON.parse(d);
                        console.log(data);
                        if(data.errcode==4036){
                            $("#errophone").show().text("图片验证码不能为空");
                        }else if(data.errcode==4037){
                            $("#errophone").show().text("图片验证码错误");
                            $('#discodeInput').val('');
                        }else{
                            timer= setInterval(function(){
                                n--;
                                console.log(n);
                                if(n==1){
                                    clearInterval(timer);
                                    $("#scode").text("点击获取验证码");
                                    $("#scode").removeAttr('disabled');
                                }else{
                                    $("#scode").text(n+"s以后重新验证");
                                    $("#scode").attr('disabled',"true");
                                }
                            },1000);
                        }
                        console.log(data);
                    },
                    error:function(msg){
                        console.log("失败");
                    }
                });
            }

        });
    });

    //清空设置
    function clearnull(){
        $("#phone").val('');
        $("#clientName").val('');
        $("#linkmanName").val('');
        $("#phonecode").val('');
        $('#discodeInput').val('');
    }

    //提交按钮设置
    $("#but").click(function() {
        if ($('#phone').val() != '' && $("#clientName").val() != '' && $("#linkmanName").val() != ''
            && $('#phonecode').val() !='') {
            var alls = {
                phone: encodeURI($("#phone").val()),
                clientName: encodeURI($("#clientName").val()),
                linkmanName: encodeURI($("#linkmanName").val()),
                phonecode : $("#phonecode").val()
            };
            var url = "http://crm.yunjiaowu.cn/api/cms/addclient";
            $.ajax({
                type: "get",
                url: url,
                data: alls,
                dataType: "jsonp",
                jsonp: 'innerSignCallBack',
                jsonpCallback: 'innerSignCallBack',
                success: function (d) {
                    var data= JSON.parse(d);
                    console.log(data);
                    if(data.errcode===4032){
                        $("#errophone").show().text("手机号码已被使用！");
                        clearnull();
                    }else if(data.errcode===0) {
                        alert("申请成功,请耐心等待");
                        clearnull();
                    }else{
                        $("#errophone").show().text(data.errmsg);
                        clearnull();
                    }
                },
                error: function (msg) {
                    alert("申请失败，请重新申请！");
                    clearnull();
                }
            });
        }else {
            alert("您的信息未填写完整！请重新填写！");
            clearnull();
        }
    })
});

//$(function(){
//    var s=$(window).width();
//    console.log(s);
//    if(s>991) {
//        $('.indexNavbarsecond').css({
//            display: 'none'
//        });
//        $('.indexNavbarfirst.daohang.lifirstRg').mouseenter(
//            function () {
//                $(".navlist").css({
//                    display: 'block'
//                });
//                $(".navlist").slideToggle('slow');
//            }
//        );
//        $('.indexNavbarfirst.daohang.lifirstRg').mouseleave(
//            function () {
//                $(".navlist").css({
//                    display: 'block'
//                });
//            }
//        );
//    }
// })