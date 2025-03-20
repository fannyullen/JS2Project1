import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import ProductDetailsCard from "../../components/ProductDetailsCard/ProductDetailsCard";
import Footer from "../../components/Footer/Footer";
import SlideShow from "../../components/ProductDetailsCard/SlideShow";


function ProductDetails() {

    let params = useParams(null);

    const [product, setProduct] = useState();

    useEffect(() => {
        fetch(`/api/products/${params.id}`)
        .then((resp) => resp.json())
        .then((product) => {
            setProduct(product);
        });
    }, []);

    // Initial state is an empty array, setState = we set a new state
    const [products, setProducts] = useState([]);

  useEffect(() => { // för att det inte ska skickas massa anrop till backend, utan renderas bara en gång

    fetch("/api/products")
    .then(resp => resp.json())
    .then(products => {
      setProducts(products);
    });

  }, []);

    return product ? (
        <>
        <Header />
        <ProductDetailsCard product={product} />
        <SlideShow products={products}/>
        <Footer />

        </>
    ) : "Laddar...";
}

export default ProductDetails;