import AboutUs from "@/components/business/about-us";
import AboutYou from "@/components/business/about-you";
import Footer from "@/components/business/footer";
import Hero from "@/components/business/hero";
import Navbar from "@/components/business/navbar";
import Salary from "@/components/business/salary";

const Business = () => {
    return (
        <div className="w-full h-screen overflow-auto bg-white">
            <Navbar />
            <Hero />
            <Salary />
            <AboutUs />
            <AboutYou />
            <Footer />
        </div>
    );
}

export default Business;