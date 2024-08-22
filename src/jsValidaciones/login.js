import { getDatos } from "../services/fetch";
let ingresar = document.getElementById("ingresar");

ingresar.addEventListener("click", async (e) => {
    e.preventDefault();
    
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let clave = document.getElementById("clave").value;

    if (nombre === '' || correo === '' || clave === '') {
        alert("Rellene todos los espacios");
        return; // Termina la función si algún campo está vacío
    }
    // getDatos()
    // Obtiene los datos de los usuarios
    const usuarios = await getDatos()

    // Verifica si el usuario ingresado coincide
    const usuarioValido = usuarios.some(usuario =>
        usuario.nombre === nombre &&
        usuario.correo === correo &&
        usuario.clave === clave
    );

    if (usuarioValido) {
        alert('Inicio de sesión exitoso!');
    
 
         window.location.href = 'src/html/consultas.html'
    } else {
        alert('Nombre de usuario, correo o contraseña incorrectos.');
    }
});