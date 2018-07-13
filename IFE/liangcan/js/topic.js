$(function () {
    scroll();
    magicLine();
});

function scroll() {
    var topNav = $('.topNav');
    var tmTle = $('.tm-tle').height();

    $(window).scroll(function () {
        if ($(this).scrollTop() > tmTle) {
            topNav.css({'top': '-56px', 'transition': 'all .6s'});
        } else {
            topNav.css('top', 0);
        }
    });
}

function magicLine() {
    var liList = $('.tm-nav ul li');
    var magicLine = $('#magicLine');

    liList.mousemove(function () {
        var index = liList.index($(this));
        var mWidth = magicLine.width();

        console.log(liList.length);
        if (index < 0 && index > liList.length-1) {
            magicLine.css({
                display: 'none',
                position: 'absolute',
                top: 25,
                left: 0
            })
        } else if(index < liList.length){
            magicLine.css({
                'left': index * mWidth,
                'transition': 'all .3s'
            })
        }

    });
}