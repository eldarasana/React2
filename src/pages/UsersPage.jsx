import { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";


export default function Users(){

    // FETCH ALL 
    let type = 'users'
    const [obj_state, set_obj_state]=useState([])
    useEffect(()=>{
        async function get_obj_data(){
            try {
                const response = await fetch(`http://localhost:5000/${type}`)
                const data = await response.json()
                if (response.ok) {
                    set_obj_state(data)
                }else{
                    alert('Fetching user data failed...')
                }
            } catch (error) {
                console.error(error)
            }
        }
        get_obj_data()
    },[])
    // FETCH ALL 

    
    let user_list_jsx

    if (obj_state.length<1){
        user_list_jsx = <p>User list is empty</p>
    }
    else{
        user_list_jsx = obj_state.map( (user)=>{
            return(
                <li key={user.id}> 
                    <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
                </li>
            )
        }) 
    }
    return (
        <>
            <h1>Users pagess</h1>
            <ul>{user_list_jsx}</ul>
           
        </>
    )
}