import React from 'react';
import mapa from './mapa-medictap.png';

class DondeEstamos extends React.Component {

    render () {
        return (
           <div className="col-12">
               <div class="form-row">
                   <div class="form-group col-md-6">
                     <img src={mapa} alt="mapa-villacrespo" height="100%" width="100%"/>
                   </div>
                   <div class="form-group col-md-6">
                       <p>Nos encontramos en el barrio de Villa Crespo, CABA</p>
                       <p>Av. Warnes 932, 3º "9" (A media cuadra de Warnes y Juan B.Justo)</p>
                       <p>Estamos a 7/8 cuadras de la estación de subte B Malabia-Osvaldo Pugliese</p>
                   </div>
               </div>
           </div>
        )
    };

}
export default DondeEstamos;