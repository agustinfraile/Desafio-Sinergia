import { useState } from "react";
import ProductSelector from "../ProductSelector/ProductSelector";
import ComissionForm from "../ComissionForm/ComissionForm";
import ComissionResult from "../ComissionResult/ComissionResult";


export const ComissionSimulator = () => {

    const [commission, setCommission] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div>
            <h1>Simulador de Comisiones</h1>
            <ProductSelector onSelect={setSelectedProduct} />
            <ComissionForm onCalculate={setCommission} />
            {commission !== null && <ComissionResult commission={commission} />}
        </div>
    )
}
