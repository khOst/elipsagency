$(document).ready(function(){
    $('.slide').bxSlider();

    // Back to top
    $('a.top').click(function (e) {
        e.preventDefault();
        $(document.body).animate({scrollTop: 0}, 800);
    });

    $('img').on('error', function () {
        $(this).prop('src', 'img/broken.png');
    });
});