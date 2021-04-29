
$('document').ready(function(){
	var gameSource = Game.value;
})	
$(document).on('click','.Loc',function(){
	window.location.href = window.location.href + gameSource + '/Locations/locations.html' ;
})

$(document).on('click','.Note',function(){
	window.location.href = window.location.href + gameSource + '/Notes/notes.html' ;
})

$(document).on('click','.Player',function(){
	window.location.href = window.location.href + gameSource + '/Players/players.html' ;
})

$(document).on('click','.NPC',function(){
	window.location.href = window.location.href + gameSource + '/NPCs/NPC.html' ;
})

$(document).on('click','.Uti',function(){
	window.location.href = window.location.href + gameSource + '/Utilities/utilities.html';
})