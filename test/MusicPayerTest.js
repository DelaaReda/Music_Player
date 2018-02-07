const expect = require("chai").expect;
const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);

var MusicPlayer = require("../app/MusicPlayer");
var playlistTested = require("../playlists/index");

describe("Music player", function () {
    it("should be define", function () {
        expect(new MusicPlayer()).not.to.be.undefined;
    });
    it("should be an object", function () {
        expect(new MusicPlayer()).to.be.an('object');
    });
});
describe("Music player variables", function () {
    it("listeMorceaux should be Array", function () {
        expect(new MusicPlayer().listeMorceaux).to.be.array();

    });
    it("num should be a number", function () {
        expect(new MusicPlayer().num).to.equal(0);
    });
});
describe("Music player functionnality GetSongsById", function () {
    it("should be defined", function () {
        expect(new MusicPlayer().GetSongsById).not.to.be.undefined;

    });
});
describe("Music player functionnality TV", function () {
        it("should be defined", function () {
            expect(new MusicPlayer().TV).not.to.be.undefined;
        });
});
describe("Music player functionnality play", function () {
        it("should be defined", function () {
            expect(new MusicPlayer().play).not.to.be.undefined;
        });
});
describe("Music player functionnality loadPlayList", function () {
        it("should be defined", function () {
            expect(new MusicPlayer().loadPlayList()).not.to.be.undefined;
        });
});



