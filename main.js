const maniEl = document.querySelector('.mani')

window.addEventListener('scroll',(e)=>{
    e.preventDefault()
    
    let value = window.scrollY

    maniEl.style.marginTop = value * 2.5 +'px'; 

    

})