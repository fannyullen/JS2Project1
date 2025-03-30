import { useState, useEffect } from 'react';
import AdminHeader from "../../components/Admin/AdminHeader";
import AdminTable from "../../components/Admin/AdminTable";

function Admin() {

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
            <AdminHeader />
            <AdminTable products={products} setProducts={setProducts}/>
        </>
    )
}

export default Admin;