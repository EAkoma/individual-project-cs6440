angular.module('riskController.module',[]).controller('riskController', function($scope,$location,$http, $cookies){

    console.log("in Risk Assessment Page");

    $scope.adminLoggedIn = ($cookies.get("is_admin") === "true");
    $scope.user = $cookies.get("email");


    $scope.logout = function(){
        $cookies.remove("email");
        $cookies.remove("is_admin");
        $location.path("/");
    }

});
