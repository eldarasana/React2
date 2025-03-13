import { useNavigate } from "react-router-dom"


export default function Update( {updated_user_obj} ){

    const navigator = useNavigate()
    
    async function update_user(g_user){
        try {
            const response = await fetch(`http://localhost:5000/users/${g_user.id}`,
                {
                    method:'PUT', 
                    body: JSON.stringify(g_user), 
                    headers:{
                        'Content-Type':'application/json'
                    }
                }
            )
            if (response.ok) {
                alert('User updated')
                navigator('/users')
            }else{
                alert('Update failed')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <button onClick={ ()=>{ update_user( updated_user_obj ) } }>Update</button>
    )
}