import { useNavigate } from "react-router-dom"
import Carrusel from "../components/Carrusel.jsx"
import CardList from "../components/CardList.jsx"
import Header from "../components/Header.jsx"

const Home = ()=>{
    const navigate = useNavigate()

    const logout = ()=> {
        localStorage.removeItem('token')
        navigate('/login')
    }
    return (
        <div>
           
            <Carrusel/>
            <Header></Header>
            
            <main>
            <button onClick={()=> logout()}>Logout</button>
                <CardList></CardList>
            </main>
        </div>
    )
}

export default Home