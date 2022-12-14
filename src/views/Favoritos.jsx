import { useNavigate } from "react-router-dom";
import Carrusel from "../components/Carrusel.jsx";
import FavoritiesList from "../components/FavoritiesList";
import Header from "../components/Header.jsx";

const Favoritos = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
      <Carrusel />
      <Header></Header>

      <main>
        <button onClick={() => logout()}>Logout</button>
        <FavoritiesList />
      </main>
    </div>
  );
};

export default Favoritos;
