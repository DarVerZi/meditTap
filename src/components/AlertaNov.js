import React from 'react';
import axios from 'axios';

export default function AlertaNov() {

    return (
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Novedades!</strong> Hay una actualización en tu Historia Clínica.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );  
}