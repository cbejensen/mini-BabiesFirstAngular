var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {
  $scope.name = '';
  
  $scope.friends = [];
  $scope.addFriend = function() {
    $scope.friends.push($scope.newFriend);
  };
  
  $scope.deleteFriend = function(name) {
    $scope.friends.forEach(function(e, i) {
      if (e === name) {
        $scope.friends.splice(i, 1);
      }
    })
  }
});