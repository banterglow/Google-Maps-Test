$(function() {
	//37.849523, -122.148005

	var myMap = function(latitude, longitude) {
		var mapProp= {
		    center:new google.maps.LatLng(latitude, longitude),
		    zoom:15
		};
		var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
		var marker = new google.maps.Marker({position:mapProp.center});
		marker.setMap(map);
	}
	
	$("#coordinateSubmit").on("click", function() {
		myMap($('#latitude').val(), $('#longitude').val());
	});



	$('#latitude').keypress(function(e){
	    if(e.keyCode==13)
	    	$('#coordinateSubmit').click();
	  });
	$('#longitude').keypress(function(e){
	    if(e.keyCode==13)
	    	$('#coordinateSubmit').click();
	  });
	$('#address').keypress(function(e){
	    if(e.keyCode==13)
	    	$('#addressSubmit').click();
	  });



	$.get("https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyDJ94m0-jjU5qbqsdTzAKMlzIBeDgwBJR8", function(response) {
		  myMap(response.results[0].geometry.location.lat, response.results[0].geometry.location.lng);
		})
});