// Song Arrays
var songs2 = ["Ritual Union", "Better Left Unsaid", "American Money", "Die Young", "Back Up Again", "Itchin' On A Photograph", "Yours", "Heat Of The Moment", "Got My Mind Set On You", "White Lie"];
var artists2 = ["Little Dragon", "Stoop Kids", "BORNS", "Sylvan Esso", "Moonshiner Collective", "Grouplove", "SG Lewis", "Asia", "George Harrison", "The Lumineers"];
var albums2 = ["Ritual Union", "Better Left Unsaid", "Dopamine", "Die Young", "Fables of Our Youth", "Never Trust A Happy Song", "Yours - EP", "Asia", "Cloud Nine", "Cleopatra"];
// Gettin' Inputs
var userSong = document.getElementById("new-song");
var userArtist = document.getElementById("new-artist");
var userAlbum = document.getElementById("new-album");
var songDom = document.getElementById("song-titles");
var artistDom = document.getElementById("artist-list");
var albumDom = document.getElementById("album-names");
var addButton = document.getElementById("new-song-button");
// using only the following methods: join, push, reverse, sort, concat and unshift)
// Adding Songs to Array
addButton.addEventListener("click", function() {
    songs2.push(userSong.value);
    artists2.unshift(userArtist.value);
    albums2.push(userArtist.value);
    for (var i = 0; i < songs2.length; i++) {
        songDom.innerHTML += songs2[i] + ",<br>";
        artistDom.innerHTML += artists2[i] + ",<br>";
        albumDom.innerHTML += albums2[i] + ",<br>";
    }
});

