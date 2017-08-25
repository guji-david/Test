/**
 * Created by David on 2017/8/7.
 */
define('helper',['jquery'],function ($) {
    console.log("helper");
    return {
        trim:function (str) {
            return $.trim(str);
        }
    }
})