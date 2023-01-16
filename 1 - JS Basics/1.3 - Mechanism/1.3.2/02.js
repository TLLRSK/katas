// Crea una función que muestre los nombres de los usuarios que tenemos en la lista
const userList = [
  { name: 'Jon' },
  { name: 'Carmen' },
  { name: 'Maria' },
];

const showUserNames = (names) => {
  // 👇🏻 Añade tu lógica aquí
  return names.map(user => console.log(user.name));
  // 👆🏻
};

showUserNames(userList);
