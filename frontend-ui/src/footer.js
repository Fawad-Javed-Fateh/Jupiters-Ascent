import './App.css';



function Footer()
{
    return(
        <footer className="container-fluid">
        <div className="row">
            <p className="col-lg-9 col-md-8 mb-5 mb-md-0">
                Copyright &copy; 2021 <span className="tm-text-primary">Jupiter's Ascent</span>
                - designed by Fawad J.Fateh
            </p>
            <div className="col-lg-3 col-md-4 text-right">
                <a rel="nofollow" target="_blank" href="https://fb.com/templatemo" className="tm-social-link">
                    <i className="fab fa-facebook fa-2x tm-social-icon"></i>
                </a>
                <a href="https://twitter.com" className="tm-social-link">
                    <i className="fab fa-twitter fa-2x tm-social-icon"></i>
                </a>
                <a href="https://linkedin.com" className="tm-social-link">
                    <i className="fab fa-linkedin fa-2x tm-social-icon"></i>
                </a>
            </div>
        </div>
    </footer>
    )
}
export default Footer

