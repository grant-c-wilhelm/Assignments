const display = document.getElementById('display')


document.addEventListener('click', () => {
    let clickCount = localStorage.getItem('currentCount')
    clickCount++

    display.innerText = clickCount
    localStorage.setItem('currentCount', clickCount)

})

setInterval(() => {
    localStorage.removeItem('currentCount')
}, 3000)