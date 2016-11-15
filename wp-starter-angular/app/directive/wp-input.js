(function (angular) {
  'use strict';

  angular.module('wp-angular-starter')
    .directive('focusMe', function () {
        return {
	        link: function (scope, element, attrs) {
		        var model = attrs.focusMe;
		        scope.$watch(model, function (value) {
			        console.log('value=', value);
			        if (value == 'true') {
				        element[0].focus();
			        }
		        });
	        }
        }
    });
  angular.module('wp-angular-starter').component('wpInput', {
    template: '<div class="form-group">' +
    '<label>{{$ctrl.wpLabel}}</label>' +
    '<input ng-model="$ctrl.wpModel" type="{{$ctrl.wpType}}" focus-me="$ctrl.wpFocus" class="form-control">' +
    '</div>',
    bindings: {
      wpModel: '=wpModel',
      wpType: '@wpType',
      wpFocus: '@wpFocus',
      wpLabel: '@wpLabel'
    },
    controller: function(){

    }
  });
  angular.module('wp-angular-starter').component('uiSelectInput', {
    template: '<div class="form-group">' +
    '<label>{{$ctrl.wpLabel}}</label>' +
    '<input ng-model="$ctrl.wpModel" type="{{$ctrl.wpType}}" focus-me="$ctrl.wpFocus" class="form-control">' +
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

