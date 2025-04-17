<<<<<<< HEAD
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12", 
    center: listing.geometry.coordinates, 
    zoom: 9,
});

// console.log(coordinates);

const marker = new mapboxgl.Marker({color:"red"})
    .setLngLat(listing.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(`<h4>${listing.title}</h4><p>Exact Location Will Be Provided After Booking</p>`))
    .addTo(map);
=======

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/dark-v11", // style URL
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9, // starting zoom
});

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates) // listing.geometry.coordinates
    .setPopup(new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<h3>${listingtitle}</h3><p>Exact Location will be provided after booking</p>`))
    .addTo(map);

>>>>>>> extra/main
