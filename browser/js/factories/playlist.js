app.factory('PlaylistFactory', function ($http) {
  
  var PlaylistFactory = {};
  var cachedPlaylists = [];
  var cachedSongs = [];

  PlaylistFactory.addPlaylist = function (data) {
    return $http.post('/api/playlists', data) // Data is already an object
    .then(function (response) {
      cachedPlaylists.push(response.data);
      return response.data;
    });
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
      console.log(playlist);
      return playlist;
    });
  };

  PlaylistFactory.addSong = function(playlist, song) {
    return $http.post('/api/playlists/' + playlist._id + '/songs', { song: song }) // Song needs to be entered in an object
    .then(function(response) {
      cachedSongs.push(response.data);
      return response.data;
    })
    .then(function(song) {
      return $http.get('/api/playlists/' + playlist._id + '/songs')
      .then(function (songs) {
        angular.copy(songs.data, cachedSongs);
        return cachedSongs;
      });  
    });
  };

  return PlaylistFactory;
});