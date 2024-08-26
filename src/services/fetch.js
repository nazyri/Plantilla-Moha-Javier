//Post
async function darDatos(obj){ 
    try {
        const respuesta = await fetch("http://localhost:3002/users",{
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(obj)
        })
        let data = await respuesta.json()
         console.log(data);
    } catch (error) {
        console.log(error);
    }
}


//GET

async function getDatos() {
    try {
        const response = await fetch('http://localhost:3002/users');
        if (!response.ok) {
            throw new Error('Error fetching users');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}
export { darDatos, getDatos };