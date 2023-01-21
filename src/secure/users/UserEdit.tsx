import React, {useState, useEffect, SyntheticEvent} from 'react';
import Wrapper from '../Wrapper';
import axios from 'axios';
import Users from './Users';
import { Role } from '../../models/Role';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

export const UserEdit = ()=> {
    const {id} = useParams();
    const navigate = useNavigate();
    const [roles,setRoles] = useState([]);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [roleId, setRoleId] = useState(1)
    const [userData,setUserData] = useState(null)

    useEffect(()=>{
       fetchRoles()
       fetchUserData();
    },[])

    function fetchRoles(){
        axios.get('/roles')
        .then((res)=> {
            // console.log(res.data.data)
            setRoles(res.data.data)
        })
    }

    function fetchUserData(){
        axios.get(`/users/${id}`)
        .then(res=>{
            setUserData(res.data.data)
            setFirstName(res.data.data.first_name);
            setLastName(res.data.data.last_name);
            setEmail(res.data.data.email);
            setRoleId(res.data.data.role.id);
        })
        .catch(err => console.log("Error in fetching users' details: "+err))

    }

    const handleSubmit = async (e: SyntheticEvent)=>{
        e.preventDefault()
        // console.log(firstName)
        // console.log(lastName)
        // console.log(email)
        // console.log(roleId)
        axios.put('/users/'+id,{
            first_name: firstName,
            last_name : lastName,
            email: email,
            role_id: roleId
        })
        .then(()=>{
            alert('User data updated Successfully')
            navigate('/users')
        })
    }

    const Loader =()=>{
        return(
            <div>
                <span>Loading user's data...</span>
                <div className="spinner-border text-dark" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    return(
        <Wrapper>
            <h2>Edit User Details </h2>

        {userData !==null ? (
            <div className="row">
            <div className="col-md-5">
                <form className='my-3' onSubmit={e => handleSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="">First name</label>
                        <input 
                        defaultValue={firstName}
                        onChange={e=>setFirstName(e.target.value)} type="text" name="first_name" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Last name</label>
                        <input 
                            defaultValue={lastName}
                            onChange={e=>setLastName(e.target.value)}  type="text" name="last_name" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input 
                            defaultValue={email}
                            onChange={e=>setEmail(e.target.value)}  type="email" name="email" className="form-control" id="" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Role</label>
                        <select name="role_id" id="" className='form-control'
                            defaultValue={roleId}
                            onChange={e=>setRoleId(parseInt(e.target.value))} 
                        >
                            {roles.length > 0 ? roles.map((role:Role) =>(
                                <option key={role.id} value={role.id}>{role.name}</option>
                            )): (<option disabled>Roles loading...</option>)}
                        </select>
                    </div>
                    <div>
                        <button className='btn btn-dark' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
        ):<Loader/>}
            
            
        </Wrapper>
    )
}

