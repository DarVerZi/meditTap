import React from 'react';
import Map from './GoogleMap';
import credentials from './CredentialsApiMap';

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapsKey}`;

class DondeEstamos extends React.Component {

    render () {
        return (
           <div className="col-12">
               <div class="form-row">
                   <div class="form-group col-md-6">
                    <Map
                        googleMapURL= {mapURL}
                        containerElement= {<div style={{height: '400px'}}/>}
                        mapElement= {<div style={{height:'100%'}}/>}
                        loadingElement= {<p>CARGANDO</p>}
                        initMap
                    />
                   </div>
                   <div class="form-group col-md-6">
                       <p>Nos encontramos en el barrio de Villa Crespo, CABA</p>
                       <p>Av. Warnes 397, 3º "9" - Esquina Scalabrini Ortiz</p>
                       <p>Estamos a 5 cuadras del Parque Centenario</p>
                   </div>
               </div>
           </div>
        )
    };

}
export default DondeEstamos;
