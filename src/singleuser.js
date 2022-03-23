import logo from './logo.svg';
import './App.css';
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
        <ParallaxProvider>
        <Parallaximg imgsrc={img1} height='200vh' opacity='0.5'>
        <div class="parallax-window" data-parallax="scroll" data-image-src={require('./img/bg-01.jpg')}>
      <div class="container-fluid">
        <div class="row tm-brand-row">
          <div class="col-lg-4 col-11">
            <div class="tm-brand-container tm-bg-white-transparent">
              {/* <i class="fas fa-2x fa-pen tm-brand-icon"></i> */}
              <FontAwesomeIcon icon={faEdit} size={'4x'}/>
              <div class="tm-brand-texts">
                <h1 class="text-uppercase tm-brand-name">Jupiter's Ascent</h1>
                <p class="small">A Machine Learning Driven Loan Probability Predictor</p>
              </div>
            </div>
          </div>
         <Navbar/>
        </div>

        <section class="row" id="tmAbout">
          <header class="col-12 tm-about-header">
          <h2 class="text-uppercase text-center text-dark tm-about-page-title">SINGLE USER</h2>
            <h3 class="text-uppercase text-center text-white ">How it works</h3>
            <hr class="tm-about-title-hr"/>
          </header>
          <div class="col-lg-4">
            <div class="tm-bg-black-transparent tm-about-box">
              <div class="tm-about-number-container">0.1</div>              
              <h3 class="tm-about-name">Input Your Credentials</h3>
              <p class="tm-about-description">
                Fill the form given below with your accurate loan application data. Click Submit when done.
              </p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="tm-bg-black-transparent tm-about-box">
              <div class="tm-about-number-container">0.2</div>              
              <h3 class="tm-about-name">Processing</h3>
              <p class="tm-about-description">
                Your input form data is passed in the body of a POST request to the python data pipleine in the backend. The pipeline cleans and transforms the form data as required and then passes it as an input to the binary classifier which is trained on similar data.
              </p>
             
            </div>
          </div>

          <div class="col-lg-4">
            <div class="tm-bg-black-transparent tm-about-box">
              <div class="tm-about-number-container">0.3</div>              
              <h3 class="tm-about-name">Final Output</h3>
              <p class="tm-about-description">
                The backend sends the probability score in the body  response to the original POST request invoker . The probability score is then rendered on screen.
              </p>
              
            </div>
          </div>
        </section>

        <div class="container h-100 d-flex justify-content-center">
        <div class="tm-bg-black-transparent tm-about-box">
                       
              <h3 class="tm-about-name">Input Form</h3>
              <JsonForm/>
              
            </div>
            </div>
    
     


      </div>
       <footer className="row">
          <p className="col-12 text-white text-center tm-copyright-text">
            Copyright &copy; 2021 Jupiters Ascent. 
            Designed by <a href="#" className="tm-copyright-link">Fawad J.Fateh</a>
          </p>
        </footer>
    </div>
    </Parallaximg>
    </ParallaxProvider>
    </body>
    </BrowserView>
    <MobileView>
      <ParallaxProvider>
      <Parallaximg imgsrc={img1} height='400vh' opacity='0.5'>
    <div class="parallax-window" data-parallax="scroll" data-image-src={require('./img/bg-01.jpg')}>
      <div class="container-fluid">
        <div class="row tm-brand-row">
          <div class="col-lg-4 col-11">
            <div class="tm-brand-container tm-bg-white-transparent">
              {/* <i class="fas fa-2x fa-pen tm-brand-icon"></i> */}
              <FontAwesomeIcon icon={faEdit} size={'4x'}/>
              <div class="tm-brand-texts">
                <h1 class="text-uppercase tm-brand-name">Jupiter's Ascent</h1>
                <p class="small">A Machine Learning Driven Loan Probability Predictor</p>
              </div>
            </div>
          </div>
         <Navbar/>
        </div>

        <section class="row" id="tmAbout">
          <header class="col-12 tm-about-header">
          <h2 class="text-uppercase text-center text-dark tm-about-page-title">SINGLE USER</h2>
            <h3 class="text-uppercase text-center text-white ">How it works</h3>
            <hr class="tm-about-title-hr"/>
          </header>
          <div class="col-lg-4">
            <div class="tm-bg-black-transparent tm-about-box">
              <div class="tm-about-number-container">0.1</div>              
              <h3 class="tm-about-name">Input Your Credentials</h3>
              <p class="tm-about-description">
                Fill the form given below with your accurate loan application data. Click Submit when done.
              </p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="tm-bg-black-transparent tm-about-box">
              <div class="tm-about-number-container">0.2</div>              
              <h3 class="tm-about-name">Processing</h3>
              <p class="tm-about-description">
                Your input form data is passed in the body of a POST request to the python data pipleine in the backend. The pipeline cleans and transforms the form data as required and then passes it as an input to the binary classifier which is trained on similar data.
              </p>
             
            </div>
          </div>

          <div class="col-lg-4">
            <div class="tm-bg-black-transparent tm-about-box">
              <div class="tm-about-number-container">0.3</div>              
              <h3 class="tm-about-name">Final Output</h3>
              <p class="tm-about-description">
                The backend sends the probability score in the body  response to the original POST request invoker . The probability score is then rendered on screen.
              </p>
             
            </div>
          </div>
        </section>

        
        <div class="tm-bg-black-transparent tm-about-box">
                       
              <h3 class="tm-about-name">Input Form</h3>
              <JsonForm/>
              
            </div>
            
    
     


      </div>
       <footer className="row">
          <p className="col-12 text-white text-center tm-copyright-text">
            Copyright &copy; 2021 Jupiters Ascent. 
            Designed by <a href="#" className="tm-copyright-link">Fawad J.Fateh</a>
          </p>
        </footer>
    </div>
    </Parallaximg>
    </ParallaxProvider>
    </MobileView>
    </>
    )
}
export default Singleuser;