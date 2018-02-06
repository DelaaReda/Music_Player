var util = require('util');
var events = require('events');
var playlist = require("../playlists/index");
var listeMorceaux = [];
for(var i=0;i < playlist.length ;i++){
    for(var j=0;j < playlist[i].albums.length ;j++){
        for(var k=0;k < playlist[i].albums[j].songs.length ;k++){
            var titre=playlist[i].albums[j].songs[k].title;
            var duree=playlist[i].albums[j].songs[k].length;
            var nomPlaylist=playlist[i].name;
            var nomAlbum=playlist[i].albums[j].title;
            var morceau= {};
            morceau= {"title": titre, "length": duree, "nomAlbum": nomAlbum, "nomPlaylist": nomPlaylist};
            listeMorceaux.push(morceau);
        }
    }
}

function MusicPlayer() {
    this.num = 0;

    events.EventEmitter.call(this);
    this.on(MusicPlayer.events.loadPlayList, this.loadPlayList.bind(this));
    this.on(MusicPlayer.events.play, this.play.bind(this));
};

util.inherits(MusicPlayer, events.EventEmitter);

MusicPlayer.prototype.loadPlayList= function(liste) {
    this.laliste = liste;
    this.play();
};

MusicPlayer.prototype.play = function() {


    if(this.num==this.laliste.length){
        this.emit(e.stop);
    }else{
        console.log("chanson numero : " + this.num);
        console.log("---------------------");
        console.log("Nom de la Playlist : " + this.laliste[this.num].nomPlaylist);
        console.log("Nom D'album : " + this.laliste[this.num].nomAlbum);
        console.log("Titre de chanson : " + this.laliste[this.num].title);
        console.log("durée de chanson : " + this.laliste[this.num].length);
        console.log("---------------------");
        this.num++;
        this.emit(e.loadPlayList,this.laliste);
    }
};
MusicPlayer.prototype.stop= function() {
    console.log("Playlist terminée");
    process.exit(0);
};
var e = MusicPlayer.events = {
    play: 'play',
    loadPlayList: 'loadPlayList',
    stop: 'stop'
};

var musicPlayer = new MusicPlayer();

musicPlayer.loadPlayList(listeMorceaux);

module.exports = MusicPlayer;