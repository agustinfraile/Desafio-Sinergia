import { useState } from "react";


import data from "../../data/data.json"


const ProductSelector = ({ onSelect }) => {

    const products = data.products;

    const [selectedProduct, setSelectedProduct] = useState(products[0]);

    const handleChange = (e) => {
        const product = products.find((p) => p.name === e.target.value);
        setSelectedProduct(product);
        onSelect(product);
    };

    return (
        <div>
            <label>Selecciona un producto:</label>
            <select value={selectedProduct.name} onChange={handleChange}>
                {products.map((product) => (
                    <option key={product.name} value={product.name}>
                        {product.name} - ${product.price}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ProductSelector