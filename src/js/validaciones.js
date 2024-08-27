import { darDatos } from "../services/fetch";

const boton1 = document.getElementById("botoncito");

boton1.addEventListener("click", function (e) {
    e.preventDefault(); // Corrección aquí: se debe llamar a la función con paréntesis

    // Obtener los valores de los campos
    const inputNombre = document.getElementById("espacio-nombre").value;
    const inputCorreo = document.getElementById("espacio-correo").value;
    const inputContra = document.getElementById("espacio-contraseña").value;
    const inputID = document.getElementById("espacio-ID").value
    // Verificar si alguno de los campos está vacío
    if (inputNombre === "" || inputCorreo === "" || inputContra === "") {
        alert("Llene todos los espacios");
    } else {
        // Aquí se puede manejar el registro exitoso
        alert("Usuario registrado satisfactoriamente");
        window.location.href = "login.html";

        // Crear el objeto con los datos del formulario
        let listaInput = {
            inputNombre: inputNombre,
            inputCorreo: inputCorreo,
            inputContra: inputContra,
            inputID: inputID
        };

        // Llamar a la función darDatos que se encarga de enviar los datos al servidor
        darDatos(listaInput);
    }
});
