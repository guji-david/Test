/**
 * Created by pc-david on 2016/7/28.
 */

var share = function() {
    $.ajax({
        url: appconfig.apiUrl,
        data: {
            url: window.location.href
        }
    }).done(function(data) {
        //code ....
    });
};