

const ComissionResult = ({ commission }) => {
    return (
        <div>
            <h2>Ganancia Neta</h2>
            <p>${commission.toFixed(2)}</p>
        </div>
    )
}

export default ComissionResult