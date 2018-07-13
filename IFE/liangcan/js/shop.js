$(function () {
    osmPriceShow();
    follow()
});

function osmPriceShow() {
    var price = $('.osm-price');
    var priceList = $('.osm-price ul li');


    for (var i = 0; i < priceList.length; i++) {
        var liList = priceList[i];
        liList.index_ = i;

        liList.onmouseenter = function () {
            var now = this.index_;
            priceList.eq(now).addClass('nowSelect');
            priceList.eq(now).siblings().removeClass('nowSelect')
        }

    }
}

function follow() {
    var lis = $('.osm-cls li');
    var magicLine = $('#magicLine');
    lis.mouseover(function () {
        //获取li的索引值
        var index = lis.index(this);
        //清除动画队列，
        magicLine.stop(true,true);
        if (index < 10) {

            magicLine.css('display','block');
            magicLine.animate({
                left:index * magicLine.width(),
                top:45
            },200);

        } else if (index > 10 && index < lis.length-1) {
            magicLine.css('display','block');
            magicLine.animate({
                left:(index - 10) * magicLine.width(),
                top: 92
            },200);
        } else {
            magicLine.css('display','none');
        }
        console.log('index'+index);
        console.log(lis.length -1 )
    });

/*
    for (var i = 0; i < lis.length; i++) {
        var li = lis[i];

        li.index = i;

        li.onmouseover = function () {
            magicLine.animated({
                left:this.offsetLeft
            })
        }
    }*/
    /*console.log(lis)
    lis.now = 1
    lis.mouseenter(function () {
        if (lis.now < lis.length) {
            lis.now++;
            magicLine.animate({
                right:$(this).width() * lis.now
            })
        }
    });*/

}