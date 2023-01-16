function updateClass() {
  // Busca el elemento con clase lucia y añade una clase activa con classList
  // Si la clase ya existe, eliminalá en vez de añadirla
  // 👇🏻
  const lucia = document.querySelector('.lucia');
  lucia.classList.toggle('active');
}
