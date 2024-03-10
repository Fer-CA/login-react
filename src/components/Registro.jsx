import { useState } from "react";
import Formulario from "./Formulario"
import SocialButton from "./SocialButton"
import Alert from "./Alert"

const Registro = ({obtenerAlert}) => {
    
    return (
        <>
            <div className="container col-sm-7 col-md-6 col-lg-5 col-xxl-4 p-5 text-center gap">
                <h1 className="fs-1">Crea una cuenta</h1>
                <div className="d-flex gap-3 justify-content-center my-3">
                    <SocialButton icon="fa-brands fa-facebook"/>
                    <SocialButton icon="fa-brands fa-github"/>
                    <SocialButton icon="fa-brands fa-linkedin"/>
                </div>
                <p>O usa tu email para registrarte</p>
                <Formulario obtenerAlertRegistro={obtenerAlert}/>
                
            </div>
        </>
    )
}

export default Registro;