var app = angular.module ('cutiApp',[]);
var BASE_URL = 'http://dinkes.batangkab.go.id:9003'

app.controller('cutiController',function ($scope, $http, $window) {
    $scope.simpanCuti = function () {
        $http.post(BASE_URL+'/cuti', $scope.cuti).then(sukses,gagal);
        function sukses(response) {
            // $window.location.href = urlListMutasi;
            console.log(response.data.message);
        };
        function gagal(response) {
            console.log('Error'+response);
        };
    };
})
