function saveSong(song) {
    localStorage.setItem("Song_" + localStorage.length, JSON.stringify(song));
    $("#localSongs").listview();
    $("#localSongs").listview("refresh");
    showSongs();
    alert("Song " + song.interpret + " - " + song.song + " saved successfully.")
}

function clearSong() {
    localStorage.clear();
    $("#localSongs").empty();
    $("#localSongs").listview("refresh");

}

function removeSong(indexSong) {
    localStorage.removeItem(indexSong);
    for (var i = 0; i < localStorage.length; i++) {
        if (!localStorage.getItem("Song_" + i)) {
            localStorage.setItem("Song_" + i, localStorage.getItem("Song_" + (i + 1)));
            localStorage.removeItem("Song_" + (i + 1));
        }
    }
    showSongs();
}

function showSongs() {
    var songJson = "";
    $("#localSongs").empty();
    G_SongsFromLocalStorage = new Array();
    for (var i = 0; i < localStorage.length; i++) {
        songJson = localStorage.getItem("Song_" + i);
        var song = JSON.parse(songJson);

        G_SongsFromLocalStorage.push(songJson);
        //console.log(songJson);
        var str = "Song_" + i;
        var loadCode = "<a href = \"#player\" class=\"ui-btn\" onclick=\"loadSongFromJson(G_SongsFromLocalStorage[" + i + "]" + ")\">Load</a>";
        var delCode = "<a href=\"#\" class=\"ui-btn ui-btn-inline ui-icon-delete ui-btn-icon-left\" onclick=\"removeSong(\'" + str + "\'" + ")\">" + "Remove" + "</a>";
        var oldCode = "<div data-role=\"collapsible\" data-collapsed=\"true\">" +
            "<h3>" + song.interpret + " - " + song.song + "</h3>" +
            "<b>Interpret:</b>" +
            "<p>" + song.interpret + "</p>" +
            "<b>Song:</b>" +
            "<p>" + song.song + "</p>" +
            "<b>Tempo:</b>" +
            "<p>" + song.tempo + "</p>" +
            "<b>Number of bars:</b>" +
            "<p>" + song.bars.length + "</p>" +
            delCode +
            loadCode +
            "</div>";

        $("#localSongs").listview();
        $("#localSongs").listview("refresh");


        $("#localSongs").append(oldCode).collapsibleset("refresh");
        $("#localSongs").collapsibleset().trigger("create");
    }
}

function loadSongFromJson(jsonString) {
    createSvg();
    //clearSvg();
    var jsonObject = JSON.parse(jsonString);


    //G_Notes = 0;
    //G_Bars = 0;
    //G_PlaceIndex = 0;


    var Arr_Bars = new Array();
    var Arr_SubBars = new Array();
    var Arr_Notes = new Array();

    for (b of jsonObject.bars) {
        Arr_SubBars = new Array();
        for (sub of b.subBars) {
            Arr_Notes = new Array();
            for (note of sub.notes) {
                Arr_Notes.push(new Note(note.duration, note.tone, note.disabled));
            }
            Arr_SubBars.push(new SubBar(Arr_Notes));
        }
        Arr_Bars.push(new Bar(Arr_SubBars));
    }

    var song = new Song(jsonObject.interpret, jsonObject.song, jsonObject.tempo, Arr_Bars);
    currentSong = song;
}