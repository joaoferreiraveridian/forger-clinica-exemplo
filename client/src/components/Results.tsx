import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

import dentalChair from "@assets/generated_images/luxury_dental_chair_treatment.png";
import facialTreatment from "@assets/generated_images/facial_aesthetic_treatment.png";
import dentalWhitening from "@assets/generated_images/dental_whitening_procedure.png";
import skincareRoom from "@assets/generated_images/skincare_treatment_room.png";
import digitalSmile from "@assets/generated_images/digital_smile_design_screen.png";
import clearAligners from "@assets/generated_images/clear_aligners_orthodontics.png";

interface ResultCase {
  id: string;
  title: string;
  treatment: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
}

const resultCases: ResultCase[] = [
  {
    id: "1",
    title: "Transformação Completa do Sorriso",
    treatment: "Lentes de Contato Dental",
    duration: "2 semanas",
    beforeImage: dentalChair,
    afterImage: digitalSmile,
  },
  {
    id: "2",
    title: "Harmonização Facial Natural",
    treatment: "Preenchimento + Toxina Botulínica",
    duration: "1 sessão",
    beforeImage: facialTreatment,
    afterImage: skincareRoom,
  },
  {
    id: "3",
    title: "Clareamento Dental Premium",
    treatment: "Clareamento a Laser",
    duration: "1 hora",
    beforeImage: dentalWhitening,
    afterImage: dentalChair,
  },
  {
    id: "4",
    title: "Alinhamento Discreto",
    treatment: "Ortodontia Invisível",
    duration: "6 meses",
    beforeImage: clearAligners,
    afterImage: digitalSmile,
  },
  {
    id: "5",
    title: "Rejuvenescimento Facial",
    treatment: "Harmonização Orofacial",
    duration: "1 sessão",
    beforeImage: skincareRoom,
    afterImage: facialTreatment,
  },
  {
    id: "6",
    title: "Sorriso Renovado",
    treatment: "Facetas de Porcelana",
    duration: "3 semanas",
    beforeImage: digitalSmile,
    afterImage: dentalWhitening,
  },
];

function CompareSlider({ beforeImage, afterImage, title }: { beforeImage: string; afterImage: string; title: string }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-64 lg:h-80 overflow-hidden rounded-lg cursor-ew-resize select-none"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      data-testid="compare-slider"
    >
      <img
        src={afterImage}
        alt={`${title} - Depois`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={`${title} - Antes`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: containerRef.current?.offsetWidth || "100%" }}
        />
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="flex gap-0.5">
            <ChevronLeft className="w-4 h-4 text-petrol-600" />
            <ChevronRight className="w-4 h-4 text-petrol-600" />
          </div>
        </div>
      </div>

      <div className="absolute top-4 left-4 bg-petrol-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
        Antes
      </div>
      <div className="absolute top-4 right-4 bg-emerald-600/80 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
        Depois
      </div>
    </div>
  );
}

export function Results() {
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
        setCurrentIndex((prev) => (prev + 1) % resultCases.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, isVisible]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + resultCases.length) % resultCases.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % resultCases.length);
  };

  const currentCase = resultCases[currentIndex];

  return (
    <section
      ref={sectionRef}
      id="resultados"
      className="section-padding bg-pearl-100 dark:bg-petrol-800"
      data-testid="section-resultados"
    >
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={cn(
              "font-heading text-title text-petrol-900 dark:text-pearl-100 mb-4",
              isVisible && "animate-fade-in"
            )}
          >
            Resultados que <span className="gradient-text">Falam</span>
          </h2>
          <p
            className={cn(
              "text-body-lg text-muted-foreground max-w-2xl mx-auto",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "100ms" }}
          >
            Arraste para comparar o antes e depois de nossos tratamentos
          </p>
        </div>

        <div
          className={cn(
            "max-w-4xl mx-auto",
            isVisible && "animate-fade-in-up"
          )}
          style={{ animationDelay: "200ms" }}
        >
          <Card
            className="overflow-visible p-6 glass-card"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <CompareSlider
              beforeImage={currentCase.beforeImage}
              afterImage={currentCase.afterImage}
              title={currentCase.title}
            />

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="font-heading text-xl font-semibold text-petrol-900 dark:text-pearl-100 mb-2">
                  {currentCase.title}
                </h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="secondary" className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">
                    <Sparkles className="w-3 h-3 mr-1" />
                    {currentCase.treatment}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    Duração: {currentCase.duration}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToPrevious}
                  className="rounded-full"
                  data-testid="button-prev-result"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <span className="text-sm text-muted-foreground px-2">
                  {currentIndex + 1} / {resultCases.length}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={goToNext}
                  className="rounded-full"
                  data-testid="button-next-result"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>

          <div className="flex justify-center gap-2 mt-6">
            {resultCases.map((_, index) => (
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
                data-testid={`dot-result-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
