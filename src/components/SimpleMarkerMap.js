import React from 'react';
import{
    withScriptjs,
    withGoogleMap,
    Marker,
} from 'react-google-maps';

const SimpleMarker = (props)=>{
    return(
        <Marker onClick={this.onMarkerClick}
        name={'Current Location'}/>
     );
    };

export default withScriptjs(
    withGoogleMap(
        SimpleMarker
    )
)


//-34.6021656 *-* -58.4427243