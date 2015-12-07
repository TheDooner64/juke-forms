app.controller('SinglePlaylistCtrl', function ($scope, PlaylistFactory, $state, thePlaylist) {
    // $scope.fetchById = PlaylistFactory.fetchById;
    $scope.theSinglePlaylist = thePlaylist;
});