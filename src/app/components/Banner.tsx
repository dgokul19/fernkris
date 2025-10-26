"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const BannerComponent = () => {
    const [viewport, setViewport] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const initCarousel = () => {
            if (typeof window !== 'undefined' && window.$ && window.$.fn.owlCarousel) {
                window.$('.header-carousel').owlCarousel({
                    items: 1,
                    loop: true,
                    autoplay: true,
                    smartSpeed: 1000,
                    dots: true,
                });
            } else {
                // Retry until plugin attaches
                setTimeout(initCarousel, 0);
            }
        };
        const updateSize = () => {
            if (typeof window !== 'undefined') {
                let w = 391; // default height per requirement
                let h = 391; // default height per requirement

                // Four stages based on width
                if (window.innerWidth < 480) {
                  h = 391;
                  w = 441;
                } else if (window.innerWidth >= 480 && window.innerWidth < 720) {
                  h = 391;
                  w = 641;
                } else if (window.innerWidth >= 720 && window.innerWidth < 1012) {
                  h = 391;
                  w = 941;
                } else {
                  // w >= 1012
                  h = 391;
                }

                // Width should be 100%: use current viewport width in px
                setViewport({ width: w, height: h });
            }
        };

        initCarousel();
        updateSize();
        window.addEventListener('resize', updateSize);
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    return (
        <>
            <div className="container-fluid pb-5 hero-header bg-light mb-5">
                <div className="container py-5">
                    <div className="row g-5 align-items-center mb-5">
                        <div className="col-lg-6">
                            <h2 className="display-4 mb-4 animated slideInRight">Your Trusted Partner in <span className="text-primary">Ship Maintenance </span> and Repairs</h2>
                            <h5 className="d-inline-block border border-2 border-white py-3 px-5 mb-0 animated slideInRight">
                                Where Every Ship Finds Its Perfect Fix</h5>
                        </div>
                        <div className="col-lg-6">
                            <div className="owl-carousel header-carousel animated fadeIn">
                                <Image width={viewport.width} height={viewport.height} className="img-fluid" src="/img/hero-slider-1.jpg" alt="" />
                                <Image width={viewport.width} height={viewport.height} className="img-fluid" src="/img/hero-slider-2.jpg" alt="" />
                                <Image width={viewport.width} height={viewport.height} className="img-fluid" src="/img/hero-slider-3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 animated fadeIn">
                        <div className="col-md-6 col-lg-3">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 btn-square border border-2 border-white me-3">
                                    <i className="fa fa-robot text-primary"></i>
                                </div>
                                <h6 className="lh-base mb-0">Precision Marine Carpentry</h6>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 btn-square border border-2 border-white me-3">
                                    <i className="fa fa-robot text-primary"></i>
                                </div>
                                <h6 className="lh-base mb-0">Green Maritime Resources</h6>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 btn-square border border-2 border-white me-3">
                                    <i className="fa fa-robot text-primary"></i>
                                </div>
                                <h6 className="lh-base mb-0">Naval Architects</h6>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 btn-square border border-2 border-white me-3">
                                    <i className="fa fa-robot text-primary"></i>
                                </div>
                                <h6 className="lh-base mb-0">Affordable Shipyard Excellence</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerComponent;