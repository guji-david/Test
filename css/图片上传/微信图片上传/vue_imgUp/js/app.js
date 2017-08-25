// //////////////////// 线上环境的配置 //////////////////////////
// const API_HOST = "https://api.chengyiwm.com/api";
// //////////////////// dev的配置 //////////////////////////
const host = "http://ydjr.dev.chengyiwm.com/goldman-weixin/";
const API_HOST="http://ydjr.dev.chengyiwm.com/goldman-api/";

/*//注册登录认证接口api**/
function getAjaxHeader() {
    return {
        userId: "",
        skey: "",
        platform: "weixin",
        imei: "xxxxx",
        appVersion: "1.0",
        cityId: "0",
        platformVersion: "4.2",
        deviceId: "xxxx",
        channel: "sendbook",
        protoVersion: 1
    };
};

/** api 的微信请求 */
function postRequest(action, obj, successFun) {
    var commonData = {
        head: getAjaxHeader(),
        body: obj
    };
    // alert("commonData"+ JSON.stringify(commonData));
    $.ajax({
        url: API_HOST + '/' + action,
        type: 'post',
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        data: JSON.stringify(commonData),

        success: function (res) {

            //如果数据返回成功 执行下面的函数
             successFun(res);
            //console.dir(res)

        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(textStatus);
            console.log(errorThrown);
            alert("\u7f51\u7edc\u9519\u8bef");// 网络错误
        }

    });
}



/***
 * 获取验证码接口
 * @param souceFun 成功回调
 * @param errorFun 成功回调
 */
this.$downVerifyCode = function (mobile,successFun,errFun) {
    postRequest("downVerifyCode", {
        "channel": 1,
        "mobile": mobile
    },successFun,errFun);
}


/***
 * 注册提交
 * @param souceFun 成功回调
 * @param errorFun 成功回调
 */
this.$register = function (remark,mobile, pwd, verifyCode, img,successFun,errFun) {
   postRequest("register", {
       "remark":remark,
       "mobile": mobile,
       "pwd":pwd,
       "verifyCode":verifyCode,
       "img":img,
       "opType":1
   },successFun,errFun);
};
// ----------------------------------------------------合法性验证
//检查电话号new
function checkTel(tel) {
    var reg = /^[1][3,4,5,8,7][0-9]{9}$/;
    return tel&& reg.test(tel);
}
//检查验证码
function checkVerifyCode(verifyCode) {
    var reg = /^\d{6}$/;

    return verifyCode&&reg.test(verifyCode);
}
/***set
 * 保存当前用户登录的 userid
 * @param type userid
 */
 function setUserId(userId) {
    // store.commit('SET_USER_ID', {userId});
    window.localStorage.setItem("userId",userId);
}

// 获取当前用户登录的 userid
 function getUserId() {
    // return store.getters.getUserId;
    // return 12079;
    return localStorage.getItem("userId")?localStorage.getItem("userId"):"";
}