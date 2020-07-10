import React from "react";
import "./index.css";

class Map extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mapLocations: [
                {
                    name: "River Bottom Ranch(Venue)",
                    title: "River Bottom Ranch",
                    position: { lat: 40.510361, lng: -111.463768 },
                    description: "Where our wedding will be held",
                    image: "https://scontent-den4-1.cdninstagram.com/v/t51.2885-15/e35/c240.0.960.960a/s240x240/96360930_162622128579184_4695332665022267376_n.jpg?_nc_ht=scontent-den4-1.cdninstagram.com&_nc_cat=104&_nc_ohc=hwxp5rTaMbkAX_QPgJA&oh=03c591e7e1e1adb90e610cae41668792&oe=5F253659",
                    webAdress: "https://riverbottomsranch.com/weddings"
                },
                {
                    name: "St. Regis",
                    title: "saint regis",
                    position: { lat: 40.638248, lng: -111.476578 },
                    description: "St. Regis Hotel at Deer Valley",
                    image: "https://cache.marriott.com/marriottassets/marriott/SLCXR/slcxr-exterior-5710-hor-clsc.jpg?interpolation=progressive-bilinear&downsize=*:253px",
                    webAdress: "https://www.marriott.com/hotels/travel/slcxr-the-st-regis-deer-valley/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTUwMjgwOS03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU="
                },
                {
                    name: "The Peaks Hotel",
                    title: "The Peaks Hotel",
                    position: { lat: 40.667171, lng: -111.514221 },
                    description: "Great hotel in Park City",
                    image: "https://images.ctfassets.net/p7m0y70d37w2/DO0GKM962OgEKyq28sWkk/3e90bf853a585c2d7c2b578e84c2ce0b/157_CLR_ONL_Peaks_Day1_Trevor_Hooper_Photo.jpg?h=375",
                    webAdress: "https://www.parkcitypeaks.com/"
                },
                {
                    name: "The Chateaux",
                    title: "The Chateaux",
                    position: { lat: 40.623460, lng: -111.488300 },
                    description: "Afforable hotel at Deer Valley Ski Resort",
                    image: "https://www.the-chateaux.com/uploads/1/0/6/8/106825145/chateaux-deer-valley043_10.jpg",
                    webAdress: "https://www.the-chateaux.com/?utm_source=local-directories&utm_medium=organic&utm_campaign=travelclick-localconnect"
                },
                {
                    name: "The Sheraton Park City",
                    title: "The Sheraton",
                    position: { lat: 40.663770, lng: -111.497080 },
                    description: "Afforable hotel at Deer Valley Ski Resort",
                    image: "https://www.the-chateaux.com/uploads/1/0/6/8/106825145/chateaux-deer-valley043_10.jpg",
                    webAdress: "https://www.the-chateaux.com/?utm_source=local-directories&utm_medium=organic&utm_campaign=travelclick-localconnect"
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
            center: { lat: 40.595000, lng: -111.465000 },
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