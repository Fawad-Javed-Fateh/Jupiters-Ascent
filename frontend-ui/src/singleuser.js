import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import JsonForm  from './form';
import { Helmet } from 'react-helmet';
import Navbar from './navbar';

function Singleuser()
{
    return(
        <div className='App'>
            <body>
    <div id="parallax-1" class="parallax-window" data-parallax="scroll" data-image-src="img/biz-oriented-header.jpg">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="tm-logo">
                        <i class="fas fa-industry fa-5x mr-5"></i>
                        <span class="text-uppercase tm-logo-text">Business Oriented</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
   <Navbar/>
    <div class="container-fluid mt-7">
        <div class="row mb-6">
            <div class="col-lg-7 mb-lg-0 mb-5 pr-lg-5">
                <section class="mb-10">
                    <div>
                        <h3 class="tm-title-gray mb-4">Our services for your business growth</h3>
                        <hr class="mb-5 tm-hr"/>
                        <p class="mb-5">This is another HTML page for services in Business Oriented Template. You are
                            <span class="tm-text-primary">allowed</span> to use this CSS template for your business or
                            personal website. You are <span class="tm-text-primary">NOT allowed</span> to re-distribute
                            the template ZIP file on any template collection website.
                            <a href="https://templatemo.com/contact" class="tm-text-primary-link">Contact us</a> for
                            more information about this template.
                        </p>
                        <p class="mb-5">Nulla eget ipsum nec augue semper convallis non a lacus. Integer vel condimentum
                            neque. Fusce sollicitudin arcu et tortor lobortis rhoncus. Morbi accumsan efficitur nunc, in
                            faucibus velit pretium quis. Sed elementum auctor felis eu tristique.</p>
                    </div>
                </section>
                <section>
                    <h3 class="tm-title-gray mb-4">Professional Business Services</h3>
                    <JsonForm/>
                </section>
            </div>
            <div class="col-lg-5">
                <img src="img/services-1.jpg" alt="Image" class="img-fluid"/>
                <div class="tm-bg-gray-dark tm-box-2">
                    <h4 class="tm-text-primary tm-h3 mb-4">Fusce sollicitudin arcu et tortor</h4>
                    <p class="mb-5">Cras rhoncus tempor consequat. Donec convallis orci id scelerisque convallis. Suspendisse varius sapien mauris.</p>
                    <p class="mb-5">Quisque accumsan lorem sed bibendum vehicula. Aenean gravida, nunc ac bibendum bibendum.</p>
                    <p>Donec convallis orci id scelerisque convallis. Suspendisse varius sapien mauris. Proin accumsan.</p>
                </div>
            </div>
        </div>
    </div>
    <div id="parallax-3" class="parallax-window parallax-window-2" data-parallax="scroll"
        data-image-src="img/biz-oriented-footer-2.jpg">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="tm-overlay tm-bg-black-transparent p-5 ml-auto mr-0">
                        <p class="mb-0 text-white">This is a parallax image background section. Text section box has 50% alpha on black color. Phasellus interdum lobortis ultrices. Cras nulla nulla, fermentum vel ligula in, mollis imperdiet ipsum.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid mt-7 mb-6">
        <div class="row">
            <div class="col-xl-3 col-lg-6 px-xl-4 px-3">
                <div class="tm-box-3 tm-bg-gray">
                    <div class="text-center"><i class="fas fa-cloud-sun fa-3x mb-8 mt-4"></i></div>
                    <p>Nam nulla purus, lobortis ac euismod non, tincidunt eget velit. Nullam bibendum tortor id consectetur auctor.</p>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 px-xl-4 px-3">
                <div class="tm-box-3 tm-bg-gray">
                    <div class="text-center"><i class="fas fa-hiking fa-3x mb-8 mt-4"></i></div>
                    <p>Nam nulla purus, lobortis ac euismod non, tincidunt eget velit. Nullam bibendum tortor id consectetur auctor.</p>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 px-xl-4 px-3">
                <div class="tm-box-3 tm-bg-gray">
                    <div class="text-center"><i class="fas fa-tree fa-3x mb-8 mt-4"></i></div>
                    <p>Nam nulla purus, lobortis ac euismod non, tincidunt eget velit. Nullam bibendum tortor id consectetur auctor.</p>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 px-xl-4 px-3">
                <div class="tm-box-3 tm-bg-gray">
                    <div class="text-center"><i class="fas fa-campground fa-3x mb-8 mt-4"></i></div>
                    <p>Nam nulla purus, lobortis ac euismod non, tincidunt eget velit. Nullam bibendum tortor id consectetur auctor.</p>
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
    )
}
export default Singleuser;