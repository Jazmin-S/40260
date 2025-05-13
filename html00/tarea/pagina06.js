const Picture = (id, name) => {
  const url = `https://picsum.photos/id/${id}/200/200`;
  return `
    <figure>
      <img src="${url}" alt="" class="redonda">
      <figcaption>${name}</figcaption>
    </figure>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById('app');

  app.innerHTML = Picture(1, "John") + Picture(2, "Jane");

  const lista = app.querySelectorAll("img");

  lista.forEach(img => {
    img.addEventListener("click", () => {
      img.classList.toggle("redonda");
    });
  });
});

export function saludar() {
  alert("x");
}
