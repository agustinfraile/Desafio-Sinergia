import { useState } from "react";


const ComissionForm = ({ onCalculate }) => {

    const [amount, setAmount] = useState("");
    const [rate, setRate] = useState("15");

    const handleSubmit = (e) => {
        e.preventDefault();
        const parsedAmount = parseFloat(amount) || 0;
        const parsedRate = parseFloat(rate) / 100;

        if (parsedAmount > 0) {
            const commission = parsedAmount * parsedRate;
            onCalculate(commission);
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Monto de Venta ($):
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </label>
            <label>
                Porcentaje de Comisión:
                <select value={rate} onChange={(e) => setRate(e.target.value)}>
                    <option value="10">10%</option>
                    <option value="15">15%</option>
                    <option value="20">20%</option>
                    <option value="35">35%</option>
                    <option value="40">40%</option>
                </select>
            </label>
            <button type="submit">Calcular</button>
        </form>
    )
}

export default ComissionForm