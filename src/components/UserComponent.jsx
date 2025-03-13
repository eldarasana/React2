import { useNavigate } from 'react-router-dom'
import Delete from './buttons/Delete'

export default function UserComponent( { user_state } ){

    const navigator = useNavigate()

    function navigate(route){
        navigator(route)
    }

    return(
        <>
        <ul>
            <label>Name: </label>
            {user_state.name}
            <br></br>
            <label>Age: </label>
            {user_state.age}
        </ul>
        <button onClick={ ()=> navigate(`/edit_user/${user_state.id}`) }>Edit</button>
        <Delete del_id={user_state.id}/>
        </>
    )
}