
   
	// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
   
	mapboxgl.accessToken = mapToken;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 4 // starting zoom
    });

console.log(coordinates);
    const marker = new mapboxgl.Marker({color:'red'})
        .setLngLat(coordinates)
        .addTo(map);
