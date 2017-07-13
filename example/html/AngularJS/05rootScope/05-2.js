angular.module('app',[])
    .controller('Eventcontroller',function($scope,$rootScope){
        $scope.count=0;
        $scope.$on( 'Myevent',function(){
            $scope.count++;
        });
        $rootScope.department="Angular";
    });
/*
 function GreetCtrl($scope,$rootScope) {
 $scope.name = 'world';
 $rootScope.department = "Angular";
 }
 function ListCtrl($scope){
 $scope.names=['world1','world2','world3'];
 }*/
