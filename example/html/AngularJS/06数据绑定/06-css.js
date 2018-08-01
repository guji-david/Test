var app=angular.module('app',[]);
app .controller('cssCtrl',['$scope',function($scope){
   /* $scope.color="red";
    $scope.setGreen=function(){
        $scope.color="green";
    };*/
    $scope.iserror=false;
    $scope.iswarning=false;
    $scope.showError=function(){
        $scope.messageText="showError";
        $scope.iserror=true;
        $scope.iswarning=false;
    };
    $scope.showWarning=function(){
        $scope.messageText="showWarning";
        $scope.iserror=false;
        $scope.iswarning=true;
    };


}]);

