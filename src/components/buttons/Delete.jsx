import { useNavigate } from "react-router-dom"


export default function Delete({del_id}){

    const navigator = useNavigate()

    async function del_user(g_del_id){
        try {
            const response = await fetch(`http://localhost:5000/users/${g_del_id}`, {
                method:'DELETE' ,
                headers:{
                    'Content-Type':'application/json',
                },
            })
            if (response.ok) {
                alert('User removed')
                navigator('/users')
            }else{
                alert('Delete request failed...')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return(
        <button onClick = { () => del_user(del_id) }  >Delete</button>
    )
}