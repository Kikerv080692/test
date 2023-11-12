// script for tab
const tabHeaders = document.querySelectorAll('.tabs-title') // [] pseudolist
const contentBoxes = document.querySelectorAll('.tabs-item')
const tabHeadersArr = Array.from(tabHeaders) // real list
document.querySelector('.tabs-list').addEventListener('click', (event) => {
    const index = tabHeadersArr.indexOf(event.target) // 3
    contentBoxes.forEach((item) => { 
        item.classList.remove('active') // hide info
    })

    tabHeaders.forEach((item) => {
        item.classList.remove('active') // hide green
    })
    tabHeaders[index].classList.add('active') // show 1 green
    contentBoxes[index].classList.add('active') // show 1 info
})




//-----------------------------------------------------------
// script for person-slider
let numActive = 0
const countSlide = document.querySelectorAll('.person')
const sliderLeft = document.querySelector('.slider-left')
const sliderRight = document.querySelector('.slider-right')

const rendActive = () => {
    countSlide.forEach((el) => {
        el.classList.remove('active')
    })
        countSlide[numActive].classList.add('active')
        const name = document.querySelector('.person.active .person-name').textContent
        const role = document.querySelector('.person.active .person-role').textContent
        const img = document.querySelector('.person.active .person-foto').innerHTML
        document.querySelector('.slide-active .name').textContent = name 
        document.querySelector('.slide-active .role').textContent = role 
        document.querySelector('.slide-active .people-foto').innerHTML = img 
}

rendActive()

sliderLeft.addEventListener('click', () => {
    if(numActive > 0){
        numActive--
    }
    rendActive()
})
sliderRight.addEventListener('click', () => {
    if(numActive < countSlide.length -1){
        numActive++
    }
    rendActive()
})
//-------------------------------------------------------


const tabsWork = document.querySelectorAll('.amazing-work .tabs-list li')
const imgWork = document.querySelectorAll('.amazing-work-img')
const less = (list) => {
    let count = 0
    list.forEach((element) => {
        if(!element.classList.contains('hidden')){
            count++
        }
        if(count > 12){
            element.classList.add('less')
            
        }else{
            element.classList.remove('less')
        }
    })
}
document.querySelector('.amazing-work .tabs-list').addEventListener('click', (event) => {
    const active = event.target
    const filter = active.dataset.filter
    imgWork.forEach((element, index) => {
        if(element.dataset.filter !== filter && filter !== 'all'){
            element.classList.add('hidden')
        }else{
            element.classList.remove('hidden')
        }
    })
    if(document.querySelector('.amazing-work-control .btn').classList.contains('active')){
        less(imgWork)

    }
})
less(imgWork)

document.querySelector('.amazing-work-control .btn').addEventListener('click', (event) => {
    event.preventDefault()
    event.target.classList.remove('active')
    imgWork.forEach((element) => {
        element.classList.remove('less')
    })
    event.target.style.display = 'none'
})
