import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EmailGenerator from "@/components/EmailGenerator";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <EmailGenerator />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
