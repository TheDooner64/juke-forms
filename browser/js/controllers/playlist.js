app.controller('PlaylistCtrl', function ($scope, PlaylistFactory, $state) {
  $scope.addPlaylist = function(data) {
    PlaylistFactory.addPlaylist(data)
    .then(function(playlist) {
      $scope.reset();
      $state.go('singlePlaylist', { playlistId: playlist._id });
    });
  };
 
  $scope.reset = function() {
    $scope.playlistName.name = "";
    $scope.playlistForm.$pristine = true;
    $scope.playlistForm.$dirty = false;
  };

  PlaylistFactory.getAllPlaylists()
    .then(function (cachedPL) {
      $scope.playlists = cachedPL;
  });
});