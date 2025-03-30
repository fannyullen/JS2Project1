import { Link } from "react-router";

function AdminTable({ products, setProducts }) {

    const deleteProduct = id => {
        fetch(`http://localhost:8000/api/products/${id}`, {
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(() => {
            setProducts(products.filter(product => product.id !== id)
            )
        })
    }

    return (
        <>
        <div className="flex justify-between">
            <h2 className="m-4 text-xl">Produkter</h2>
            <Link to="/admin/new-product">
                <button className="p-2 m-4 border-2 rounded cursor-pointer overflow-hidden transition-transform transform hover:shadow-sm shadow-black active:scale-95">Ny produkt</button>
            </Link>
        </div>
        <div className="m-4">
            <table className="w-full border-1 text-left">
                <thead className="bg-gray-200">
                <tr>
                    <th className="p-1">Namn</th>
                    <th className="p-1">SKU</th>
                    <th className="p-1">Pris</th>
                    <th></th>
                </tr>
                </thead>
                {products.map((product) => (
                    <tbody>
                        <tr key={product.id}>
                            <td className="p-1">{product.productName}</td>
                            <td className="p-1">{product.SKU}</td>
                            <td className="p-1">{product.productPrice}</td>
                            <td><button className="text-2xl cursor-pointer" onClick={() => deleteProduct(product.id)}><i class="bi bi-trash"></i></button></td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </div>
        </>
    )
}

export default AdminTable;