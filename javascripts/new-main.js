"use strict"
var songListDiv = document.getElementById("song-list");


let musicRequest = new XMLHttpRequest();

musicRequest.addEventListener("load", writeMusic);

function writeMusic() {
    let newSongs = JSON.parse(this.responseText);
    for (let i = 0; i < newSongs.length; i++) {
        let song = newSongs[i].title
        let artist = newSongs[i].artist;
        let album = newSongs[i].album;
        songListDiv.innerHTML += "<div><li id='js-song'>" + song + "</li>" + "<li class='js-info'>" + artist + "</li>" + "<li class='js-info'>|</li>" + "<li class='js-info'>" + album + "</li><button class='deleteable'>Delete</button></div>";
    }
    bullshit();

}

musicRequest.open("GET", "jsons/music1.json")
musicRequest.send();

// GRABBING NEW SONGS FROM DOM INPUT
function MakeMusic(name, artist, album) {
    this.name = name;
    this.artist = artist;
    this.album = album;
}
var newSong = document.getElementById("new-song");
var newArtist = document.getElementById("new-artist");
var newAlbum = document.getElementById("new-album");
var addMusicButton = document.getElementById("new-song-button");
addMusicButton.addEventListener("click", function() {
    var song = new MakeMusic(newSong.value, newArtist.value, newAlbum.value);
    songListDiv.innerHTML += "<div><li id='js-song'>" + song.name + "</li>" + "<li class='js-info'>" + song.artist + "</li>" + "<li class='js-info'>|</li>" + "<li class='js-info'>" + song.album + "</li><button class='deleteable'>Delete</button></div>";
    newSong.value = "";
    newArtist.value = "";
    newAlbum.value = "";
    mainContent.classList.remove("hidden");
    hiddenContent.classList.add("hidden");
    bullshit();
});

// SPA SWITCHERONI
var addMusic = document.getElementById("add-music");
var viewMusic = document.getElementById("view-music");
var mainContent = document.getElementById("main-content");
var hiddenContent = document.getElementById("add-music-div");
addMusic.addEventListener("click", function(event) {
    console.log(event);
    mainContent.classList.add("hidden");
    hiddenContent.classList.remove("hidden");
});
viewMusic.addEventListener("click", function(event) {
    console.log(event);
    mainContent.classList.remove("hidden");
    hiddenContent.classList.add("hidden");
});
//Delete Function on Music Rows
function bullshit() {
    var deleteable = document.getElementsByClassName('deleteable');
    console.log(deleteable);
    console.log(deleteable.length);
    for (var i = 0; i < deleteable.length; i++){
       deleteable[i].addEventListener("click", function(event) {
            this.parentNode.remove();

        });
    }
}
// ADD MORE MUSIC TO LIST

var moreButton = document.getElementById('more-button');
moreButton.addEventListener("click", function() {
    let musicRequest2 = new XMLHttpRequest();
    musicRequest2.addEventListener("load", function() {
        let newSongs = JSON.parse(this.responseText);
        for (let i = 0; i < newSongs.length; i++) {
            let song = newSongs[i].title
            let artist = newSongs[i].artist;
            let album = newSongs[i].album;
            songListDiv.innerHTML += "<div><li id='js-song'>" + song + "</li>" + "<li class='js-info'>" + artist + "</li>" + "<li class='js-info'>|</li>" + "<li class='js-info'>" + album + "</li><button class='deleteable'>Delete</button></div>";
        }
    bullshit();
    });
    musicRequest2.open("GET", "jsons/music2.json");
    musicRequest2.send();
    moreButton.classList.add("hidden");
});


