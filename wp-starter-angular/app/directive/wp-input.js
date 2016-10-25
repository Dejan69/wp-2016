(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .directive('wpInputHelper', function () {
        return {
          restrict: 'EA',
          scope: {
            wpModel: '=wpModel',
            wpType: '@wpType',
            wpFocus: '@wpFocus'
          },
          template:
          '<input class="form-control" type="{{wpType}}" ng-model="wpModel">',
          link: function (scope, element, attrs) {
            console.log(element);
            if(attrs.wpFocus == 'true')
              element[0].focus();
            else
              element[0].blur();
          }
        }
    });
  angular.module('wp-angular-starter').component('wpInput', {
    template: '<div class="form-group">' +
    '<label>{{$ctrl.wpLabel}}</label>' +
    '<wp-input-helper wp-model="vm.entity.property" wp-type="number" wp-focus="true"></wp-input-helper>' +
    '</div>',
    bindings: {
      wpModel: '=wpModel',
      wpType: '@wpType',
      wpFocus: '@wpFocus',
      wpLabel: '@wpLabel'
    },
    controller: function(){

    }
  })
})(angular);
