import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Landing() {
  return (
    <>
      <Helmet>
        <title>Coco B | Creative Marketing Freelancer</title>
        <meta name="description" content="Professional marketing freelancer specializing in creative campaigns, brand strategy, and digital marketing solutions." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
