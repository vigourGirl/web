/**
 * Created by lenovo on 2017/5/26.
 */
$(".footer").load("footer.html");

//导航高亮
$(function(){
    //createCode();
    navText("开源");

});

//导航条颜色
$(function(){
    $('div.navbar-default').css({
        backgroundColor:'#fff'
    });
});

//图片验证码获取
function getimgdecode(){
    uphone= $.trim($("#phone").val());
    $('#discode').attr({
        src: 'http://crm.yunjiaowu.cn/api/sms/getimgdecode?phone='+uphone+'&data='+new Date()
    })
}

//访问后台数据
$(function(){
    //        验证用户名
    $("#clientName").blur(function(){
        if($(this).val()==''){
            $("#errorSpan").show().text("请填写您姓名");
        }else{
            $("#errorSpan").hide();
            $('.openSecond .container form .agreenment').css({
                marginTop:'15px'
            })
        }
    });
    //    验证手机号
    $("#phone").blur(function(){
         uphone= $.trim($("#phone").val());
        var regPhone= /^1[3578]\d{9}$/;
        if(uphone==''){
            $("#errorSpan").show().text("请填写您的手机号");
            return false;
        }else if(!regPhone.test(uphone)){
            $("#errorSpan").show().text("请输入正确的手机号码");
            return false;
        }else{
            $("#errorSpan").hide();
            $("#scode").removeAttr('disabled');
            $('#discode').css({
                display:'inline-block'
            });
            getimgdecode();
        }
    });

    //手机验证码发送
    $("#scode").click(function(e){
        if($("#phone").val()==""){
            $("#errorSpan").show().text("未填写手机号");
            $("#scode").attr('disabled',"true");
        }else {
            var url = "http://crm.yunjiaowu.cn/api/sms/getcode";
            var n = 60;
            var timer = null;
            $.ajax({
                type: "get",
                url: url,
                data:{phone:$("#phone").val(),code : $("#discodeInput").val()},
                dataType: 'jsonp',
                jsonp: 'innerSignCallBack',
                jsonpCallback: 'innerSignCallBack',
                success: function (data) {
                    var d= JSON.parse(data);
                    console.log(d);
                    if(d.errcode==4036){
                        $("#errorSpan").show().text("图片验证码不能为空！");
                    }else if(d.errcode==4037){
                        $("#errorSpan").show().text("图片验证码错误！");
                        $("#discodeInput").val('');
                    }else{
                        timer = setInterval(function () {
                            n--;
                            console.log(n);
                            if (n == 1) {
                                clearInterval(timer);
                                $("#scode").text("点击获取验证码");
                                $("#scode").removeAttr('disabled');
                            } else {
                                $("#scode").text(n + "s以后重新验证");
                                $("#scode").attr('disabled', "true");
                            }
                        }, 1000);
                    }
                },
                error: function (msg) {
                    console.log("失败");
                }
            });
        }
    });


//清空设置
    function clearNull(){
        $("#phone").val('');
        $("#clientName").val('');
        $("#phonecode").val('');
        $("#discodeInput").val('');
    }

// 免费下载按钮设置
    $('.jszc2 a.btn').click(function(e){
        e.preventDefault();
        if($('#checkbox').is(':checked')){
            //  访问后台的数据
            var alls = {
                phone : $("#phone").val(),
                clientName : encodeURI($("#clientName").val()),
                phonecode : $("#phonecode").val()
            };
            var url = "http://crm.yunjiaowu.cn/api/sms/saveclient";
            $.ajax({
                type : "get",
                url : url,
                data : alls,
                dataType : "jsonp",
                jsonp : 'innerSignCallBack',
                jsonpCallback : 'innerSignCallBack',
                success : function(data) {
                    var d= JSON.parse(data);
                    console.log(d);
                    if(d.errcode==0){
                        window.location.href="https://git.oschina.net/moma_oa/yunjiaowu";
                        console.log(d,"成功");
                        clearNull();
                    }else if(d.errcode==4033){
                        $("#errorSpan").show().text("验证码输入错误！");
                        e.preventDefault();

                    }else if(d.errcode==4032){
                        e.preventDefault();
                        $("#errorSpan").show().text("手机号码已被使用！");
                        clearNull();
                    }else{
                        e.preventDefault();
                        $("#errorSpan").show().text(d.errmsg);
                        clearNull();
                    }
                },
                error : function(msg) {
                    console.log("下载失败");
                }
            });
        }else{
            e.preventDefault();
            alert("您未同意摩码创想源码下载协议！请同意！")
        }
    })
});

//填满表格免费下载按钮变色
//$(function() {
//    $('form').on('input propertychange', function() {
//        if(($.trim($("#phone").val()) !== "") && ($.trim($("#clientName").val()) !== "")
//            && ($.trim($("#phonecode").val()) !== "") ){
//            $('.openSecond .container form .jszc2 a.btn').css('background','#03A9F4');
//        }else{
//            $('.openSecond .container form .jszc2 a.btn').css('background','#C1C1C1');
//        }
//    });
//});