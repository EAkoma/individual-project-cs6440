angular.module('displayBloodPController.module',[]).controller('displayBloodPController', function($scope,$location,$http, $cookies){

    console.log("in Blood Pressure Report");

    $scope.adminLoggedIn = ($cookies.get("is_admin") === "true");
    $scope.user = $cookies.get("email");

    $scope.getBloodp=function(){
        $http({
            method : "POST",
            url : "/getBloodp",
            data :{"email" : $scope.user}
            // data : {"email" : email, "password" : password}
        }).then(function mySuccess(response) {
            console.log(response.data)

            $scope.bloodpData= response.data;

        }, function myError(response) {
            console.log(response);
        });
    }

    $scope.getBloodp()



    $scope.logout = function(){
        $cookies.remove("email");
        $cookies.remove("is_admin");
        $location.path("/");
    }

});
