angular.module('app',[])
    .controller('GreetCtrl',function($scope,$rootScope){
        $scope.name='world';
        $rootScope.department="Angular";
    })
    .controller('ListCtrl',function($scope){
        $scope.names=['world1','world2','world3'];
    });
/*
function GreetCtrl($scope,$rootScope) {
    $scope.name = 'world';
    $rootScope.department = "Angular";
}
function ListCtrl($scope){
    $scope.names=['world1','world2','world3'];
}*/
