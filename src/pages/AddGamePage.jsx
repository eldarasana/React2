
import { useState } from 'react';
import Save from '../components/buttons/Save';

export default function AddGame(){

    const [ user_obj_state, set_user_obj_state] = useState( {name:'', released:1999})


    return (
        <>
            {/* <h1>ADD GAME PAGE</h1>
            <label htmlFor='name-input'>Name</label>
            <input id='name-input' 
                onChange= {(e)=>{ set_user_obj_state( (state) => {return {...state, name:e.target.value }})}} 
                value={user_obj_state.name}></input>
            <br></br>
            <label>Release date</label>
            <button 
                onClick={ (e)=>{ set_user_obj_state(  (state) => {return {...state, released:state.released+1}})}}>+</button>
            <span>{user_obj_state.released}</span>
            <button 
                onClick={ (e)=>{ set_user_obj_state(  (state) => { return {...state, released:state.released-1}})}}>-</button>
            <br></br>
            <Save obj_state={user_obj_state} type='games'/> */}



            <div className='h1-wrapper-wrapper'>
                <h1 className='h1-wrapper'>ADD GAME PAGE</h1>
            </div>
            <div className='add-user-form-wrapper'>
            <div className='simple-input-wrapper'>
                    <div className="input-group">
                    <input required="" type="text" name="text" autoComplete="off" className="input"
                        onChange= {(e)=>{ set_user_obj_state( (state) => {return {...state, name:e.target.value }})}} 
                        value={user_obj_state.name}></input>
                    <label className="user-label">Name</label>
                    </div>
                </div>
                <div className='age_part_wrapper'>
                    <label className='num_change_label'>Release date</label>
                    <div className='plus-minus-wrapper'>
                        <div className='rgb-container-wrapper'>
                            <div className='rgb-container'>
                                <button 
                                onClick={ (e)=>{ set_user_obj_state(  (state) => {return {...state, released:state.released+1}})}}>+</button>
                            </div>
                        </div>
                        <div className='span-wrapper'>
                            <span>{user_obj_state.released}</span>
                        </div>
                        <div className='rgb-container-wrapper'>
                            <div className='rgb-container'>
                                <button 
                                onClick={ (e)=>{ set_user_obj_state(  (state) => { return {...state, released:state.released-1}})}}>-</button>
                            </div>
                        </div>
                        <Save obj_state={user_obj_state} type='games'/>
                    </div>
                </div>
            </div>

        </>
    )
}