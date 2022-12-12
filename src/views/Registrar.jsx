const Registrar = () => {
    return(
    <div>
        <form className="registrar">

            <h2 className="d-flex justify-content-center">Registro</h2>
            <div className="row d-flex justify-content-center">
                <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="Nombre" />
                </div>
                <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="Correo"/>
                </div>
                <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="Contraseña" />
                </div>
                <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="Repetir Contraseña" />
                </div>
                <button className="btn btn-primary">Regístrate</button>
            </div>
        </form>
    </div>
    )

}

export default Registrar

