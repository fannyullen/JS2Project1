import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
          const existingProduct = prevCart.find((item) => item.id === product.id);
    
          if (existingProduct) {
            return prevCart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            return [...prevCart, { ...product, quantity: 1 }];
          }
        });
        const cartMessage = document.getElementById("cart-message")
        cartMessage.classList.remove("hidden");
      };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const getTotalPrice = () => {
      return cart.reduce((total, product) => total + Number(product.productPrice) * product.quantity, 0);
    };

    const decreaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart
            .map((item) =>
            item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
        );
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};


export const useCart = () => {
    return useContext(CartContext)
};