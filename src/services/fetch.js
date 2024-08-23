//Post
async function darDatos(){ 
    try {
        let tarea ={
            id:Date.now(),
            nombre:inputTask.value,
            estado:false
        }
        const respuesta = await fetch("http://localhost:3002/users",{
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(tarea)
        })
        let data = await respuesta.json()
        getDatos()
         console.log(data);
    } catch (error) {
        console.log(error);
    }
}






export async function getDatos() {
    try {
        const response = await fetch('http://localhost:3001/users');
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