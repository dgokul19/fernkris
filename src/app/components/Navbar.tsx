"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const NavbarComponent = () => {
    const navbarRef = useRef<HTMLElement>(null);

  const pathname = usePathname();
  const path = pathname.split('/').pop() as string;

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (!navbar) return;

      if (window.scrollY > 100) {
        navbar.classList.add("bg-white", "shadow-sm");
      } else {
        navbar.classList.remove("bg-white", "shadow-sm");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getClassNameConditn = (idxName:string | null):string | null => {
    if(path?.indexOf(idxName || '') > -1){
      return` active`;
    }
    return null;
  };


  return (
    <>
      {/* Navbar Start */}
      <header className="container-fluid sticky-top" ref={navbarRef}>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light border-bottom border-1">
            <a href="/" className="navbar-brand relative">
              {/* <h2>IStudio</h2> */}
              <img src="img/logo-img.png" width={120} alt="Logo" />
            </a>
            <button
              type="button"
              className="navbar-toggler ms-auto me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <a href="/" className={`nav-item nav-link ${getClassNameConditn('home')}`}>Home</a>
                <a href="/about" className={`nav-item nav-link ${getClassNameConditn('about')}`}>About</a>
                <a href="/services" className={`nav-item nav-link ${getClassNameConditn('services')}`}>Services</a>
                <a href="#!" className="nav-item nav-link">Projects</a>
                {/* <div className="nav-item dropdown">
                  <a href="#!" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                  <div className="dropdown-menu bg-light mt-2">
                    <a href="feature.html" className="dropdown-item">Features</a>
                    <a href="team.html" className="dropdown-item">Our Team</a>
                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                    <a href="404.html" className="dropdown-item">404 Page</a>
                  </div>
                </div> */}
                <a href="/contact" className="nav-item nav-link">Contact</a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* Navbar End */}
    </>
  );
};

export default NavbarComponent;