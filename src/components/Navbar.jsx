import { Link } from "react-router-dom"
import { useContext } from "react"
import Context from "../context/context"

const Navbar = ()=> {
    const { cartTotal } = useContext(Context)
    
    return (

        <nav className="main-nav">
            <Link to="/"> <h1> <i className="fa-solid fa-paw"></i> OchoVidas</h1> </Link>
            <Link to="/carrito"> <i className="fa-solid fa-cart-shopping"> ${cartTotal()}</i></Link>
            <Link to="/likes"><i className="fa-solid fa-heart"></i> </Link>
            <Link><i className="fa-solid fa-user"></i></Link>
        </nav>
    )
}

export default Navbar 