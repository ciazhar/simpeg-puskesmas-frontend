var app = angular.module ('pegawaiApp',[]);
var BASE_URL = 'http://dinkes.batangkab.go.id:9003'

app.controller('pegawaiController',function ($scope, $http, $window) {
    $scope.daftarPegawai = {};

    $scope.listPegawai = function(){
        $http.get(BASE_URL+'/pegawai').then(sukses,gagal);
        function sukses(response) {
            $scope.daftarPegawai = response.data.data;
            console.log($scope.daftarPegawai)
        }
        function gagal(response) {
            console.log('Error : '+response);
        }
    };
    $scope.listPegawai();
})
