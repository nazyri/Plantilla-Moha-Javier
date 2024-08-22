//POST
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

//PUT
async function uploadCheck(id) {
    try {
        let task = {
            estado:true
        }
    const answer = await fetch("http://localhost:3002/users",{
        method:"PUT",
        headers:{
            "Content-type": "application/json"
        },
        body:JSON.stringify(task)
    })
    let data = await answer.json()
    console.log(data)
    } catch (error) {
        console.log(error);
    }
}
export {darDatos}