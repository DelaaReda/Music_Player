var expect = require("chai").expect;
var MusicPlayer = require("../app/MusicPlayer");


describe("Music player", function () {
    it("should be define", function () {
        expect(new MusicPlayer()).not.to.be.undefined;
    });
});
