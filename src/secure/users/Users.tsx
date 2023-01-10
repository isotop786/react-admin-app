import React,{useState, useEffect} from "react";
import Wrapper from "../Wrapper";
import axios from "axios";
import { User } from '../../models/User'
import { Role } from "../../models/Role";
import { Link } from "react-router-dom";

const Users: React.FC = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = () => {
            axios.get('users?page=1')
                .then(res => {
                // console.log(res.data.data)
                    setUsers(res.data.data)
                })
                .catch(err => console.log(err))
            console.log(users)
        }

        fetchUsers();
        
    },[])
    return (
        <Wrapper>
            <h2>All Users</h2>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-3">
                <div className="btn-toolbar mb-2 mb-md-0">
                    <Link to="/users/create" className="btn btn-sm btn-outline-secondary">Add</Link>
                </div>
        </div>     
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            
            </tr>
          </thead>
        <tbody>
        {users.map((user: User) => {
            return( <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
            <td>{user.role?.name}</td>
            <td><button className="btn btn-sm btn-warning">Update</button></td>
            <td><button className="btn btn-sm btn-danger">Delete</button></td>
            </tr>)     
         })}               
           
            
          </tbody>
        </table>
      </div>
        </Wrapper>
    )
}

export default Users;