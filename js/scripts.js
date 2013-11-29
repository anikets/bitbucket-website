
var geocoder;
var usersLocation;
var directionsService;
var directionsDisplay;

jQuery(function($) {
   $('.loading').hide();
   navigator.geolocation.getCurrentPosition(showCurrentLocation, error);
   function showCurrentLocation(location) {
      usersLocation = location;
      var latitude = location.coords.latitude;
      var longitude = location.coords.longitude;
      var accuracy = location.coords.accuracy;
      var gLatLng = new google.maps.LatLng(latitude, longitude);

      var mapOptions = {
         center: gLatLng,
         zoom: 16,
         mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);

      var marker = new google.maps.Marker({
         position: gLatLng,
         map: map,
         title: 'Your location.'
     });
   }

   function error( err ) {
      console.log( 'Error:' + err.code + ' | ' + err.message );
   }
});




// Script for buses page. ======================================================
jQuery(function($) {
   $('#bus-s-link').click(function() {
      initializeBuses(usersLocation);
      // navigator.geolocation.getCurrentPosition(initializeBuses);
   })
});
function initializeBuses(location) {
  var gLatLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

  map = new google.maps.Map(document.getElementById('map-bus'), {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: gLatLng,
    zoom: 15
 });

  var request = {
    location: gLatLng,
       // radius: 1000,
       types: ['bus_station'],
       rankBy: google.maps.places.RankBy.DISTANCE
    };
    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callbackBus);
 }

 function callbackBus(results, status) {
   if (status == google.maps.places.PlacesServiceStatus.OK) {
      var htmlFrag = "";
      for (var i = 0; i < results.length; i++) {
      // console.log(results[i]);
         htmlFrag += "<li><a href='#popup-menu' data-transition='slide' data-lat='" +
         results[i].geometry.location.Ya + "' data-lng='" +
         results[i].geometry.location.Za + "'>" + results[i].name + "</a></li>\n";
      }
      $('ul.bus-list').append(htmlFrag);
      $('ul.bus-list').listview('refresh');
   }
}

   // google.maps.event.addDomListener(window, 'load', initialize);



// Script for railway stations page. ===========================================
   jQuery(function($) {
      $('#rly-s-link').click(function() {
         navigator.geolocation.getCurrentPosition(initialize);
      })
   });
   function initialize(location) {
     var gLatLng = new google.maps.LatLng(location.coords.latitude, location.coords.longitude);

     map = new google.maps.Map(document.getElementById('map-rly'), {
       mapTypeId: google.maps.MapTypeId.ROADMAP,
       center: gLatLng,
       zoom: 15
    });

     var request = {
       location: gLatLng,
          // radius: 1000,
          types: ['train_station'],
          rankBy: google.maps.places.RankBy.DISTANCE
       };
       infowindow = new google.maps.InfoWindow();
       var service = new google.maps.places.PlacesService(map);
       service.nearbySearch(request, callback);
    }

    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
         var htmlFrag = "";
         for (var i = 0; i < results.length; i++) {
            // console.log(results[i]);
            htmlFrag += "<li><a href='#popup-menu' data-transition='slide' data-lat='" +
            results[i].geometry.location.Ya + "' data-lng='" +
            results[i].geometry.location.Za + "'>" + results[i].name + "</a></li>\n";
         }
         $('ul.rly-list').append(htmlFrag);
         $('ul.rly-list').listview('refresh');
      }
   }
   // google.maps.event.addDomListener(window, 'load', initialize);



jQuery(function($) {
        $('#get-dirn').hide();
   $('#destinn').blur(function() {
      if($(this).val().length == 0)
         return;

      console.log($(this).val());
      var address = $(this).val();
      geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        $('#get-dirn').show();
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
   })
});



$('#get-dirn').click(function() {
   getDirections({});
});
function getDirections(argument) {
   directionsService = new google.maps.DirectionsService();
   directionsDisplay = new google.maps.DirectionsRenderer();
   var chicago = new google.maps.LatLng(usersLocation.coords.latitude, usersLocation.coords.longitude);
   var mapOptions = {
      zoom:12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: chicago
   }
   map = new google.maps.Map(document.getElementById("map-dirn"), mapOptions);
   directionsDisplay.setMap(map);
}

function calcRoute() {
var start = "Kothrud, Pune";
var end = "Nigdi, Pune";
var request = {
origin:start,
destination:end,
travelMode: google.maps.TravelMode.TRANSIT
};
directionsService.route(request, function(result, status) {
if (status == google.maps.DirectionsStatus.OK) {
console.log('ok');
directionsDisplay.setDirections(result);
}
});
}



var busStops = { 'bStops': [
   { 'name': 'Yerawada', 'availableBuses': ['123A', '56B'] },
   { 'name': 'Viman Nagar', 'availableBuses': ['123A'] }
]};

var buses = {"buses": [{
   "id" : "123A",
   "orig": "Pune Railway Station",
   "short_orig" : "Pune Stn",
   "dest": "Vagholi Gaon",
   "short_dest" : "Wagholi",
   "waypoints": [{"n": "Wadia College", "t": "10min"},
      {"n": "Bund Garden", "t": "10min"},
      {"n": "Yerawada", "t": "10min"},
      {"n": "Inorbit Mall", "t": "10min"},
      {"n": "Wagholi", "t": "10min"}],
   "timings": ['6 AM', '12 PM', '5PM'],
   "durn" : '60 min',
   "type" : 'AC'
},
{
   "id" : "56B",
   "orig": "Pune Municipal Corporation",
   "short_orig" : "PMC",
   "dest": "Balewadi",
   "short_dest" : "Balewadi",
   "waypoints": [{"n": "E-Square", "t": "10min"},
      {"n": "Symantec", "t": "10min"},
      {"n": "Balewadi", "t": "10min"}],
   "timings": ['6 AM', '12 PM', '5 PM'],
   "durn" : '50 min',
   "type" : 'Non-AC'
}]
};


// Railways
var railways = { 'trains' : [
   { 'id': '123ABC', 'timings' : ['0600', '1200', '1800'], 'waypoints': ['Pune Railway Station', 'Shivajinagar', 'Akurdi', 'Lonavala']}
]};


// Railway stations
var rlyS = { 'stations' : [
   { 'stn-name' : 'Pune Railway Station' }
]};



// Six seater routes
var sixSR = { routes : [
   { 'orig' : 'Yerawada, Pune', 'dest' : 'Vagholi, Pune'},
   { 'orig' : 'Wakad, Pune', 'dest' : 'Katraj, Pune'}
]};



// Google Analytics code begin ======================================================
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-37444267-1']);
_gaq.push(['_trackPageview']);

(function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
// Google Analytics code end ========================================================
