angular.module('displayExerciseController.module',[]).controller('displayExerciseController', function($scope,$location,$http, $cookies, $route, $timeout){

    console.log("in Exercise Report");

    $scope.adminLoggedIn = ($cookies.get("is_admin") === "true");
    $scope.user = $cookies.get("email");

    $scope.getExercise=function(){
        $http({
            method : "POST",
            url : "/getExercise",
            data :{"email" : $scope.user}
            // data : {"email" : email, "password" : password}
        }).then(function mySuccess(response) {
            console.log(response.data)

            $scope.exerciseData= response.data;

        }, function myError(response) {
            console.log(response);
        });
    }

    $scope.getExercise()

    $scope.logout = function(){
        $cookies.remove("email");
        $cookies.remove("is_admin");
        $location.path("/");
    }

});
