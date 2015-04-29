var map;
var latlng = [];

function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(45.518970, -122.672899),
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
  setTimeout(function(){
    $.each(tracker.tracking.tracking, function(i, obj)
      {
         addMarker(obj);
      }
    );
  }, 1000);
}

function addMarker(obj){
  var myLatlng = new google.maps.LatLng(obj.coord_obj.coords.latitude, obj.coord_obj.coords.longitude);
  latlng.push(myLatlng);
  var imageicon = "";
  
  if(obj.coord_obj.heading <= 45 || obj.coord_obj.heading >= 315){
    imageicon = "https://cdn3.iconfinder.com/data/icons/arrows-25/137/Up-01-48.png";
  }else if(obj.coord_obj.heading >= 45 && obj.coord_obj.heading <= 135){
    imageicon = "https://cdn3.iconfinder.com/data/icons/arrows-25/137/Right-10-48.png";
  }else if(obj.coord_obj.heading >= 135 && obj.coord_obj.heading <= 225){
    imageicon = "https://cdn3.iconfinder.com/data/icons/arrows-25/137/Down-01-48.png";
  }else if(obj.coord_obj.heading >= 225 && obj.coord_obj.heading <= 315){
    imageicon = "https://cdn3.iconfinder.com/data/icons/arrows-25/136/Left-10-48.png";
  }else{
    imageicon = "https://cdn3.iconfinder.com/data/icons/arrows-25/137/Refresh_Clockwise-01-48.png";
  }
  
  
  var marker = new google.maps.Marker({
    position: myLatlng,
    title: obj.user,
    icon: imageicon
  });

  marker.setMap(map);
  
  var latlngbounds = new google.maps.LatLngBounds();
  $.each(latlng, function(i, n){
     latlngbounds.extend(n);
  });
  
  map.setCenter(latlngbounds.getCenter());
  map.fitBounds(latlngbounds); 
  
  map.setHeading(heading);
}

google.maps.event.addDomListener(window, 'load', initialize);