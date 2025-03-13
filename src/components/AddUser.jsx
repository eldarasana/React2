import { useState } from 'react';









export default function AddUser(){


    const [ user_name_state, set_user_name] = useState('')
    const [ user_age_state, set_user_age ] = useState(0)




    async function save_user(name_state, age_state){
        const newUser = { name:name_state, age:age_state }
    
        try{
    
            const response = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(newUser)
            })
    
            const data = await response.json()
    
            if (response.ok){ alert('User saved successfully')}
            else { 
                console.error('Error', data)
                alert('Error saving data')
            }
        } catch (error) {
            console.error('Error', error)
            alert('Error saving user')
        }
    }


    return (
        <>
        
            <h1>ADD USER PAGE</h1>

            <label htmlFor='name-input'>Name</label>
            <input id='name-input' onChange= {(e)=>{ set_user_name(  (state)=>{return e.target.value} ) }} value={user_name_state}  ></input>
            <br></br>
            <label>Age</label>
            <button onClick={ (e)=>{ set_user_age((state)=>{return state+1})}}>+</button>
            <span>{user_age_state}</span>
            <button onClick={ (e)=>{ set_user_age( (state)=>{return state-1})}}>-</button>
            
            <br></br>
            <button onClick={ ()=> save_user(user_name_state, user_age_state ) }>SAVE USER</button>


        </>
    )
}