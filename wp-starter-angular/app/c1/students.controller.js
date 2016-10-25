(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .controller('StudentsController', StudentsController);

  StudentsController.$inject = ['$log', 'GroupService', 'StudentService', '$scope'];

  /* @ngInject */
  function StudentsController($log, GroupService, StudentService, $scope) {
    var vm = this;
    vm.title = 'Students';
    vm.save = save;
    vm.clear = clear;
    vm.edit = edit;
    vm.remove = remove;
    vm.entity = {};
    $scope.entities = [];
    $scope.tableDisplay = [];
    vm.saveOkMsg = null;
    vm.saveErrMsg = null;
    vm.searchText = '';
    vm.groups = [];
    loadStudents();
    loadGroups();

    vm.getters={
      name: function (value) {
        return value;
      },
      surname: function (value) {
        return value;
      },
      index: function (value) {
        return value;
      },
      labGroup: function (value) {
        return value;
      }
    }

    function loadGroups() {
      GroupService.getAll().then(function (data) {
        vm.groups = data;
      });
    }

    function loadStudents() {
      $scope.tableDisplay = [].concat($scope.entities);
      StudentService.getAll().then(function (data) {
        $scope.entities = data;
      });
    }

    function save() {
      vm.saveOkMsg = null;
      vm.saveErrMsg = null;

      var promise = StudentService.save(vm.entity);
      promise.then(successCallback, errorCallback);
      function successCallback(data) {
        loadStudents();
        vm.saveOkMsg = "Group with id " + data.id + " is saved";
        clear();
      }

      function errorCallback(data) {
        vm.saveErrMsg = "Saving error occurred: " + data.message;
      }
    }

    function clear() {
      console.log(vm.entity);
      vm.entity = {};
    }

    function edit(entity) {
      vm.entity = {};
      angular.extend(vm.entity, entity);
    }

    function remove(entity) {
      StudentService
        .remove(entity)
        .then(function () {
          loadStudents();
        });
    }
  }

})(angular);

