const uuid = require('uuid')

const Hunters = function(hunter) {
    this._id = uuid();
    this.firstName = hunter.firstName;
    this.lastName = hunter.lastName;
    this.living = hunter.living;
    this.bountyAmount = hunter.bountyAmount;
    this.type = hunter.type;
}
const Database = function (){
    this.bountyHunters = []
}
Database.prototype.find = function(){
    return this.bountyHunters;
}
Database.prototype.save = function (hunter) {
    const newHunter = new Hunters(hunter);
    this.bountyHunters.push(newHunter)
    return newHunter;
}
Database.prototype.findByIdAndRemove = function (id){
    //find hunter with matching ID
    const foundHunter = this.bountyHunters.find(hunter => {
        return hunter._id === id;
    })
    if (foundHunter === undefined) return;

    //find the indec of the given hunter

    const index = this.bountyHunters.indexOf(foundHunter)

    //remove the itm from the array
    this.bountyHunters.splice(index, 1);
}

Database.prototype.findById = function (id) {
    const foundHunter = this.bountyHunters.find(hunter => hunter._id === id);
    return foundHunter
}

Database.prototype.findByAndUpdate = function (id, updates) {
    const foundHunter = this.bountyHunters.find(hunter => {
        return hunter._id === id;
    })
    if (foundHunter === undefined) return;

    //find the idex
    const index = this.bountyHunters.indexOf(foundHunter);


    // refresh the hunter with the new given updates
    const newHunter = { ...foundHunter, ...updates};
    //replace old with the new
    this.bountyHunters.splice(index, 1, newHunter);
    //return the newly added bountyhunter
    return newHunter;
}
module.exports = new Database();
