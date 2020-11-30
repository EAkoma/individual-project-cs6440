angular.module('articlesController.module',[]).controller('articlesController', function($scope,$location,$http, $cookies){

    console.log("In Mental Hub Page");

    $scope.adminLoggedIn = ($cookies.get("is_admin") === "true");
    $scope.user = $cookies.get("email");

    $scope.timeSelector = "alltime";

    $scope.getDashboardSleepHours=function(){
        $http({
            method : "POST",
            url : "/getDashboardSleepHours",
            data :{"email" : $scope.user,
                "type" : "total",
                "timePeriod": $scope.timeSelector}
            // data : {"email" : email, "password" : password}
        }).then(function mySuccess(response) {
             console.log(response.data + " Test")

            $scope.sleepData = response.data;

            $scope.datetimeArr = []
            $scope.sleepArr = []
            for(i=0;i<$scope.sleepData.length;i++){
                $scope.datetimeArr.push($scope.sleepData[i].date_time)
                $scope.sleepArr.push($scope.sleepData[i].sum)
            }
            var TotalSleepHoursChart = document.getElementById("TotalHoursOfSleep").getContext('2d');
            var TotalSleepHours = new Chart(TotalSleepHoursChart, {
                type: 'line',
                data: {
                    labels: $scope.datetimeArr,
                    datasets: [{
                        label: 'Hours of Sleep',
                        data: $scope.sleepArr,
                        fill: false,
                        borderColor: '#008B8B',
                        backgroundColor: '#008B8B',
                        borderWidth: 2,
                        Color: '#ffffff'
                    }]},
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display:false,

                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display:false

                            }
                        }]
                    },
                    title: {
                        display: true,
                        text: 'Total Duration of Sleep',
                        fontSize: '18.72',
                        fontColor: "#343a40"
                    }
                }
            });


        }, function myError(response) {
            // console.log(response);
        });
    }


    // Exercise Charts

    $scope.getDashboardExerciseHours=function(){
        $http({
            method : "POST",
            url : "/getDashboardExerciseHours",
            data :{"email" : $scope.user,
                "type" : "total",
                "timePeriod": $scope.timeSelector}
            // data : {"email" : email, "password" : password}
        }).then(function mySuccess(response) {
            console.log(response.data + " Test")

            $scope.exerciseData = response.data;

            $scope.datetimeArr = []
            $scope.exerciseArr = []
            for(i=0;i<$scope.exerciseData.length;i++){
                $scope.datetimeArr.push($scope.exerciseData[i].date_time)
                $scope.exerciseArr.push($scope.exerciseData[i].sum)
            }
            var TotalExerciseHoursChart = document.getElementById("TotalHoursOfExercise").getContext('2d');
            var TotalExerciseHours = new Chart(TotalExerciseHoursChart, {
                type: 'line',
                data: {
                    labels: $scope.datetimeArr,
                    datasets: [{
                        label: 'Minutes of Exercise',
                        data: $scope.exerciseArr,
                        fill: false,
                        borderColor: '#FFDAB9',
                        backgroundColor: '#FFDAB9',
                        borderWidth: 2,
                        Color: '#ffffff'
                    }]},
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display:false,

                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display:false

                            }
                        }]
                    },
                    title: {
                        display: true,
                        text: 'Total Duration of Exercise',
                        fontSize: '18.72',
                        fontColor: "#343a40"
                    }
                }
            });


        }, function myError(response) {
            // console.log(response);
        });
    }

    $scope.getDashboardOfSysBP=function(){
        $http({
            method : "POST",
            url : "/getDashboardOfSysBP",
            data :{"email" : $scope.user,
                "type" : "total",
                "timePeriod": $scope.timeSelector}
            // data : {"email" : email, "password" : password}
        }).then(function mySuccess(response) {
            console.log(response.data + " Test")

            $scope.sys_bp_Data = response.data;

            $scope.datetimeArr = []
            $scope.sys_bp_Arr = []
            for(i=0;i<$scope.sys_bp_Data.length;i++){
                $scope.datetimeArr.push($scope.sys_bp_Data[i].date_time)
                $scope.sys_bp_Arr.push($scope.sys_bp_Data[i].sum)
            }
            var TotalSysLevelsChart = document.getElementById("TotalAmtOfSys").getContext('2d');
            var TotalSysLevels = new Chart(TotalSysLevelsChart, {
                type: 'line',
                data: {
                    labels: $scope.datetimeArr,
                    datasets: [{
                        label: 'Systolic Blood Pressure (mmHg)',
                        data: $scope.sys_bp_Arr,
                        fill: false,
                        borderColor: '#DA70D6',
                        backgroundColor: '#DA70D6',
                        borderWidth: 2,
                        Color: '#ffffff'
                    }]},
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display:false,

                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display:false

                            }
                        }]
                    },
                    title: {
                        display: true,
                        text: 'Total Levels of Systolic Blood Pressure',
                        fontSize: '18.72',
                        fontColor: "#343a40"
                    }
                }
            });


        }, function myError(response) {
            // console.log(response);
        });
    }
    $scope.getDashboardOfDiaBP=function(){
        $http({
            method : "POST",
            url : "/getDashboardOfDiaBP",
            data :{"email" : $scope.user,
                "type" : "total",
                "timePeriod": $scope.timeSelector}
            // data : {"email" : email, "password" : password}
        }).then(function mySuccess(response) {
            console.log(response.data + " Test")

            $scope.dia_bp_Data = response.data;

            $scope.datetimeArr = []
            $scope.dia_bp_Arr = []
            for(i=0;i<$scope.dia_bp_Data.length;i++){
                $scope.datetimeArr.push($scope.dia_bp_Data[i].date_time)
                $scope.dia_bp_Arr.push($scope.dia_bp_Data[i].sum)
            }
            var TotalDiaLevelsPChart = document.getElementById("TotalAmtOfDia").getContext('2d');
            var TotalDiaLevels = new Chart(TotalDiaLevelsPChart, {
                type: 'line',
                data: {
                    labels: $scope.datetimeArr,
                    datasets: [{
                        label: 'Diastolic Blood Pressure (mmHg)',
                        data: $scope.dia_bp_Arr,
                        fill: false,
                        borderColor: '#00BFFF',
                        backgroundColor: '#00BFFF',
                        borderWidth: 2,
                        Color: '#ffffff'
                    }]},
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display:false,

                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display:false

                            }
                        }]
                    },
                    title: {
                        display: true,
                        text: 'Total Levels of Diastolic Blood Pressure',
                        fontSize: '18.72',
                        fontColor: "#343a40"
                    }
                }
            });


        }, function myError(response) {
            // console.log(response);
        });
    }

    $scope.callAgain = function() {
        $scope.getDashboardSleepHours();
        $scope.getDashboardExerciseHours();
        $scope.getDashboardOfSysBP();
        $scope.getDashboardOfDiaBP();
    }

    $scope.callAgain();

    $scope.logout = function(){
        $cookies.remove("email");
        $cookies.remove("is_admin");
        $location.path("/");
    }

});
