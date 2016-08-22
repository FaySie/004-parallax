$(document).ready(function(){
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        // console.log(wScroll); //可以測試滾動的垂直pixel
        $('.logo').css({
            'transform' : 'translate(0px,' + wScroll / 2 + '%)'
        });

        $('.back-bird').css({
            'transform' : 'translate(0px,' + wScroll / 4 + '%)'
        });

        $('.fore-bird').css({
            'transform' : 'translate(0px, -' + wScroll / 40 + '%)'
        });

        if(wScroll > $('.clothes').offset().top - ($(window).height() / 1.2)){
            //console.log('hi'); //測試畫面滑動到clothes的最上緣時說hi
            $('.clothes figure').each(function(i){
                setTimeout(function(){
                    $('.clothes figure').eq(i).addClass('show');
                }, 150 * (i + 1)); //150s
            });
        }

        $('.img-row').hover(
            function(){
                $(this).children('figcaption').css('left','0%');
                $(this).children('a').children('img').css('transform','scale(1.2)');
            },function(){
                $(this).children('figcaption').css('left','-100%');
                $(this).children('a').children('img').css('transform','scale(1)');
            }
        );

        if(wScroll > $('.large-window').offset().top - $(window).height()){
            $('.large-window').css({'background-position' : 'center ' + (wScroll - $('.large-window').offset().top) + 'px'});

            var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);
            $('.tint').css({'opacity' : opacity});
        }

        if(wScroll > $('.blog').offset().top - $(window).height()){
            var offset = Math.min(0,wScroll - $('.blog').offset().top + 100);
            $('.post1').css({'transform' : 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});
            $('.post3').css({'transform' : 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

        }
    });
});
