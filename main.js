// const bar = document.getElementById('bar');
// const nav = document.getElementById('navbar');

// if (bar) {
//     bar.addEventListener('click', () => {
//          nav.classList.add("active");
//     })
// }

const close = document.getElementById('close');
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar')

if (bar) {
    bar.addEventListener('click', () => {
    nav.classList.add('active');    

    })
    
    
}


if (close) {
    close.addEventListener('click', () => {
    nav.classList.remove('active');    

    })
    
    
}

 


// splash view

// const splash = document.querySelector('.splash');

// document.addEventListener('DOMContentLoaded', (e)=>{
//     setTimeout(()=>{
//     splash.classList.add('display-none');
//     }, 2000);
// })
