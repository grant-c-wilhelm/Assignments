const uuid = require('uuid')

const Transformer /*Hunters */ = function(bot/*<>hunter*/){
    this._id = uuid();
    this.name= bot.name;
    this.affiliation = bot.affiliation;
    this.vehicle = bot.vehicle;
    
}
const Database = function(){
    this.transformers /*bountyHunters */= []
}

Database.prototype.find = function(){ 
    return this.transformers;
}
Database.prototype.save = function (bot){
    const newBot = new Transformer(bot);
    this.transformers.push(newBot);
    return newBot;
}
Database.prototype.findByIdAndRemove = function (id){
    //find bot with the matching ID
    const foundBot = this.transformers.find(bot => {
        return bot._id === id;
    })
    if(foundBot === undefined) return;

    //find the inex of the given beverage
    
    const index = this.transformers.indexOf(foundBot);
    
    //remove it from teh array
    this.transformers.splice(index, 1);
}

Database.prototype.findById = function(id){
    const foundBot = this.transformers.find(bot => bot._id === id);

    return foundBot
}

Database.prototype.findByAndUpdate = function (id, updates){
    const foundBot = this.transformers.find(bot =>{
        return bot._id === id;
    })
    if(foundBot === undefined) return;

    //find the index
    const index = this.transformers.indexOf(foundBot); 
   
    const newBot = { ...foundBot, ...updates}; //what it was before but with the new updates added to it
    
    //replace old with the new
    this.transformers.splice(index, 1, newBot);
    
    //return the newly added bot
    return newBot;

 }

module.exports = new Database();