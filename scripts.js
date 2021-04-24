$('document').ready(function(){
	$("#region").change(function(){
		console.log(this.value);
		$.getJSON( this.value, function( data ) {
			var cities = [];
			var regionName = data.regionName;
			var regionDisc = data.regionDisc;

			$.each( data.cities, function( key, val ) {
				cities.push( "<a href='" + val.link + "' id='" + key + "'>" + val.name + "</a>" );
			});

			$( "<ul/>", {
			"class": "my-new-list",
			html: cities.join( "" )
			}).appendTo( "body" );
		});
		
	});
	
})