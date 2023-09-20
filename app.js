const productVariants = document.querySelectorAll('.product__variant')
const productImage = document.querySelector('.product__image')
const colorOption = document.querySelector('#color')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const timerContainer = document.querySelector('.timer')
const productColor = document.querySelector('.product__color')
const productSize = document.querySelector('.product__size')

productVariants.forEach((variant) => {
    variant.addEventListener('click', () => {
        productVariants.forEach(variant => variant.classList.remove('active'))
        variant.classList.add('active')
        colorOption.value = variant.firstElementChild.id
        productImage.firstElementChild.src = variant.firstElementChild.src
    })   
})

colorOption.addEventListener('click', () => {
    productVariants.forEach( variant => {
        if(variant.firstElementChild.id === colorOption.value) {
            productVariants.forEach(variant => variant.classList.remove('active'))
            variant.classList.add('active')
            productImage.firstElementChild.src = variant.firstElementChild.src
        } 
    })  
})

productColor.addEventListener('click', () => {
    productColor.classList.toggle('open')
})
productSize.addEventListener('click', () => {
    productSize.classList.toggle('open')
})

const countDownTimer = (h,m,s) => {

   let intervalId = setInterval(() => {
        if(s < 0) {
            m--    
            s = 59
        }
        if(m === 0) {
            if(h===0){
                m = 59
            } else {
                h--
            m = 59
            }
            
        }
        if(s < 10) {
            s = '0' + s
        }
        seconds.textContent =":" + s
        hours.textContent = h
        minutes.textContent = ':' + m
        if(h < 10) {
            hours.textContent = '0' + h
        }
         if(m < 10) {
            minutes.textContent = ':0' + m
         }
         s--
         if(h===0 && m===0 && s === 0) {
            timerContainer.textContent = 'Время вышло'
         }
    }, 1000)
    if(h===0 && m===0 && s === 0) {
        timerContainer.textContent = 'Время вышло'
        clearInterval(intervalId)
     }
}
countDownTimer(4,51,16)
