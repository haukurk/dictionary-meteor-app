'use strict'

angular.module('ordabokWeb')
.config(function($stateProvider) {
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'client/pages/login/login.view.ng.html',
    controller: 'LoginCtrl'
  });
});
