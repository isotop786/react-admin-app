import React,{useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";


const RedirectToDashboard = () => {
    const navigate = useNavigate();
    
    const [token,setToken] = useState(()=> localStorage.getItem('token'))
    useEffect(() => {
        // console.log(token);
        if (token) {
            navigate('/dashboard')
        } else {
            navigate('/login')
        }
    },[])

    return (
        <>
    
        </>
    )
}

export default RedirectToDashboard;