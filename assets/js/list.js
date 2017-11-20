$(function() {
    var timer = 0;
    var index = 0;
    var len = $('.lunbo-img li').length;

    function fun() {
        timer = setInterval(function() {
            $('.lunbo-img li:eq(' + index + ')').fadeOut(1000);
            $('.dian li:eq(' + index + ')').removeClass('active');
            index++;
            if (index > len - 1) {
                index = 0;
            }

            $('.lunbo-img li:eq(' + index + ')').fadeIn(1000);
            $('.dian li:eq(' + index + ')').addClass('active');
        }, 2000)

    }
    fun();
    $('.lunbo-img').mouseenter(function() {
        clearInterval(timer);
        $('.left,.right').addClass('xianshi');
    }).mouseleave(function() {
        $('.left,.right').removeClass('xianshi');
        fun();
    })
    $('.dian li').mouseover(function() {
        $('.lunbo-img li:eq(' + index + ')').fadeOut(1000);
        $('.dian li:eq(' + index + ')').removeClass('active');
        index = $(this).index();
        $('.lunbo-img li:eq(' + index + ')').fadeIn(1000);
        $('.dian li:eq(' + index + ')').addClass('active');
        clearInterval(timer);
    })
    $('.left').click(function() {
        $('.lunbo-img li:eq(' + index + ')').fadeOut(1000);
        $('.dian li:eq(' + index + ')').removeClass('active');
        $('.right').removeClass('yangshi');
        index--;
        if (index < 0) {
            index = len - 1;
        }
        $('.lunbo-img li:eq(' + index + ')').fadeIn(1000);
        $('.dian li:eq(' + index + ')').addClass('active');
        $('.left').addClass('yangshi');
        clearInterval(timer);
    })
    $('.right').click(function() {
        $('.lunbo-img li:eq(' + index + ')').fadeOut(1000);
        $('.dian li:eq(' + index + ')').removeClass('active');
        $('.left').removeClass('yangshi');
        index++;
        if (index > len - 1) {
            index = 0;
        }
        $('.lunbo-img li:eq(' + index + ')').fadeIn(1000);
        $('.dian li:eq(' + index + ')').addClass('active');
        $('.right').addClass('yangshi');
        clearInterval(timer);
    })
    $('.left,.right').mouseover(function() {
        $('.left,.right').addClass('xianshi');
    })
    $('.fuwu').mouseover(function() {
        $('.yincang').css('display', 'block');
    }).mouseout(function() {
        $('.yincang').css('display', 'none');
    })
    $('.erweima').mouseover(function() {
        $('.app').css('display', 'block');
    }).mouseout(function() {
        $('.app').css('display', 'none');
    })
    $('.focus-xianshi li:eq(0)').css('color', '#5c5c5c');
    $('.focus-xianshi li:eq(1)').css('color', '#e36843');
    $('.focus-xianshi li:eq(2)').css('color', '#e36843');
    $('.focus-xianshi li:eq(3)').css('color', '#e36843');
    $('.dajia~li').mouseover(function() {
        $(this).css('background-color', '#f4f0ea');

    }).mouseout(function() {
        $(this).css('background-color', '#fff');
    })
    $('input').focus(function() {
        $('.focus-xianshi').css('display', 'block');
    }).blur(function() {
        $('.focus-xianshi').css('display', 'none');
    })
    $('.xiala-title').mouseover(function() {
        $('.xiala').slideDown(300);
    }).mouseout(function() {
        $('.xiala').slideUp(300);
    })





})