const list = document.querySelectorAll('li')
const img = document.querySelectorAll('.content')
console.log(img);

list[0].addEventListener('click',()=>{
    img.forEach((image)=>{
        if(image.classList.contains('show')){
            image.classList.remove('show')
        }
        
    })
    img[0].classList.add('show')
})

list[1].addEventListener('click',()=>{
    img.forEach((image)=>{
        if(image.classList.contains('show')){
            image.classList.remove('show')
        }
        
    })
    img[1].classList.add('show')
})

list[2].addEventListener('click',()=>{
    img.forEach((image)=>{
        if(image.classList.contains('show')){
            image.classList.remove('show')
        }
        
    })
    img[2].classList.add('show')
})

list[3].addEventListener('click',()=>{
    img.forEach((image)=>{
        if(image.classList.contains('show')){
            image.classList.remove('show')
        }
        
    })
    img[3].classList.add('show')
})