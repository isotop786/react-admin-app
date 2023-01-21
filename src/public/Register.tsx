import React,{useState} from 'react'
import "./login.css"
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link, redirect } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Register = () => {
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [passwordConfirm, setPasswordConfirm] = useState(''); 

    const navigate = useNavigate();

    const onSubmitHandler = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(firstName, lastName, email, password, passwordConfirm);
        axios.post('register', {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            password_confirm: passwordConfirm,
            role:3
        })
        .then(res => {
            console.log(res.data)
            return navigate("/login");
        })
        .catch(err => console.log(err.response.data))
    }

    return (
         <div className="container" style={{justifyContent:"center",alignItems:"center",paddingTop:"5rem"}}>
        <div className="row mt-4">
        <div className="col-md-4"></div>
        <div className="text-center col-md-4">
                <form className="form-signin" onSubmit={(e)=> onSubmitHandler(e)}>
                    <h1 className="h3 mb-3 font-weight-normal">Registration Page</h1>
                    <label htmlFor="firstName" className="sr-only">First Name</label>
                        <input type="text" id="firstName" className="form-control" placeholder="First Name" required
                            onChange={e => setFirstName(e.target.value)}
                          
                        />
                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                        <input type="text" id="lastName" className="form-control" placeholder="Last Name" required
                            onChange={e => setLastName(e.target.value)}
                           
                        />
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required
                            onChange={e => setEmail(e.target.value)}
                           
                        />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required
                            onChange={e => setPassword(e.target.value)}
                        />
                    <label htmlFor="inputPassword" className="sr-only">Password Confrim</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password Confirm" required
                            onChange={e => setPasswordConfirm(e.target.value)}
                        />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                    <p className='mt-3 text-muted'>Already have account? <Link to="/login">Login</Link> now</p>    
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2022</p>
            </form>
        </div>
         <div className="col-md-4"></div>
         </div>
        </div>
    )
}

export default Register;