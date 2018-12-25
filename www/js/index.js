angular.module('LeukemiaApp',['ngRoute'])
.config(function($routeProvider) {
$routeProvider
.when('/', {
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
})
.when('/', {
    templateUrl: 'templates/dashboard.html',
    controller: 'dashboardCtrl'
});
});