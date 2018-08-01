/**
 * Created by pc-david on 2016/11/24.
 */
//下面是测试环境配置
const HOST = "http://ydjr.dev.chengyiwm.com/goldman-api/";
// 正式環境地質
// const HOST = "http://api.chengyiwm.com/api/";
function getAjaxHeader() {
    return {
        userId: 12079,
        skey: "6BD1B42461EE7D017491F993EC38E8E8",
        platform: "pcweb",
        imei: "",
        appVersion: "",
        cityId: "",
        platformVersion: "",
        deviceId: "",
        channel: "",
        protoVersion: 1,
        isPreview: 2
    };
};
/**
 * 发送网络请求
 */
 function postRequest(action, obj, successFun, errorFun) {
    var commonData = {
        head: getAjaxHeader(),
        body: obj
    };
    $.ajax({
        url : HOST + url,
        type : method,
        data : JSON.stringify(commonData),
        contentType : "application/json;charset=UTF-8",
        dataType : "json",
        crossDomain : true,
        beforeSend : function(XMLHttpRequest) {
        },
        success : function(response, status, xhr) {
            isRequest = true;
            successFun(response);
            // console.log(('response-------->'+JSON.stringify(response)));
        },

        error : function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            isRequest = true;
            alert("\u7f51\u7edc\u9519\u8bef");// 网络错误
        }
    });
}
function ajaxUpload( action, obj, successFun, errorFun) {
    var commonData = {
        head : getAjaxHeader(),
        body : obj
    };
    $.ajax({
        url : HOST + action,
        type : "post",
        data : JSON.stringify(commonData),
        contentType : "application/json;charset=UTF-8",
        dataType : "json",
        async : false,
        crossDomain : true,
        beforeSend : function(XMLHttpRequest) {
        },
        success : function(response, status, xhr) {
            successFun(response);
        },
        afterSend : function() {
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            alert("\u7f51\u7edc\u9519\u8bef");// 网络错误
        }
    });
};

/*******************************************************************************
 * 获取上传uptoken
 *
 * @param bucketName 存储在不同地方的bucket资源
 * @param souceFun
 *            成功回调
 * @param errorFun
 *            成功回调
 */
$getUploadFileSign = function(bucketName, souceFun, errorFun) {
    ajaxUpload("getUploadFileSign", {
        'bucketName' : bucketName,
        "uploadPlatform" : 1
    }, souceFun, errorFun);
};

/**
 * 七牛对应的bucket和url枚举
 * @type {*[]}
 */
var QINIU_BUCKET_ENUM = {
    /**产品语音*/
    "chengyiwm-product-audio": "http://audio.chengyiwm.com/",
    /**产品文档*/
    "chengyiwm-product-documents": "http://7xudc8.com1.z0.glb.clouddn.com/",
    /**测试*/
    "chengyiwm-test": "http://7xuium.com1.z0.glb.clouddn.com/",
    /**认证名片*/
    "chengyiwm-authinfo": "http://7xujx4.com2.z0.glb.qiniucdn.com/",
    /**订单*/
    "chengyiwm-order": "http://ocnihe67r.bkt.clouddn.com/"
};

/**
 * 获取配置七牛的上传地址与具体回调
 * zst@chengyiwm.com
 *
 * @param buketname 空间名称
 * @param browseButton 出发按钮 id
 * @param uniqueNames 是否文件名重复不让上传，
 * @param fileUploadedCallback 上传成功回调
 * @returns 七牛配置的option
 */
this.$getQiniuOption = function (buketname, browseButton, fileUploadedCallback) {
    var option = {
        runtimes: 'html5,flash,html4',  //上传模式,依次退化
        browse_button: browseButton,        //上传选择的点选按钮，**必需**
        container: 'container',             //上传区域DOM ID，默认是browser_button的父元素，
        //drop_element: 'container',           //开启可拖曳上传
        max_file_size: '1000mb',            //最大文件体积限制
        //flash_swf_url: 'bower_components/plupload/js/Moxie.swf', //引入flash,相对路径
        dragdrop: false,          //开启可拖曳上传
        chunk_size: '0mb',          //分块上传时，每片的体积
        unique_names: false,
        save_key: false,
        uptoken_func: function () {
            var uptoken = "";
            $getUploadFileSign(buketname, function (res) {
                uptoken = res.body.uptoken;
            });
            return uptoken;
        }, //获取upken
        domain: QINIU_BUCKET_ENUM[buketname], //"http://7xuium.com1.z0.glb.clouddn.com/",
        get_new_uptoken: false,
        auto_start: true,  //选择文件后自动上传，若关闭需要自己绑定事件触发上传
        log_level: 5,
        init: {
            'FilesAdded': function(up, files) {
                plupload.each(files, function(file) {
                    // 文件添加进队列后，处理相关的事情
                });
            },
            'BeforeUpload': function (up, file) {

            },
            // 上传成功时候的回调
            'FileUploaded': function (up, file, info) {
                fileUploadedCallback(up, file, info);
            },
            //上传出错时,处理相关的事情
            'Error': function (up, err, errTip) {
            }
        }
    };
    return option;
};















