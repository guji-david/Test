var app=angular.module('app',[]);
   app .controller('userInfoCtrl',['$scope',function($scope){
        $scope.userInfo={
            email:"",
            password:"",
            autoLogin:false
        };
       $scope.getFormData=function(){
           console.log( $scope.userInfo);
       };
       $scope.setFormData=function(){
           $scope.userInfo={
               email:"12345678@qq.com",
               password:"123456",
               autoLogin:true
           };
       }
       $scope.resetFormData=function(){
           $scope.userInfo={
               email:"",
               password:"",
               autoLogin:false
           };
       }
    }]);

