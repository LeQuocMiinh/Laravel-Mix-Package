$(document).ready(function () {
    // $('.owl-carousel').owlCarousel({
    //     loop: true,
    //     margin: 0,
    //     nav: true,
    //     dots: true,
    //     items: 1,
    //     autoplay: true,
    //     autoplayTimeout: 5000,
    //     autoplayHoverPause: true,
    // });
    /**
     *
     * menu fixed
     */
    if ($(window).width() > 1024) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $("#menu-main").addClass('fixed-top');
            } else {
                $("#menu-main").removeClass('fixed-top');
            }
        });
    }
    /**
     * menu mobile
     */
    if ($(window).width() < 992) {
        $('.menu-item-has-children').click(function () {
            var th = $(this);
            th.children('ul').slideToggle()
        })
        $('.btn-open').click(function () {
            $('#showRightPush').toggleClass('active');
            $('.menu-active').toggleClass('show-menu-mb');
        });
    }
    document.addEventListener("click", function (event) {
        if (event.target.closest("#menu-main")) return;
        $('#showRightPush').removeClass('active');
        $('.menu-active').removeClass('show-menu-mb');
    });
    /**
     * back to top
     */
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 100) {
    //         $(".scroll-up").fadeIn();
    //     } else {
    //         $(".scroll-up").fadeOut();
    //     }
    // });
    // $('#backToTop').on('click', function () {
    //     $("body,html").animate({scrollTop: 0}, "slow");
    // });

});
