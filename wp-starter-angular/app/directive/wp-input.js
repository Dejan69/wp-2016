(function (angular) {
  'use strict';

  angular
    .module('wp-angular-starter')
    .directive('wpInput', function () {
        return {
          restrict: 'EA',
          scope: {
            wpModel: '=wpModel',
            wpType: '@wpType',
            wpFocus: '@wpFocus',
            someLabel: '@wpLabel'
          },
          template: '<div class="form-group">' +
          '<label>{{someLabel}}</label>' +
          '<input class="form-control" type="{{wpType}}" ng-model="wpModel" ng-focus="wpFocus">' +
        '</div>'

        }
    })
})(angular);
