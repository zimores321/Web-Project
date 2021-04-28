
$('document').ready(function(){
	$(select.Game).change(function(){
		let selectedItem = $(this).children("option:selected").val();
        alert("You have selected the name - " + selectedItem);		
	})
})	
function goToSource(page) {
			switch(page) {
				case "utilities":
					window.location.href = window.location.href + selectedItem + '/Utilities/utilities.html';
				case "location":
					window.location.href = window.location.href + selectedItem + '/Locations/locations.html' ;
				case "player":
					window.location.href = window.location.href + selectedItem + '/Players/players.html' ;
				case "note":
					window.location.href = window.location.href + selectedItem + '/Notes/notes.html' ;
				case "npc":
					window.location.href = window.location.href + selectedItem + '/NPCs/NPC.html' ;
			}
		}	