let search= document.querySelector('.search-box');
document.querySelector('#search-icon').onclick=() =>{
    search.classList.toggle('active')
    navbar.classList.remove('active')
} 
let navbar= document.querySelector('.navbar');
document.querySelector('#menu-icon').onclick=() =>{
    navbar.classList.toggle('active')
    search.classList.remove('active')

}
window.onscroll=()=>{
        navbar.classList.remove('active')
        search.classList.remove('active')
}
let headers = document.querySelectorAll('header');

window.addEventListener('scroll', () => {
    headers.forEach(header => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
});

