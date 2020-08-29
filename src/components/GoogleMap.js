import React from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
} from 'react-google-maps';




const Map = (props) => {
    return (
        <GoogleMap
            defaultZoom={17}
            defaultCenter={{ lat: -34.602151, lng: -58.442174 }}
        >

        <Marker position={{ lat: -34.602151, lng: -58.442174 }}></Marker>
        </GoogleMap>


    );
};

//-34.602151, -58.442174
export default withScriptjs(
    withGoogleMap(
        Map
    )
)
