(function () {
  'use strict';

  angular.module('demo')
    .controller('NavCtrl', NavCtrl);

  function NavCtrl(SidebarService) {
    var vm = this;
    vm.sidebar = SidebarService;
    vm.navBarLinks = [{
      text: 'Angular-Formly',
      link: 'https://github.com/formly-js/angular-formly'
    }, {
      text: 'LumX',
      link: 'http://ui.lumapps.com/'
    }, {
      text: 'GitHub',
      link: 'https://github.com/formly-js/angular-formly-templates-lumx'
    }];
  }

}());
