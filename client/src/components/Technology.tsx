import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Scan, PenTool, Target, Smartphone } from "lucide-react";
import { techSteps } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, typeof Scan> = {
  scan: Scan,
  design: PenTool,
  precision: Target,
  app: Smartphone,
};

export function Technology() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % techSteps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      id="tecnologia"
      className="section-padding bg-petrol-900 dark:bg-petrol-950 relative overflow-hidden"
      data-testid="section-tecnologia"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-coral-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={cn(
              "font-heading text-title text-white mb-4",
              isVisible && "animate-fade-in"
            )}
          >
            Tecnologia que <span className="text-emerald-400">Impressiona</span>
          </h2>
          <p
            className={cn(
              "text-body-lg text-pearl-300 max-w-2xl mx-auto",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "100ms" }}
          >
            Conheça nossa jornada de transformação digital em 4 etapas
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-petrol-700 -translate-y-1/2" />
          <div
            className="hidden md:block absolute top-1/2 left-0 h-1 bg-gradient-to-r from-emerald-500 to-coral-500 -translate-y-1/2 transition-all duration-700"
            style={{ width: `${((activeStep + 1) / techSteps.length) * 100}%` }}
          />

          <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
            {techSteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              const isActive = index <= activeStep;

              return (
                <div
                  key={step.id}
                  className={cn(
                    "relative",
                    isVisible && "animate-fade-in-up"
                  )}
                  style={{ animationDelay: `${index * 150}ms` }}
                  data-testid={`tech-step-${step.id}`}
                >
                  <div
                    className={cn(
                      "hidden md:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-4 transition-all duration-500 z-10",
                      isActive
                        ? "bg-emerald-500 border-emerald-400"
                        : "bg-petrol-700 border-petrol-600"
                    )}
                  />

                  <Card
                    className={cn(
                      "p-6 bg-petrol-800/50 backdrop-blur-sm border-petrol-700/50 h-full transition-all duration-500",
                      isActive && "border-emerald-500/50 glow-emerald"
                    )}
                    onClick={() => setActiveStep(index)}
                  >
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500",
                        isActive
                          ? "bg-gradient-to-br from-emerald-500 to-emerald-600"
                          : "bg-petrol-700"
                      )}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="text-emerald-400 text-sm font-medium mb-2">
                      Etapa {index + 1}
                    </div>

                    <h3 className="font-heading text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h3>

                    <p className="text-pearl-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
