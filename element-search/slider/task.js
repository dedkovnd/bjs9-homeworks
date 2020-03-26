let photos = Array.from(document.querySelectorAll('.slider__item'))
let arrows = Array.from(document.querySelectorAll('.slider__arrow'))
let ticks = Array.from(document.querySelectorAll('.slider__arrow'))
let selectedIndex = 0
// slider__item_active

arrows.forEach((elem) => {
    elem.addEventListener('click', arrowsHandler)
})

function arrowsHandler(e) {
    let maxIndex = photos.length-1;
    console.log(e.currentTarget)
    if(e.currentTarget.classList.contains('slider__arrow_next')) {

        if(selectedIndex+1 > maxIndex) {
            selectedIndex = 0;
            setActive(photos[selectedIndex])
        } else {
            selectedIndex++;
            setActive(photos[selectedIndex])
        }

    } else {
        if(selectedIndex-1 < 0) {
            selectedIndex = maxIndex;
            setActive(photos[selectedIndex])
        } else {
            selectedIndex--;
            setActive(photos[selectedIndex])
        }
    }
}

function setActive(elem) {
    document.querySelector('.slider__item_active').classList.remove('slider__item_active')
    elem.classList.add('slider__item_active')

}

