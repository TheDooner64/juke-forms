app.config(function ($stateProvider) {
  $stateProvider.state('singlePlaylist', {
    url: '/playlists/:playlistId',
    templateUrl: '/templates/singlePlaylist.html',
    controller: 'SinglePlaylistCtrl',
    resolve: {
      thePlaylist: function (PlaylistFactory, $stateParams) {
          return PlaylistFactory.fetchById($stateParams.playlistId);
      }
    }
  });
});