import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './pages/Basket/CartContext.jsx'

// Vi har lagt hela appen i ett kontext "CartProvider"
createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>,
)
