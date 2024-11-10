import { assets } from './asset.js'; //Used to call assets from the assets.js file

export function calculatePortfolioValue() { //Used to sum the total value of the portfolio by multiplying the price and quantity of each asset.
  return assets.reduce((total, asset) => total + (asset.price * asset.quantity), 0);
}

export function getPortfolioAllocation() { //Used to calculate the percentage allocation of each asset in the portfolio.
  const totalValue = calculatePortfolioValue(); 
  return assets.map(asset => ({ 
    ...asset,
    allocation: ((asset.price * asset.quantity) / totalValue) * 100 //Used to calulate the total percentage. 
  }));
}
