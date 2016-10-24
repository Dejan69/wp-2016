(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .config(registerState);


  registerState.$inject = ['$stateProvider'];

  function registerState($stateProvider) {

    $stateProvider.state('group', {
      url: '/students',
      templateUrl: 'app/c1/students.view.html',
      controller: 'StudentsController',
      controllerAs: 'vm'
    });
  }

})(angular);
