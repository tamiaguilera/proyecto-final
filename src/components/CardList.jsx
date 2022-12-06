import {useNavigate} from "react-router-dom"
import { useContext } from "react"
import Context from "../context/context.js"



import { formatPrice } from "../utils/utils.js"

const Menu = ()=>{
    const { menu , addToCart} = useContext(Context)
    const navigate = useNavigate()

    const viewPizza = (id)=> navigate(`/pizza/${id}`)

    return(
        <section className="menu">
            {
                menu.map((item)=> {
                    return (
                        <div className="card" key={item.id}>
                            <div className="content">
                                <img src={item.img} alt={item.name} />
                                <div className="card-favorito">
                                    <i className="fa-solid fa-heart" />
                                </div>
                                <h4>{item.name}</h4>
                                  
                                <h3 className="price">$ {formatPrice (item.price) }</h3>

                                <div className="btn-row">
                                    <button className="btn btn-primary" onClick={()=> viewPizza(item.id)} >Ver más</button>
                                    <button className="btn btn-secondary" onClick={()=> addToCart(item)}>Añadir</button>
                                </div>
                            </div>

                        </div>
                    )
                })
            }

        </section>


    )

}
export default Menu