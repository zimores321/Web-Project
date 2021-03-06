$('document').ready(function(){
    var game, page;
	game = $("#Game").val();
	
    $("#Game").change(function(){
        game = this.value;
    });

    $(".images").click(function() {
        page = $(this).attr('data-source');
		goToSource(page);
    });

    function goToSource(page) {
        var gameSource = game;
        switch(page) {
            case "utilities":
                window.location.href =gameSource + '/Utilities/utilities.html';
                break;
            case "location":
                window.location.href = gameSource + '/Locations/locations.html' ;
                break;
            case "player":
                window.location.href = gameSource + '/Players/players.html' ;
                break;
            case "note":
                window.location.href = gameSource + '/Notes/notes.html' ;
                break;
            case "npc":
                window.location.href =  gameSource + '/NPCs/NPC.html' ;
                break;
            default:
                break;
        }
    }

})