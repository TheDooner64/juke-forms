app.controller('PlaylistCtrl', function ($scope, PlaylistFactory) {
  $scope.addPlaylist = function(data) {
    PlaylistFactory.addPlaylist(data)
    .then(function() {
      $scope.reset();
    });
  };

  $scope.reset = function() {
    console.log($scope);
    $scope.playlistName.name = "";
    $scope.playlistForm.$pristine = true;
    $scope.playlistForm.$dirty = false;
  };

});