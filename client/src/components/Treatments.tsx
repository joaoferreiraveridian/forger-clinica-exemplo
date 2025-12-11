import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check, Star } from "lucide-react";
import { treatments } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Treatments() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="tratamentos"
      className="section-padding bg-gradient-to-b from-pearl-100 to-white dark:from-petrol-800 dark:to-petrol-900"
      data-testid="section-tratamentos"
    >
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={cn(
              "font-heading text-title text-petrol-900 dark:text-pearl-100 mb-4",
              isVisible && "animate-fade-in"
            )}
          >
            Tratamentos <span className="gradient-text">Premium</span>
          </h2>
          <p
            className={cn(
              "text-body-lg text-muted-foreground max-w-2xl mx-auto",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "100ms" }}
          >
            Soluções completas em estética e odontologia com a tecnologia mais avançada do mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {treatments.map((treatment, index) => (
            <Card
              key={treatment.id}
              className={cn(
                "group relative overflow-visible hover-elevate transition-all duration-500",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`card-tratamento-${treatment.id}`}
            >
              {treatment.featured && (
                <Badge className="absolute -top-3 right-4 z-20 bg-coral-500 text-white border-0 px-3 py-1 shadow-lg">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  Mais procurado
                </Badge>
              )}

              <div className="relative h-48 lg:h-56 overflow-hidden rounded-t-md">
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petrol-900/80 via-petrol-900/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-heading text-xl lg:text-2xl font-semibold text-white">
                    {treatment.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 lg:p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {treatment.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {treatment.services.map((service, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline"
                  className="w-full group/btn border-petrol-200 dark:border-petrol-600 hover:border-emerald-500 dark:hover:border-emerald-500"
                  onClick={() => handleNavClick("#contato")}
                  data-testid={`button-saiba-mais-${treatment.id}`}
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
