import { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import '../styles/UsersPage.css';
import '../styles/elements/line_button.css';


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
                    {/* <NavLink to={`/users/${user.id}`}>{user.name}</NavLink> */}
                    <button className='line-button'>
                        <NavLink to={`/users/${user.id}`} className="btn2"><span className="spn2">{user.name}</span></NavLink>
                    </button>
                </li>

            )
        }) 
    }
    return (
        <>

            <div className='users-page-container'> 
                <div className='h1-wrapper'><h1>Users</h1></div>
                <ul>{user_list_jsx}</ul>
            </div>

           
        </>
    )
}