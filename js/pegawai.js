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

    var urlRedirect = "form-pegawai.html";
    $scope.editPegawai = function (pegawai) {
        console.log(pegawai.id)
        $window.localStorage.setItem('id',pegawai.id);
        $window.location.href = urlRedirect;
    }
    
    $scope.hapusPegawai = function(pegawai){
        $http.post(BASE_URL+'/pegawai/'+pegawai.id).then(sukses,gagal);
        function sukses(response) {
            console.log(response.data.data)
        }
        function gagal(response) {
            console.log(response);
        }
        $window.location.reload();
    };

})

app.controller('formController',function ($scope, $http, $window) {
    var urlListPegawai = "pegawai.html";
    var idnya = $window.localStorage.getItem('id');

    $scope.formPegawai = function () {
        $http.get(BASE_URL+'/pegawai/'+idnya).then(sukses, gagal);
        function sukses(response){
            $scope.findedPegawai = response.data.data;
        }
        function gagal(response){
            console.log('Error'+response);
        };
        delete sessionStorage.id;/// delete id agar tidak terjadi redundan
    };
    $scope.formPegawai();

    $scope.simpanPegawai = function () {
        ///Kondisi ini untuk mengantisipasi tidak terdeteksinya value di field sehingga tidak menjadi json utuh
        $scope.pegawai.id = $scope.findedPegawai.id;
        if ($scope.pegawai.noKtp == null){
            $scope.pegawai.noKtp = $scope.findedPegawai.noKtp;
        }
        if ($scope.pegawai.gaji == null){
            $scope.pegawai.gaji = $scope.findedPegawai.gaji;
        }

        $http.post(BASE_URL+'/pegawai', $scope.pegawai).then(sukses,gagal);
        function sukses(response) {
            $window.location.href = urlListPegawai;
        };
        function gagal(response) {
            console.log('Error'+response);
        };
    };
})
