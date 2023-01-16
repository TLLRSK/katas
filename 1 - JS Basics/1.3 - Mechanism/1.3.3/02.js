// Crea una función que devuelva un array únicamente con los usuarios menores de 20

const userList = [
  { name: 'Pedro', age: 21 },
  { name: 'Maria', age: 26 },
  { name: 'Marta', age: 34 },
  { name: 'Pepito el menor de 20', age: 19 },
];

// 👇🏻 Añade tu lógica aquí utilizando la función filter
const userArr = userList.filter((user) => user.age < 20);
console.log(userArr);
// 👆🏻
