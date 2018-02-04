var expect = require("chai").expect;
var MusicPlayer = require("../app/MusicPlayer");


describe("Music player", function () {
    it("should be define", function () {
        expect(new MusicPlayer()).not.to.be.undefined;
    });

    describe("Music player functionnality play", function () {
        it("should be defined", function () {
            expect(new MusicPlayer().play).not.to.be.undefined;
        });
    });
    describe("Music player functionnality stop", function () {
        it("should be defined", function () {
            expect(new MusicPlayer().stop).not.to.be.undefined;
        });
        it("should be defined", function () {
            expect(new MusicPlayer().pause).not.to.be.undefined;
        });
        it("should be defined", function () {
            expect(new MusicPlayer().loadPlayList).not.to.be.undefined;
        });
    });
});
