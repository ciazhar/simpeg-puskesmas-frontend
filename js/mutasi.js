var app = angular.module ('mutasiApp',[]);
var BASE_URL = 'http://dinkes.batangkab.go.id:9003'

app.controller('mutasiController',function ($scope, $http, $window) {
    $scope.daftarPegawai = {};

    $scope.simpanMutasi = function () {
        $http.post(BASE_URL+'/mutasi', $scope.mutasi).then(sukses,gagal);
        function sukses(response) {
            console.log('Response : '+response.data.message);
        };
        function gagal(response) {
            console.log('Error'+response);
        };
    };
})
