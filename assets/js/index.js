$(function() {
    $('.fuwu').mouseover(function() {
        $('.yincang').show();
    }).mouseout(function() {
        $('.yincang').hide();
    })
    $('.erweima').mouseover(function() {
        $('.app').show();
    }).mouseout(function() {
        $('.app').hide();
    })
    //头目下拉
    $(window).scroll(function() {
        var windowTop = $(window).scrollTop();

        console.log(windowTop);
        if (windowTop > 233) {
            $('.dinwei-box').slideDown();
        } else {
            $('.dinwei-box').slideUp();
        }
    })
    $('.shousuo input').focus(function() {
        $('.focus-xianshi').html('');
        $.get('http://localhost/P2/git/xm-app/php/1.php', function(data) {
            var content = '';
            console.log(data);
            data.forEach(function(value, key) {
                content += '<li class="dajiazai">' + value.title + '</li>';
            })
            $('.focus-xianshi').prepend(content);
        }, 'json');
        $('.focus-xianshi').show();
    }).blur(function() {
        $('.focus-xianshi').hide();
    })

    //选项卡

    $('.lanmu-title li').mouseenter(function(e) {
        console.log('移入li', e);
        $('.menu-detail').stop(true).slideDown();
    }).mouseleave(function() {
        $('.menu-detail').slideUp();
    })

    $('.lanmu-title li').mouseenter(function() {

        var index = $(this).index();


        $(".item").eq(index).show().siblings().hide()

    })

    $('.menu-detail').mouseenter(function() {
        $(this).stop();
    }).mouseleave(function() {
        $(this).slideUp();
    })
    //图片轮播
    var index = 0;
    //初始化
    var timer;
    //获取图片的索引值
    var len = $('.lunbo-tu li').length;
    clearInterval(timer);
    fun();
    //定时器
    function fun() {

        timer = setInterval(function() {
            $('.lunbo-tu li:eq(' + index + ')').fadeOut(1000);
            $('.lunbo-xulie li:eq(' + index + ')').removeClass('active');
            index++;
            if (index > len - 1) {
                index = 0;
            }

            $('.lunbo-tu li:eq(' + index + ')').fadeIn(1000);
            $('.lunbo-xulie li:eq(' + index + ')').addClass('active');
        }, 2000);
    }
    $('.lunbo').mouseover(function() {
        clearInterval(timer);
    }).mouseout(function() {
        fun();
    })
    //鼠标移入li显示对应的图片
    $('.lunbo-xulie li').mouseover(function() {
        clearInterval(timer);
        $('.lunbo-tu li:eq(' + index + ')').fadeOut(1000);
        $('.lunbo-xulie li:eq(' + index + ')').removeClass('active');
        index = $(this).index();
        $('.lunbo-tu li:eq(' + index + ')').fadeIn(1000);
        $('.lunbo-xulie li:eq(' + index + ')').addClass('active');
    })
    //左点击
    $('.lunbo-left').click(function() {
        clearInterval(timer);
        $('.lunbo-tu li:eq(' + index + ')').fadeOut(1000);
        $('.lunbo-xulie li:eq(' + index + ')').removeClass('active');
        index--;
        if (index < 0) {
            index = len - 1;
        }
        $('.lunbo-tu li:eq(' + index + ')').fadeIn(1000);
        $('.lunbo-xulie li:eq(' + index + ')').addClass('active');
    })
    //右点击
    $('.lunbo-right').click(function() {
        clearInterval(timer);
        $('.lunbo-tu li:eq(' + index + ')').fadeOut(1000);
        $('.lunbo-xulie li:eq(' + index + ')').removeClass('active');
        index++;
        if (index > len - 1) {
            index = 0;
        }
        $('.lunbo-tu li:eq(' + index + ')').fadeIn(1000);
        $('.lunbo-xulie li:eq(' + index + ')').addClass('active');
    })
    //新品点击轮播
    var indexs = 0;
    $('.left').click(function() {
        indexs++;
        $.get('http://localhost/P2/git/xm-app/php/2.php', function(data) {
            console.log(data);
            var content = '';
            data.forEach(function(value, key) {
                content += '<li class="fuji">';
                content += '<div class="kexuan">' + value.color + '</div>';
                content += '<img src="' + value.img + '" alt="">';
                content += '<div class="wenzi">';
                content += '<div class="fuzhu">' + value.author + '</div>';
                content += '<h4>' + value.time + '</h4>';
                content += '<p><span class="jiage">' + value.qian + '</span>';
                content += '<span>' + value.title + '</span></p>';
                content += '</div>';
                content += '</li>';

            })
            $('.img-lunbo').append(content);
        }, 'json');
        $('.img-lunbo').animate({ left: -1140 * indexs }, 600);

        console.log(indexs);
    })
    $('.right').click(function() {
        $('.img-lunbo').animate({ left: 0 }, 600);
    })
    //倒计时
    function demo() {
        //获取时间戳
        var currenTime = new Date().getTime();
        //获取想要的时间的戳
        var futureTime = new Date('2017/11/19').getTime();
        //获取两个时间戳的时间差
        var time = futureTime - currenTime;
        //获取毫秒数

        var mSecond = time % 1000;
        //获取秒数

        var second = Math.floor(time / 1000 % 60);
        //获取分钟
        var minute = Math.floor(time / 1000 / 60 % 60);
        //获取小时
        var hour = Math.floor(time / 1000 / 60 / 60 % 24);

        if (second < 10) {
            second = '0' + second;
        }
        if (minute < 10) {
            minute = '0' + minute;
        }
        if (hour < 10) {
            hour = '0' + hour;
        }
        document.querySelector('.shi').innerHTML = hour;
        document.querySelector('.fen').innerHTML = minute;
        document.querySelector('.miao').innerHTML = second;
    }
    demo();
    setInterval(function() {
        demo();
    }, 1000);
    //点击轮播，拖动
    var aIndex = 0;
    var Timer;
    var leng = $('.nav li').length;
    var x;
    var isDown = false;
    $('.nav li').clone(true).appendTo($('.nav'));

    function star() {
        Timer = setInterval(function() {
            aIndex++;
            console.log(aIndex);
            if (aIndex > leng) {
                aIndex = 1;
                $('.nav').css('left', 0);
            }
            $('.nav').animate({ left: -aIndex * 275 }, 500);
        }, 3000);

    }
    star();
    //移入清除定时器
    $('.nav').mouseover(function() {
        clearInterval(Timer);
    }).mouseout(function() {
        star();
    })
    //左点击
    $('.leftKey').click(function() {
        clearInterval(Timer);
        aIndex--;
        if (aIndex < 0) {
            aIndex = 0;
        }
        $('.nav').animate({ left: -aIndex * 275 }, 500);
    }).mouseover(function() {
        clearInterval(Timer);
    }).mouseout(function() {
        star();
    })
    //右点击
    $('.rightKey').click(function() {
        aIndex++;
        if (aIndex > leng) {
            aIndex = 1;
        }
        $('.nav').animate({ left: -aIndex * 275 }, 500);
    }).mouseover(function() {
        clearInterval(Timer);
    }).mouseout(function() {
        star();
    })
    //鼠标移入移除
    $('.nav').mousedown(function(e) {
        //初始化ul的位置
        var Left = $(this).position().left;
        $('.nav').mousemove(function(ent) {
            //获取鼠标按下和拖动位置的差的位置
            x = ent.pageX - e.pageX;
            $(this).css('left', Left + x);
        })
    })
})