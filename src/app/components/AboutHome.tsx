export default function AboutContentHome() {
    return (
        <>
            {/* <!-- About Start --> */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-6 wow fadeIn" data-wow-delay="0.1s">
                                    <img className="img-fluid" src="/img/about-1.jpg" alt=""/>
                                </div>
                                <div className="col-6 wow fadeIn" data-wow-delay="0.3s">
                                    <img style={{ width: '100%', objectFit: 'cover'}} className="img-fluid h-70" src="/img/about-2.jpg" alt=""/>
                                        <div className="h-25 d-flex align-items-center text-center bg-primary px-4">
                                            <h5 className="text-white lh-base mb-0">Where Every Ship Finds Its Perfect Fix</h5>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="mb-5">The <span className="text-uppercase text-primary bg-light px-2">Story</span>Behind Us</h1>
                            <p className="mb-4">FernKris is a leading shipyard and engineering company based in Singapore. We have been providing comprehensive shipyard and engineering services to the maritime industry for over two decades. Our team of experienced professionals is dedicated to delivering high-quality services to our clients, ensuring their satisfaction and trust.</p>
                            <p className="mb-5">we navigate challenges with precision and passion—helping our clients move forward with confidence across every horizon.</p>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Recognized for Excellence</h6>
                                    <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Professional Staff</h6>
                                </div>
                                <div className="col-sm-6">
                                    <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>24/7 Support</h6>
                                    <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Eco-Certified Materials</h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mt-5">
                                <a className="btn btn-primary px-4 me-2" href="/about.html">Read More</a>
                                <a className="btn btn-outline-primary btn-square border-2 me-2" href="#!"><i
                                    className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-primary btn-square border-2 me-2" href="#!"><i
                                    className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-primary btn-square border-2 me-2" href="#!"><i
                                    className="fab fa-instagram"></i></a>
                                <a className="btn btn-outline-primary btn-square border-2" href="#!"><i
                                    className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}
        </>
    );
}