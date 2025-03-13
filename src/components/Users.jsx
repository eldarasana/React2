import { useEffect, useState } from 'react'


export default function Users(){

    const [users_list, set_users_list] = useState([])

    useEffect( ()=>{
        async function read_users(){
            try {
                const response = await fetch('http://localhost:5000/users')
                const data = await response.json()
                if (response.ok) {
                    set_users_list(data)
                    //console.log(data)
                }else{
                    alert('Error getting user data')
                }
            } catch (error) {
                console.error(error)
                alert('Error. Check console')
            }
        }
        read_users()
    }, [])


    let user_list_jsx

    if (users_list.length<1){
        user_list_jsx = <p>User list is empty</p>
    }
    else{
        user_list_jsx = users_list.map( (user)=>{
            return(
                <li key={user.id}> 
                    {user.name}
                </li>
            )
        }) 
    }
    return (
        <>
            <h1>Users page</h1>
            <ul>{user_list_jsx}</ul>
        </>

    )
}