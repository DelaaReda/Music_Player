var util = require('util');
var events = require('events');

function MusicPlayer() {
    this.playList = false;
    this.nowPlaying = false;
    this.pauseStatus = false;
    this.stopped = false;

    events.EventEmitter.call(this);
    this.on(MusicPlayer.events.play, this.play.bind(this));
    this.on(MusicPlayer.events.loadPlayList, this.loadPlayList.bind(this));
    this.on(MusicPlayer.events.pause, this.pause.bind(this));
    this.on(MusicPlayer.events.stop, this.stop.bind(this));
}
util.inherits(MusicPlayer, events.EventEmitter);


MusicPlayer.prototype.play = function() {
    this.playing = nowPlaying;
};
MusicPlayer.prototype.loadPlayList= function() {
    this.PlayList = playList;
};
MusicPlayer.prototype.pause= function() {
    this.pauseStatus = Pause;
};
MusicPlayer.prototype.stop= function() {
    this.stopped = stopStat;
};
var e = MusicPlayer.events = {
    play: 'play',
    loadPlayList: 'loadPlayList',
    pause: 'pause',
    stop: 'stop'
};
var musicPlayer = new MusicPlayer();

musicPlayer.on(e.play, function() {
    this.nowPlaying = true;
});
musicPlayer.on(e.loadPlayList, function() {
    this.playList = true;
});
musicPlayer.on(e.pause, function() {
    this.pauseStatus = true;
});
musicPlayer.on(e.stop, function() {
    this.stopped = true;
});
module.exports = MusicPlayer;