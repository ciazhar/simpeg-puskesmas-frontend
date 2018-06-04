var app = angular.module('mainModule', []);
var LOGIN_URL = 'http://dinkes.batangkab.go.id:8080/login'
var REGISTER_URL = 'http://dinkes.batangkab.go.id:8080/account/submit'
var HOME_URL = 'pegawai.html'

app.controller('userController', function($scope, $http, $window){
  $scope.doLogin = function () {
    $http.post(LOGIN_URL, $scope.login).then(sukses,gagal);
    function sukses(response) {
        $window.localStorage.setItem('authorization',response.data.token);
        $window.location.href = HOME_URL;
    };
    function gagal(response) {
        console.log('Error : '+response);
    };
  };
  $scope.doRegister = function () {
    $http.post(REGISTER_URL, $scope.register).then(sukses,gagal);
    function sukses(response) {
        console.log('Resoonse : '+response);
    };
    function gagal(response) {
        console.log('Error : '+response);
    };
  };
});