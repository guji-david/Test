
angular.module('MyModule',[])
    .directive('hello',function(){
      return{
          restrict:'E',
          template:'<div>hi erveryone!</div>',
          replace:true
      }
    });


