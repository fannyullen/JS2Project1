import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import { useCart } from "../../pages/Basket/CartContext";
import { Link, NavLink } from "react-router";

function SearchResultPage() {

    const { addToCart } = useCart();

    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (query) {
            fetch(`http://localhost:8000/api/search?q=${encodeURIComponent(query)}`)
            .then((res) => res.json())
            .then((data) => {

                const results = data.filter((product) => {
                    return product && product.productName && product.productName.toLowerCase().includes(query)
                })

                setProducts(results);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Fel vid hämtning", err);
                setLoading(false);
            });
        }
    }, [query]);

    if (loading) return <p>Laddar...</p>;
    if (products.length === 0) return <p>Inga produkter hittades</p>

    return (
        <>
        <Header />
        <div>
            <h2 className="mt-42 text-3xl text-center">Sökresultat</h2>
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 m-10">
                {products.map((product) => (
                    
                    <article key={product.id} className="mb-2">
                        <NavLink to={`/products/${product.id}`}>
                        <div>
                            <img src={product.image} alt="" className="w-full object-cover rounded-lg mb-4" />

                            <h3 className="text-xl mb-4">{product.productName}</h3>
                            <p>{product.productPrice}SEK</p>
                        </div>
                        </NavLink>
                        <button onClick={() => addToCart(product)} className="items-center px-4 py-2 border-2 rounded-md text-sm font-medium transition-colors hover:shadow-sm shadow-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 mt-2 mb-2">Lägg till i varukorg</button>
                    </article>
                    
                ))}
            </section>
        </div>
        <Footer />
        </>
    )
}

export default SearchResultPage;