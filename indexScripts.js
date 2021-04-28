$('document').ready(function(){
	
})
function goToSource(page) {
			var gameSource = Game.value;
			switch(page) {
				case "utilities":
					window.location.href = window.location.href + gameSource + '/Utilities/utilities.html';
				case "location":
					window.location.href = window.location.href + gameSource + '/Locations/locations.html' ;
				case "player":
					window.location.href = window.location.href + gameSource + '/Players/players.html' ;
				case "note":
					window.location.href = window.location.href + gameSource + '/Notes/notes.html' ;
				case "npc":
					window.location.href = window.location.href + gameSource + '/NPCs/NPC.html' ;
			}
		}		