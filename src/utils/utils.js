const formatPrice = (price)=> price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")
const validarSesion = () => localStorage.getItem('token');
export {
    formatPrice,
    validarSesion
}