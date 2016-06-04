(function() {
  var app = angular.module('exampleWebpage', []);
  app.controller('InformationController', function(){
    this.information = {};

    this.addInformation = function() {
      this.information = {};
    };

    this.isCanada = function() {
      boolean isCanada = false;
      if (this.information.addressDetails.province.countrytoLowerCase() === "canada") {
        isCanada = true;
      }
      return isCanada;
    }
  });

})();