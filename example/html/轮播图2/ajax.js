
var HOST = "http://ydjr.dev.chengyiwm.com/goldman-mgr";

/**
* 获取ajax header
* @return {} post的json head
*/
var userId="13141161273";
var skey="3839729E41EE6C96C421D0F4A9CB4CAD";
function getAjaxHeader() {
    // userId = localStorage.getItem("userid");
    // skey = localStorage.getItem("skey");
    return {
        userId : userId,
        skey : skey,
        platform : "pc",
        imei : "",
        appVersion : "",
        cityId : "",
        platformVersion : "",
        deviceId : "",
        channel : "",
        protoVersion : 1,
        isPreview : 2
    };
};

/** ajax请求 */
//var userId="";
//var skey="";
function ajax(method, url, obj, successFun, errorFun) {


    // userId="11179";
    // skey="82A567A4DED677989AC1F8C297D7472D";
    var isRequest = false;
    var commonData = {
        head : getAjaxHeader(),
        body : obj
    };
    console.log("JSON.stringify(commonData)------>"+JSON.stringify(commonData));
    if (isRequest) {
        return;
    }
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
};
/**
 * 反馈列表
 * @param {} principalId
 * @param {} souceFun
 * @param {} errorFun
 */
this.$listFeedback = function(souceFun, errorFun) {
    post("/listFeedback",{}, souceFun, errorFun);
};