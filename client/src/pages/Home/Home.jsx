import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/Search/SearchBar';

function Home() {

    const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("/api/products")
    .then(resp => resp.json())
    .then(products => {
      
      setProducts(products);
    });

  }, []);

    return (
        <>
            <Header />
            <Main products={products}/>
            <Footer />
        </>
    )
}

export default Home;