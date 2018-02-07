var util = require('util');
var events = require('events');

function MusicPlayer() {
    this.Afficheur="";
    this.num = 0;
    this.listeMorceaux = [];
    events.EventEmitter.call(this);
    this.on(e.GetSongsById, this.GetSongsById.bind(this));
    this.on(e.loadPlayList, this.loadPlayList.bind(this));
    this.on(e.play, this.play.bind(this));
    this.on(e.TV, this.TV.bind(this));
};
MusicPlayer.prototype.GetSongsById= function(playlist) {
    // Transformation de la playlist pour tirer les morceaux
    for(var i=0;i < playlist.length ;i++){
        for(var j=0;j < playlist[i].albums.length ;j++){
            for(var k=0;k < playlist[i].albums[j].songs.length ;k++){
                var titre=playlist[i].albums[j].songs[k].title;
                var duree=playlist[i].albums[j].songs[k].length;
                var nomPlaylist=playlist[i].name;
                var nomAlbum=playlist[i].albums[j].title;
                var morceau= {};
                morceau= {"title": titre, "length": duree, "nomAlbum": nomAlbum, "nomPlaylist": nomPlaylist};
                this.listeMorceaux.push(morceau);
            }
        }
    }
};
util.inherits(MusicPlayer, events.EventEmitter);


MusicPlayer.prototype.loadPlayList= function() {
    this.laliste = this.listeMorceaux;
    this.emit(e.play);
};
MusicPlayer.prototype.TV= function() {
    var ecranA =  "chanson numero : " + this.num;
    var ecranB =  "\n---------------------\n";
    var ecranC = "Nom de la Playlist : " + this.laliste[this.num].nomPlaylist;
    var ecranD = "\nNom D'album : " + this.laliste[this.num].nomAlbum;
    var ecranE = "\nTitre de chanson : " + this.laliste[this.num].title;
    var ecranF = "\ndurée de chanson : " + this.laliste[this.num].length;
    var ecranG = "\n---------------------";
    this.Afficheur = ecranA + ecranB + ecranC + ecranD + ecranE + ecranF + ecranG;
    console.log(this.Afficheur);
};

MusicPlayer.prototype.play = function() {

    if(this.num==this.laliste.length){
        console.log("Playlist terminée");
        process.exit(0);
    }else{
        this.emit(e.TV);
        this.num++;
        this.emit(e.loadPlayList,this.laliste);
    }
};
var e = MusicPlayer.events = {
    play: 'play',
    loadPlayList: 'loadPlayList',
    TV: 'TV',
    GetSongsById: 'GetSongsById'
};

module.exports = MusicPlayer;