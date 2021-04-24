$('document').ready(function(){
	$("#region").change(function(){
		$.getJSON( this.value, function( data ) {
			var cities = [];
			var regionName = data.regionName;
			var regionDisc = data.regionDisc;
			$.each( data.cities, function( key, val ) {
				$("#cities").append( "<a href='" + val.link + "' id='" + key + "'>" + val.name + "</a>" );
				
			});

		});
		
	});
	
})