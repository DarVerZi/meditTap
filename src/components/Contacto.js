import React from 'react';
import ButtonMail from './ButtonMail';

class Contacto extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputNombre">Nombres</label>
                            <input type="text" value="Dario Alberto" class="form-control" id="inputNombre" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputApellido">Apellidos</label>
                            <input type="text" value="Vergara Zatti" class="form-control" id="inputApellido" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputDomicilio">Domicilio</label>
                            <input type="text" value="25 de Mayo 432, Moron" class="form-control" id="inputDomicilio" placeholder="Calle, número, depto, etc." />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputEmail">Email</label>
                            <input type="email" value="dariovergara@gmail.com" class="form-control" id="inputEmail" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputTelPrin">Telefono Principal</label>
                            <input type="text" value="54 011 1234 5678" class="form-control" id="inputTelPrin" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputCel">Telefono Celular</label>
                            <input type="text" value="54 911 1234 5678" class="form-control" id="inputCel" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <p>Email: medictap@gmail.com</p>
                        <p>Telefono de contacto: 11-4123-1234 / Horario de atención: Lunes a Viernes de 9hs a 16hs</p>
                        </div>
                        <div class="form-group col-md-6">
                        <p>Enviar datos de contacto via email</p> <ButtonMail/>
                        </div>
                    </div>
                    {/*<button type="submit" class="btn btn-primary">Sign in</button>*/}
                </form>
            </div>
        )
    };

}
export default Contacto;