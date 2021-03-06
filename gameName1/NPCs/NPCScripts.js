$('document').ready(function(){
	$("#region").change(function(){
		$("#cities").empty();
		$("#NPCs").empty();
		$("#information").empty();
		$.getJSON( this.value, function( data ) {
			var cities = [];
			var regionName = data.regionName;
			var regionDisc = data.regionDisc;
			$.each( data.cities, function( key, val ) {
				$("#cities").append( "<a class='cityNames' href='" + val.link + "' id='" + key + "'>" + val.name + "</a>" );
			});
		});
	});
	

	$(document).on('click','.cityNames',function(e){
		e.preventDefault();
		$("#NPCs").empty();
		$("#information").empty();
		var loca = this.href;
		
		$.getJSON( this.href, function( data ) {
			var pointsOfInterest = [];
			var cityName = data.cityName;
			var cityDiscription = data.cityDiscription;
			
			$.each( data.NPCs, function( key, val ) {
				$("#NPCs").append( "<a class='NPClist'  href='" + loca +  "' id='" + key + "'>" + val.name + "</a>" );
			});
		});
	})
	
	
	
	$(document).on('click','.NPClist',function(e){
		e.preventDefault();
		var index = this.id;
		$("#information").empty();
		$.getJSON( this.href, function( data ) {
			var pointDescription = data.NPCs[index].discription;
			$("#information").append("<a>" + pointDescription + "</a>");
		});
	})
	

	
})
