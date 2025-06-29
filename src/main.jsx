import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  BrowserRouter,
  createBrowserRouter,
} from "react-router-dom";
import ProductPage from './page/ProductPage.jsx';
import CartPage from './page/CartPage.jsx';
import { Provider } from 'react-redux';
import store from './store/store.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter router={router}>
      <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
