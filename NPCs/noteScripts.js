$('document').ready(function(){
		$("#date").empty();
		$("#information").empty();
		$.getJSON( 'backend/notes.json', function( data ) {
			$.each( data.date, function( key, val ) {
				$("#date").append(  "<a class='datelist' href='' id='" + key + "'>" + val.dates + "</a>" ); 
			});
		});
	
	

$(document).on('click','.datelist',function(e){
        e.preventDefault();
		var index = this.id;
        $("#information").empty();
        $.getJSON( 'backend/notes.json', function( data ) {
			console.log(this.id);
            var description = data.date[index].details
            $("#information").append("<a>" + description+ "</a>");
        });
    })
})