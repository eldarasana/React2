import { useParams } from 'react-router-dom'
import GameComponent from '../components/GameComponent.jsx'
import { useState, useEffect } from 'react'

export default function Game(){
    const { id } = useParams()
  
    // FETCH ID
    const type='games'
    const [obj_state , set_obj_state] = useState(null);
    useEffect(()=>{
        async function get_obj_data(){
            try {
                const response = await fetch(`http://localhost:5000/${type}/${id}`)
                const data = await response.json()
                if (response.ok) {
                    set_obj_state(data)
                }else{
                    alert('Fetching data failed...')
                }
            } catch (error) {
                console.error(error)
            }
        }
        get_obj_data()
    },[type, id])
    // FETCH ID


    let display_game

    if(obj_state){
        display_game = <GameComponent game_state={obj_state} />
        if (obj_state.lengh<1) {
            display_game= <p>Games list is empty</p>
        }
    }else{ 
        display_game=<p>Loading...</p>
    }
    return(
        <>
            <h1>DISPLAY GAME</h1>
            {display_game}      
        </>
    )
}