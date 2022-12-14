import Carrusel from "../components/Carrusel.jsx";
import FavoritiesList from "../components/FavoritiesList";
import Header from "../components/Header.jsx";

const Favoritos = () => {
  return (
    <div>
      <Carrusel />
      <Header></Header>

      <main>
        <FavoritiesList />
      </main>
    </div>
  );
};

export default Favoritos;
