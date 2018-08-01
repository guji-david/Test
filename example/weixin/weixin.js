/**
 * Created by David on 2018/1/17.
 */
//分享初始化
{
    shareSet: function () {
        var _this = this;
        $commonGetWxConfig({'url': window.location.href.split("#")[0]}, function (res, code) {//获取微信配置
            if (code == 0) {

                // console.log(JSON.stringify(res));

                if (wx != "undefined") {

                    var data = res.body;

                    wx.config({
                        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: data.appid, // 必填，公众号的唯一标识
                        timestamp: data.timestamp, // 必填，生成签名的时间戳
                        nonceStr: data.nonceStr, // 必填，生成签名的随机串
                        signature: data.signature, // 必填，签名，见附录1
                        jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline', 'chooseImage', 'uploadImage', 'downloadImage', 'showOptionMenu'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                    });

                    wx.ready(function () {
                        wx.showOptionMenu();
                        // alert('分享配置成功');
                        // 分享给好友
                        wx.onMenuShareAppMessage({
                            title: '颜高活又好，啪啪啪超爽！',
                            desc: '程序猿，永远缺一个好键盘!',
                            link: 'http://h5.wx.zaiyicaifu.com/activity/torrent/programmer.html',
                            imgUrl: 'http://on5qgrndc.bkt.clouddn.com/programmer_activity.png',
                            trigger: function (res) {
                                //http://on5qgrndc.bkt.clouddn.com/activity_share.png
                                // alert("点击分享：" +JSON.stringify(res));
                            },
                            success: function () {


                            },
                            cancel: function () {

                            },
                            fail: function (res) {

                            }
                        });
                        //分享到朋友圈
                        wx.onMenuShareTimeline({
                            title: '颜高活又好，啪啪啪超爽！',
                            link: 'http://h5.wx.zaiyicaifu.com/activity/torrent/programmer.html',
                            imgUrl: 'http://on5qgrndc.bkt.clouddn.com/programmer_activity.png',
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
}
