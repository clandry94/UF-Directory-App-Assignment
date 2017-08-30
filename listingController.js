angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      var coord = {
        latitude: $scope.lat,
        longitude: $scope.longi
      }

      var listing = {
        code: $scope.code.toUpperCase(),
        name: $scope.name,
        coordinates: coord,
        address: $scope.addr
      }

      Listings.unshift(listing);
      $scope.listings = Listings;

      $scope.lat = undefined;
      $scope.longi = undefined;
      $scope.code = undefined;
      $scope.name = undefined;
      $scope.addr = undefined;
    };

    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = $scope.listings[index];
    };

    $scope.filterListings = function() {
      var originalList = Array.from(Listings);
      var filteredList = [];
      var value = $scope.val.toLowerCase();
      var name = undefined;
      var code = undefined;

      if (value === "") {
        $scope.listings = originalList;
      } else {
        for (var i = 0; i < originalList.length; i++) {
          name = originalList[i].name.toLowerCase();
          code = originalList[i].code.toLowerCase();
          if (name.includes(value) || code.includes(value)) {
            filteredList.push(originalList[i]);
          }
        }
        $scope.listings = filteredList;
      }
    };
  }
]);
