import urlWebServices from '../controller/webServices.js';
 
export const loginGrupo= async function(login,signal)
{
    //url webservices
    let url = urlWebServices.loginGrupo;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('dni', login.dni);
    formData.append('password', login.password);

    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/raw',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:8000',
                'Content-Type': 'application/raw'},
            body: formData,
            signal: signal    
        });

          //setToken();
        let url = urls.unPaciente;
        url = url.replace(':paciente_id', form.id);
        let response = await axios.get(url);
        return response.data;
} 
        
        let rdo = response.status;
        console.log("response",rdo);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo)
            {
                case 201:
                {
                    //guardo token
                    /*localStorage.setItem("x",data.token.token);
                    //guardo usuario logueado
                    let user = data.token.user;
                    localStorage.setItem("nombre",user.name);
                    localStorage.setItem("dni",user.dni);
                    */
                    let user = data.user;
                    localStorage.setItem("nombre",user.name);
                    localStorage.setItem("dni",user.dni);
                    
                    return ({rdo:0,mensaje:"Ok"});//correcto
                }
                case 202:
                {
                    //error mail
                    return ({rdo:1,mensaje:"El dni ingresado no existe en nuestra base."});
                }
                case 203:
                {
                    //error password
                    return ({rdo:1,mensaje:"La contraseña no es correcta."});
                }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {
        console.log("error",error);
    };
}