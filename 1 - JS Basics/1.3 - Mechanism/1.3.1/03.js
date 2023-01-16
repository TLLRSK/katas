// Crea una función que devuelva el saludo que corresponda
// al idioma proporcionado a partir del objeto

const saludos = {
  en: 'Hello',
  es: 'Hola',
  eu: 'Kaixo',
  jp: 'Konnichiwa',
};

const sayHi = (lang) => {
  // 👇🏻 Añade tu lógica aquí
  let result = '';
  switch (lang) {
    case 'es':
      result = saludos.es;
      break;
    case 'en':
      result = saludos.en;
      break;
    case 'eu':
      result = saludos.eu;
      break;
    case 'jp':
      result = saludos.jp;
      break;
    default:
      break;
  }
  // 👆🏻
  return result;
};

console.log(sayHi('es')); // "Hola"
console.log(sayHi('jp')); // "Konnichiwa"
console.log(sayHi('eu')); // "Kaixo"
