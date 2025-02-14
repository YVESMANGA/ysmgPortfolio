import Navbar from "@/components/navbar/Navbar";
import Home from "@/components/home/Home";
import About from "@/components/about/About";
import Project from "@/components/project/Project";
import Footer from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <>
   <Navbar />
   <Home />
   <About />
   <Project />
   <Footer />
    </>
   
  );
}
