(function() {
  var app = angular.module('exampleWebpage', []);
  app.controller('InformationController', function(){
    this.information = {};
    this.validPostalCode = false;

    this.addInformation = function() {
      this.information = {};
      this.isCanada();
    };

    this.isCanada = function() {
      var isCanada = false;
      if (this.information.addressDetails.country.toLowerCase() === "canada") {
        isCanada = true;
      } else {
        isCanada = false;
      }
      return isCanada;
    }

    this.isValidCanadianPostalCode = function() {
      var isValid = false;
      var postalCode = this.information.addressDetails.postalCode;
      var regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
      var match = regex.exec(postalCode);
      if (match){
          if ( (postalCode.indexOf("-") !== -1 || postalCode.indexOf(" ") !== -1 ) && postalCode.length === 7 ) {
              isValid = true;
          } else if ( (postalCode.indexOf("-") == -1 || postalCode.indexOf(" ") == -1 ) && postalCode.length === 6 ) {
              isValid = true;
          }
      } else {
              isValid = false;
      }
      this.validPostalCode = isValid;
      return isValid;
    }
  });
})();