// Crea una función transformer el texto a mayusculas si la longitud del texto es igual a 3
const capitalize3SizeStrings = (text) => {
  // 👇🏻 Añade tu lógica aquí
  if (text.length === 3){
    text = text.toUpperCase();
  }
  return text;
  // 👆🏻
};

console.log(capitalize3SizeStrings('HoL')); // "HOL"
console.log(capitalize3SizeStrings('HoLa QuE TaL')); // "HoLa QuE TaL"
console.log(capitalize3SizeStrings('HoL')); // "HoL"
