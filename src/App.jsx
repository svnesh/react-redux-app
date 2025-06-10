import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import CartPage from "./page/CartPage"
import ProductPage from "./page/ProductPage"

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>        
          <Route path="/"  element={<ProductPage/>} />
          <Route path="/cart"  element={<CartPage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
