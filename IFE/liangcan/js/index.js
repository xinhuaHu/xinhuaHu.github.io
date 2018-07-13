$(function () {
    slider();
    modal();
});

function modal() {
    var modal = $('.modal');
    var liCart = $('.liCart');
    var modalClose = $('.modalClose');
    var CartCont = $('.liCartCont');
    liCart.click(function () {
        modal.css('display', 'block');
        CartCont.css('display', 'none')
    });

    modalClose.click(function () {
        modal.css('display', 'none')
    });

    modal.on('.click', function (event) {
        var target = event.target();
        if (target == modal) {
            modal.css('display', 'none')
        }
    });
}

//轮播
function slider() {
    var bannerCont = $('.banner-cont');
    var imgUl = $('.imgUl');
    var pointUl = $('.pointUl');
    var arrow = $('.arrow');

    imgUl.now = 1;

    init();

    //初始化圆点，图片
    function init() {
        for (var i = 0; i < imgUl.children().length; i++) {
            var li = $('<li></li>');
            pointUl.append(li);
        }

        var first = $('.imgUl li:first');
        var last = $('.imgUl li:last');

        first.clone().appendTo(imgUl);
        last.clone().prependTo(imgUl);

        //更改图片初始位置
        imgUl.css('left', +(-bannerCont.width() * imgUl.now) + 'px');
        //设置默认选中
        $('.pointUl li:first').addClass('selectPoint');
        updatePoint(imgUl.now);
    }

    //左点击
    $(arrow.children()[0]).on('click', function () {
        imgUl.now--;
        imgUl.animate({
            left: -bannerCont.width() * imgUl.now
        });

        if (imgUl.now == 0) {
            imgUl.now = imgUl.children().length - 2;
            imgUl.animate({
                left: -bannerCont.width() * imgUl.now
            }, 0)
        }
        updatePoint(imgUl.now)
    });

    //右点击
    $(arrow.children()[1]).on('click', function () {
        clickRight();
    });

    //右点击通用
    function clickRight() {
        imgUl.now++;
        imgUl.animate({
            left: -bannerCont.width() * imgUl.now
        });

        if (imgUl.now == imgUl.children().length - 1) {
            imgUl.now = 1;
            imgUl.animate({
                left: -bannerCont.width() * imgUl.now
            }, 0)
        }
        updatePoint(imgUl.now)
    }

    //鼠标移入
    bannerCont.mouseenter(function () {
        clearInterval(imgUl.timer);
    });

    //鼠标移出
    bannerCont.mouseleave(function () {
        autoPlay();
    });

    function updatePoint(index) {
        pointUl.children().removeClass('selectPoint');
        $(pointUl.children()[index - 1]).addClass('selectPoint');
    }

    autoPlay();

    function autoPlay() {
        clearInterval(imgUl.timer);
        imgUl.timer = setInterval(function () {
            clickRight();
        }, 3000);
    }

    //点击点更新切换
    pointUl.children().each(function (index, element) {
        pointUl.children().eq(index).on('click', function () {
            (function (index) {
                imgUl.now = index + 1;
                updatePoint(imgUl.now);
                imgUl.animate({
                    left: -bannerCont.width() * imgUl.now
                })
            })(index);
        });
    });
}