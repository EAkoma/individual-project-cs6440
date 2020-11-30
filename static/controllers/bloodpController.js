angular.module('bloodpController.module',[]).controller('bloodpController', function($scope,$location,$http, $cookies, $route, $timeout){

    console.log("in Blood Pressure Page");

    $scope.adminLoggedIn = ($cookies.get("is_admin") === "true");
    $scope.user = $cookies.get("email");


    $scope.insertBloodp=function(){
        $http({
            method : "POST",
            url : "/insertBloodp",
            data : {"sys_bloodp" : $scope.sys_bloodp, "dia_bloodp" : $scope.dia_bloodp, "date" : $scope.date ,"email" : $scope.user}



        }).then(function mySuccess(response) {
            console.log(response.data)
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
        $scope.successMessage = " Blood Pressure is recorded!!";
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
