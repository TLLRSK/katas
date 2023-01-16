// Crea una función que muestre "MAYOR" si el número
// proporcionado es mayor que 5 y "MENOR" en caso contrario

const isGreatherThan5 = (number) => {
  // 👇🏻 Añade tu lógica aquí
  let result = '';
  if (number > 5) {
    result = 'MAYOR';
  } else {
    result = 'MENOR';
  }
  return result;
  // 👆🏻
};

console.log(isGreatherThan5(3)); // "MENOR"
console.log(isGreatherThan5(5)); // "MENOR"
console.log(isGreatherThan5(8)); // "MAYOR"
