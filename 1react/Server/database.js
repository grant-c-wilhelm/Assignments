const uuid = require('uuid')

const CosmicBeverage = function(beverage){
    this._id = uuid();
    this.name= beverage.name;
    this.origin = beverage.origin;
    this.price = beverage.price;
    
}

const Database = function(){
    this.cosmicBeverages = []
}
Database.prototype.find = function(){
    return this.cosmicBeverages
}

Database.prototype.save = function (beverage){
    const newBeverage = new CosmicBeverage(beverage);
    this.cosmicBeverages.push(newBeverage);
    return newBeverage;
}



module.exports = new Database();