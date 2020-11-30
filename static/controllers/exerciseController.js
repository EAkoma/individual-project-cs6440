angular.module('exerciseController.module',[]).controller('exerciseController', function($scope,$location,$http, $cookies, $route, $timeout){

    console.log("in Exercise Page");

    $scope.adminLoggedIn = ($cookies.get("is_admin") === "true");
    $scope.user = $cookies.get("email");


    $scope.insertExercise=function(){
        $http({
            method : "POST",
            url : "/insertExercise",
            data : {"exer_name" : $scope.exer_name, "exer_type" : $scope.exer_type, "exer_dur" : $scope.exer_dur,"date" : $scope.date , "email" : $scope.user}



        }).then(function mySuccess(response) {
            //console.log(response.data)
            //console.log(response.data)
            //console.log(data);
            if(response.data){
                $scope.pageReload();
            }else{
                $scope.errormsg = true;
            }


        }, function myError(response) {
            console.log(response);
        });
    }
    // page reload function
    $scope.pageReload= function(){
        $scope.successMessage = " Exercise is recorded!!";
        $scope.successMessagebool = true;
        $timeout(function() {
            $route.reload();
        }, 2000);
    }


    $scope.logout = function(){
        $cookies.remove("email");
        $cookies.remove("is_admin");
        $location.path("/");
    }

});
