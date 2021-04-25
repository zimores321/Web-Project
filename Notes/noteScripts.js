$('document').ready(function(){
		$("#date").empty();
		$("#information").empty();
		$.getJSON( "backend/notes.json", function( data ) {
			var date = [];
			var regionName = data.regionName;
			var regionDisc = data.regionDisc;
			$.each( data.date, function( key, val ) {
				$("#date").append( "<a class='cityNames' href='" + val.link + "' id='" + key + "'>" + val.name + "</a>" );
			});
			$("#information").append("<a>" + regionDisc + "</a>");
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