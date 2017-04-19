var songListDiv = document.getElementById("song-list");
var music = {};
var songs = [];
function MakeMusic(name, artist, album) {
    this.name = name;
    this.artist = artist;
    this.album = album;
}
songs[songs.length] = "Get Low > by James Vincent McMorrow on the album We Move";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "Blue Letter > by Fleetwood Mac on the album Fleetwood Mac"
var bullShitChars = ["*", "@", "(", "!"];

songs.forEach(function(i) {
    i = i.replace(">", "-");
    bullShitChars.forEach(function(x) {
       i = i.replace(x, "");
    });
    var song = new MakeMusic(i.slice(0, i.indexOf(" -")), i.slice(i.indexOf("by ") + 3, i.indexOf(" on the ")), i.slice(i.indexOf("album") + 6, i.length));
    songListDiv.innerHTML += "<li id='js-song'>" + song.name + "</li>" + "<li class='js-info'>" + song.artist + "</li>" + "<li class='js-info'>|</li>" + "<li class='js-info'>" + song.album + "</li>";
});
// GRABBING NEW SONGS FROM DOM INPUT
var newSong = document.getElementById("new-song");
var newArtist = document.getElementById("new-artist");
var newAlbum = document.getElementById("new-album");
var addMusicButton = document.getElementById("new-song-button");
addMusicButton.addEventListener("click", function() {
    var song = new MakeMusic(newSong.value, newArtist.value, newAlbum.value);
    songListDiv.innerHTML += "<li id='js-song'>" + song.name + "</li>" + "<li class='js-info'>" + song.artist + "</li>" + "<li class='js-info'>|</li>" + "<li class='js-info'>" + song.album + "</li>";
    newSong.value = "";
    newArtist.value = "";
    newAlbum.value = "";
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

