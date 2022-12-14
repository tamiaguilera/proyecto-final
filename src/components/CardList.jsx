import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import Context from "../context/context.js"




import { formatPrice } from "../utils/utils.js"

const Menu = () => {
    const { menu, addToCart, favoritos, handleFavoritos } = useContext(Context)
    const navigate = useNavigate()
    const [fill, setFill] = useState(["P001", "P002"])
    const handleFavoritos2 = (id) => {
        if (
            fill.includes(id)

        ) { 
            const result = fill.filter(element => element !== id); 
            setFill(result)
        }
        else{setFill([...fill, id])}
        
        
    }

    const viewProducto = (id) => navigate(`/alimento/${id}`)
 
    return (
        <section className="menu ">
            {
                menu.map((item) => {
                    return (
                        <div className="card" key={item.id}>
                            <div className="content"
                            >
                                <div className="corazon">
                                <i onClick={() => { handleFavoritos2(item.id) }} className={`${fill.includes(item.id) ? "fa-solid" : "fa-regular"} fa-heart`}></i>
                                </div>
                                <img src={item.img} alt={item.name} />
                                {/* style={{backgroundImage: `url(${foto.src.portrait})`}}> */}
                                


                                <h4>{item.name}</h4>
                                <h3 className="price">$ {formatPrice(item.price)}</h3>

                                <div className="btn-row">
                                    <button className="btn btn-primary" onClick={() => viewProducto(item.id)} >Ver más</button>
                                    <button className="btn btn-secondary" onClick={() => addToCart(item)}>Añadir</button>
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