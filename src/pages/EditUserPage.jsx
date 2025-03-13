import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Update from '../components/buttons/Update'

export default function EditUser(){

    const url_arg = useParams()
    const uid = url_arg.id
    const [user_state, set_user_state] = useState(null)
  

    useEffect(()=>{
        async function get_user_data(){
            try {
                const response = await fetch(`http://localhost:5000/users/${uid}`)
                const data = await response.json()
                if (response.ok) {
                    set_user_state(data)
                }else{
                    alert('Fetching user data failed...')
                }
            } catch (error) {
                console.error(error)
            }
        }
        get_user_data()
    },[uid])

    let display_user
    if(user_state){
        display_user = 
        <ul>
            <label>Name</label> 
            <br></br>
            {user_state.name}
            <label>Age</label>
            <br></br>
            {user_state.age}
        </ul>
    }else{
        display_user = <p>Loading...</p>
    }

    //prev => prev ? { ...prev, name: e.target.value 
    return(
        <>

            <h1>EditUserPage{uid}</h1>
            {display_user}

            <label>New name</label> 
            <input 
                onChange={ (e)=>{ set_user_state( state => state ? {...state, name:e.target.value} : state ) } }
                value={user_state?.name || ''}/>
            <br></br>
            <label>New age</label>
            <Update updated_user_obj={user_state} />
        </>
    )
}