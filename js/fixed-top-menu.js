function fixedHeader() {
    let ww = $(window).scrollTop();
    if (ww > 0) {
        $('.menu').addClass('menu--active'); 
    } else {
        $('.menu').removeClass('menu--active');
    }
}
fixedHeader();
$(window).on('scroll', function () {
    fixedHeader();
});