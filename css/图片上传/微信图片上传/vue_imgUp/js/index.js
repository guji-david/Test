var vm = new Vue({
    el: '#imgUp',
    data: {
        authImg:""
    },
    /**
     * 初始化工作
     */
    methods: {
        weixinSet: function () {
            var url = window.location.href.split("#")[0];
            url = url.replace(/&/g, '%26');
            $.get(host + "tool/api/getWxConfig.do?url="+ url, function (res) {
                // alert("res----->"+JSON.stringify(res));
                if (res.code == 0000) {
                    if (wx != "undefined") {
                        var data = res.data;
                        wx.config({
                            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                            appId: data.appid, // 必填，公众号的唯一标识
                            timestamp: data.timestamp, // 必填，生成签名的时间戳
                            nonceStr: data.nonceStr, // 必填，生成签名的随机串
                            signature: data.signature, // 必填，签名，见附录1
                            jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimelinbe', 'chooseImage', 'uploadImage', 'downloadImage', 'showOptionMenu'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                        });
                        wx.ready(function () {
                            wx.showOptionMenu();
                            // 分享给好友
                            wx.onMenuShareAppMessage({
                                title: '图片上传!',
                                desc: "城商行研究&诚壹财富顾问发起送书活动！3本书任选其1，免费领！",
                                link: window.location.href.split("?")[0] ,
                                imgUrl: vm.shareLogo,
                                trigger: function (res) {
                                },
                                success: function (res) {
                                },
                                cancel: function (res) {
                                },
                                fail: function (res) {
                                }
                            });
                            //分享到朋友圈
                            wx.onMenuShareTimeline({
                                title: '图片上传!',
                                link: window.location.href.split("?")[0],
                                imgUrl: vm.shareLogo,
                                trigger: function (res) {
                                },
                                success: function (res) {
                                },
                                cancel: function (res) {
                                },
                                fail: function (res) {
                                }
                            });
                        });
                    }

                } else {
                }
            });
        },
        // 上传图片//上传图片配置
        onSelectImg: function () {
            vm.regImgClick(function (id) {
                vm.chooseImgLocalIds = id;
                document.getElementById("regImg").src = id;
            });
        },
        regImgClick: function (Fun) {
            var f = Fun;
            var currentUrl = window.location.href;
            var configUrl = window.location.href.substring(0, currentUrl.indexOf("?"));

            if (wx!= undefined) {
                wx.chooseImage({
                    count: 1, // 默认9
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function (res) {
                        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                        vm.authImg = localIds.toString();
                        setTimeout(f(vm.authImg), 200);
                        //上传图片到微信服务器
                        wx.uploadImage({
                            localId: localIds.toString(), // 需要上传的图片的本地ID，由chooseImage接口获得
                            isShowProgressTips: 1, // 默认为1，显示进度提示
                            success: function (uploadRes) {
                                vm.chooseImgLocalIds=localIds.toString();
                                 // alert("vm.chooseImgLocalIds----->"+vm.chooseImgLocalIds);
                                //上传微信图片ID到后台返回URL
                                $.post(host + "tool/api/getMediaByMediaId", {
                                    mediaId: uploadRes.serverId,
                                }, function (res) {
                                    if (res.code == 0000) {
                                        // alert("上传成功");
                                        vm.serverId=res.data.mediaUrl;
                                        // alert(" vm.serverId--"+ vm.serverId);
                                    } else {
                                        alert(res.head.msg);
                                    }
                                });
                            }
                        });
                    }
                });
            }




        }
    }
});
vm.weixinSet();