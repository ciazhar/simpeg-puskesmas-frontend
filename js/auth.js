var app = angular.module('mainModule', []);
var API_LOGIN_URL = 'http://dinkes.batangkab.go.id:8080/login'
var API_REGISTER_URL = 'http://dinkes.batangkab.go.id:8080/account/users/submit'
var HOME_URL = 'index.html'
var LOGIN_URL = 'login.html'

app.controller('userController', function($scope, $http, $window){
  $scope.doLogin = function () {
    $http.post(API_LOGIN_URL, $scope.login).then(sukses,gagal);
    function sukses(response) {
        $window.localStorage.setItem('authorization',response.data.token);
        $window.location.href = HOME_URL;
    };
    function gagal(response) {
        console.log('Error : '+response);
    };
  };
  $scope.doRegister = function () {
    if($scope.register.password != $scope.register.confirmPassword){
        console.log('Password Tidak Sama');
        return;
    }
    $http.post(API_REGISTER_URL, $scope.register).then(sukses,gagal);
    function sukses(response) {
        $window.localStorage.setItem('id',response.data.id);
        $window.location.href = LOGIN_URL;
    };
    function gagal(response) {
        console.log('Error : '+response);
    };
  };
});