import { darDatos } from "../services/fetch"

const boton1 = document.getElementById("botoncito")

boton1.addEventListener("click", function (e) {
    const inputNombre = document.getElementById("espacio-nombre").value
    const inputCorreo = document.getElementById("espacio-correo").value
    const inputContra = document.getElementById("espacio-contraseña").value
    e.preventDefault;
    if (inputNombre.value === "" || inputCorreo.value === "" || inputContra.value === "") {
        alert("Llene todos los espacios")
    }
    else{
     (!inputNombre.value === "" || !inputCorreo.value === "" || inputContra === "")
     alert("Usuario registrado sastisfactoriamente")
     window.location.href="login.html"
    }
    let listaInput = {
        inputNombre: inputNombre,
        inputCorreo: inputCorreo,
        inputContra: inputContra,
    }
    darDatos(listaInput)
})  