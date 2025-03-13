import { useParams } from 'react-router-dom'
 

export default function User(){


    const url_arg = useParams()
    const id = url_arg.id


    return(


        <>
            
            <h1>DISPLAY USER</h1>
            <p>{id}</p>        
        
        </>


    )
}