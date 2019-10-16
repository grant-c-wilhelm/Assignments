function ipAddressChecker(theAddress) {
    const address = "123.32.49.167"
    for (let index = 0; index < address.length; index++) {
        const element = address[index];
        let parsedElem = parseInt(element)
        isNaN(parsedElem) ?
            console.log('this is not a number') :
                
            console.log(parsedElem)
    }
}
ipAddressChecker()


