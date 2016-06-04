(function() {
  var app = angular.module('gemStore', []);

  app.controller('InformationController', function(){
    this.information = info;
  });

  var info = [{
      name: "Hunter Andrin",
      email: "andrinhunter@gmail.com",
      address: "London Ontario",
      postal_code: "N6A 2K1",
      phone_number: "226-236-7427"
    }]
})();