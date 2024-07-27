import Hero from "../components/ui/Hero";
import Features from "../components/ui/Features";
import Testimonials from "../components/ui/Testimonials";
import Poster from "../components/ui/Poster";

export default function Home() {
  return (
    <div className="h-screen">
      <Hero />
      <Features />
      <Testimonials />
      <Poster />
    </div>
  );
}
