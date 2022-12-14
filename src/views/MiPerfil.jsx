import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../context/context";

const MiPerfil = ()=> {

    const navigate = useNavigate()
    const {session, setSession, favorites} = useContext(Context)

    const logout = ()=> {
        localStorage.removeItem('token')
        setSession(null);
        navigate('/login')
    }

    return(
       <main className="perfil">
       <div className="row" style={{alignItems: 'center'}}>
            <div className="col-12">
                <h2>Mi Perfil</h2>
            </div>
            <div className="col-1 mt-4">
                <i className="fa-solid fa-user icono-perfil" style={{fontSize: '80px', color:'#f39c1c'}}></i>
            </div>
            <div className="col-9  mt-4">
                <h3>Hola, {session?.nombre}</h3>
                <p>{session?.correo} </p>
            </div>
            <div className="col-2  mt-4">
                <button type="button" className="btn btn-outline-danger" onClick={()=> logout()}>Cerrar Sesión</button>
            </div>
            <div className="col-12 mt-4">
                <Link type="button" to="/favoritos" className="btn btn-link">Favoritos ({favorites.length})</Link>
            </div>


        </div>
       </main>
        
    )
}

export default MiPerfil 