import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Sparkles, Award, Scan } from "lucide-react";
import { heroImage } from "@/lib/data";
import { cn } from "@/lib/utils";

function FloatingParticle({ delay, size, left, duration }: { delay: number; size: number; left: number; duration: number }) {
  return (
    <div
      className="particle bg-emerald-400/30 dark:bg-emerald-400/20"
      style={{
        width: size,
        height: size,
        left: `${left}%`,
        bottom: "-10%",
        animation: `particle ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const heroHeight = heroRef.current.offsetHeight;
        if (scrollY < heroHeight) {
          const parallaxValue = scrollY * 0.3;
          heroRef.current.style.setProperty("--parallax", `${parallaxValue}px`);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const particles = Array.from({ length: 15 }, (_, i) => ({
    delay: Math.random() * 10,
    size: Math.random() * 8 + 4,
    left: Math.random() * 100,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-pearl-100 via-white to-emerald-50/30 dark:from-petrol-900 dark:via-petrol-800 dark:to-emerald-900/20"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <FloatingParticle key={i} {...p} />
        ))}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-coral-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-petrol-400/10 rounded-full blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,217,192,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,157,0.06),transparent_50%)]" />

      <div className="container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3 space-y-6 md:space-y-8">
            <div className="flex flex-wrap gap-3 animate-fade-in">
              <Badge variant="secondary" className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/50 px-3 py-1.5" data-testid="badge-experiencia">
                <Award className="w-3 h-3 mr-1.5" />
                15 anos de experiência
              </Badge>
              <Badge variant="secondary" className="bg-coral-100 dark:bg-coral-900/40 text-coral-700 dark:text-coral-300 border-coral-200 dark:border-coral-700/50 px-3 py-1.5" data-testid="badge-sorrisos">
                <Sparkles className="w-3 h-3 mr-1.5" />
                20.000+ sorrisos transformados
              </Badge>
              <Badge variant="secondary" className="bg-petrol-100 dark:bg-petrol-800/60 text-petrol-700 dark:text-petrol-300 border-petrol-200 dark:border-petrol-600/50 px-3 py-1.5" data-testid="badge-tecnologia">
                <Scan className="w-3 h-3 mr-1.5" />
                Tecnologia 3D
              </Badge>
            </div>

            <h1
              className="font-heading text-display text-petrol-900 dark:text-pearl-100 animate-fade-in"
              style={{ animationDelay: "100ms" }}
              data-testid="text-hero-title"
            >
              Transforme Seu Sorriso,{" "}
              <span className="gradient-text">Renove Sua Essência</span>
            </h1>

            <p
              className="text-subtitle text-petrol-600 dark:text-pearl-300 font-medium animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              Tecnologia de ponta + Cuidado humanizado = Resultados extraordinários
            </p>

            <p
              className="text-body-lg text-muted-foreground max-w-xl animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              Na Essence Clinic, unimos os tratamentos estéticos e odontológicos mais avançados com uma experiência acolhedora e personalizada. Sua melhor versão começa aqui.
            </p>

            <div
              className="flex flex-wrap gap-4 pt-4 animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <Button
                size="lg"
                className="btn-coral rounded-full px-8 py-6 text-base shadow-xl shadow-coral-500/30 animate-pulse-glow"
                onClick={() => handleNavClick("#contato")}
                data-testid="button-agendar-hero"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Avaliação Gratuita
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-base border-2 border-petrol-200 dark:border-petrol-600 hover:bg-petrol-50 dark:hover:bg-petrol-800"
                onClick={() => handleNavClick("#tratamentos")}
                data-testid="button-tratamentos-hero"
              >
                Conheça Nossos Tratamentos
              </Button>
            </div>
          </div>

          <div
            className="lg:col-span-2 relative animate-fade-in"
            style={{ animationDelay: "500ms" }}
          >
            <div className="relative z-10">
              <div
                className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-coral-400/20 rounded-full blur-2xl animate-pulse-glow"
                style={{ transform: "translateY(var(--parallax, 0px))" }}
              />
              <img
                src={heroImage}
                alt="Profissional da Essence Clinic"
                className="relative w-full max-w-md mx-auto lg:max-w-none object-cover rounded-2xl shadow-2xl animate-float-slow"
                data-testid="img-hero"
              />
            </div>

            <div
              className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-400/20 rounded-full blur-xl animate-float"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-coral-400/20 rounded-full blur-xl animate-float"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => handleNavClick("#diferenciais")}
          className="flex flex-col items-center text-muted-foreground hover:text-emerald-600 transition-colors"
          data-testid="button-scroll-down"
        >
          <span className="text-sm mb-2">Explore</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
