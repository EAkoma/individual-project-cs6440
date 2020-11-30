angular.module('sleepController.module',[]).controller('sleepController', function($scope,$location,$http, $cookies, $route, $timeout){

    console.log("in the Sleep Page");

    $scope.adminLoggedIn = ($cookies.get("is_admin") === "true");
    $scope.user = $cookies.get("email");


    $scope.insertSleep=function(){
        $http({
            method : "POST",
            url : "/insertSleep",
            data : {"sleep_type" : $scope.sleep_type, "sleep_dur" : $scope.sleep_dur, "date" : $scope.date , "time" : $scope.time , "email" : $scope.user}



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
        $scope.successMessage = " Sleep is recorded!!";
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
