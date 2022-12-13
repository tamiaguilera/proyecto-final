import CartList from "../components/CartList.jsx"
import { useContext } from "react"
import Context from "../context/context.js"

const Cart = ()=> {
    const { cart, addToCart, removeFromCart, cartTotal } = useContext(Context)
    return(
        <form>
            <div className="cart">
                <h2>Detalles del Pedido</h2>
                {
                    cart.length !== 0 ?
                    <CartList 
                        cart={cart} 
                        addToCart={addToCart} 
                        removeFromCart={removeFromCart} 
                        cartTotal={cartTotal}>
                    </CartList>
                    : <p className="empty-cart" > No hay elementos en el carrito</p>
                }
            </div>
        </form>

    )

}
export default Cart