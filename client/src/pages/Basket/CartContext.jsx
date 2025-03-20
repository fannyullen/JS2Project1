import { createContext, useContext, useState } from "react";

// Skapa ett nytt context
const CartContext = createContext();

// Skapa en Provider-komponent som omsluter hela appen
export const CartProvider = ({ children }) => {
    // State för att hålla varukorgens innehåll
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
          // Kolla om produkten redan finns i varukorgen
          const existingProduct = prevCart.find((item) => item.id === product.id);
    
          if (existingProduct) {
            // Om produkten redan finns, uppdatera antalet
            return prevCart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
          } else {
            // Om produkten inte finns, lägg till den med quantity: 1
            return [...prevCart, { ...product, quantity: 1 }];
          }
        });
        const cartMessage = document.getElementById("cart-message")
        cartMessage.classList.remove("hidden");
      };

    // Ta bort produkt från varukorgen. 
    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const decreaseQuantity = (productId) => {
        setCart((prevCart) =>
            prevCart
            .map((item) =>
            item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // Tar bort produkter med 0 i antal
        );
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

// Anpassad hook för att använda varukorgen i andra komponenter
export const useCart = () => {
    return useContext(CartContext)
};