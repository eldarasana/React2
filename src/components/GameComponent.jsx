import { useNavigate } from 'react-router-dom'
import Delete from './buttons/Delete'

export default function GameComponent( { game_state } ){

    const navigator = useNavigate()

    function navigate(route){
        navigator(route)
    }

    return(
        <>
        <ul>
            <label>Title: </label>
            {game_state.name}
            <br></br>
            <label>Release: </label>
            {game_state.released}
        </ul>
        <button onClick={ ()=> navigate(`/edit_game/${game_state.id}`) }>Edit</button>
        <Delete del_id={game_state.id} type='games'/>
        </>
    )
}