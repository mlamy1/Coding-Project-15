const assets = [ //Example data
    { id: 1, name: 'Tiktok', type: 'stock', price: 930, quantity: 190 },
    { id: 2, name: 'Bitcoin', type: 'stock', price: 2500, quantity: 100 },
    { id: 3, name: 'Nike', type: 'bond', price: 1900, quantity: 70 }
  ];
  
  export function getAssetById(id) { //Used to return  asset details based on the provided ID
    return assets.find(asset => asset.id === id);
  }
  
  export { assets };
  