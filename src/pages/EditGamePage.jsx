import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Update from '../components/buttons/Update'

export default function EditGame(){

    const url_arg = useParams()
    const id = url_arg.id
   
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
        display_game = 
        <ul>
            <label>Title</label> 
            <br></br>
            {obj_state.name}
            <br></br>
            <label>Released</label>
            <br></br>
            {obj_state.released}
        </ul>
    }else{
        display_game = <p>Loading...</p>
    }

    return(
        <>
            <h1>Edit Game</h1>
            {display_game}
            <label>New title</label> 
            <input 
                onChange={ (e)=>{ set_obj_state( state => state ? {...state, name:e.target.value} : state ) } }
                value={obj_state?.name || ''}/>
            <br></br>
            <label>New release date</label>

            <button onClick={ (e)=>{ set_obj_state(  (state) => {return {...state, released:state.released+1}})}}>+</button>
            <span>{obj_state?.released || 0}</span>
            <button onClick={ (e)=>{ set_obj_state(  (state) => { return {...state, age:state.released-1}})}}>-</button>


            <Update updated_obj={obj_state} type='games'/>
        </>
    )
}