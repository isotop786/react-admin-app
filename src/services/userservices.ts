import axios from "axios"
import { User } from "../models/User"
export const getUserData =  (id: any)=>{
    let userData : User ;
    axios.get(`/users/${id}`)
    .then(res=> {
        userData = res.data.data
        return userData;
    })
    .catch(err=> console.log(err))
    
}