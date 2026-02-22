const rects = document.querySelectorAll('.rect')

let activeIndex = 0
let position = -100

function update() { 
    const currentRect = rects[activeIndex]
    currentRect.style.display = "block"

    currentRect.style.left = position + 'px'
    position += 2

    if (position > window.innerWidth){
        currentRect.style.display = "none"
        position = -currentRect.offsetWidth

        activeIndex = (activeIndex + 1) % rects.length
    }
}

function animate() {
    update()

    requestAnimationFrame(animate)
}

rects.forEach((r, index) => {
    if (index !== 0) r.style.display = 'none'
});

requestAnimationFrame(animate)