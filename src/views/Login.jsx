import { Link } from 'react-router-dom'

const Login = () => {
    return(
    <div>
        
        <main className="logearse">
        <h2 className="d-flex justify-content-center">Iniciar sesion</h2>
            
            <div className="row d-flex justify-content-center">
                <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="Email" aria-label="mail"/>
                </div>
                <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="Password" aria-label="password"/>
                </div>
               <button type="button" className="btn btn-primary">Iniciar</button>
               <Link to="/registrar" className="btn btn-primary">Registrate</Link>
            </div>
        </main>
    </div>
    )

}
export default Login