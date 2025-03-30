import { Link, NavLink } from "react-router";
import { useCart } from "../../pages/Basket/CartContext";
import { format, differenceInDays } from "date-fns";

function Main({ products }) {

    const { addToCart } = useCart();

    return <div className="grid grid-cols-1">
        <section>
            <div className="grid lg:grid-cols-2">
                <img src="/img/studioMugs.webp" alt="Pastell-colored mugs" className="w-screen" />
                <img src="/img/handcraftedMug.webp" alt="" className="hidden lg:block"/>
            </div>
            <img src="/img/KyanMugHands.jpg" alt="" />

            <div className="lg:hidden absolute top-45 md:top-60 flex items-center">
                <div className="w-screen p-4 opacity-50 flex flex-col text-center">
                    <p className="text-black text-xl md:text-2xl mb-2">Unika stilar</p>
                    <form>
                        <button className="bg-black text-white p-2 rounded overflow-hidden text-sm md:text-lg transition-transform transform hover:shadow-md shadow-gray-900 hover:text-slate-200 active:scale-95">Shoppa</button>
                    </form>
                </div>
            </div>
        </section>

        <h2 className="text-center text-3xl text-black p-6">Handgjorda muggar</h2>

        <section className="[&>*]:grid [&>*]:grid-cols-[1fr] [&>*]:gap-2 product sm:[&>*]:grid-cols-2 lg:[&>*]:grid-cols-3 xl:[&>*]:grid-cols-4 ml-4">
            
        
            <article className="p-4">
                {products.map((product) => (
                    <div key={product.id}>
                        <NavLink to={`/products/${product.urlSlug}`}>
                            <div>
                                <div className="relative">
                                
                                    <img src={product.image} alt="image" className="w-full object-cover rounded-lg"/>
                                    <div className="absolute bottom-2 right-2 text-xl z-50">
                                        <i class="bi bi-suit-heart"></i>
                                    </div>
                                </div>
                                
                                <div className="flex flex-row justify-between text-lg font-bold text-gray-900 mt-2">
                                    <div>{product.productName}</div>
                                    <div>{product.productPrice} SEK</div>
                                </div>
                                
                            </div>
                            
                    
                        </NavLink>                  
                        <button onClick={() => addToCart(product)} className="items-center px-4 py-2 border-2 rounded-md text-sm font-medium transition-colors hover:text-gray-800 hover:shadow-sm shadow-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black mt-2 mb-2 cursor-pointer">Lägg till i varukorg</button>
                    </div>
                ))}
                
                
            </article>
            
            
        </section>

    </div>
}

export default Main;