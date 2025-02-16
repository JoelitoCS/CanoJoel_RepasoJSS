const criptomonedas = [
    { name: "Bitcoin", symbol: "BTC", price: "45,000", marketCap: "850B", change24h: "+2.5%" },
    { name: "Ethereum", symbol: "ETH", price: "3,200", marketCap: "370B", change24h: "+1.8%" },
    { name: "Cardano", symbol: "ADA", price: "1.2", marketCap: "40B", change24h: "-0.5%" },
    { name: "Binance Coin", symbol: "BNB", price: "410", marketCap: "70B", change24h: "+3.1%" },
    { name: "Solana", symbol: "SOL", price: "100", marketCap: "30B", change24h: "+4.0%" }
];

function generarTabla() {
    const tableBody = document.getElementById("crypto-table");
    tableBody.innerHTML = ""; 

    criptomonedas.forEach(({ name, symbol, price, marketCap, change24h }) => {
        tableBody.innerHTML += `
            <tr>
                <td>${name}</td>
                <td>${symbol}</td>
                <td>${price}</td>
                <td>${marketCap}</td>
                <td>${change24h}</td>
            </tr>
        `;
    });
}

document.getElementById("update-btn").addEventListener("click", function() {
    generarTabla();
    console.log("Tabla actualizada");
    this.classList.add("updated");
    this.textContent = "Tabla actualizada";
});

generarTabla();
