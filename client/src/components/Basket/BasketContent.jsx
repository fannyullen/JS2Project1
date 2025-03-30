import { Link, NavLink } from "react-router";
import { useState, useEffect } from 'react';
import { useCart } from "../../pages/Basket/CartContext";

function BasketContent() {

    // Hämta varukorgens innehåll och funktioner från Context
    const { cart, removeFromCart, getTotalPrice, decreaseQuantity, addToCart } = useCart();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <h1 className="mt-40 mb-4 text-center text-3xl">Varukorg</h1>
            {/* Om varukorgen är tom, visa ett meddelande, annars visas en lista med produkter */}
            {cart.length === 0 ? 
            
            <div className="h-screen m-20 text-xl flex gap-4">
                <p className="p-1">Varukorgen är tom.</p>
                <div className="text-2xl"><i class="bi bi-emoji-frown-fill"></i></div>
            </div> : (

            <div className="m-8 text-center">
                    
                {cart.map((product) => (

                    <div className="w-full h-120 md:h-80 border-2 rounded mt-2">
                        <div className="flex flex-col md:flex-row m-8 items-center justify-center">
                            <img src={product.image} alt=""  className="h-60 rounded" />
                            <div key={product.id} className="m-4">
                                <h2 className="text-xl">{product.productName}</h2>
                                <p className="mb-4">{product.productPrice} SEK</p>
                                <div className="grid grid-cols-4 gap-2 items-center">

                                    <button
                                    onClick={() => decreaseQuantity(product.id)} className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
                                    >-</button>

                                    <span className="mx-2">{product.quantity}</span>

                                    <button
                                    onClick={() => addToCart(product)} className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
                                    >+</button>

                                    <button onClick={() => removeFromCart(product.id)} className="text-2xl cursor-pointer"><i class="bi bi-trash"></i></button>

                                </div>
                            </div>

                    </div>
                    
                </div>
                    
                ))}
                    <div className="mt-6 mb-6">Totalbelopp: {getTotalPrice()} kr</div>
                    <div className="flex justify-center">
                    <NavLink to={`/checkout`}>
                    
                        <button className="items-center px-4 py-2 border-2 rounded-md text-sm font-medium transition-colors hover:text-gray-800 hover:shadow-sm shadow-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mt-2 mb-2 cursor-pointer">Till kassan</button>
                    
                    </NavLink>
                    </div>

                
            </div>
        )}

    </>
    )
}

export default BasketContent;