angular.module('displaySleepController.module',[]).controller('displaySleepController', function($scope,$location,$http, $cookies){

    console.log("in Sleep Report");

    $scope.adminLoggedIn = ($cookies.get("is_admin") === "true");
    $scope.user = $cookies.get("email");


    $scope.getSleep=function(){
        $http({
            method : "POST",
            url : "/getSleep",
            data :{"email" : $scope.user}
            // data : {"email" : email, "password" : password}
        }).then(function mySuccess(response) {
            console.log(response.data)

            $scope.sleepData= response.data;

        }, function myError(response) {
            console.log(response);
        });
    }

    $scope.getSleep()

    $scope.logout = function(){
        $cookies.remove("email");
        $cookies.remove("is_admin");
        $location.path("/");
    }

});
