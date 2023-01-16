function validate() {
    // Busca el elemento botón y añade el atributo "disabled" SOLO si el elemento "input" tiene un .value distinto de ''
    // 👇🏻 
    let input = document.querySelector('.input');
    let button = document.querySelector('button');
    console.log(input.value)
    if(input.value != '') {
        button.setAttribute('disabled','');
        // button.disabled = true;
    }

    // 👆🏻
}