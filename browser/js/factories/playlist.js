app.factory('PlaylistFactory', function ($http) {
  
  var PlaylistFactory = {};
  var cachedPlaylists = [];

  PlaylistFactory.addPlaylist = function (data) {
    return $http.post('/api/playlists', data)
    .then(function (response) {
      cachedPlaylists.push(response.data);
      return response.data;
    });
    // .then(null, function(err) {
    //   console.error(err);
    // });
  };

  
  PlaylistFactory.getAllPlaylists = function () {
    return $http.get('/api/playlists')
    .then(function (playlists) {
      angular.copy(playlists.data, cachedPlaylists);
      return cachedPlaylists;
    });
  };

  PlaylistFactory.fetchById = function (id) {
    return $http.get('/api/playlists/' + id)
    .then(function (response) {
      return response.data;
    })
    // .then(AlbumFactory.convert)
    // .then(function (album) {
    //   album.songs = album.songs.map(function (s) {
    //     return SongFactory.convert(s, album.artists);
    //   });
    //   return album;
     .then(function (playlist) {
      return playlist;
    });
  };


  return PlaylistFactory;
});