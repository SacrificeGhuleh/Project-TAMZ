function close_window() {
    if (confirm("Close App?")) {
        navigator.app.exitApp();
    }
}

function stopPlaying() {
    stopped = true;
}

function loadFromJson(json) {
    currentSong = JSON.parse(json);
    currentSong.Draw();
}

function loadSong(song){
    currentSong = song;
    currentSong.Draw();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setDelay() {
    G_Delay = (60000 * 4 / G_Tempo); // delay pro celou notu
}

$(document).ready(function () {
    showSongs();
});

function clearSvg() {
    $("#NoteSheet").empty();

    G_Notes = 0;
    G_Bars = 0;
    G_PlaceIndex = 0;
}

function createSvg() {
    Svg = document.getElementById("NoteSheet");
    ScreenWidth = window.screen.width;
    ScreenHeight = window.screen.height; 
    clearSvg();
}
function refreshSvg() {
    $("#svgDiv").html($("#svgDiv").html());
}