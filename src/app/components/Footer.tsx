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
                <a id="whatsapp-chat"
                    href="https://wa.me/6591881927"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    title="Chat on WhatsApp">
                    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
                        <path fill="#ffffff" d="M20.52 3.48A11.86 11.86 0 0012 0C5.37 0 .01 5.37.01 12.01A11.8 11.8 0 002.5 17.9L.5 23l5.3-2.2a11.9 11.9 0 006.2 1.6h.03c6.63 0 12-5.37 12-12 0-3.2-1.24-6.2-3.53-8.41zM12 21.6c-1.95 0-3.86-.52-5.54-1.5l-.4-.24-3.16 1.31 1.1-3.07-.26-.39A9.4 9.4 0 012.6 12c0-5.2 4.2-9.4 9.4-9.4 2.51 0 4.86.98 6.63 2.76A9.3 9.3 0 0121.4 12c0 5.2-4.2 9.6-9.4 9.6z" />
                        <path fill="#ffffff" d="M17.1 14.5c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2 0-.39-.02-.54-.02-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.66-.51-.17-.02-.37-.02-.56-.02s-.54.08-.82.39c-.28.31-1.07 1.04-1.07 2.54 0 1.5 1.1 2.96 1.25 3.17.15.2 2.16 3.3 5.24 4.62 3.08 1.3 3.08.87 3.63.82.55-.05 1.75-.68 2-1.34.25-.66.25-1.22.17-1.34-.08-.12-.28-.2-.58-.35z" />
                    </svg>
                </a>
    </div>
            {/* <!-- Footer End --> */}
        </>
    );
};

export default Footer;