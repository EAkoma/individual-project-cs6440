angular.module('loginController.module',[]).controller('loginController', function($scope,$location,$http, $cookies){

    $scope.errormessage = false;
    $scope.submitFunc = function(){
        // console.log($scope.email, $scope.password)

        $scope.getLogin($scope.email,$scope.password);

    }

    $scope.getLogin=function(email, password){
        $http({
            method : "POST",
            url : "/getUserLogin",
            data : {"email" : email, "password" : password}
        }).then(function mySuccess(response) {
            console.log(response.data)
            isLogin = response.data["login"];
            if(isLogin == true){
                $cookies.put("email", email);
                $cookies.put("is_admin", response.data["isAdmin"]);
                $location.path("/homeView");
            }else{
                $scope.errormessage = true;
            }

        }, function myError(response) {
            console.log(response);
        });
    }



});
