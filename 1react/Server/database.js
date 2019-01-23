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
    return this.cosmicBeverages;
}

Database.prototype.save = function (beverage){
    const newBeverage = new CosmicBeverage(beverage);
    this.cosmicBeverages.push(newBeverage);
    return newBeverage;
}
Database.prototype.findByIdAndRemove = function (id){
    //find beverage with the matching ID
    const foundBeverage = this.cosmicBeverages.find(beverage => {
        return beverage._id === id;
    })
    if(foundBeverage === undefined) return;

    //find the inex of the given beverage
    const index = this.cosmicBeverages.indexOf(foundBeverage);
    
    //remove it from teh array
    this.cosmicBeverages.splice(index, 1);
}
Database.prototype.findByAndUpdate = function (id ,updates){
    const foundBeverage = this.cosmicBeverages.find(beverage =>{
        return beverage._id === id;
    })
    if(foundBeverage === undefined) return;

    const index = this.cosmicBeverages.indexOf(foundBeverage); 
    const newBeverage = { ...foundBeverage, ...updates};

    this.cosmicBeverages.splice(index, 1, newBeverage);

    return newBeverage;

 }

module.exports = new Database();