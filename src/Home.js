import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import JsonForm  from './form';
import { Helmet } from 'react-helmet';
import Navbar from './navbar';



 function Home() {
   
 return (
   <div className="App">
    


<body>
    <div id="parallax-1" className="parallax-window" data-parallax="scroll" data-image-src="img/biz-oriented-header.jpg">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="tm-logo">
                        <i className="fas fa-industry fa-5x mr-5"></i>
                        <span className="text-uppercase tm-logo-text">Business Oriented</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Navbar/>

    <div className="container-fluid mt-7">
        <div className="row mb-6">
            <section className="col-lg-6 mb-lg-0 mb-5">
                <div className="tm-intro">
                    <h3 className="tm-title-gray mb-4">What is a Business Oriented Website?</h3>
                    <hr className="mb-5 tm-hr"/>
                    <p className="mb-5">Header is a parallax background just like in <a href="https://templatemo.com/tm-547-real-dynamic" target="_blank">Real Dynamic design</a> on TemplateMo. Business Oriented HTML Template is specifically designed for your corporate website.</p>
                    <p className="mb-5">You can download and use this template for your commercial purpose. Please do not re-distribute the template ZIP file on any template collection website.</p>
                    <img src="img/biz-oriented-1.jpg" alt="Company Background Image" className="img-fluid tm-mb-3"/>
                </div>
            </section>
            <section className="col-lg-6">
                <h3 className="tm-title-gray mb-4">New Focused Strategies</h3>
                <hr className="mb-5 tm-hr"/>
                <div className="tm-strategy-box mb-5">
                    <img src="img/strategy-1.jpg" alt="Image" className="img-fluid tm-strategy-img"/>
                    <div>
                        <h4 className="tm-text-primary">Maecenas molestie varius ipsum</h4>
                        <p className="tm-strategy-text">Quisque consectetur ipsum justo, sed posuere massa pretium nec. In scelerisque, odio et maximus feugiat, nisl libero porta turpis, quis imperdiet odio.</p>
                    </div>
                </div>
                <div className="tm-strategy-box mb-5">
                    <img src="img/strategy-2.jpg" alt="Image" className="img-fluid tm-strategy-img"/>
                    <div>
                        <h4 className="tm-text-primary">Etiam consequat placerat convallis</h4>
                        <p className="tm-strategy-text">Fusce non diam vel diam egestas accumsan quis aliquam metus. Nulla porta ullamcorper mauris maximus feugiat. Donec ac tincidunt dui.</p>
                    </div>
                </div>
                <div className="tm-strategy-box mb-5">
                    <img src="img/strategy-3.jpg" alt="Image" className="img-fluid tm-strategy-img"/>
                    <div>
                        <h4 className="tm-text-primary">Aenean varius velit eu ligula</h4>
                        <p className="tm-strategy-text">Suspendisse gravida, ipsum a gravida euismod, metus enim hendrerit ante, vel hendrerit sapien sem non nisl. Maecenas tempus risus ipsum.</p>
                    </div>
                </div>
            </section>
        </div>
       
        <div className="row mb-7">
            <div className="col-lg-4 col-md-6">
                <div className="tm-bg-gray tm-box">
                    <div className="text-center mb-3">
                        <i className="fas fa-cloud-sun fa-5x p-5"></i>
                    </div>
                    <h4 className="tm-text-primary tm-h3 mb-5">Suspendisse at nunc leo</h4>
                    <p>Phasellus malesuada aliquam arcu, et ultricies metus scelerisque id. Curabitur finibus ornare blandit. Donec a luctus nulla. Vivamus ac felis sapien.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="tm-bg-gray tm-box">
                    <div className="text-center mb-3">
                        <i className="fas fa-spa fa-5x p-5"></i>
                    </div>
                    <h4 className="tm-text-primary tm-h3 mb-5">Etiam viverra elit vel efficitur</h4>
                    <p>Nunc ultrices imperdiet orci, a ultrices orci luctus vel. Etiam consequat placerat convallis. Donec consequat consectetur est, eget pretium nisl.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6">
                <img src="img/biz-oriented-2.jpg" alt="Image" className="img-fluid"/>
                <div className="tm-box tm-box-s">
                    <p className="tm-mb-5">Suspendisse gravida, ipsum a gravida euismod, metus enim hendrerit ante, vel hendrerit sapien sem non nisl. Maecenas tempus risus ipsum.</p>
                </div>
            </div>
        </div>
    </div>
  

   

    

    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/parallax.min.js"></script> 
    <script src="js/tooplate-script.js"></script>
   
</body>
            
    </div>
 );
 }

export default Home;

