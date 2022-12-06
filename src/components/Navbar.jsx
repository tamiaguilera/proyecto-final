import { Link } from "react-router-dom"
import { useContext } from "react"
import Context from "../context/context"


const Navbar = ()=> {
    const { cartTotal } = useContext(Context)
    
    return (

        <nav className="main-nav">
           <Link to="/" class="navbar-brand logo" href="/"><img src="img/logo.png" alt="" /></Link>
            <Link to="/carrito"> <i className="fa-solid fa-cart-shopping"> ${cartTotal()}</i></Link>
            <Link to="/likes"><i className="fa-solid fa-heart"></i> </Link>
            <Link to="/login"><i className="fa-solid fa-user"></i></Link>
        </nav>
    )
}

export default Navbar 