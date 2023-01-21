import React,{useState, useEffect} from "react";
import Wrapper from "../Wrapper";
import axios from "axios";
import { User } from '../../models/User'
import { Role } from "../../models/Role";
import { Link } from "react-router-dom";

const Roles: React.FC = () => {
  const [roles, setRoles] = useState([]);

    useEffect(() => {
        const fetchUsers = () => {
            axios.get(`/roles`)
                .then(res => {
                console.log(res.data)
                  setRoles(res.data.data)
                  // setLastPage(res.data.meta?.last_page)
                })
                .catch(err => console.log(err))
            
        }

        fetchUsers();
        
    },[])


    return (
      <Wrapper>
      
            <h2>All Roles</h2>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-3">
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to="/users/create" className="btn btn-sm btn-outline-secondary">Add</Link>
                </div>
        </div>
        {roles.length == 0 ? (<div className="my-2"><h4>Roles data loading...</h4></div>) : (
     <div>
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
              
                {roles?.map((role: Role) => {
                  return (<tr key={role.id}>
                    <td>{role.id}</td>
                    <td>{role.name}</td>
                    <td><Link to={`/roles/${role.id}/edit`} className="btn btn-sm btn-warning">Update</Link></td>
                    <td><button className="btn btn-sm btn-danger">Delete</button></td>
                  </tr>)
                })}
           
            
              </tbody>
            </table>
          </div>
       

          </div>
        )}
    
        

        </Wrapper>
    )
}

export default Roles;