$('document').ready(function(){
	$("#region").change(function(){
		$("#cities").empty();
		$("#poi").empty();
		$("#information").empty();
		$.getJSON( this.value, function( data ) {
			var cities = [];
			var regionName = data.regionName;
			var regionDisc = data.regionDisc;
			$.each( data.cities, function( key, val ) {
				$("#cities").append( "<a class='cityNames' href='" + val.link + "' id='" + key + "'>" + val.name + "</a>" );
			});
			$("#information").append("<a>" + regionDisc + "</a>");
		});
	});
	

	$(document).on('click','.cityNames',function(e){
		e.preventDefault();
		$("#poi").empty();
		$("#information").empty();
		$.getJSON( this.href, function( data ) {
			var pointsOfInterest = [];
			var cityName = data.cityName;
			var cityDiscription = data.cityDiscription;
			$.each( data.pointsOfInterest, function( key, val ) {
				$("#poi").append( "<a class='pointsOfInterest'  value='" + this.id + "'  id='" + key + "'>" + val.name + "</a>" );
			});
			$("#information").append("<a>" + cityDiscription + "</a>");
		});
	})
	
	
	
	$(document).on('click','.pointsOfInterest',function(e){
		e.preventDefault();
		var index = this.id;
		$("#information").empty();
		$.getJSON( this.href, function( data ) {
			var cityDiscription = data.pointsOfInterest[index].discription;
			$("#information").append("<a>" + cityDiscription + "</a>");
		});
	})
	

	
})
