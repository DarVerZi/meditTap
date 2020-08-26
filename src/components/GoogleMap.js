import React from 'react';
import{
    GoogleMap,
    withScriptjs,
    withGoogleMap,
} from 'react-google-maps';

const Map = (props)=>{
    return(
     <GoogleMap
     defaultZoom={17} 
     defaultCenter={{lat: -34.6021656, lng: -58.4427243}}
     />
     );
    };

export default withScriptjs(
    withGoogleMap(
        Map
    )
)
