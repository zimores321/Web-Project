$('document').ready(function(){
		$("#individuals").empty();
		$("#information").empty();
		$.getJSON( 'backend/players.json', function( data ) {
			$.each( data.Party, function( key, val ) {
				$("#individuals").append(  "<a class='playerlist' href='' id='" + key + "'>"+"<img src='"+val.image+"'  width='150' height='150'> </a>" ); 
			});
		});
	
	

$(document).on('click','.datelist',function(e){
        e.preventDefault();
		var index = this.id;
        $("#information").empty();
        $.getJSON( 'backend/players.json', function( data ) {
            var description = data.Party[index].details
			var name = data.Party[index].characterName
			$("#information").append("<a>" + name+ "</a>");
            $("#information").append("<a>" + description+ "</a>");
        });
    })
})