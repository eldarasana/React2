import { useNavigate } from 'react-router-dom'
import Delete from './buttons/Delete'

export default function GameComponent( { game_state } ){

    const navigator = useNavigate()

    function navigate(route){
        navigator(route)
    }

    return(
        <>

        <div className="rgb-card">
            <p className="heading">{game_state.name}</p>
            <p>Release : {game_state.released}</p>
            <p>Id : {game_state.id}</p>
        </div>

        <div className='card-btn-container'>
            <div className='subdivider'>
                <div className='rgb-container'>
                    <button 
                        onClick={ ()=> navigate(`/edit_game/${game_state.id}`) }>Edit</button>
                </div>
            </div>

            <div className='subdivider'>
                <div className='rgb-container'>
                    <Delete del_id={game_state.id} type='games'/>
                </div>
            </div>
        </div>

        </>
    )
}