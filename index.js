print = console.log

print(333)



const blink = document.getElementById("blink")
print(blink)


const fblink = (function () {
    const NUMBER_LAST_FRAME = 19
    const blink = document.getElementById("blink")

    let imgBlink = ""
    for (let i = 0; i < 19; i++) {
        imgBlink += `<img src="./hhh/hh_${i.toString().padStart(2, '0')}.png" alt="" >`
    }
    blink.innerHTML = imgBlink

    const imgs = blink.querySelectorAll("img")
    imgs.forEach(item => item.hidden = true)
    let currentFrame = 0

    return function (hidden = false) {
        imgs.forEach(item => item.hidden = true)
        const img = imgs[currentFrame]
        img.hidden = false
        currentFrame++
        if (currentFrame >= NUMBER_LAST_FRAME) currentFrame = 0
        print(currentFrame)

        if (currentFrame === 0) {
            if (hidden === true) img.hidden = true
            return true
        }
        return false
    }

})()
const fToSnake = (function () {
    const NUMBER_LAST_FRAME = 19
    const blink = document.getElementById("toSnake")

    let imgBlink = ""
    for (let i = 0; i < 19; i++) {
        imgBlink += `<img src="./GGG/f_${i.toString().padStart(2, '0')}.png" alt="" >`
    }
    blink.innerHTML = imgBlink

    const imgs = blink.querySelectorAll("img")
    imgs.forEach(item => item.hidden = true)
    let currentFrame = 0

    return function (hidden = false) {
        imgs.forEach(item => item.hidden = true)
        const img = imgs[currentFrame]
        img.hidden = false
        currentFrame++
        if (currentFrame >= NUMBER_LAST_FRAME) currentFrame = 0
        print(currentFrame)

        if (currentFrame === 0) {
            if (hidden === true) img.hidden = true
            return true
        }
        return false
    }

})()

const listEvents = [fToSnake]
let currentEvent = fToSnake

setInterval(runEvent, 50)

function runEvent() {
    if (currentEvent !== listEvents[listEvents.length - 1]) {
        if(currentEvent(true)){
            currentEvent = listEvents[listEvents.length - 1]
        }
        return
    }
    currentEvent()
}

document.addEventListener("click", (event) => {
    listEvents.push(fblink)
    setTimeout(() => listEvents.push(fToSnake), 1000)
})