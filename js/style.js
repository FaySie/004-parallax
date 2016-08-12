$(document).ready(function(){
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        console.log(wScroll); //可以測試滾動的垂直pixel
        $('.logo').css({
            'transform' : 'translate(0px,'+ wScroll /2 +'%)'
        });
        $('.back-bird').css({
            'transform' : 'translate(0px,'+ wScroll /4 +'%)'
        });
        $('.fore-bird').css({
            'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
        });
    });
});
