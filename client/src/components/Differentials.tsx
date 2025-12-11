import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Scan, Users, Heart } from "lucide-react";
import { differentials } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, typeof Scan> = {
  scanner: Scan,
  team: Users,
  heart: Heart,
};

export function Differentials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="diferenciais"
      className="section-padding bg-white dark:bg-petrol-900"
      data-testid="section-diferenciais"
    >
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={cn(
              "font-heading text-title text-petrol-900 dark:text-pearl-100 mb-4",
              isVisible && "animate-fade-in"
            )}
          >
            Por Que Escolher a <span className="gradient-text">Essence Clinic</span>
          </h2>
          <p
            className={cn(
              "text-body-lg text-muted-foreground max-w-2xl mx-auto",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "100ms" }}
          >
            Nossa missão é proporcionar uma experiência única em cuidados estéticos e odontológicos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {differentials.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <Card
                key={item.id}
                className={cn(
                  "group relative p-6 lg:p-8 glass-card hover-elevate transition-all duration-500",
                  isVisible && "animate-fade-in-up"
                )}
                style={{ animationDelay: `${index * 150}ms` }}
                data-testid={`card-diferencial-${item.id}`}
              >
                <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-emerald-500/5 to-coral-500/5" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-petrol-500 to-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-petrol-900 dark:text-pearl-100 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-petrol-500 to-emerald-500 rounded-b-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
