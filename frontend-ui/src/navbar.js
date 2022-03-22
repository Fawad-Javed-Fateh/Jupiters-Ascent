
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import JsonForm  from './form';
import { Helmet } from 'react-helmet';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { Link } from 'react-router-dom';


function Navbar(){
    return(
        <div className="tm-nav-container-outer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg" id="tm-main-nav">
                        <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbar-nav" 
                            aria-controls="navbar-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="dark-blue-text"><i className="fas fa-bars"></i></span>
                        </button>
                        <div className="collapse navbar-collapse tm-nav" id="navbar-nav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link tm-nav-link" href="/">Home </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link tm-nav-link" href="/singleuser">single user</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link tm-nav-link" href="about.html">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link tm-nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>                            
                        </div>                        
                    </nav>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Navbar





