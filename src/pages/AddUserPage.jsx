import { useState } from 'react';
import Save from '../components/buttons/Save';

export default function AddUser(){

    const [ user_obj_state, set_user_obj_state] = useState( {name:'', age:0})


    return (
        <>
            <h1>ADD USER PAGE</h1>

            <label htmlFor='name-input'>Name</label>
            <input id='name-input' onChange= {(e)=>{ set_user_obj_state( (state) => {return {...state, name:e.target.value }})}} value={user_obj_state.name}  ></input>
            <br></br>
            <label>Age</label>
            <button onClick={ (e)=>{ set_user_obj_state(  (state) => {return {...state, age:state.age+1}})}}>+</button>
            <span>{user_obj_state.age}</span>
            <button onClick={ (e)=>{ set_user_obj_state(  (state) => { return {...state, age:state.age-1}})}}>-</button>
            
            <br></br>

            <Save obj_state={user_obj_state} type='users'/>

        </>
    )
}