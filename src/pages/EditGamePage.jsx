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
        
        <div className='card_wrapper'>
            <div className="rgb-card">
                <p className="heading">{obj_state.name}</p>
                <p>Released : {obj_state.released}</p>
                <p>Id : {obj_state.id}</p>
            </div>
        </div>






    }else{
        display_game = <p>Loading...</p>
    }

    return(
        <>
            <h1 className='edit-user-header'>Edit Game</h1>
            {display_game}
            <div className='form-wrapper'>
                <div className='simple-input-wrapper'>
                    <div className="input-group">
                    <input required="" type="text" name="text" autoComplete="off" className="input"
                        onChange={ (e)=>{ set_obj_state( state => state ? {...state, name:e.target.value} : state ) } }
                        value={obj_state?.name || ''}/>
                    <label className="user-label">Name</label>
                    </div>
                </div>



                <div className='age_part_wrapper'>
                    <label className='num_change_label'>New release date</label>
                    <div className='plus-minus-wrapper'>
                        <div className='rgb-container-wrapper'>
                            <div className='rgb-container'>
                                <button 
                                onClick={ (e)=>{ set_obj_state(  (state) => {return {...state, released:state.released+1}})}}>+</button>
                            </div>
                        </div>
                        <div className='span-wrapper'>
                            <span>{obj_state?.released || 0}</span>
                        </div>
                        <div className='rgb-container-wrapper'>
                            <div className='rgb-container'>
                                <button 
                                onClick={ (e)=>{ set_obj_state(  (state) => { return {...state, released:state.released-1}})}}>-</button>
                            </div>
                        </div>
                        <Update updated_obj={obj_state} type='games'/>
                    </div>
                </div>
            </div>




        </>
    )
}