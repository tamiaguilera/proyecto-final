import { Link } from "react-router-dom"
import { useContext } from "react"
import Context from "../context/context"


const Navbar = ()=> {
    const { cartTotal } = useContext(Context)
    
    return (

        <nav className="main-nav">
            <div className="row">
                <div className="col-8 links nav-logo">
                <Link to="/" className="navbar-brand logo" href="/"><img src="/img/logo.png" alt="8Vidas" /></Link>
                </div>
                <div className="col-1 links nav-login">
                <Link to="/favoritos"><i className="fa-solid fa-heart"></i> </Link>
                </div>
                <div className="col-1 links nav-login">
                <Link to="/login"><i className="fa-solid fa-user"></i></Link>
                </div>
                <div className="col-2 links nav-cart">
                <Link to="/carrito"> <i className="fa-solid fa-cart-shopping"> ${cartTotal()}</i></Link>
                </div>
            </div>
         
        </nav>
    )
}

export default Navbar 