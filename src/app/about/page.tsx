import NavbarComponent from "@/app/components/Navbar";
import AboutHome from "../components/AboutHome";
import FeatureHome from "../components/FeatureHome";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
// import styles from "@/app/page.module.css";

export default function About  () {
  return (
    <main>
        <NavbarComponent />
        <PageBanner title={`About`}/>
        {/* About Page Content start*/}
           <div className="container-fluid py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                                    <img style={{ width: '100%', objectFit: 'cover'}} className="img-fluid h-70" src="/img/about-2.jpg" alt=""/>
                                        <div className="h-25 d-flex align-items-center text-center bg-primary px-4">
                                            <h5 className="text-white lh-base mb-0">Where Every Ship Finds Its Perfect Fix</h5>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="mb-2 text-center">Who we are</h1>
                            <p className="mb-4">FernKris is a leading shipyard and engineering company based in Singapore. We have been providing comprehensive shipyard and engineering services to the maritime industry for over two decades. Our team of experienced professionals is dedicated to delivering high-quality services to our clients, ensuring their satisfaction and trust.</p>
                            <p className="mb-3">we navigate challenges with precision and passion—helping our clients move forward with confidence across every horizon.</p>
                            
                            <div className="d-flex justify-content-center align-items-center mt-3 mb-5">
                                <a className="btn btn-outline-primary btn-square border-2 me-2" href="#!"><i
                                    className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-primary btn-square border-2 me-2" href="#!"><i
                                    className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-primary btn-square border-2 me-2" href="#!"><i
                                    className="fab fa-instagram"></i></a>
                                <a className="btn btn-outline-primary btn-square border-2" href="#!"><i
                                    className="fab fa-linkedin-in"></i></a>
                            </div>

                            <h1 className="mb-2  text-center">Our Mission</h1>
                            <p className="text-center">To shape the future of Marine and Offshore Engineering in the Asia-Pacific region through excellence and innovation.</p>
                            <h1 className="mb-2  text-center">Our Vision</h1>
                            <p className="text-center">To be the trusted leader in delivering world-class Marine and Offshore Engineering solutions throughout the Asia-Pacific region.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* About Page Content End*/}
        <FeatureHome />
        <Footer />
    </main>
  );
}
