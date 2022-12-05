const Registrar = () => {
    return(
    <div>
        <main className="registrar">
            <h2 className="d-flex justify-content-center">Registro</h2>
            <div className="row d-flex justify-content-center">
                <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="Nombre" aria-label="First name"/>
                </div>
                <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="Email" aria-label="Last name"/>
                </div>
                <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="Password" aria-label="First name"/>
                </div>
                <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="Repetir Password" aria-label="Last name"/>
                </div>
                <button type="button" class="btn btn-primary">Registrarme</button>
            </div>
        </main>
    </div>
    )

}

export default Registrar

