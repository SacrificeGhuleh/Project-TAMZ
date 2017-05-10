var Svg;
var ScreenHeight;
var ScreenWidth;
var offset = 0;
var scale = 2;

var delay;
var bar;
var currentSong;
var stopped = false;

var G_Tempo = 0;
var G_Notes = 0;
var G_Bars = 0;
var G_PlaceIndex = 0;
var G_Delay = 0;
var G_SongsFromLocalStorage = new Array();