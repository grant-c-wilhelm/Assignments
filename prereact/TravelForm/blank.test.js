const sum = require('./blank.js')
test ("returns the sum of two numbers", function(){
    expect(sum(10,4)).toBe(14)
    expect(sum(1,2)).toBe(3)
    expect(sum(10,10)).toBe(20)
})