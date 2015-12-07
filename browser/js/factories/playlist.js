app.factory('PlaylistFactory', function ($http) {
  
  var PlaylistFactory = {};

  PlaylistFactory.addPlaylist = function (data) {
    return $http.post('/api/playlists', data)
    .then(function (response) {
      return response.data;
    })
    .then(null, function(err) {
      console.error(err);
    });
  };
  
  return PlaylistFactory;
});