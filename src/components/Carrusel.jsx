const Carrusel = () => {
  return (
    <div className="carousel-container">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-img carousel-inner">
          <div className="carousel-item active">
            <img src="/img/banner.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img/perros-logo.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/img/gato-logo.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )

}
export default Carrusel