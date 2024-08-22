//POST
async function darDatos(obj){ 
    try {
        const respuesta = await fetch("http://localhost:3001/users",{
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
export {darDatos}