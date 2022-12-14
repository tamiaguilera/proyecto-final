import './App.css'

import ProtectedRoute from './components/ProtectedRouter.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Context from './context/context.js'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './views/Home.jsx'
import Producto from './views/Producto.jsx'
import Cart from './views/Cart.jsx'
import Payment from './views/Payment.jsx'
import NotFound from './views/NotFound.jsx'

import Registrar from './views/Registrar.jsx'
import Login from './views/Login.jsx'
import { formatPrice } from './utils/utils'
import Favoritos from './views/Favoritos.jsx'
import MiPerfil from './views/MiPerfil'


function App() {
  const [menu, setMenu] = useState([])
  const [cart, setCart] = useState([])
  let miSesion = null;

  if(localStorage.getItem('token') != null){
    miSesion = JSON.parse(localStorage.getItem('token'));
  }

  const [session, setSession] = useState(miSesion)
  const addToCart = (item)=> {
    const itemIndex = cart.findIndex((alimento)=> alimento.id === item.id)
    const updateCart = [...cart]
    if(itemIndex === -1){
      const alimento = {
        id: item.id,
        count: 1,
        price: item.price,
        img: item.img, 
        name: item.name
      }
      updateCart.push(alimento)
    } else {
      updateCart[itemIndex].count+= 1

    }
    setCart(updateCart)
  }

  const removeFromCart = (item)=>{
    const itemIndex = cart.findIndex((alimento)=> alimento.id === item.id)
    const updateCart = [...cart]
    console.log(itemIndex)
    updateCart[itemIndex].count -= 1
    console.log(updateCart)
    if(updateCart[itemIndex].count <= 0){
      updateCart.splice(itemIndex, 1)
    }
    setCart(updateCart)
  }

  const cartTotal = ()=>{
    let total = 0
    cart.forEach((item)=> total += item.count * item.price)

    return formatPrice(total)
  }

  useEffect(()=> {
    fetch('/alimento.json')
      .then((res)=> res.json())
      .then((json)=> setMenu(json))
      .catch((error)=> console.log(error))
  }, [])

  const globalState = {menu, cart, addToCart, removeFromCart, cartTotal, session, setSession }

return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/"element={<Home></Home>} >
          </Route>
          <Route path='/alimento/:id'element={ <Producto/> } ></Route>
          <Route path='/carrito'element={ <Cart /> } ></Route>
          <Route path='/pagar'element={ <Payment /> } ></Route>
          <Route path='/registrar' element={ <Registrar /> } ></Route>
          <Route path='*' element={ <NotFound /> } ></Route>
          <Route path='/favoritos' element={
            <ProtectedRoute>
              <Favoritos></Favoritos>
            </ProtectedRoute> } >
          </Route>
          <Route path='*' element={ <Registrar/>} ></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/mi-perfil' element={
            <ProtectedRoute>
              <MiPerfil></MiPerfil>
            </ProtectedRoute> } >
          </Route>
        </Routes>
        <Footer></Footer>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
