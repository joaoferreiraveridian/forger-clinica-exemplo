import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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
    if (isAutoPlaying && isVisible) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isVisible]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push({ ...testimonials[index], originalIndex: index });
    }
    return result;
  };

  return (
    <section
      ref={sectionRef}
      id="depoimentos"
      className="section-padding bg-gradient-to-b from-white to-pearl-100 dark:from-petrol-900 dark:to-petrol-800"
      data-testid="section-depoimentos"
    >
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={cn(
              "font-heading text-title text-petrol-900 dark:text-pearl-100 mb-4",
              isVisible && "animate-fade-in"
            )}
          >
            O Que Nossos <span className="gradient-text">Pacientes Dizem</span>
          </h2>
          <p
            className={cn(
              "text-body-lg text-muted-foreground max-w-2xl mx-auto",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "100ms" }}
          >
            Histórias reais de transformação e satisfação
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card
                key={`${testimonial.id}-${index}`}
                className={cn(
                  "relative p-6 glass-card transition-all duration-500",
                  index === 1 && "scale-105 z-10 shadow-xl",
                  isVisible && "animate-fade-in-up"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
                data-testid={`testimonial-card-${testimonial.id}`}
              >
                <Quote className="absolute top-4 right-4 w-10 h-10 text-emerald-500/20" />

                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-14 h-14 border-2 border-emerald-500/30">
                    <AvatarFallback className="bg-gradient-to-br from-petrol-500 to-emerald-500 text-white font-medium">
                      {testimonial.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-heading font-semibold text-petrol-900 dark:text-pearl-100">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.age} anos
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "w-4 h-4",
                        i < testimonial.rating
                          ? "fill-coral-500 text-coral-500"
                          : "text-muted"
                      )}
                      style={{
                        animation: isVisible
                          ? `star-fill 0.4s ease-out forwards ${i * 0.1}s`
                          : "none",
                      }}
                    />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>

                <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                  {testimonial.treatment}
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:hidden">
            <Card
              className={cn(
                "relative p-6 glass-card",
                isVisible && "animate-fade-in"
              )}
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-emerald-500/20" />

              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-14 h-14 border-2 border-emerald-500/30">
                  <AvatarFallback className="bg-gradient-to-br from-petrol-500 to-emerald-500 text-white font-medium">
                    {testimonials[currentIndex].name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-heading font-semibold text-petrol-900 dark:text-pearl-100">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].age} anos
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < testimonials[currentIndex].rating
                        ? "fill-coral-500 text-coral-500"
                        : "text-muted"
                    )}
                  />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-4">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                {testimonials[currentIndex].treatment}
              </div>
            </Card>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full border-petrol-200 dark:border-petrol-600"
              data-testid="button-prev-testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "w-8 bg-emerald-500"
                      : "bg-petrol-300 dark:bg-petrol-600 hover:bg-emerald-400"
                  )}
                  data-testid={`dot-testimonial-${index}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full border-petrol-200 dark:border-petrol-600"
              data-testid="button-next-testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
