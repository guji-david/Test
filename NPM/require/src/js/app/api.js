/**
 * Created by David on 2017/8/7.
 */
define(['jquery'],function ($) {
    return {
        getUser:function (str) {
            var def=$.Deferred();
              require(['./app/user'],function (user) {
                  def.resolve(user);
              });
              return def;
        },
        getUserByJsonp:function () {
            // $.ajax({
            //     url:'http://localhost:63342/require/src/main/resources/static/src/js/jsonp/user.js',
            //     dataType:'jsonp',
            //     jsonpCallback:'onloaded',
            //     success:function (data) {
            //         console.log(data);
            //     }
            // })
            require(['http://localhost:63342/require/src/main/resources/static/src/js/jsonp/user-amd.js'],function (user) {
                console.log(user);
            })
        }
    }

})
/*function onloaded(user) {
    console.log(user);
}*/
