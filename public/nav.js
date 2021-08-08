const toggleBtn = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
toggleBtn.addEventListener('click',()=>{
    navbarLinks.classList.toggle('active');
})
//document.getElementById('#videopauldev').querySelector('video').playbackRate = 0.5;
window.onload = function(){
    const contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}