import { useState, useEffect } from 'react';
import AdminHeader from "../../components/Admin/AdminHeader";
import AdminTable from "../../components/Admin/AdminTable";

function Admin() {

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
            <AdminHeader />
            <AdminTable products={products} setProducts={setProducts}/>
        </>
    )
}

export default Admin;