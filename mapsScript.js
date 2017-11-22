$(function() {
	//37.849523, -122.148005

	$("button#ajax").on("click", function() {
		var mapProp= {
		    center:new google.maps.LatLng($('#latitude').val(), $('#longitude').val()),
		    zoom:15
		};
		var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
	})

	$('#latitude').keypress(function(e){
	    if(e.keyCode==13)
	    	$('button#ajax').click();
	  });
	$('#longitude').keypress(function(e){
	    if(e.keyCode==13)
	    	$('button#ajax').click();
	  });
});