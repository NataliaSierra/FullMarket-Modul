import '../Register/Register.css';

export const Register=()=>{
    return(
        <>
        <div className='body'>
            <div className='form-register'>
                <div className='elements'>
                    <div className='register'>
                        <h1>Registrate</h1>   
                    </div>
                    <input className='input' type="text" id="nombreCompleto" placeholder="Nombre Completo"/>
                    <select className='controls'>
                        <option>Tipo de Identificacion</option>
                        <option value=''>Tarjeta de Identidad</option>
                        <option value=''>Cedula de Ciudadania</option>
                        <option value=''>Cedula de Extranjeria</option>
                    </select>
                    <input className='input' type='number' id='' placeholder='N. Identificacion'/>
                    <input className='input' type='email' id='correo' placeholder='Correo Electronico'/>
                    <input className='input' type='password' id='password' placeholder='Contraseña'/>
                    <select className='controls'>
                        <option>Genero</option>
                        <option value=''>Femenino</option>
                        <option value=''>Masculino</option>
                        <option value=''>Prefiero no decirlo</option>
                    </select>
                </div>
            </div>    
            <div className='form-register-two'>
                <input className='input' type='text' id='dpto' placeholder='Departamento'/>
                <select className='controls'>
                    <option>Municipio</option>
                </select>
                <input className='input' type='text' id='direccion' placeholder='Direccion'/>
            <input className='input' type='number' id='telefono' placeholder='Telefono'/>
            <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
            <input className="button" type="submit" value="Registrar"/>
            <p><a href="#">¿Ya tengo Cuenta?</a></p>
        </div> 
    </div>
    </>
)

}