(function () {
  'use strict';

  angular.module('demo', [
    /* angular-formly-templates-lumx dependencies */
    'ngMessages',
    'formly',
    'lumx',
    'formlyLumx',
    /* additional */
    'ngSanitize',
    'ui.router',
    'ngPrettyJson',
    'btford.markdown',
    /* modules */
    'shmck.formFields'
  ])
    .config(routerSetup);

  function routerSetup($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/input');
    //$locationProvider.html5Mode(true);
  }

}());
