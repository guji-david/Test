require.config({
    baseUrl: '.', //�����index.htmlҳ���ļ��ĵ�ַ
    paths: { //�������õĵ�ַ������������Ϸ���baseUrl��
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
                observer: true,//�޸�swiper�Լ�����Ԫ��ʱ���Զ���ʼ��swiper
                observeParents: true,//�޸�swiper�ĸ�Ԫ��ʱ���Զ���ʼ��swiper
//          autoplayDisableOnInteraction : false,
//        pagination: '.xgt-pagination',    //����СԲ��
//        paginationClickable: true,        //����СԲ�㣨�ɵ����
                nextButton: '.swiper-button-next',//��һ�Ű�ť
                prevButton: '.swiper-button-prev',//��һ�Ű�ť
                onTouchStart:function(e){
                  /*  alert("onTouchStart");
                    $('.swiper-button-go').css("display","block");
                    swiper.stopAutoplay();*/
                }

            });
            $('.swiper-button-prev').on('click', function(e){/*��ǰ*/
                e.preventDefault();
                swiper.slidePrev();
            });
            $('.swiper-button-next').on('click', function(e){/*���*/
                e.preventDefault();
                swiper.slideNext();
            });
           /* $('.swiper-button-go').on('click', function(e){/!*���*!/
                alert(".swiper-button-go");
                swiper.startAutoplay();
                $('.swiper-button-go').css("display","none");
            })*/
        })
    }
});

vm.init();













