import React from "react";
import "./index.css";

class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mapLocations: [
                {
                    name: "The Wedding Venue",
                    title: "La Caille",
                    position: { lat: 40.577140, lng: -111.795230 },
                    description: "This is where our wedding will be held",
                    image: "https://media-cdn.tripadvisor.com/media/photo-s/02/63/5b/2c/la-caille.jpg",
                    webAdress: "https://www.lacaille.com/"
                },
                {
                    name: "The Clif Lodge",
                    title: "Snowbird",
                    position: { lat: 40.583389, lng: -111.651588 },
                    description: "Snowbird's Cliff Lodge",
                    image: "https://www.skiutah.com/blog/authors/erika/a-look-inside-the-cliff-lodge/pictures/CliffSpa%20Pool%20C.jpg/picture--large",
                    webAdress: "https://www.snowbird.com/lodging/the-cliff-lodge/"
                },
                {
                    name: "The Hyatt Place",
                    title: "CottonWood Heights",
                    position: { lat: 40.634960, lng: -111.802660 },
                    description: "Hotel at mouth of the Cottonwood Canyons",
                    image: "https://lh3.googleusercontent.com/p/AF1QipPTdkDE2BW-ieSZfK2jVhvFZ0dsrPNDee7T_2lT=w296-h202-n-k-rw-no-v1",
                    webAdress: "https://www.hyatt.com/en-US/hotel/utah/hyatt-place-salt-lake-city-cottonwood/slczc?src=corp_lclb_gmb_seo_nam_slczc"
                },
                {
                    name: "Tru By Hilton",
                    title: "Midvale",
                    position: { lat: 40.617440, lng: -111.916250 },
                    description: "This hotel is about 15 mintues from the wedding venue and right next to Top Golf!",
                    image: "https://lh3.googleusercontent.com/p/AF1QipOi4uTexjoO5eDuYts1nOE6OuwuFCAwWLoZwPkT=w296-h202-n-k-rw-no-v1",
                    webAdress: "https://www.hilton.com/en/hotels/slcmvru-tru-salt-lake-city-midvale/?SEO_id=GMB-RU-SLCMVRU"
                }
            ]
        }
    }

    //lifecycle event to call the render map function
    componentDidMount() {
        this.loadMap();
    }
    //load the script
    loadMap = () => {
        loadScript(
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyDgASSha_hUVJIML5cpL4zdXrTCp2OZfXI&callback=initMap"
        );
        window.initMap = this.initMap;
    };
    // center: { lat: 40.577140, lng: -111.795230 },
    initMap = () => {
        const map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: 40.577150, lng: -111.795230 },
            zoom: 11
        });

        //initializing the info wondow
        const infowindow = new window.google.maps.InfoWindow();

        this.state.mapLocations.map(location => {
            //getting the content of the info window from within the loop
            const contentString = `<div id="mapContainer" class="map-container">
            
            <a class="map-location-link" href="${location.webAdress}">${location.name} (learn more)</a>
            <p class ="location-description">${location.description}</p>
            <img class="location-image" src=${location.image} />
          
            </div>`;
            //above used class vs className.. must be a hard coded HTML input
            const marker = new window.google.maps.Marker({
                position: { lat: location.position.lat, lng: location.position.lng },
                map: map,
                title: location.title
            });

            marker.addListener("click",
                function () {
                    infowindow.setContent(contentString);
                    //linking the marker and the info window with a click event
                    infowindow.open(map, marker);
                }
            );


        });

    }

    render() {

        return (
            <main>
                <div id="map" className='map-styling' />
            </main>
        );
    }
}

//Creating the script to access Google Maps API
function loadScript(url) {
    var index = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
}

export default Map;