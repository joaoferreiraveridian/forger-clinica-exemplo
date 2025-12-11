import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Phone, Mail, MapPin, MessageCircle, Loader2 } from "lucide-react";
import { treatmentOptions, contactInfo } from "@/lib/data";
import { apiRequest } from "@/lib/queryClient";
import { cn } from "@/lib/utils";
import { insertContactSchema, type InsertContact } from "@shared/schema";

const contactFormSchema = insertContactSchema.extend({
  name: insertContactSchema.shape.name.min(2, "Nome deve ter pelo menos 2 caracteres"),
  whatsapp: insertContactSchema.shape.whatsapp.min(10, "WhatsApp inválido"),
  treatment: insertContactSchema.shape.treatment.min(1, "Selecione um tratamento"),
});

type ContactFormData = InsertContact;

export function ContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
      treatment: "",
      message: "",
    },
  });

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

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <section
      ref={sectionRef}
      id="contato"
      className="section-padding relative overflow-hidden"
      data-testid="section-contato"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-petrol-600 via-petrol-700 to-emerald-800" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-coral-400/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={cn(
              "font-heading text-title text-white mb-4",
              isVisible && "animate-fade-in"
            )}
          >
            Pronto Para Sua <span className="text-emerald-400">Transformação?</span>
          </h2>
          <p
            className={cn(
              "text-body-lg text-pearl-200 max-w-2xl mx-auto",
              isVisible && "animate-fade-in"
            )}
            style={{ animationDelay: "100ms" }}
          >
            Agende uma avaliação gratuita e descubra o que a Essence Clinic pode fazer por você
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <Card
            className={cn(
              "lg:col-span-3 p-6 lg:p-8 bg-white/10 backdrop-blur-xl border-white/20",
              isVisible && "animate-fade-in-up"
            )}
            style={{ animationDelay: "200ms" }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Nome Completo</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Seu nome"
                          className="bg-white/10 border-white/30 text-white placeholder:text-pearl-400 focus:border-emerald-400 focus:ring-emerald-400/20"
                          {...field}
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">WhatsApp</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="(11) 99999-9999"
                          className="bg-white/10 border-white/30 text-white placeholder:text-pearl-400 focus:border-emerald-400 focus:ring-emerald-400/20"
                          {...field}
                          data-testid="input-whatsapp"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="treatment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Tratamento de Interesse</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger
                            className="bg-white/10 border-white/30 text-white focus:border-emerald-400 focus:ring-emerald-400/20"
                            data-testid="select-treatment"
                          >
                            <SelectValue placeholder="Selecione um tratamento" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {treatmentOptions.map((option) => (
                            <SelectItem
                              key={option.value}
                              value={option.value}
                              data-testid={`option-${option.value}`}
                            >
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Mensagem (opcional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Conte-nos mais sobre o que você procura..."
                          className="bg-white/10 border-white/30 text-white placeholder:text-pearl-400 focus:border-emerald-400 focus:ring-emerald-400/20 min-h-[100px]"
                          {...field}
                          value={field.value || ""}
                          data-testid="input-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full btn-coral rounded-full py-6 text-lg shadow-xl shadow-coral-500/30"
                  disabled={mutation.isPending}
                  data-testid="button-submit-form"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5 mr-2" />
                      Quero Agendar Agora
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </Card>

          <div
            className={cn(
              "lg:col-span-2 space-y-6",
              isVisible && "animate-fade-in-up"
            )}
            style={{ animationDelay: "300ms" }}
          >
            <div className="space-y-4">
              <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors group"
                data-testid="link-whatsapp"
              >
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-pearl-300">WhatsApp</div>
                  <div className="text-white font-medium">{contactInfo.whatsapp}</div>
                </div>
              </a>

              <a
                href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors group"
                data-testid="link-phone"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-pearl-300">Telefone</div>
                  <div className="text-white font-medium">{contactInfo.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors group"
                data-testid="link-email"
              >
                <div className="w-12 h-12 rounded-full bg-coral-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-pearl-300">E-mail</div>
                  <div className="text-white font-medium">{contactInfo.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-12 h-12 rounded-full bg-petrol-500 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-pearl-300">Endereço</div>
                  <div className="text-white font-medium">{contactInfo.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
