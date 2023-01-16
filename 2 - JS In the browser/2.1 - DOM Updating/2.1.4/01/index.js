// Añade el evento de click al elemento btn y muestra por pantalla el texto del botón clickado
const btn = document.querySelector(".btn");

btn.addEventListener('click', function(){
    console.log(btn.textContent);
});
