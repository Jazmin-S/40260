console.log("Inicio")
const boton = document.getElementById("enviar")

boton.addEventListener("click", () => {
    console.log("los parametros")
    let nombre=document.getElementById("nombre")
    let correo=document.getElementById("correo")
    let direccion=document.getElementById("direccion")
    let ciudad=document.getElementById("ciudad")
    console.log(nombre.value)
    console.log(correo.value)
    console.log(direccion.value)
    console.log(ciudad.value)
}
)