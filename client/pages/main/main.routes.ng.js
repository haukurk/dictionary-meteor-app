'use strict'

angular.module('ordabokWeb')
.config(function($stateProvider) {
  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'client/pages/main/main.view.ng.html',
    controller: 'MainCtrl'
  });
});
