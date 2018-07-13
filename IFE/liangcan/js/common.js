$(function () {
    liCartDisplay();
    messageDisplay();
    searchShow();
    navDisplay();
    scroll();
    close();
    toTop();
});


//购物车li的显示和隐藏
function liCartDisplay() {
    var liCart = $('.liCart');
    var liCartCont = $('.liCartCont');

    liCart.mouseenter(function () {
        liCart.css('background', '#292F34');
        liCartCont.css('display', 'block')
    });

    liCartCont.mouseleave(function () {
        liCart.css('background', '#25292e');
        liCartCont.css('display', 'none')
    });
}

//消息的显示和隐藏
function messageDisplay() {
    var liMessage = $('.liMessage');
    var messageCont = $('.messageCont');

    liMessage.mouseenter(function () {
        liMessage.css('background', '#292F34');
        messageCont.css('display', 'block')
    });

    liMessage.mouseleave(function () {
        liMessage.css('background', '#25292e');
        messageCont.css('display', 'none')
    });
}

//搜索显示
function searchShow() {
    var input = $('.inputSearch input');
    var searchBtn = $('.inputSearch a');
    var inputSearch = $('.inputSearch');
    searchBtn.click(function () {
        if (input.width() === 0) {
            input.animate({right: 20, width: 200});
            inputSearch.css('border-bottom', '4px solid #25292e')
        } else {
            input.animate({right: 0, width: 0});
            inputSearch.css('border-bottom', 'none')
        }
    });
}

//固定导航
function scroll() {
    var banner = $('.banner').offset().top;
    var topNav = $('.topNav');
    $(window).scroll(function () {
        if ($(this).scrollTop() > banner) {
            topNav.css({'top': '-56px', 'transition': 'all .6s'});
        } else {
            topNav.css('top', '0')
        }
    });
}

//回到顶部
function toTop() {
    var tTop = $('.toTop');
    tTop.css('display', 'none');

    $(window).scroll(function () {

        if ($(window).scrollTop() > 500) {
            // tTop.css('display','block');
            tTop.fadeIn();
        } else {
            // tTop.css('display','none');
            tTop.fadeOut();
        }
    });

    tTop.click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 200);
    });
}

//导航显示
function navDisplay() {
    var liList = $('.navBox > li');
    var store = $('.store');
    var shop = $('.shop');
    var magazine = $('.magazine');
    var share = $('.share');
    var magazineSub = $('.magazineSub');
    var shareSub = $('.shareSub');
    /*
        for (var i = 0; i < liList.length; i++) {
            var li = liList[i];
            li.index_ = i;
            console.log(li.index_);
            li.onmouseover = function(){
                var now = this.index_;
                store.eq(now).css('display','block');
                magazineSub.eq(now).css('display','block');
                shareSub.eq(now).css('display','block');
                console.log(now)
            }

        }*/

    shop.mouseenter(function () {
        store.css('display', 'block');
    });
    magazine.mouseenter(function () {
        magazineSub.css('display', 'block');
    });
    share.mouseenter(function () {
        shareSub.css('display', 'block');
    });

    shop.mouseleave(function () {
        store.css('display', 'none');
    });
    magazine.mouseleave(function () {
        magazineSub.css('display', 'none');
    });
    share.mouseleave(function () {
        shareSub.css('display', 'none');
    })
}

function close() {
    var close = $('.close');
    var qrcode = $('.qrcode');
    close.click(function () {
        qrcode.css('display', 'none');
    });
}
