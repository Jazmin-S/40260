console.log("inicio");

const mostrar = () => {
  console.log("los parametros");

  const user = document.getElementById("user");
  const password = document.getElementById("password");
  console.log(password.value);
  console.log(user.value);

  const formulario = document.getElementsByTagName("form")[0];

  user.setAttribute("name", "q");
  password.setAttribute("name", "pasword");

  formulario.setAttribute("action", "https://google.com.mx/search");
  formulario.submit();
};

document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("enviar");
  if (boton) {
    boton.addEventListener("click", mostrar);
  }
});
