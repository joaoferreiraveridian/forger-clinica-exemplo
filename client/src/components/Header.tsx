import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/80 dark:bg-petrol-900/80 backdrop-blur-xl shadow-lg border-b border-white/20 dark:border-white/10"
            : "bg-transparent"
        )}
        data-testid="header"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#inicio");
              }}
              className="animate-fade-in"
              data-testid="link-home"
            >
              <Logo size="md" />
            </a>

            <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-all duration-300",
                    "text-petrol-600 dark:text-pearl-200 hover:text-emerald-600 dark:hover:text-emerald-400",
                    "hover:bg-emerald-50 dark:hover:bg-emerald-900/20",
                    "animate-fade-in"
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Button
                className={cn(
                  "hidden sm:flex btn-coral rounded-full px-6 animate-fade-in",
                  "shadow-lg shadow-coral-500/25"
                )}
                style={{ animationDelay: "300ms" }}
                onClick={() => handleNavClick("#contato")}
                data-testid="button-agendar-header"
              >
                Agendar Consulta
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
                data-testid="button-menu-mobile"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-all duration-500",
          isMobileMenuOpen ? "visible" : "invisible"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-petrol-900/60 backdrop-blur-sm transition-opacity duration-500",
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={cn(
            "absolute top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-petrol-900 shadow-2xl transition-transform duration-500 ease-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          data-testid="mobile-menu"
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <Logo size="sm" />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              data-testid="button-close-menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  "px-4 py-3 text-lg font-medium rounded-md transition-all duration-300",
                  "text-petrol-600 dark:text-pearl-200 hover:text-emerald-600 dark:hover:text-emerald-400",
                  "hover:bg-emerald-50 dark:hover:bg-emerald-900/20",
                  isMobileMenuOpen ? "animate-fade-in-up" : ""
                )}
                style={{ animationDelay: `${index * 50 + 100}ms` }}
                data-testid={`mobile-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="absolute bottom-8 left-4 right-4">
            <Button
              className="w-full btn-coral rounded-full py-6 text-lg"
              onClick={() => handleNavClick("#contato")}
              data-testid="button-agendar-mobile"
            >
              Agendar Consulta
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
