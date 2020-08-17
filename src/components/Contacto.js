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
                            <input type="text" class="form-control" id="inputNombre" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputApellido">Apellidos</label>
                            <input type="text" class="form-control" id="inputApellido" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputTelPrin">Teléfono</label>
                            <input type="text" class="form-control" id="inputTelPrin" />
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputEmail">Email</label>
                            <input type="email" class="form-control" id="inputEmail" />
                        </div>
                    </div>
                    <div class="form-group">
    <label for="inputObser">Consulta</label>
    <textarea type="text" class="form-control" id="inputObser" placeholder="Dejanos tu consulta y te respoderemos a la brevedad..."/>
  </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                        <p>Email: medictap@gmail.com</p>
                        <p>Teléfono de contacto: 11-4123-1234</p>
                        <p>Horario de atención: Lunes a Viernes de 9hs a 16hs</p>
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