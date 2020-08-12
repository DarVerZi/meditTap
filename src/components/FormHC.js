import React, { Component } from 'react';

class FormHC extends Component{

    nombreRef = React.createRef();
    apellidoRef = React.createRef();
    generoHombreRef = React.createRef();
    generoMujerRef = React.createRef();
    fNacRef = React.createRef();
    direccionRef = React.createRef();
    obserRef = React.createRef();

    /*state = {
        paciente: {},
        status: null
    };

    changeState = (genero) => {
        this.setState({
            paciente: {
                nombre: this.nombreRef.current.value,
                apellido: this.apellidoRef.current.value, 
                fNac: this.fNacRef.current.value,
                direccion: this.direccionRef.current.value,
                obser: this.obserRef.current.value,
                genero: genero 
            }
        });
    }

    recibirFormulario = (e) => {
        e.preventDefault();
        var genero = "hombre";
        if(this.generoHombreRef.current.checked){
            genero = this.generoHombreRef.current.value;
        }else{
            genero = this.generoMujerRef.current.value;
        }
        var user = {
            nombre: this.nombreRef.current.value,
            apellido: this.apellidoRef.current.value, 
            fNac: this.fNacRef.current.value,
            direccion: this.direccionRef.current.value,
            obser: this.obserRef.current.value,
            genero: genero
        };
        this.setState({
            user: user
        });
        console.log(user);
    }

    recogerDatos = (e) => {
        e.preventDefault();
        var genero = "hombre";
        if(this.generoHombreRef.current.checked){
            genero = this.generoHombreRef.current.value;
        }else{
            genero = this.generoMujerRef.current.value;
        }
        this.changeState(genero);

    }*/

    render(){

        /*if(this.state.user.name){
            var user = this.state.user;
        }*/

        return (
            <div id="formulario">
                <div className="center">
                    <div id="content">
                        {/* Crear un formulario */}
                    <form className="mid-form" /*onSubmit={this.recogerDatos}*/>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombres</label>
                            <input type="text" name="nombre" ref={this.nombreRef}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="apellido">Apellidos</label>
                            <input type="text" name="apellido" ref={this.apellidoRef}/>
                        </div>
                        <div className="form-group radibuttons">
                            <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef}/> Hombre
                            <input type="radio" name="genero" value="mujer" ref={this.generoMujerRef}/> Mujer
                        </div>
                        <div className="form-group">
                            <label htmlFor="fNac">Fecha de Nacimiento</label>
                            <input type="text" name="fNac" ref={this.fNacRef}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="direccion">Dirección</label>
                            <input type="text" name="direccion" ref={this.direccionRef}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="obser">Observaciones</label>
                            <textarea name="obser" ref={this.obserRef}></textarea>
                        </div>

                        <div className="clearfix"></div>

                        <input type="submit" value="Enviar" class="btn btn-success"/>

                    </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default FormHC;