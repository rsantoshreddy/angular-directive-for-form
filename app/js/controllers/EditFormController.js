'use strict';

eventsApp.controller('EditFormController', function($scope, addressService) {
  console.log(addressService.states);
  $scope.states = addressService.states;
  $scope.agencyAddress = {};
  $scope.addresss = [{}];

  $scope.submit = function() {
    console.log($scope.agencyAddress);
    console.log($scope.addresss);
  };
  $scope.addAddress = function() {
    $scope.addresss.push({});
  };
  $scope.removeAddress = function() {
    $scope.addresss.pop();
  };
});

// name: '',
// addressLine1: '',
// addressLine2: '',
// city: '',
// state: '',
// postalCode: '',
// isProvidingResidential: '',
// billingAddSame: '',
// phone: '',
// extension: ''
