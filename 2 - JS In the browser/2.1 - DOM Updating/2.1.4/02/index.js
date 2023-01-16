// Escucha el evento 'scroll' en el elemento document,
// y oculta el texto upper-text cuando window.scrollY sea distinto de 0
// document.addEventListener('scroll', ...)
let upperText = document.querySelector('.upper-text');
window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if (window.scrollY > 0) {
        upperText.classList.add('hidden');
    } else {
        upperText.classList.remove('hidden');
    }
})
