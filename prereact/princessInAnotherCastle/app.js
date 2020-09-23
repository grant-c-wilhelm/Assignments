class PlayerOne {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }
    setName(namePicked) {
        this.namePicked = namePicked
        console.log('test1')
    }
    goHit() {
        console.log('test2')
    }
    gotPowerUp() {
        console.log('test3')
    }
    gameActive() {
        console.log('test4')
    }
    addCoin() {
        console.log('test5')
    }
    printStats() {
        console.log('test6')
    }
}

class NewPlayer extends PlayerOne



let randomNum
let flooredNum
const randomRangeGenerator = () => {
    randomNum = (Math.random() * 3)
    flooredNum = Math.floor(randomNum)
    if (flooredNum === 0) { printStats() }
    else if (flooredNum === 1) { gotPowerUp() }
    else if (flooredNum === 2) { addCoin() }
}
randomRangeGenerator()
console.log(flooredNum)