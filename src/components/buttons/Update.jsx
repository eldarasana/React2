import { useNavigate } from "react-router-dom"


export default function Update( {updated_obj, type} ){

    const navigator = useNavigate()
    
    async function update(){
        try {
            const response = await fetch(`http://localhost:5000/${type}/${updated_obj.id}`,
                {
                    method:'PUT', 
                    body: JSON.stringify(updated_obj), 
                    headers:{
                        'Content-Type':'application/json'
                    }
                }
            )
            if (response.ok) {
                alert('Update success')
                navigator(`/`)
            }else{
                alert('Update failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <button onClick={ ()=>{ update() } }>Update</button>
    )
}