function MusicPlayer() {
}

module.exports = MusicPlayer;

MusicPlayer.prototype.play = function() {
    this.playing = "playing";
};
MusicPlayer.prototype.loadPlayList= function() {
    this.PlayList = "loaded";
};
MusicPlayer.prototype.pause= function() {
    this.pauseStatus = true;
};
MusicPlayer.prototype.stop= function() {
    this.stopped = true;
};
