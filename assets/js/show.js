$(function() {

    $('.input-l').click(function() {


        var value = parseInt($('.input-in').val()) - 1;
        if (value < 1) {
            value = 1;
            $('.guding').stop(true).fadeIn(500).delay(2000).fadeOut(500);
        }
        $('.input-in').val(value);
    })
    $('.input-m').click(function() {


        var value = parseInt($('.input-in').val()) + 1;
        if (value > 10) {
            value = 10;
            $('.kucun').stop(true).fadeIn(500).delay(2000).fadeOut(500);
        }

        $('.input-in').val(value);
    })
    $('.zhongliang li').click(function() {
        $('.zhongliang li+li').css('border', '1px solid #ddd');
        // $(this).removeClass('a');
        $(this).css('border', '1px solid red');
    })
    var a = 0;
    $('.tupian-kuang li').mouseover(function() {
        $('.datuo-box li').css('display', 'none');
        a = $(this).index();
        console.log(a);
        $('.datuo-box li').eq(a).css('display', 'block');

    })
})