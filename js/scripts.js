
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
   "durn" : '60 min'
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
   "durn" : '50 min'
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
