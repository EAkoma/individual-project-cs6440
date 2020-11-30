angular.module('homeController.module',[]).controller('homeController', function($scope,$location,$http, $cookies){

    console.log("In Home Page");

    $scope.adminLoggedIn = ($cookies.get("is_admin") === "true");
    $scope.user = $cookies.get("email");

    $scope.logout = function(){
        $cookies.remove("email");
        $cookies.remove("is_admin");
        $location.path("/");
    }

});
