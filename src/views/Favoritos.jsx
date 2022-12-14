// in
import FavoritiesList from "../components/FavoritiesList";

const Favoritos = () => {
  // const navigate = useNavigate();

  // const logout = () => {
  //   localStorage.removeItem("token");
  //   navigate("/login");
  // };
  return (
    <div>
      <main className="vista-fav">
        <h1>Tus productos favoritos</h1>
        <FavoritiesList />
      </main>
    </div>
  );
};

export default Favoritos;
