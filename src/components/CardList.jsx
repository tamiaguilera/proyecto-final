import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import Context from "../context/context.js";

import { formatPrice } from "../utils/utils.js";

const Menu = () => {
  const { menu, addToCart, favorites, addFavorities } = useContext(Context);
  const navigate = useNavigate();

  const viewProducto = (id) => navigate(`/alimento/${id}`);

  return (
    <section className="menu ">
      {menu.map((item) => {
        return (
          <div className="card" key={item.id}>
            <div className="content">
              <div className="corazon">
                <i
                  onClick={() => {
                    addFavorities(item.id);
                  }}
                  className={`${
                    favorites.includes(item.id) ? "fa-solid" : "fa-regular"
                  } fa-heart`}
                ></i>
              </div>
              <img src={item.img} alt={item.name} />
              <h4>{item.name}</h4>
              <h3 className="price">$ {formatPrice(item.price)}</h3>

              <div className="btn-row">
                <button
                  className="btn btn-primary"
                  onClick={() => viewProducto(item.id)}
                >
                  Ver más
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => addToCart(item)}
                >
                  Añadir
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default Menu;
