import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Context from '../context/context'

const Login = () => {
    const navigate = useNavigate()
    
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const {setSession} = useContext(Context)
    useEffect( () => {
        window.scrollTo(0, 0);
    },[])

    const login = (e)=>{
        e.preventDefault()
        fetch('api/usuarios/validar', 
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({correo: user, contrasena: password})
        }
        )
        .then( resp => resp.json())
        .then( resp => {
            console.log(resp);
            if(resp.status){
                localStorage.setItem('token', JSON.stringify(resp));
                setSession(resp);
                navigate('/');
            }else{
                setError(true)
            }
        })
    }

    return(
    <form className="logearse" onSubmit={(e)=> login(e)}>
        <h2 className="d-flex justify-content-center">Iniciar sesion</h2>
            
            <div className="row d-flex justify-content-center">
                <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="Usuario" onChange={(e)=> setUser(e.target.value)}/>
                </div>
                <div className="col-12 mb-3">
                    <input type="password" className="form-control" placeholder="Contraseña" onChange={(e)=> setPassword(e.target.value)}/>
                </div>
               <button className="btn btn-primary">Iniciar</button>
               <Link to="/registrar" className="btn btn-primary">Registrate</Link>
              
               { error && <small>* Usuario y Contraseña incorrectos(s)</small> }
            </div>
            
        </form>
    
    )

}
export default Login