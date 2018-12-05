var pens = {
    color: ' black ',
    earser: false ,
    useful: false,
    writes: function() {
        console.log(this.color + this.earser + this.useful)
    }
}
console.log(pens.writes());

var mug = { 
    color: "white ",
    handl: true,
    capacity: " 12oz ",
    dirty: true,
    displays: function () {
        console.log(this.color + this.handl + this.capacity + this.dirty)
    }

}
console.log(mug.displays());


var bottle = {
    color: "blue ",
    capacity: ' 48oz ',
    brand: " Nalgene",
    writes: function () {
        console.log(this.color + this.capacity + this.brand)
    }
}
console.log(bottle.writes());

var phone = {
    brand: "Apple ",
    color: " Black ",
    largeScreen: true,
    writes: function () {
        console.log(this.brand + this.color + this.largeScreen)
    }
}
console.log(phone.writes());

var mnitor = {
    color: "black ",
    size: " 27in ",
    brand: " ASUS ",
    hdmi: true,
    writes: function() {
        console.log(this.color + this.size + this.brand + this.hdmi)
    }
}
console.log(mnitor.writes());