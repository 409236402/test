/**
 * Created by user on 14-5-15.
 */

$(function(){
    app.imgSwap();
    app.portfolioOver();
});

var ui={},
    app = {};

app.imgSwap = function(){
    var dots = $(".img-swap-dot-a");
    var imgs =$(".img-swap img");
    var i = 0,
        timer = 1000;
    imgs.fadeOut(0).eq(0).fadeIn(0);//隐藏所有图片，第一张淡入
    var clock = setInterval(function(){
        if(imgs.length > (i+1)){
            imgs.eq(i).fadeOut(timer).next("img").fadeIn(timer);
            i++;
        }else{
            imgs.eq(i).fadeOut(timer).siblings("img").eq(0).fadeIn(timer);
            i=0;
        }
        dots.removeClass("img-swap-dot-a-active");
        dots.eq(i).addClass("img-swap-dot-a-active");
    },4000);

    dots.click(function(){
        if($(this).hasClass("img-swap-dot-a-active")){
            return;
        }
        dots.removeClass("img-swap-dot-a-active");
        $(this).addClass("img-swap-dot-a-active");
        i=$(this).index();
        imgs.fadeOut(timer).eq(i).fadeIn(timer);
    });
};

app.portfolioOver =function(){
    var portAs = $(".portfolio-a");
    portAs.click(function(){
        portAs.removeClass("portfolio-active");
        $(this).addClass("portfolio-active");
    });
};