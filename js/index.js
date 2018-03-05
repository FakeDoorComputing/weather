var feedURL = "https://www.metaweather.com/api/location/44418/";

$(document).on('pagecreate', '#feedPage', function(event) {

	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open("GET", feedURL, false);
	xmlhttp.send();

	var weather= JSON.parse(xmlhttp.responseText);

	var ractive = new Ractive({
    	el: 'container',
    	template: '#myTemplate',
    	data: { weather : weather.consolidated_weather }
	});

});
