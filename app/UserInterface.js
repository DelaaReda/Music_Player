var MusicPlayer = require("./MusicPlayer");
var musicPlayer = new MusicPlayer();
var playlist = require("../playlists/index");
musicPlayer.GetSongsById(playlist);
musicPlayer.loadPlayList();
musicPlayer.play();