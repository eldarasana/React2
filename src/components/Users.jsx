
export default function Users(){

    let users_list=[ {name:'john', age:25}, {name:'bob', age:16}]

    let user_list_jsx
    if (users_list.length<1){
        user_list_jsx = <p>User list is empty</p>
    }
    else{

        user_list_jsx = users_list.map( (user)=>{
            return(
                <li>
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