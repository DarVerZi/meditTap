import urls from '.webServices.js';
import axios from 'axios';

export const cualquiera = async form => {
    let url = urls.usuarios;
    let response = await axios.get(url);
    return response;
}