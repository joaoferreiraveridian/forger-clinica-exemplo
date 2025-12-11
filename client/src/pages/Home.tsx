import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Differentials } from "@/components/Differentials";
import { Treatments } from "@/components/Treatments";
import { Technology } from "@/components/Technology";
import { Results } from "@/components/Results";
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Differentials />
        <Treatments />
        <Technology />
        <Results />
        <Testimonials />
        <Blog />
        <ContactForm />
      </main>
      <Footer />
      <ThemeToggle />
    </div>
  );
}
