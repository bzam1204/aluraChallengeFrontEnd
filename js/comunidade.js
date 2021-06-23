const projeto1 = document.querySelector('.projeto1')
const projeto2 = document.querySelector('.projeto2')
const projeto3= document.querySelector('.projeto3')
const projeto4 = document.querySelector('.projeto4')
const info = projeto1.querySelectorAll('[data-info]')

projeto1.addEventListener('mouseout', () => {   
    const div = document.querySelector('[data-quadro1]')    
    div.classList.add('retrai') 
    console.log(div)
    const info = projeto1.querySelectorAll('[data-info]')
    for(i = 0; info.length; i++){
        info[i].classList.add('hide')
    }
})

projeto1.addEventListener('mouseover',()=>{
    const div = document.querySelector('[data-quadro1]')
    div.classList.remove('retrai') 
    console.log(div)
    const info = projeto1.querySelectorAll('[data-info]')
    for(i = 0; info.length; i++){
        info[i].classList.remove('hide')        
    }
})

projeto2.addEventListener('mouseover', () => {
    projeto2.style.background = 'blue'
    projeto2.addEventListener('mouseout', ()=>{
        projeto2.style.background = ''
    })
})

projeto3.addEventListener('mouseover', () => {
    projeto3.style.background = 'blue'
    projeto3.addEventListener('mouseout', ()=>{
        projeto3.style.background = ''
    })
})

projeto4.addEventListener('mouseover', () => {
    projeto4.style.background = 'blue'
    projeto4.addEventListener('mouseout', ()=>{
        projeto4.style.background = ''
    })
})

