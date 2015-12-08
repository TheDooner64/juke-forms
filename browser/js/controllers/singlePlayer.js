app.controller('SinglePlaylistCtrl', function ($scope, PlaylistFactory, SongFactory, $state, thePlaylist) {
  $scope.theSinglePlaylist = thePlaylist;

  SongFactory.getAllSongs()
  .then(function (songs) {
    $scope.totalSongs = songs;
  });

  $scope.addNewSong = function(playlist, song) {
    PlaylistFactory.addSong(playlist, song)
    .then(function(cachedSongs) {
      $scope.theSinglePlaylist.songs = cachedSongs;
    });
  };

});