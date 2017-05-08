"use strict"
var songListDiv = $("#song-list");

$.ajax({
    url: "jsons/music1.json"
}).done(writeMusic);

function writeMusic(data) {
    let newSongs = data;

    for (let i = 0; i < newSongs.length; i++) {
        // console.log(newSongs[i]);
        let song = newSongs[i].title
        let artist = newSongs[i].artist;
        let album = newSongs[i].album;
        songListDiv.append("<div><li id='js-song'>" + song + "</li>" + "<li class='js-info'>" + artist + "</li>" + "<li class='js-info'>|</li>" + "<li class='js-info'>" + album + "</li><button class='deleteable'>Delete</button></div>");
    }
    bullshit();
}

// GRABBING NEW SONGS FROM DOM INPUT
function MakeMusic(name, artist, album) {
    this.name = name;
    this.artist = artist;
    this.album = album;
}
var newSong = $("#new-song");
var newArtist = $("#new-artist");
var newAlbum = $("#new-album");
var addMusicButton = $("#new-song-button");
addMusicButton.click( () => {
    var song = new MakeMusic(newSong[0].value, newArtist[0].value, newAlbum[0].value);
    songListDiv.append("<div><li id='js-song'>" + song.name + "</li>" + "<li class='js-info'>" + song.artist + "</li>" + "<li class='js-info'>|</li>" + "<li class='js-info'>" + song.album + "</li><button class='deleteable'>Delete</button></div>");
    newSong[0].value = "";
    newArtist[0].value = "";
    newAlbum[0].value = "";
    mainContent.toggleClass("hidden");
    hiddenContent.toggleClass("hidden");
    bullshit();
});

// SPA SWITCHERONI
var addMusic = $("#add-music");
var viewMusic = $("#view-music");
var mainContent = $("#main-content");
var hiddenContent = $("#add-music-div");
addMusic.click( (event) => {
    // console.log(event);
    mainContent.addClass("hidden");
    hiddenContent.removeClass("hidden");
});
viewMusic.click((event) => {
    // console.log(event);
    mainContent.removeClass("hidden");
    hiddenContent.addClass("hidden");
});
//Delete Function on Music Rows
function bullshit() {
    $('.deleteable').click((event) => {
        console.log(event.target);
        $(event.target).parent().remove();
    });
}
// ADD MORE MUSIC TO LIST
$('#more-button').click(() => {
    $.ajax({
        url: "jsons/music2.json"
    }).done((data) => {
        let newSongs = data;
        for (let i = 0; i < newSongs.length; i++) {
            let song = newSongs[i].title
            let artist = newSongs[i].artist;
            let album = newSongs[i].album;
            songListDiv.append("<div><li id='js-song'>" + song + "</li>" + "<li class='js-info'>" + artist + "</li>" + "<li class='js-info'>|</li>" + "<li class='js-info'>" + album + "</li><button class='deleteable'>Delete</button></div>");
        }
    bullshit();
    });
    $('#more-button').addClass("hidden");
});


