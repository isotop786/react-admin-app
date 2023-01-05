import React, { SyntheticEvent,useEffect,useState } from "react";
import "./login.css"
import axios from 'axios';
import { Link, redirect } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const onSubmitHandler = (e: SyntheticEvent) => {
        e.preventDefault();
        if (email && password)
        {
            axios.post('login', {
                email: email,
                password: password
            }
            )
            .then(res => {
                console.log(res.data);
                localStorage.setItem('token', res.data.jwt)
                return navigate('/')
            })
            .catch(err=> console.log(err.response.data))
        }
    }
    return (
        <div className="container" style={{justifyContent:"center",alignItems:"center",paddingTop:"5rem"}}>
        <div className="row mt-4">
        <div className="col-md-4"></div>
        <div className="text-center col-md-4">
                <form className="form-signin" onSubmit={e => onSubmitHandler(e)}>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address"
                            onChange={e => setEmail(e.target.value)}
                            required />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                            required />
                    <div className="checkbox mb-3">
                        <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className='mt-3 text-muted'>New to our website? <Link to="/register">Register</Link> now</p>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017-2022</p>
            </form>
        </div>
         <div className="col-md-4"></div>
         </div>
        </div>    
    )
}
export default Login;