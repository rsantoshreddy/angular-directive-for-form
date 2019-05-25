'use strict';

eventsApp.directive('editForm', function() {
  return {
    // link: function($scope, element, attributes, controller) {
    //   var markup = '<input type="text" ng-model="sampleData"/> <div>{{sampleData}}</div>';
    //   angular.element(element).html($compile(markup)($scope));
    // } This code is equivalent to he templateUrl
    templateUrl: '../templates/editForm.html',
    restrict: 'E',
    replace: true,
    scope: {
      address: '=',
      states: '='
    }
  };
});
