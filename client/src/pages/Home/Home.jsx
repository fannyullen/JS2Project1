import { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/Search/SearchBar';

function Home() {

    // Initial state is an empty array, setState = we set a new state
    const [products, setProducts] = useState([]);

  useEffect(() => { // för att det inte ska skickas massa anrop till backend, utan renderas bara en gång

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