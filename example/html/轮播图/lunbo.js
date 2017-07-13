require.config({
    baseUrl: '.', //相对于index.html页面文件的地址
    paths: { //这里配置的地址，都是相对于上方的baseUrl的
        klass:"klass.min.js",
        photoswipe:"code.photoswipe-3.0.5.js"
    },
    shim: {
      /*  photoswipe: {
            deps:["klass"]
        }*/
    }
});



    var vm = avalon.define({
        $id: "swiper",
        //pdfList:["img/full/001.jpg","img/full/003.jpg","img/full/006.jpg","img/full/008.jpg","img/full/009.jpg","img/full/011.jpg","img/full/013.jpg","img/full/014.jpg","img/full/016.jpg","img/full/017.jpg","img/full/019.jpg"],
        init:function() {

            //require(["klass","photoswipe","test"], function () {})
        }
    });

        vm.init();













