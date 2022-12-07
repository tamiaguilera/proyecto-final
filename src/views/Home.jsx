import Carrusel from "../components/Carrusel.jsx"
import CardList from "../components/CardList.jsx"
import Header from "../components/Header.jsx"

const Home = ()=>{
    return (
        <div>
            <Carrusel/>
            <Header></Header>
            
            <main>
                <CardList></CardList>
            </main>
        </div>
    )
}

export default Home