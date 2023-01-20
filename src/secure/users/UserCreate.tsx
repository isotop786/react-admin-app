import React, {useState, useEffect, SyntheticEvent} from 'react';
import Wrapper from '../Wrapper';
import axios from 'axios';
import Users from './Users';
import { Role } from '../../models/Role';
import { useNavigate } from "react-router-dom";

const UserCreate = ()=> {
    const navigate = useNavigate();
    const [roles,setRoles] = useState([]);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [roleId, setRoleId] = useState(1)

    useEffect(()=>{
        axios.get('/roles')
        .then((res)=> {
            // console.log(res.data.data)
            setRoles(res.data.data)
        })
    },[])

    const handleSubmit = async (e: SyntheticEvent)=>{
        e.preventDefault()
        // console.log(firstName)
        // console.log(lastName)
        // console.log(email)
        // console.log(roleId)
        axios.post('/users',{
            first_name: firstName,
            last_name : lastName,
            email: email,
            role_id: roleId
        })
        .then(()=>{
            alert('User created Successfully')
            navigate('/users')
        })
    }
    return(
        <Wrapper>
            <h2>Create New User </h2>

            <div className="row">
                <div className="col-md-5">
                    <form className='my-3' onSubmit={e => handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="">First name</label>
                            <input onChange={e=>setFirstName(e.target.value)} type="text" name="first_name" className="form-control" id="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Last name</label>
                            <input onChange={e=>setLastName(e.target.value)}  type="text" name="last_name" className="form-control" id="" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input onChange={e=>setEmail(e.target.value)}  type="email" name="email" className="form-control" id="" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Role</label>
                            <select name="role_id" id="" className='form-control'
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
            
        </Wrapper>
    )
}

export default UserCreate;