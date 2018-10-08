$(function navScrollStart(){
    $(window).scroll(function navScroll() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('#portfolio-header-img').offset().top; // pixels to the top of div1
        var ht = $('#portfolio-header-img').height(); // height of div1 in pixels
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if(scroll > os + ht -100){
            $('#nav-bar').addClass('scroll-color');
            $('.nav-item, .navbar-brand').addClass('nav-item-scroll');
        } else {
            $('#nav-bar').removeClass('scroll-color');
            $('.nav-item, .navbar-brand').removeClass('nav-item-scroll');
        }

        navScrollStart.navScroll = navScroll;
    });
});

$(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('#portfolio-header-text').offset().top; // pixels to the top of div1
        //var ht = $('#header-text').height(); // height of div1 in pixels
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if(scroll > os - (os-40)){
            $('#portfolio-header-text').addClass('scroll-disappear');
        } else {
            $('#portfolio-header-text').removeClass('scroll-disappear');
        }
    });
});