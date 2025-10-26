import NavbarComponent from "@/app/components/Navbar";
import FeatureHome from "../components/FeatureHome";
import Footer from "../components/Footer";
import PageBanner from "../components/PageBanner";
import ServicesHome from "../components/ServicesHome";

export default function ServicesPage  () {
  return (
    <main>
        <NavbarComponent />
        <PageBanner title={`Services`}/>
        <ServicesHome />
        <FeatureHome />
        <Footer />
    </main>
  );
}
