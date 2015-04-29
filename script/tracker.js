 var tracker;
 
 $(document).ready(function(){
   tracker = new tracking_data();
   watchLocation();
 });
 
 function watchLocation() {
    if (navigator.geolocation) {
        var timeoutVal = 10 * 1000;
        navigator.geolocation.watchPosition(
  				showPosition, 
  				function(){
  				  //error response
  				},
  				{ 
  				  enableHighAccuracy: true, 
  				  timeout: timeoutVal, 
  				  maximumAge: 0 
  				}
    		);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function displayLocation(){
  //$("#locationDetails").html(JSON.stringify(tracker.tracking));
}

function showPosition(position) {
    tracker.addtracking(position, 'Andrew Rourke');
}