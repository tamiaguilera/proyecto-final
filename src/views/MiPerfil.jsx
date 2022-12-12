const MiPerfil = ()=> {
    const usuario = {nombre: "Catalina", correo: "catalina@prueba.cl"}; 
    return(
       <main className="perfil">
       <div className="row g-3">
            <div className="col-12">
                <i className="fa-solid fa-user  icono-perfil"></i>
                <h3>Hola, {usuario.nombre}</h3>
                
            </div>
            <div className="col-12">
            <button type="button" className="btn btn-link">Favoritos (0)</button>
            </div>
        </div>


       </main>
        
    )
}

export default MiPerfil 