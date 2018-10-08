$(function navScrollStart(){
    $(window).scroll(function navScroll() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('#header-img').offset().top; // pixels to the top of div1
        var ht = $('#header-img').height(); // height of div1 in pixels
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
        var os = $('#header-text').offset().top; // pixels to the top of div1
        //var ht = $('#header-text').height(); // height of div1 in pixels
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if(scroll > os - (os-40)){
            $('#header-text').addClass('scroll-disappear');
            $("footer").addClass("footer-scroll");
            $("#down-arrow").css("display", "none")
        } else {
            $('#header-text').removeClass('scroll-disappear');
            $("footer").removeClass("footer-scroll");
            $("#down-arrow").css("display", "block")
        }
    });
});

$("#content-1-diamond").hover(function() {
    $("#content-1-shape").addClass("content-1-shape-hover");
}, function() {
    $("#content-1-shape").removeClass("content-1-shape-hover");
});

$("#content-2-diamond").hover(function() {
    $("#content-2-shape").addClass("content-2-shape-hover");
}, function() {
    $("#content-2-shape").removeClass("content-2-shape-hover");
});

$("#content-3-diamond").hover(function() {
    $("#content-3-shape").addClass("content-3-shape-hover");
}, function() {
    $("#content-3-shape").removeClass("content-3-shape-hover");
});

$("#down-arrow").on("click", function() {
    event.preventDefault();
    var aTag = $("#down-arrow").attr("href")
    var offset = $(aTag).offset();
    console.log(offset);
    //.offset().top;
    $("html, body").animate({scrollTop: offset.top - 70}, 500);
})

$("#content-3-diamond").on("click", function() {
    $('#contactModal').modal('show');
})