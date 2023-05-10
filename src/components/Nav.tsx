import React, {Component} from 'react'
import { Navigate } from "react-router-dom";
import axios from 'axios';
import { UserClass } from '../models/UserClass';

interface IProps {
}

interface IState {
  playOrPause?: string;
}

class Nav extends Component {

   

    state = {
        userinfo: new UserClass(),
        redirect: false,
        
    }

    

     componentDidMount() {
        axios.get('user')
        .then(res=>{
           
            this.setState({
                userinfo:res.data.data
            })

            console.log(this.state.userinfo)
        })

        // console.log("first"+this.state.user.first_name)
        // this.setState({
        //     userinfo: localStorage.getItem('userinfo["first_name"]')
        // })
        
        console.log(this.state.userinfo)
        // console.log(localStorage.getItem('userinfo'))
    }

    handleClick = () => {
        axios.post('logout', {});
        localStorage.clear();
        this.setState({redirect: true})
    }

    render() {
        if (this.state.redirect)
        {
            return <Navigate to="/login"/>    
        }
        return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Admin Dashboard</a>
           <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                <a className="nav-link" href="#" >{this.state.userinfo ? this.state.userinfo.first_name : "..."}</a>
                    <a className="nav-link" href="#" onClick={this.handleClick} >Sign out</a>
                </li>
            </ul>
        </nav>
    )
    }
}

export default Nav;