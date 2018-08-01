/**
 * Created by pc-david on 2016/11/24.
 */
$(function() {
    var upImg = $getQiniuOption("chengyiwm-test", "headfiles", function (up, file, info) {
        var domain = up.getOption('domain');
        var res = JSON.parse(info);
        var sourceLink = domain + res.key; //获取上传成功后的文件的Url
        $("#headfiles").attr("src",sourceLink);
    });
    Qiniu.uploader(upImg);
});