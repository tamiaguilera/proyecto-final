import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    
    const [ user, setUser ] = useState('')
    const [password, setPassword ] = useState('')
    const [error, setError] = useState(false)
    
    
    const loginData = {
        user: 'admin',
        password: 'admin123'
    }
    
    const login = (e)=>{
        e.preventDefault()

        if(user === loginData.user && password === loginData.password){
            localStorage.setItem('token', 'test_token_123456789')
           navigate('/')
        }else{
           setError(true)
        }
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