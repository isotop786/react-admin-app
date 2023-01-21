import React,{useState,useEffect} from 'react'
import Wrapper from '../Wrapper'
import axios from 'axios'
import { Role } from '../../models/Role'
import { Link } from 'react-router-dom'
const Roles = () => {

    const [roles,setRoles] = useState([])
    
    useEffect(()=>{
        axios.get('/roles')
        .then(res=>{
            setRoles(res.data.data)
        })
    },[])


  return (
    <Wrapper>
        <div>
            <h3>All Roles</h3>
        </div>
        {roles.length >0 ? (
            <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {roles?.map((role:Role)=>(
                <tr>
                    <td>{role.id}</td>
                    <td>{role.name}</td>
                    <td>
                    <td><Link to={`/roels/${role.id}/edit`} className="btn btn-sm btn-warning">Update</Link></td>
                    <td><button  className="btn btn-sm btn-danger">Delete</button></td>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ):(<div>Roles are loading....</div>)}
       
    </Wrapper>
  )
}

export default Roles