import logo from './logo.svg';
import './App.css';
import './index.css'
import { Component } from 'react';
import JsonForm  from './form';
import { Helmet } from 'react-helmet';
import Navbar from './navbar';
import img1 from './img/bg-01.jpg'
import {ParallaxProvider} from 'react-scroll-parallax'
import Parallaximg from './parallaximg';
import {BrowserView, MobileView} from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';



function Singleuser()
{
    return(

      
        <>
        <BrowserView>

        <body>
        <div className='baad'>
        <div className="parallax-window" data-parallax="scroll" data-image-src="img/bg-01.jpg">
      <div className="container-fluid">
        <div className="row tm-brand-row">
          <div className="col-lg-4 col-11">
            <div className="tm-brand-container tm-bg-white-transparent">
              {/* <i className="fas fa-2x fa-pen tm-brand-icon"></i> */}
              <FontAwesomeIcon icon={faEdit} size={'4x'}/>
              <div className="tm-brand-texts">
                <h1 className="text-uppercase tm-brand-name">Jupiter's Ascent</h1>
                <p className="small">A Machine Learning Driven Loan Probability Predictor</p>
              </div>
            </div>
          </div>
         <Navbar/>
        </div>

        <section className="row" id="tmAbout">
          <header className="col-12 tm-about-header">
          <h2 className="text-uppercase text-center text-white tm-about-page-title">SINGLE USER</h2>
            <h3 className="text-uppercase text-center text-white ">How it works</h3>
            <hr className="tm-about-title-hr"/>
          </header>
          <div className="col-lg-4">
            <div className="tm-bg-black-transparent tm-about-box">
              <div className="tm-about-number-container">0.1</div>              
              <h3 className="tm-about-name">Input Your Credentials</h3>
              <p className="tm-about-description">
                Fill the form given below with your accurate loan application data. Click Submit when done.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="tm-bg-black-transparent tm-about-box">
              <div className="tm-about-number-container">0.2</div>              
              <h3 className="tm-about-name">Processing</h3>
              <p className="tm-about-description">
                Your input form data is passed in the body of a POST request to the python data pipleine in the backend. The pipeline cleans and transforms the form data as required and then passes it as an input to the binary classNameifier which is trained on similar data.
              </p>
             
            </div>
          </div>

          <div className="col-lg-4">
            <div className="tm-bg-black-transparent tm-about-box">
              <div className="tm-about-number-container">0.3</div>              
              <h3 className="tm-about-name">Final Output</h3>
              <p className="tm-about-description">
                The backend sends the probability score in the body  response to the original POST request invoker . The probability score is then rendered on screen.
              </p>
            </div>
          </div>
        </section>
     
        <div className="container h-100 d-flex justify-content-center">
        <div className="tm-bg-black-transparent tm-about-box">  
              <h3 className="tm-about-name">Input Form</h3>
              <JsonForm/>
            </div>
        </div>
      </div>
       <footer className="row">
          <p classNameName="col-12 text-white text-center tm-copyright-text">
            Copyright &copy; 2021 Jupiters Ascent. 
            Designed by <a href="#" classNameName="tm-copyright-link">Fawad J.Fateh</a>
          </p>
        </footer>
    </div>
    </div>

    <script src="js/jquery.min.js"></script>
        <script src="js/parallax.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
   
    </body>
    </BrowserView>



    <MobileView>
      <div className='baam'>
    <div className="parallax-window" data-parallax="scroll" data-image-src={require('./img/bg-01.jpg')}>
      <div className="container-fluid">
        <div className="row tm-brand-row">
          <div className="col-lg-4 col-11">
            <div className="tm-brand-container tm-bg-white-transparent">
              {/* <i className="fas fa-2x fa-pen tm-brand-icon"></i> */}
              <FontAwesomeIcon icon={faEdit} size={'4x'}/>
              <div className="tm-brand-texts">
                <h1 className="text-uppercase tm-brand-name">Jupiter's Ascent</h1>
                <p className="small">A Machine Learning Driven Loan Probability Predictor</p>
              </div>
            </div>
          </div>
         <Navbar/>
        </div>

        <section className="row" id="tmAbout">
          <header className="col-12 tm-about-header">
          <h2 className="text-uppercase text-center text-dark tm-about-page-title">SINGLE USER</h2>
            <h3 className="text-uppercase text-center text-white ">How it works</h3>
            <hr className="tm-about-title-hr"/>
          </header>
          <div className="col-lg-4">
            <div className="tm-bg-black-transparent tm-about-box">
              <div className="tm-about-number-container">0.1</div>              
              <h3 className="tm-about-name">Input Your Credentials</h3>
              <p className="tm-about-description">
                Fill the form given below with your accurate loan application data. Click Submit when done.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="tm-bg-black-transparent tm-about-box">
              <div className="tm-about-number-container">0.2</div>              
              <h3 className="tm-about-name">Processing</h3>
              <p className="tm-about-description">
                Your input form data is passed in the body of a POST request to the python data pipleine in the backend. The pipeline cleans and transforms the form data as required and then passes it as an input to the binary classNameifier which is trained on similar data.
              </p>
             
            </div>
          </div>

          <div className="col-lg-4">
            <div className="tm-bg-black-transparent tm-about-box">
              <div className="tm-about-number-container">0.3</div>              
              <h3 className="tm-about-name">Final Output</h3>
              <p className="tm-about-description">
                The backend sends the probability score in the body  response to the original POST request invoker . The probability score is then rendered on screen.
              </p>
             
            </div>
          </div>
        </section>

        
        <div className="tm-bg-black-transparent tm-about-box">
                       
              <h3 className="tm-about-name">Input Form</h3>
              <JsonForm/>
              
            </div>
            
    
     


      </div>
       <footer classNameName="row">
          <p classNameName="col-12 text-white text-center tm-copyright-text">
            Copyright &copy; 2021 Jupiters Ascent. 
            Designed by <a href="#" classNameName="tm-copyright-link">Fawad J.Fateh</a>
          </p>
        </footer>
    </div>
    </div>
    </MobileView>
    </>
    )
}
export default Singleuser;