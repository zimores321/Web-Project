$('document').ready(function(){
		$("#date").empty();
		$("#information").empty();
		$.getJSON( 'backend/notes.json', function( data ) {
			$.each( data.date, function( key, val ) {
				$("#date").append(  "<a class='dateList' href='' id='" + key + "'>" + val.dates + "</a>" ); 
			});
		});
	
	

	$(document).on('click','.date',function(e){
		e.preventDefault();
		$("#information").empty();
		$.getJSON( this.href, function( data ) {
			var Discription = data.details;
			$("#information").append("<a>" + Discription + "</a>");
		});
	})
})