import { useState } from 'react';

export default function AddUser(){



    const [user_name, set_user_name] = useState('')
    const [ user_age, set_user_age ] = useState(0)


    return (
        <>
        
        
            <h1>ADD USER PAGE</h1>

            <label htmlFor='name-input'>Name</label>
            <input id='name-input' onChange= {(e)=>{ set_user_name(  (state)=>{return e.target.value} ) }} value={user_name}  ></input>
            <br></br>
            <label>Age</label>
            <button onClick={ (e)=>{ set_user_age((state)=>{return state+1})}}>+</button>
            <span>{user_age}</span>
            <button onClick={ (e)=>{ set_user_age( (state)=>{return state-1})}}>-</button>
            
            <br></br>
            <p>INPUT STATE TRACKING VARIABLE:{user_name}</p>



        </>
    )
}