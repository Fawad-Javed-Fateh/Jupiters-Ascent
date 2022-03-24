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
import { faEdit, faHeadphones, faSatellite, faServer } from '@fortawesome/free-solid-svg-icons';

function Hogwash(){
    return(
        <>
        <BrowserView>
        <body>
        <ParallaxProvider>
            <Parallaximg imgsrc={img1} height='200vh' opacity='0.5'>
            <div className="parallax-window" data-parallax="scroll" data-image-src="img/bg-01.jpg">
      <div className="container-fluid">
        <div className="row tm-brand-row">
          <div className="col-lg-4 col-11">
            <div className="tm-brand-container tm-bg-white-transparent">
              {/* <i className="fas fa-2x fa-pen tm-brand-icon"></i> */}
              <FontAwesomeIcon icon={faEdit} size={"4x"}/>
              <div className="tm-brand-texts">
                <h1 className="text-uppercase tm-brand-name">Jupiter's Ascent</h1>
                <p className="small">A Machine Learning Driven Loan Probability Predictor </p>
              </div>
            </div>
          </div>
<Navbar/>
        </div>

        <section className="row" id="tmHome">
          <div className="col-12 tm-home-container">
            <div className="text-white tm-home-left">
              <p className=" text-white text-uppercase tm-slogan">We forecast your financial future.</p>
              <hr className="tm-home-hr" />
              <h2 className="text-white tm-home-title">A Machine Learning Platform to sort out your fortune</h2>
              <p className="text-white tm-home-text">
                Jupiters Ascent is machine learning driven platform to predict the chances of your loan application being submitted based on key socio-economical data provided by you. 
              </p>
              <a href="https://youtu.be/sqVARC8zTmY" className="btn btn-primary">Learn More</a>
            </div>
            <div className="tm-home-right">
              <img src={require('./img/mobile-screen.png')} alt="App on Mobile mockup" />
            </div>
          </div>
        </section>

       
        <div className="row" id="tmFeatures">
          <div className="col-lg-4">
            <div className="tm-bg-white-transparent tm-feature-box">
            <h3 className="tm-feature-name">High Accuracy</h3>
            
            <div className="tm-feature-icon-container">
                {/* <i className="fas fa-3x fa-server"></i> */}
                <FontAwesomeIcon icon={faServer} size={"3x"}/>
            </div>

            <p className="text-center">Guaranteed accurate predictions thanks to our machine learning algorithms which ensure upto 90% validation Accuracy.</p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="tm-bg-white-transparent tm-feature-box">
                <h3 className="tm-feature-name">Fast Support</h3>

                <div className="tm-feature-icon-container">
                    {/* <i className="fas fa-3x fa-headphones"></i> */}
                    <FontAwesomeIcon icon={faHeadphones} size={"3x"}/>
                </div>
                <p className="text-center">Our Tech Support is available 24/7 to handle your queries and concerns.
                </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="tm-bg-white-transparent tm-feature-box">
                <h3 className="tm-feature-name">Express Reliability</h3>

                <div className="tm-feature-icon-container">
                    {/* <i className="fas fa-3x fa-satellite-dish"></i> */}
                    <FontAwesomeIcon icon={faSatellite} size={"3x"}/>
                </div>
                <p className="text-center">Parameters for training the algorithm aggregated from datasets provided by top banking colgemorates such as SoftBank, JP Morgan, Wells Fargo etc.
                </p>
            </div>
          </div>
        </div>
        <div id="root"></div>
       

        
        <footer className="row">
          <p className="col-12 text-white text-center tm-copyright-text">
            Copyright &copy; 2021 Jupiters Ascent. 
            Designed by <a href="#" className="tm-copyright-link">Fawad J.Fateh</a>
          </p>
        </footer>
      </div>
      
    </div>

      
        </Parallaximg>
        </ParallaxProvider>
    
        <script src="js/jquery.min.js"></script>
        <script src="js/parallax.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
      </body>
      </BrowserView>
      
      <MobileView>
      <body>
        <ParallaxProvider>
            <Parallaximg imgsrc={img1} height='400vh' opacity='0.5'>
            <div className="parallax-window" data-parallax="scroll" data-image-src="img/bg-01.jpg">
      <div className="container-fluid">
        <div className="row tm-brand-row">
          <div className="col-lg-4 col-11">
            <div className="tm-brand-container tm-bg-white-transparent">
              {/* <i className="fas fa-2x fa-pen tm-brand-icon"></i> */}
              <FontAwesomeIcon icon={faEdit} size={"4x"}/>
              <div className="tm-brand-texts">
                <h1 className="text-uppercase tm-brand-name">Jupiter's Ascent</h1>
                <p className="small">A Machine Learning Driven Loan Probability Predictor </p>
              </div>
            </div>
          </div>
          <Navbar/>
        </div>

        <section className="row" id="tmHome">
          <div className="col-12 tm-home-container">
            <div className="text-white tm-home-left">
              <p className=" text-black text-uppercase tm-slogan">We forecast your financial future.</p>
              <hr className="tm-home-hr" />
              <h2 className="text-white tm-home-title">A Machine Learning Platform to sort out your fortune</h2>
              <p className="text-black tm-home-text">
                Jupiters Ascent is machine learning driven platform to predict the chances of your loan application being submitted based on key socio-economical data provided by you. 
              </p>
              <a href="#tmFeatures" className="btn btn-primary">Learn More</a>
            </div>
            <div className="tm-home-right">
              <img src="img/mobile-screen.png" alt="App on Mobile mockup" />
            </div>
          </div>
        </section>

       
        <div className="row" id="tmFeatures">
          <div className="col-lg-4">
            <div className="tm-bg-white-transparent tm-feature-box">
            <h3 className="tm-feature-name">High Accuracy</h3>
            
            <div className="tm-feature-icon-container">
                {/* <i className="fas fa-3x fa-server"></i> */}
                <FontAwesomeIcon icon={faServer} size={"3x"}/>
            </div>

            <p className="text-center">Guaranteed accurate predictions thanks to our machine learning algorithms which ensure upto 90% validation Accuracy.</p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="tm-bg-white-transparent tm-feature-box">
                <h3 className="tm-feature-name">Fast Support</h3>

                <div className="tm-feature-icon-container">
                    {/* <i className="fas fa-3x fa-headphones"></i> */}
                    <FontAwesomeIcon icon={faHeadphones} size={"3x"}/>
                </div>
                <p className="text-center">Our Tech Support is available 24/7 to handle your queries and concerns.
                </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="tm-bg-white-transparent tm-feature-box">
                <h3 className="tm-feature-name">Express Reliability</h3>

                <div className="tm-feature-icon-container">
                    {/* <i className="fas fa-3x fa-satellite-dish"></i> */}
                    <FontAwesomeIcon icon={faSatellite} size={"3x"}/>
                </div>
                <p className="text-center">Parameters for training the algorithm aggregated from datasets provided by top banking colgemorates such as SoftBank, JP Morgan, Wells Fargo etc.
                </p>
            </div>
          </div>
        </div>
        <div id="root"></div>
       

        
        <footer className="row">
          <p className="col-12 text-white text-center tm-copyright-text">
            Copyright &copy; 2021 Jupiters Ascent. 
            Designed by <a href="#" className="tm-copyright-link">Fawad J.Fateh</a>
          </p>
        </footer>
      </div>
      
    </div>
        </Parallaximg>
        </ParallaxProvider>
    
        <script src="js/jquery.min.js"></script>
        <script src="js/parallax.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
      </body>
      </MobileView>
      </>
    )
}
export default Hogwash;