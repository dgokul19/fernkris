const Footer = () => {
    return (
        <>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-dark text-white-50 footer pt-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <a href="index.html" className="d-inline-block mb-3">
                        {/* <h1 className="text-white">iSTUDIO</h1> */}
                        <img src="img/logo-img.png" width={120} alt="Logo" />
                    </a>
                    <p className="mb-0">FernKris is a leading shipyard and engineering company based in Singapore. We have been providing comprehensive shipyard and engineering services to the maritime industry for over two decades.</p>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <h5 className="text-white mb-4">Get In Touch</h5>
                    <p><i className="fa fa-map-marker-alt me-3"></i>21 WOODLANDS IND, SEMBAWANG, Singapore</p>
                    <p><i className="fa fa-phone-alt me-3"></i>+65 6752 5540</p>
                    <p><i className="fa fa-envelope me-3"></i>fernkris@singnet.com.sg</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-primary btn-square border-2 me-2" href="#!"><i
                                className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-primary btn-square border-2 me-2" href="#!"><i
                                className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-primary btn-square border-2 me-2" href="#!"><i
                                className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-primary btn-square border-2 me-2" href="#!"><i
                                className="fab fa-instagram"></i></a>
                        <a className="btn btn-outline-primary btn-square border-2 me-2" href="#!"><i
                                className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <h5 className="text-white mb-4">Popular Link</h5>
                    <a className="btn btn-link" href="/about">About Us</a>
                    <a className="btn btn-link" href="/contact">Contact Us</a>
                    <a className="btn btn-link disabled" href="#!">Privacy Policy</a>
                    <a className="btn btn-link disabled" href="#!">Terms & Condition</a>
                    <a className="btn btn-link disabled" href="#!">Career</a>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <h5 className="text-white mb-4">Our Services</h5>
                    <a className="btn btn-link disabled" href="#!">Piping & Insulation</a>
                    <a className="btn btn-link disabled" href="#!">Machine Shop</a>
                    <a className="btn btn-link disabled" href="#!">Robotic Laser Cladding</a>
                    <a className="btn btn-link disabled" href="#!">Engine Overhauling</a>
                    <a className="btn btn-link disabled" href="#!">Structural Steel Work</a>
                </div>
            </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="#!">fernkris.com.sg</a> | All Right Reserved.
                        
                        Developed By <a className="border-bottom" target="_blank" href="https://dgokul19.github.io/cv">dgokul19</a>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="footer-menu">
                            <a href="/">Home</a>
                            {/* <a href="#!">Cookies</a>
                            <a href="#!">Help</a> */}
                            <a href="#!">FAQs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
            {/* <!-- Footer End --> */}
        </>
    );
};

export default Footer;