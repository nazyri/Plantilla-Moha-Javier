// POST
async function darDatos(obj) {
    try {
        const respuesta = await fetch("http://localhost:3002/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(obj)
        });
        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud POST: ${respuesta.statusText}`);
        }
        const data = await respuesta.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error en darDatos:", error);
        return null;
    }
}
export { darDatos };

// GET
async function getDatos() {
    try {
        const response = await fetch('http://localhost:3002/users');
        if (!response.ok) {
            throw new Error(`Error fetching users: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}
export { getDatos };

// DELETE
async function eliminarLista(id) { // Asumiendo que se debe eliminar por ID
    try {
        const response = await fetch(`http://localhost:3002/users/${id}`, { // Utiliza el ID en la URL
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
        if (!response.ok) {
            throw new Error(`Error en la solicitud DELETE: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en eliminarLista:", error);
        return null;
    }
}
export { eliminarLista };

// PUT
async function actualizarLista(obj) {
    try {
        const response = await fetch('http://localhost:3002/users', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
        });
        if (!response.ok) {
            throw new Error(`Error en la solicitud PUT: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en actualizarLista:", error);
        return null;
    }
}
export { actualizarLista };
