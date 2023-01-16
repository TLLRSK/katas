// Estamos preparando la lista para la boda y necesitaos saber cuantos tipos
// vegetarianos se deben preparar. Crea una función que muestre por consola una lista con los menús

const list = [
  { name: 'Carlos', menu: 'regular' },
  { name: 'Maria', menu: 'vegetarian' },
  { name: 'Pepe', menu: 'regular' },
  { name: 'Marta', menu: 'vegan' },
  { name: 'Paco', menu: 'regular' },
  { name: 'Juana', menu: 'glutenFree' },
];

// 👇🏻 Define aquí la función
const menus = (arr) => {
  // V.1
  // const menuObj = {
  //   regular: 0,
  //   vegetarian: 0,
  //   vegan: 0,
  //   glutenFree: 0,
  // }
  // const sum = (menu) => {
  //   switch (menu) {
  //     case 'regular':
  //       menuObj.regular++;
  //       break;
  //     case 'vegetarian':
  //       menuObj.vegetarian++;
  //       break;
  //     case 'vegan':
  //       menuObj.vegan++;
  //       break;
  //     case 'glutenFree':
  //       menuObj.glutenFree++;
  //       break;
  //     default:
  //       break;
  //   }
  // }
  // const result = arr.map((person) => sum(person.menu));
  // return menuObj;
  
  // V.2
  const menuList = {};
  let result = arr.map((user) => user.menu).forEach(function(x) { menuList[x] = (menuList[x] || 0) + 1; });
  return menuList;
};
// 👆🏻

// 👇🏻 Invoca la función
console.log(menus(list));
// 👆🏻

// ✅ => { vegetarian: 1, regular: 3, vegan: 1, glutenFree: 1 }
