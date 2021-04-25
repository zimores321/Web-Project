$('document').ready(function(){
		$("#date").empty();
		$("#information").empty();
		$.getJSON( 'backend/notes.json', function( data ) {
			var dateList = [];
			$.each( data.dateList, function( key, val ) {
				$("#dates").append(  "'<a href='' id='" + key + "'>" + val.dates + "</a>" ); 
			});
		});
	
	

	$(document).on('click','.date',function(e){
		e.preventDefault();
		$("#information").empty();
		$.getJSON( this.href, function( data ) {
			var pointsOfInterest = [];
			var cityName = data.cityName;
			var cityDiscription = data.cityDiscription;
			$.each( data.pointsOfInterest, function( key, val ) {
				$("#poi").append( "<a class='pointsOfInterest' id='" + key + "'>" + val.name + "</a>" );
			});
			$("#information").append("<a>" + cityDiscription + "</a>");
		});
	})
	

	
})