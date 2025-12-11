import { Logo } from "./Logo";
import { navLinks, contactInfo, socialLinks } from "@/lib/data";
import { Instagram, Facebook, Linkedin, Youtube, Clock, MapPin, Phone } from "lucide-react";

const socialIconMap: Record<string, typeof Instagram> = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-petrol-900 dark:bg-petrol-950 text-pearl-200" data-testid="footer">
      <div className="container-custom py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <Logo size="lg" className="mb-6" />
            <p className="text-pearl-400 leading-relaxed mb-6">
              Transformando sorrisos e renovando essências com tecnologia de ponta e atendimento humanizado.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-petrol-800 flex items-center justify-center hover:bg-emerald-600 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                    data-testid={`social-${social.icon}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-pearl-400 hover:text-emerald-400 transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">
              Tratamentos
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#tratamentos" className="text-pearl-400 hover:text-emerald-400 transition-colors">
                  Odontologia Estética
                </a>
              </li>
              <li>
                <a href="#tratamentos" className="text-pearl-400 hover:text-emerald-400 transition-colors">
                  Implantodontia Digital
                </a>
              </li>
              <li>
                <a href="#tratamentos" className="text-pearl-400 hover:text-emerald-400 transition-colors">
                  Estética Facial
                </a>
              </li>
              <li>
                <a href="#tratamentos" className="text-pearl-400 hover:text-emerald-400 transition-colors">
                  Ortodontia Invisível
                </a>
              </li>
              <li>
                <a href="#tratamentos" className="text-pearl-400 hover:text-emerald-400 transition-colors">
                  Clareamento Dental
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-lg mb-6">
              Informações
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-pearl-300 font-medium mb-1">Horário de Funcionamento</div>
                  <div className="text-pearl-400 text-sm">
                    Seg - Sex: {contactInfo.hours.weekdays}
                  </div>
                  <div className="text-pearl-400 text-sm">
                    Sábado: {contactInfo.hours.saturday}
                  </div>
                  <div className="text-pearl-400 text-sm">
                    Domingo: {contactInfo.hours.sunday}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-pearl-300 font-medium mb-1">Endereço</div>
                  <div className="text-pearl-400 text-sm">{contactInfo.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-pearl-300 font-medium mb-1">Contato</div>
                  <div className="text-pearl-400 text-sm">{contactInfo.phone}</div>
                  <div className="text-pearl-400 text-sm">{contactInfo.whatsapp}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-petrol-800">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-pearl-500 text-sm text-center md:text-left">
            &copy; {currentYear} Essence Clinic. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-pearl-500 hover:text-emerald-400 transition-colors" data-testid="link-politica-privacidade">
              Política de Privacidade
            </a>
            <a href="#" className="text-pearl-500 hover:text-emerald-400 transition-colors" data-testid="link-termos-uso">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
