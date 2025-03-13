import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import UserComponent from '../components/UserComponent.jsx'
 

export default function User(){

    const url_arg = useParams()
    const id = url_arg.id
    const [user_state , set_user_state] = useState(null);
    
    useEffect( ()=>{ 
        async function get_user_data(){
            try {
                const response = await fetch(`http://localhost:5000/users/${id}`)                
                const data = await response.json()

                if (response.ok) {
                    // UPDATE STATE VARIABLE FOR USER DATA
                    set_user_state(data)
                }else {alert('Failed to retrieve user data')}

            } catch (error) {
                console.error(error)
            }
        }
        get_user_data()
    }, [id])

    let display_user

    if(user_state){
        display_user = <UserComponent user_state={user_state} />
    }else{ display_user=<p>Loading...</p>}

    return(
        <>
            <h1>DISPLAY USER</h1>
            {display_user}      
        </>
    )
}