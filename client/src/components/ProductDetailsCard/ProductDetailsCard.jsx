import { useCart } from "../../pages/Basket/CartContext";

function ProductDetailsCard({ product }) {

    const { addToCart } = useCart();
    
    return (
        <>
        <section className="mt-40">

        
            <article className="grid grid-cols-1 gap-4 m-18 md:grid-cols-2 lg:m-40">
                
                <div>
                        <img src={product.image} alt="image" className="w-full object-cover rounded-lg"/>
                </div>

                <div className="m-4">
                    
                    <h2 className="text-xl font-bold mb-8">{product.productName}</h2>
                            
                    <p className="mb-8 border-t-1 border-b-1 py-4">{product.description}</p>
                    <div className="text-lg font-bold">{product.productPrice} SEK</div>
                

                    <button onClick={() => addToCart(product)} className="items-center px-4 py-2 border-2 rounded-md text-sm font-medium transition-colors hover:text-gray-800 hover:shadow-sm shadow-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mt-2 mb-2 cursor-pointer">Lägg till i varukorg</button>
                </div>
            
            </article>
            
        </section>
        </>
    )
}

export default ProductDetailsCard;