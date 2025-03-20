import { Link } from "react-router";
import { useState, useEffect } from "react";
import { useCart } from "../../pages/Basket/CartContext";

function SlideShow({ products }) {

    const { addToCart } = useCart();

    const [startIndex, setStartIndex] = useState(0); // Startindex för första produkten

    // Funktion för nästa slide
    const nextSlide = () => {
        setStartIndex((prevIndex) => (prevIndex + 1) % (products.length - 2)); // Cirkulär rotation
    };

    // Funktion för föregående slide
    const prevSlide = () => {
        setStartIndex((prevIndex) =>
        prevIndex === 0 ? products.length - 3 : prevIndex - 1
        );
    };

    // Automatisk slide var 3:e sekund
    /* useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        /* return () => clearInterval(interval); */
    /*}, []); */

    return (
        <>
        <h2 className="text-center text-2xl mb-6 ml-6">Liknande produkter</h2>

        <section className="relative w-full max-w-4xl mx-auto overflow-hidden">

            {/* Slidshow-container */}
            <div className="[&>*]:flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${startIndex * 100}%)` }}>

                <article className="p-2">
                    {products.map((product) => (
                        <div className="m-4">
                            <Link to={`/products/${product.id}`}>

                                <div key={product.id}>
                                    <img src={product.image} alt="image" className="w-100 object-cover rounded-lg"/>
                                    <div className="flex flex-col justify-between text-lg font-bold text-gray-900 mt-2">
                                        <div>{product.productName}</div>
                                        <div>{product.productPrice} SEK</div>
                                    </div>
                                </div>
                        
                            </Link>                  
                            <button onClick={() => addToCart(product)} className="items-center w-50 px-4 py-2 border-2 rounded-md text-xs font-medium transition-colors hover:text-gray-800 hover:shadow-sm shadow-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mt-2 mb-2 cursor-pointer">Lägg till i varukorg</button>
                            
                        
                        </div>
                    ))}
                    
                </article>

            </div>
            <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full shadow-lg">
                ◀
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-full shadow-lg">
                ▶
            </button>

        </section>

                    
        </>
    )
}

export default SlideShow;