
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import JsonForm  from './form';
import { Helmet } from 'react-helmet';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { Link } from 'react-router-dom';


function Navbar(){
    return(
        <div className="col-lg-8 col-1">
        <div className="tm-nav">
          <nav className="navbar navbar-expand-lg navbar-light tm-bg-white-transparent tm-navbar">
            <button className="navbar-toggler" type="button"
              data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <div className="tm-nav-link-highlight"></div>
                  <a className="nav-link" href="/"> Home </a>
                </li>
                
                <li className="nav-item">
                  <div className="tm-nav-link-highlight"></div>
                  <a className="nav-link" href="/singleuser">Single User</a>
                </li>
                <li className="nav-item">
                  <div className="tm-nav-link-highlight"></div>
                  <a className="nav-link" href="/batchuser">Batch User</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
}

export default Navbar





