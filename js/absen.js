var app = angular.module ('absenApp',[]);
var BASE_URL = 'http://dinkes.batangkab.go.id:9003'

app.controller('absenController',function ($scope, $http, $window) {
    $scope.simpanAbsen = function () {
        $http.post(BASE_URL+'/absen', $scope.absen).then(sukses,gagal);
        function sukses(response) {
            // $window.location.href = "../home.html";
            console.log(response.data.message);
        };
        function gagal(response) {
            console.log('Error'+response);
        };
    };
})
