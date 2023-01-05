import Nav from '../components/Nav';
import Menu from '../components/Menu';
import '../App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React, { Component,PropsWithChildren} from 'react';
import { Link, redirect } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Navigate } from "react-router-dom";


class Wrapper extends Component<PropsWithChildren> {
    
    // navigate = useNavigate();
    state = {
        redirect : false
    }

    componentDidMount =  () => {
        // try {
        //     const response = await axios.get('user');
        //     console.log(response)
        // }
        // catch (err)
        // {
        //     this.setState({
        //         redirect: true
        //     })
        // }
        // axios.get('user')
        //     .then(res => console.log(res))
        //     .catch(err => {
        //         this.setState({redirect: true})
        //     })
        console.log(localStorage.getItem('token'));
        // if (localStorage.getItem('token') !==null)
        // {
        //     // this.state.redircet = false
        //     this.setState({redirect:false})
        // }
        // else {
        //     // this.setState({redirect: true})
        //      this.setState({redirect:true})
        // }
        if (localStorage.getItem('token') === null)
        {
            this.setState({ redirect : true })   
            // alert(this.state.redirect)
        }
    }

    render() {

          return (
        <>
            {this.state.redirect && (<Navigate to="/login"/>)}        
                  
            <Nav/>
            {/* {this.state.} */}
            <div className="container-fluid">
            <div className="row">

                {/* Menu */}
                <Menu/>
                {/* Menu Ends*/}      

                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 mt-4">
                    {this.props.children}
                </main>
            </div>
            </div>
      </>
  )
    }

}

export default Wrapper