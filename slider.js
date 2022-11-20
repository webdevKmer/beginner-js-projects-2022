const left = document.querySelector('.left')
const right = document.querySelector('.right')
const slider = document.querySelector('.slider')

console.log(left, right);

const all_imgs = document.querySelectorAll('.image')

let slide_pos = 0

function getNextPos(){
    return -500 * slide_pos
}
function getPrevPos(){
    return -500 * (slide_pos-1)
}

function nextSlide(){
    if (slide_pos >= all_imgs.length - 1){
        slide_pos = -1
    }
    slide_pos += 1
    new_pos = getNextPos()
    slider.style.transform = `translate(${new_pos}px)`
    console.log(slide_pos, new_pos);
}
function prevSlide(){
    if (slide_pos <= 1){
        slide_pos = all_imgs.length
    }
    slide_pos -= 1
    new_pos = getPrevPos()
    slider.style.transform = `translate(${new_pos}px)`
    console.log(slide_pos, new_pos);
}

left.addEventListener('click', () => {
    prevSlide()
    
})
right.addEventListener('click', () => {
    nextSlide()
})