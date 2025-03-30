import { useState } from "react";

function AdminForm() {

    const [formData, setFormData] = useState({
        productName: "",
        description: "",
        category: "",
        color: "",
        image: "",
        SKU: "",
        productPrice: ""

    });
    
    const handleInputChange = (event) => {
    
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
    
        event.preventDefault();

        const product = { ...formData };
    
        fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        })
        .then(resp => {
            setFormData({
                productName: "",
                description: "",
                category: "",
                color: "",
                image: "",
                SKU: "",
                productPrice: ""
            })
        });
    }
    

    return (
        <> 
            <form onSubmit={handleSubmit}>
                    <div className="m-12">
                        <div className="grid md:grid-cols-2 lg:mx-36">
                            <div className="m-4">
                                <label htmlFor="product-name" className="block">Namn</label>
                                <input type="text" id="product_name" required className="border-1 rounded h-8 w-full" name="productName" value={formData.productName} onChange={handleInputChange} />
                            </div>
                            
                            <div className="m-4">
                                <label htmlFor="description" className="block">Beskrivning</label>
                                <textarea type="text" id="description" required className="border-1 rounded w-full" name="description" value={formData.description} onChange={handleInputChange} />
                            </div>
                            <div className="m-4">
                                <label htmlFor="category" className="block">Kategori</label>
                                <input type="text" id="category" required className="w-full border-1 rounded h-8" name="category" value={formData.category} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 lg:mx-36">
                            <div className="m-4">
                                <label htmlFor="color" className="block">Färg</label>
                                <input type="text" id="color" className="border-1 rounded h-8 w-full" name="color" required value={formData.color} onChange={handleInputChange} />
                            </div>
                            <div className="m-4">
                                <label htmlFor="image" className="block">Bild</label>
                                <input type="text" id="image" required className="border-1 rounded h-8 w-full" name="image" value={formData.image} onChange={handleInputChange} />
                            </div>
                            <div className="m-4">
                                <label htmlFor="sku" className="block">SKU</label>
                                <input type="text" id="sku" pattern="[a-zA-Z]{3}[0-9]{3}"  required className="border-1 rounded h-8 w-full" name="SKU" value={formData.SKU} onChange={handleInputChange} />
                            </div>
                            <div className="m-4">
                                <label htmlFor="price" className="block">Pris</label>
                                <input type="text" id="price" required className="border-1 rounded h-8 w-full" name="productPrice" value={formData.productPrice} onChange={handleInputChange} />
                            </div>
                            <div className="m-4">
                                <label htmlFor="publish-date" className="block">Publiseringsdatum </label>
                                <input type="date" id="publish-date" required className="border-2" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <button type="submit" className="mt-4 px-4 py-2 border-2 rounded overflow-hidden transition-transform transform hover:shadow-sm shadow-black active:scale-95 cursor-pointer">Lägg till</button>
                    </div>
            </form>
        </>
    )
}

export default AdminForm;