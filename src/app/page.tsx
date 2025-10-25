import NavbarComponent from "@/app/components/Navbar";
import BannerComponent from "./components/Banner";
import AboutHome from "./components/AboutHome";
import FeatureHome from "./components/FeatureHome";
import FacilitiesHome from "./components/FacilitiesHome";
import ServicesHome from "./components/ServicesHome";
import TestimonialHome from "./components/TestimonialHome";
import Footer from "./components/Footer";
// import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <main>
        <NavbarComponent />
        <BannerComponent />
        <AboutHome />
        <FeatureHome />
        <FacilitiesHome />
        <TestimonialHome />
        <ServicesHome />
        <Footer />
    </main>
  );
}
