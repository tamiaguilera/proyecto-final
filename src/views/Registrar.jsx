import { useForm } from "react-hook-form";

const Registrar = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (e) => {
        console.log(e);
    };
    return(
    <div>
        <form className="registrar" onSubmit={handleSubmit(onSubmit)}>

            <h2 className="d-flex justify-content-center">Registro</h2>
            <div className="row d-flex justify-content-center">
                <div className="col-12 mb-3">
                    <input type="text" {...register("nombre", {required: true})} className="form-control" placeholder="Nombre"  />
                </div>
                <div className="col-12 mb-3">
                    <input type="text" {...register("correo", {required: true})}   className="form-control" placeholder="Correo"/>
                </div>
                <div className="col-12 mb-3">
                    <input type="text" {...register("constraseña1", {required: true})} className="form-control" placeholder="Contraseña" />
                </div>
                <div className="col-12 mb-3">
                    <input type="text"  {...register("contraseña2", {required: true})} className="form-control" placeholder="Repetir Contraseña" />
                </div>
                <input type="submit" value="Registrar" className="btn btn-primary" />
            </div>
        </form>
    </div>
    )

}

export default Registrar

