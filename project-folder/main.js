import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js'; //Calls calculatePortfolioValue and getPortfolioAllocation from portfolio.js file 
import { Transaction } from './transaction.js'; //Calls transaction data from transaction file

const portfolioDetailsTable = document.getElementById('portfolio-tbody'); 
const transactionLogTable = document.getElementById('transaction-tbody');
const totalValueElement = document.getElementById('total-value');

function updatePortfolioDetails() { //Used to display asset details on webpage 
    const allocation = getPortfolioAllocation();
    portfolioDetailsTable.innerHTML = '';
    allocation.forEach(asset => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${asset.name}</td> 
            <td>${asset.type}</td>
            <td>${asset.price}</td>
            <td>${asset.quantity}</td>
            <td>${asset.price * asset.quantity}</td>
            <td>${asset.allocation.toFixed(2)}%</td>
        `;
        portfolioDetailsTable.appendChild(row);
    });
}

function updateTotalPortfolioValue() { //Used to display total portfolio value on webpage
    const totalValue = calculatePortfolioValue();
    totalValueElement.textContent = `$${totalValue.toFixed(2)}`; 
}

function logTransaction(type, assetName, quantity) { //Used to display trasaction details on webpage
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${type}</td>
        <td>${assetName}</td>
        <td>${quantity}</td>
    `;
    transactionLogTable.appendChild(row);
}

console.log('Total Portfolio Value:', calculatePortfolioValue()); //Console.log to display total portfolio value

updatePortfolioDetails(); //Used to display portfolio details
updateTotalPortfolioValue(); //Used to display total portfolio value

try {
    const transaction1 = new Transaction(1, 'buy', 20); //Example transaction 1
    logTransaction('buy', 'Tiktok', 20);

    const transaction2 = new Transaction(2, 'sell', 10); //Example transaction 2
    logTransaction('sell', 'Bitcoin', 10);

    const transaction3 = new Transaction(2, 'sell', 10); //Example transaction 3
    logTransaction('sell', 'Bitcoin', 10);

    updatePortfolioDetails();
    updateTotalPortfolioValue();

    console.log('Updated Portfolio Value:', calculatePortfolioValue());
} catch (error) {
    console.error(error.message); //Message will display if error is caught. 
}


