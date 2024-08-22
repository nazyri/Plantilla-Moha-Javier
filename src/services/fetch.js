export async function getDatos() {
    try {
        // let listaObjetos ={
        //     nombre: nombre,
        //     correo: correo,
        //     clave: clave
        //    }
        const response = await fetch('http://localhost:3001/users');
        if (!response.ok) {
            throw new Error('Error fetching users');
        }
        // listaObjetos
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}