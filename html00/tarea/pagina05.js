import { Picture } from './picture.js'; // ✅ ruta relativa correcta

document.addEventListener("DOMContentLoaded", () => {
  const ejemplo = document.getElementById("demo");
  ejemplo.innerHTML = "Hola" + Picture(1);
});
