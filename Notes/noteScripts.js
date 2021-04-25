$('document').ready(function(){
		$("#date").empty();
		$("#information").empty();
		$.getJSON( 'backend/notes.json', function( data ) {
			$.each( data.date, function( key, val ) {
				$("#date").append(  "<a class='datelist' href='' id='" + key + "'>" + val.dates + "</a>" ); 
			});
		});
	
	

$(document).on('click','.date',function(e){
        e.preventDefault();
		console.log(this.id);
        $("#information").empty();
        $.getJSON( 'backend/notes.json', function( data ) {
            var description = data.date[this.id].details;
            $("#information").append("<a>" + description+ "</a>");
        });
    })
})