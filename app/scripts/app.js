(function() {
  var app = angular.module('exampleWebpage', []);
  app.controller('InformationController', function(){
    this.information = {};

    this.addInformation = function() {
      this.information = {};
    };

    this.isCanada = function() {
      var isCanada = false;
      console.log(this.information.addressDetails.country.toLowerCase());
      if (this.information.addressDetails.country.toLowerCase() === "canada") {
        isCanada = true;
      } else {
        isCanada = false;
      }
      return isCanada;
    }
  });

})();