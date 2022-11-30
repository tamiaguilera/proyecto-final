import { Link } from "react-router-dom"
import { useContext } from "react"
import Context from "../context/context"

const Navbar = ()=> {
    const { cartTotal } = useContext(Context)
    
    return (

        <nav className="main-nav">
            <Link to="/"> <h1> <i className="fa-solid fa-paw"></i> TodoMascotas</h1> </Link>
            <Link to="/carrito"> <i className="fa-solid fa-user"></i> <i className="fa-solid fa-heart"></i>  <i className="fa-solid fa-cart-shopping"> ${cartTotal()}</i></Link>
        </nav>
    )
}

export default Navbar 