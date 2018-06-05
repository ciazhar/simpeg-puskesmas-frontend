var app = angular.module ('suratApp',[]);
var BASE_URL = 'http://dinkes.batangkab.go.id:9003'

app.controller('suratController',function ($scope, $http, $window) {
    $scope.simpanSurat = function () {
        $http.post(BASE_URL+'/surat', $scope.surat).then(sukses,gagal);
        function sukses(response) {
            console.log('Response : '+response.data.message);
        };
        function gagal(response) {
            console.log('Error'+response);
        };
    };
})
