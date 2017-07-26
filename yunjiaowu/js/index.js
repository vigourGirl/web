/**
 * Created by lenovo on 2017/5/26.
 */
    //导航条设置
    //监听鼠标滚动事件
$(window).scroll(function(){
    //获得鼠标滚动的距离
    var s=$(window).width();
    var t =document.documentElement.scrollTop||document.body.scrollTop;
    if(s<768){
        $('.indexNavbarsecond').css({
            display:'none'
        });
    }
    if(t>0){
        $('div.navbar-default').css({
            backgroundColor:'#fff',
            opacity:'0.86'
        });
        $(' .indexbananer #navbar ul li a:not(.btn)').css({
            color:'#333'
        });
        $('.indexNavbarsecond').css({
            backgroundColor:'#fff',
            opacity:'0.86'
        });
        $(' .indexbananer #navbar .navbar-nav.navbar-right .landbtn').css({
            color:'#197AD8'
        });
        $('.navbar.navbar-default .navbar-header .momaLogo img').attr({
            src:'img/index/logo1.png'
        });
        $('.indexbananer .navbar-collapse.collapse.in a').css({
            color:'#333'
        });
        $('.indexbananer  ul li a:not(.btn)').hover(
            function(){
                $(this).css({
                    color:'#197AD8'
                });
            },
            function(){
                $(this).css({
                    color:'#333'
                });

            }
        );
        $('#navbar .navbar-nav.navbar-right .landbtn').hover(
            function(){
                $(this).css({
                    color:'#fff',
                    background:'#197AD8',
                    borderColor:'#197AD8'
                })
            },
            function(){
                $(this).css({
                    color:'#197AD8',
                    backgroundColor:'transparent',
                    borderColor:'#197AD8'
                })
            }
        )
    }else if(t<=0 && s<768){                      //手机屏幕时
        $('div.navbar-default').css({
            backgroundColor:'transparent',
            opacity:'1'
        });
        $('.indexbananer #navbar ul li a:not(.btn)').css({
            color:'#333'
        });
        $(' .indexbananer #navbar .navbar-nav.navbar-right .landbtn').css({
            color:'#03A9F4'
        });
        $('.navbar.navbar-default .navbar-header .momaLogo img').attr({
            src:'img/index/logo2.png'
        });
        $('.indexbananer #navbar ul li a:not(.btn)').hover(
            function(){
                $(this).css({
                    color:'#197AD8'
                });
            },
            function(){
                $(this).css({
                    color:'#333'
                })
            }
        );
        $('#navbar .navbar-nav.navbar-right .landbtn').hover(
            function(){
                $(this).css({
                    color:'#fff',
                    background:'#197AD8',
                    borderColor:'#197AD8'
                })
            },
            function(){
                $(this).css({
                    color:'#197AD8',
                    backgroundColor:'transparent',
                    borderColor:'#197AD8'
                })
            }
        )
    }else if(t<=0 && s>=768){          //  全屏滚轮未动时
        $('div.navbar-default').css({
            backgroundColor:'transparent',
            opacity:'1'
        });
        $('.indexbananer #navbar ul li a').css({
            color:'#fff'
        });
        $('.indexNavbarsecond').css({
            backgroundColor:'transparent',
            opacity:'1'
        });
        $('.navbar.navbar-default .navbar-header .momaLogo img').attr({
            src:'img/index/logo2.png'
        });
        $('.indexbananer #navbar ul li a:not(.btn)').hover(
            function(){
                $(this).css({
                    color:'#197AD8'
                });
            },
            function(){
                $(this).css({
                    color:'#fff'
                })
            }
        );
        $('#navbar .navbar-nav.navbar-right .landbtn').hover(
            function(){
                $(this).css({
                    color:'#fff',
                    background:'#197AD8',
                    borderColor:'#197AD8'
                })
            },
            function(){
                $(this).css({
                    color:'#fff',
                    backgroundColor:'transparent',
                    borderColor:'#197AD8'
                })
            }
        );

    }
});
//活动事件
$(function(){
    document.addEventListener('touchmove',function(e){
        $('div.navbar-default').css({
            backgroundColor:'#fff',
            opacity:'0.86'
        });
        $(' .indexbananer #navbar ul li a:not(.btn)').css({
            color:'#333'
        });
        $(' .indexbananer #navbar .navbar-nav.navbar-right .landbtn').css({
            color:'#03A9F4'
        });
        $('.navbar.navbar-default .navbar-header .momaLogo img').attr({
            src:'img/index/logo1.png'
        });
        $('.indexbananer .navbar-collapse.collapse.in a').css({
            color:'#333'
        });
    });

    //滚动时候加载图片
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
//页面底部鼠标移入图片换成有色图片
$(function(){
    $('.solutionThird .container .col-xs-2 img.img1').hover(
        function(){
            $(this).attr({
                src:'img/try/anli01.png'
            })
        },
        function(){
            $(this).attr({
                src:'img/try/anli01-1.png'
            })
        }
    );
    $('.solutionThird .container .col-xs-2 img.img2').hover(
        function(){
            $(this).attr({
                src:'img/try/anli02.png'
            })
        },
        function(){
            $(this).attr({
                src:'img/try/anli02-2.png'
            })
        }
    );
    $('.solutionThird .container .col-xs-2 img.img3').hover(
        function(){
            $(this).attr({
                src:'img/try/anli03.png'
            })
        },
        function(){
            $(this).attr({
                src:'img/try/anli03-3.png'
            })
        }
    );
    $('.solutionThird .container .col-xs-2 img.img4').hover(
        function(){
            $(this).attr({
                src:'img/try/anli04.png'
            })
        },
        function(){
            $(this).attr({
                src:'img/try/anli04-4.png'
            })
        }
    );
    $('.solutionThird .container .col-xs-2 img.img5').hover(
        function(){
            $(this).attr({
                src:'img/try/anli05.png'
            })
        },
        function(){
            $(this).attr({
                src:'img/try/anli05-5.png'
            })
        }
    );
    $('.solutionThird .container .col-xs-2 img.img6').hover(
        function(){
            $(this).attr({
                src:'img/try/anli06.png'
            })
        },
        function(){
            $(this).attr({
                src:'img/try/anli06-6.png'
            })
        }
    );
    $('.solutionThird .container .col-xs-2 img.img7').hover(
        function(){
            $(this).attr({
                src:'img/try/anli07.png'
            })
        },
        function(){
            $(this).attr({
                src:'img/try/anli07-7.png'
            })
        }
    );
    $('.solutionThird .container .col-xs-2 img.img8').hover(
        function(){
            $(this).attr({
                src:'img/try/anli08.png'
            })
        },
        function(){
            $(this).attr({
                src:'img/try/anli08-8.png'
            })
        }
    );
    $('.solutionThird .container .col-xs-2 img.img9').hover(
        function(){
            $(this).attr({
                src:'img/try/anli09.png'
            })
        },
        function(){
            $(this).attr({
                src:'img/try/anli09-9.png'
            })
        }
    );
    $('.solutionThird .container .col-xs-2 img.img10').hover(
        function(){
            $(this).attr({
                src:'img/try/anli10.png'
            })
        },
        function(){
            $(this).attr({
                src:'img/try/anli10-10.png'
            })
        }
    );
    $('.solutionThird .container .col-xs-2 img.img11').hover(
        function(){
            $(this).attr({
                src:'img/try/anli11.png'
            })
        },
        function(){
            $(this).attr({
                src:'img/try/anli11-11.png'
            })
        }
    );
    $('.solutionThird .container .col-xs-2 img.img12').hover(
        function(){
            $(this).attr({
                src:'img/try/anli12.png'
            })
        },
        function(){
            $(this).attr({
             src:'img/try/anli12-12.png'
            })
        }
    );
    $('.solutionThird .container .col-xs-2 img.img13').hover(
        function(){
            $(this).attr({
                src:'img/try/anli13.png'
            })
        },
        function(){
            $(this).attr({
                 src:'img/try/anli13-13.png'
            })
        }
    );
    $('.solutionThird .container .col-xs-2 img.img14').hover(
        function(){
            $(this).attr({
                src:'img/try/anli14.png'
            })
        },
        function(){
            $(this).attr({
                src:'img/try/anli14-14.png'
            })
        }
    );
    $('.solutionThird .container .col-xs-2 img.img15').hover(
        function(){
            $(this).attr({
                src:'img/try/anli15.png'
            })
        },
        function(){
            $(this).attr({
                  src:'img/try/anli15-15.png'
            })
        }
    );
    $('.solutionThird .container .col-xs-2 img.img16').hover(
        function(){
            $(this).attr({
                src:'img/try/anli16.png'
            })
        },
        function(){
            $(this).attr({
                 src:'img/try/anli16-16.png'
            })
        }
    );
    $('.solutionThird .container .col-xs-2 img.img17').hover(
        function(){
            $(this).attr({
                src:'img/try/anli17.png'
            })
        },
        function(){
            $(this).attr({
                 src:'img/try/anli17-17.png'
            })
        }
    );
    $('.solutionThird .container .col-xs-2 img.img18').hover(
        function(){
            $(this).attr({
                src:'img/try/anli18.png'
            })
        },
        function(){
            $(this).attr({
               src:'img/try/anli18-18.png'
            })
        }
    );
    $('.solutionThird .container .col-xs-2 img.img19').hover(
        function(){
            $(this).attr({
                src:'img/try/anli19.png'
            })
        },
        function(){
            $(this).attr({
               src:'img/try/anli19-19.png'
            })
        }
    );
    $('.solutionThird .container .col-xs-2 img.img20').hover(
        function(){
            $(this).attr({
                src:'img/try/anli20.png'
            })
        },
        function(){
            $(this).attr({
             src:'img/try/anli20-20.png'
            })
        }
    )
});
