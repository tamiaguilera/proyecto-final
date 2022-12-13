import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Registrar = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [validacionClave, setValidacionClave] = useState(false);

    const onSubmit = (form) => {
        console.log(form);
        if(form.contrasena1 === form.contrasena2){
            setValidacionClave(false);
            const obj = {
                nombre: form.nombre,
                correo: form.correo,
                contrasena: form.contrasena1
            }
            console.log(obj);
            fetch('api/usuarios', 
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(obj)
            }
            )
            .then( resp => JSON.stringify(resp))
            .then( resp => navigate("/login"))
        }else{
            setValidacionClave(true);
            throw Error("claves no son iguales");
        }
    };

    return(
    <div>
        <form className="registrar" onSubmit={handleSubmit(onSubmit)}>

            <h2 className="d-flex justify-content-center">Registro</h2>
            <div className="row d-flex justify-content-center">
                <div className="col-12 mb-3">
                    <input type="text" 
                        className="form-control" 
                        id="validationCustom03" 
                        aria-invalid={errors.nombre ? "true" : "false"}
                        {...register("nombre", {required: true})}
                        placeholder="Ingrese Nombre"  />
                     {errors.nombre?.type === 'required' 
                     && <div className={`invalid-feedback`} style={{display: 'block'}}>
                            Este campo es requerido
                        </div>}
                </div>
                <div className="col-12 mb-3">
                    <input type="text" 
                        className="form-control" 
                        id="validationCustom03" 
                        aria-invalid={errors.correo ? "true" : "false"}
                        {...register("correo", {required: true})}
                        placeholder="Ingrese Correo"  />
                     {errors.correo?.type === 'required' 
                     && <div className={`invalid-feedback`} style={{display: 'block'}}>
                            Este campo es requerido
                        </div>}
                </div>
                <div className="col-12 mb-3">
                    <input type="text" 
                        className="form-control" 
                        id="validationCustom03" 
                        aria-invalid={errors.contrasena1 ? "true" : "false"}
                        {...register("contrasena1", {required: true})}
                        placeholder="Ingrese Contraseña"  />
                     {errors.contrasena1?.type === 'required' 
                     && <div className={`invalid-feedback`} style={{display: 'block'}}>
                            Este campo es requerido
                        </div>}
                </div>
                <div className="col-12 mb-3">
                    <input type="text" 
                        className="form-control" 
                        id="validationCustom03" 
                        aria-invalid={errors.contrasena2 ? "true" : "false"}
                        {...register("contrasena2", {required: true})}
                        placeholder="Repetir Contraseña"  />
                     {errors.contrasena2?.type === 'required' 
                     && <div className={`invalid-feedback`} style={{display: 'block'}}>
                            Este campo es requerido
                        </div>}
                </div>
                <div className="col-12 mb-3">
                     {validacionClave 
                     && <div className={`invalid-feedback`} style={{display: 'block'}}>
                            Las contraseñas no coinciden, valida nuevamente
                        </div>}
                </div>
                <input type="submit" value="Registrar" className="btn btn-primary" />
            </div>
        </form>
    </div>
    )

}

export default Registrar

