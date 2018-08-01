require.config({
    baseUrl: '.', //相对于index.html页面文件的地址
    paths: { //这里配置的地址，都是相对于上方的baseUrl的
        jquery:"jquery-2.1.4",
        jqueryWeui:"jquery-weui.js",
        swiper:"swiper.js"
    },
    shim: {
        jqueryWeui: {
            deps:["jquery"]
        },
        swiper: {
            deps:["jqueryWeui"]
        }
    }
});



var vm = avalon.define({
    $id: "swiper",
    pdfList:["img/full/001.jpg","img/full/003.jpg","img/full/006.jpg","img/full/008.jpg","img/full/009.jpg","img/full/011.jpg","img/full/013.jpg","img/full/014.jpg","img/full/016.jpg","img/full/017.jpg","img/full/019.jpg"],
    init:function() {

        require(["jquery","jqueryWeui","swiper"], function () {
            var swiper = new Swiper('.swiper-container', {
                // Default parameters
                spaceBetween: 0,
                slidesPerView: 1,
                autoplay:"",
                observer: true,//修改swiper自己或子元素时，自动初始化swiper
                observeParents: true,//修改swiper的父元素时，自动初始化swiper
//          autoplayDisableOnInteraction : false,
//        pagination: '.xgt-pagination',    //导航小圆点
//        paginationClickable: true,        //导航小圆点（可点击）
                nextButton: '.swiper-button-next',//下一张按钮
                prevButton: '.swiper-button-prev',//上一张按钮
                onTouchStart:function(e){
                  /*  alert("onTouchStart");
                    $('.swiper-button-go').css("display","block");
                    swiper.stopAutoplay();*/
                }

            });
            $('.swiper-button-prev').on('click', function(e){/*向前*/
                e.preventDefault();
                swiper.slidePrev();
            });
            $('.swiper-button-next').on('click', function(e){/*向后*/
                e.preventDefault();
                swiper.slideNext();
            });
           /* $('.swiper-button-go').on('click', function(e){/!*向后*!/
                alert(".swiper-button-go");
                swiper.startAutoplay();
                $('.swiper-button-go').css("display","none");
            })*/
        })
    }
});

vm.init();













