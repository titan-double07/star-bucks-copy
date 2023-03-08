const btn= document.getElementById('menu-btn');
const hamNav=document.getElementById('menu')
const navToggle=()=>{
btn.classList.toggle('open');
hamNav.classList.toggle('hidden')
document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', navToggle)