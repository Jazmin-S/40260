console.log("inicio")

/* const boton = document.getElementById("enviar")
boton.addEventListener("click", 
    () => {
        console.log("los parametros")
        let user=document.getElementById("user")
        let password=document.getElementById("password")
        console.log(password.value)
        console.log(user.value) */
        




    const mostrar =  () => {
        console.log("los parametros")
        let user=document.getElementById("user")
        let password=document.getElementById("password")
        console.log(password.value)
        console.log(user.value)

        let formulario = document.getElementsByTagName("form")
        console.log(formulario)
        user.setAttribute("name","q")
        password.setAttribute("name","pasword")
        formulario[0].setAttribute("action","https://google.com.mx/search")
        formulario[0].submit()

    }

    const buton = document.getElementById("enviar")
    buton.addEventListener("click", mostrar)