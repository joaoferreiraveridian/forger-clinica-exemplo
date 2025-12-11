import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { cn } from "@/lib/utils";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function Blog() {
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

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="section-padding bg-white dark:bg-petrol-900"
      data-testid="section-blog"
    >
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={cn(
              "font-heading text-title text-petrol-900 dark:text-pearl-100 mb-4",
              isVisible && "animate-fade-in"
            )}
          >
            Blog e <span className="gradient-text">Conteúdo</span>
          </h2>
          <p
            className={cn(
              "text-body-lg text-muted-foreground max-w-2xl mx-auto",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "100ms" }}
          >
            Fique por dentro das novidades em odontologia e estética
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className={cn(
                "group overflow-visible hover-elevate transition-all duration-500",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
              data-testid={`blog-card-${post.id}`}
            >
              <div className="relative h-48 overflow-hidden rounded-t-md">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petrol-900/60 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-emerald-500 text-white border-0">
                  {post.category}
                </Badge>
              </div>

              <div className="p-5 lg:p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.date)}
                </div>

                <h3 className="font-heading text-lg font-semibold text-petrol-900 dark:text-pearl-100 mb-3 line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <Button
                  variant="ghost"
                  className="p-0 h-auto text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 group/btn"
                  data-testid={`button-ler-mais-${post.id}`}
                >
                  Ler mais
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 border-petrol-200 dark:border-petrol-600"
            onClick={() => {}}
            data-testid="button-ver-todos-posts"
          >
            Ver Todos os Artigos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
