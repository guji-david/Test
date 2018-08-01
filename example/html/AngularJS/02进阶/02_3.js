/**
 * Created by david on 2015/11/3.
 */
angular.module('app',[])
    .controller('myCtrl3',function($scope){
        $scope.msg="";
        $scope.user={uname:'',pwd:'' };
        $scope.errormsg="";
        $scope.reverse=function(){
            return $scope.msg.split("").reverse().join("")
        }
        $scope.login=function(){
            if($scope.user.uname=="admin" && $scope.user.pwd=="123"){
                alert("\u767b\u9646\u6210\u529f");
            }else{
                $scope.errormsg="\u7528\u6237\u540d\u6216\u5bc6\u7801\u9519\u8bef";
            }
        }
    })


