import { assets, getAssetById } from './asset.js'; //Used to call assets and getassetsbyID from asset.js

export class Transaction { //Used export to to make function available to other files
  constructor(assetId, type, quantity) {
    this.asset = getAssetById(assetId);
    if (!this.asset) {
      throw new Error('Asset not found'); //Display message if the asset is not found
    }
    this.type = type;
    this.quantity = quantity;
    this.processTransaction();
  }

  processTransaction() { //Used to display the transaction details
    if (this.type === 'buy') { //If type is 'buy'
      this.asset.quantity += this.quantity; //add the asset's quanitity 
    } else if (this.type === 'sell') { //If asset type is 'sell'
      if (this.asset.quantity < this.quantity) { //Asset quanitity is too low
        throw new Error(`Insufficient amount for sale of ${this.asset.name}`); //This message will display if quantity is too low
      }
      this.asset.quantity -= this.quantity; //Quanitity will be subtracted
    } else {
      throw new Error('Invalid transaction type'); //Message will display
    }
  }
}