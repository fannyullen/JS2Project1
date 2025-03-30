import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
import ProductDetailsCard from "../../components/ProductDetailsCard/ProductDetailsCard";
import Footer from "../../components/Footer/Footer";
import SlideShow from "../../components/ProductDetailsCard/SlideShow";


function ProductDetails() {

    const { urlSlug } = useParams();

    const [product, setProduct] = useState();

    useEffect(() => {
        fetch(`/api/products/${urlSlug}`)
        .then((resp) => resp.json())
        .then((product) => {
            setProduct(product);
        });
    }, []);

  
    const [products, setProducts] = useState([]);

  useEffect(() => { 

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