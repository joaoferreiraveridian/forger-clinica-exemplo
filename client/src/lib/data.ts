import type { Treatment, Testimonial, BlogPost, TechStep, Differential } from "@shared/schema";

import heroImage from "@assets/generated_images/professional_dentist_hero_image.png";
import dentalChair from "@assets/generated_images/luxury_dental_chair_treatment.png";
import facialTreatment from "@assets/generated_images/facial_aesthetic_treatment.png";
import dentalWhitening from "@assets/generated_images/dental_whitening_procedure.png";
import skincareRoom from "@assets/generated_images/skincare_treatment_room.png";
import scanner3d from "@assets/generated_images/3d_dental_scanner_technology.png";
import digitalSmile from "@assets/generated_images/digital_smile_design_screen.png";
import laserEquipment from "@assets/generated_images/laser_aesthetic_equipment.png";
import clearAligners from "@assets/generated_images/clear_aligners_orthodontics.png";

export { heroImage };

export const treatments: Treatment[] = [
  {
    id: "1",
    title: "Odontologia Estética",
    description: "Transforme seu sorriso com as técnicas mais avançadas em estética dental.",
    image: dentalChair,
    services: ["Lentes de contato dental", "Clareamento avançado", "Harmonização do sorriso"],
    featured: true,
  },
  {
    id: "2",
    title: "Implantodontia Digital",
    description: "Implantes com precisão milimétrica usando planejamento 3D e guias cirúrgicos.",
    image: scanner3d,
    services: ["Implantes com guia cirúrgico digital", "Carga imediata", "Prótese sobre implante"],
  },
  {
    id: "3",
    title: "Estética Facial",
    description: "Harmonização facial completa para realçar sua beleza natural.",
    image: facialTreatment,
    services: ["Harmonização orofacial", "Toxina botulínica", "Preenchimento labial"],
  },
  {
    id: "4",
    title: "Ortodontia Invisível",
    description: "Alinhe seus dentes discretamente com tecnologia de ponta.",
    image: clearAligners,
    services: ["Alinhadores transparentes", "Planejamento 3D", "Resultados previsíveis"],
  },
];

export const differentials: Differential[] = [
  {
    id: "1",
    title: "Tecnologia de Ponta",
    description: "Equipamentos de última geração para diagnósticos precisos e tratamentos minimamente invasivos.",
    icon: "scanner",
  },
  {
    id: "2",
    title: "Equipe Especializada",
    description: "Profissionais com certificações internacionais e em constante atualização.",
    icon: "team",
  },
  {
    id: "3",
    title: "Atendimento Humanizado",
    description: "Ambiente acolhedor, escuta ativa e planos personalizados para cada paciente.",
    icon: "heart",
  },
];

export const techSteps: TechStep[] = [
  {
    id: "1",
    title: "Escaneamento 3D",
    description: "Captura digital completa da sua boca em minutos",
    icon: "scan",
  },
  {
    id: "2",
    title: "Planejamento Digital",
    description: "Visualize seu resultado antes mesmo de começar",
    icon: "design",
  },
  {
    id: "3",
    title: "Execução Precisa",
    description: "Guias cirúrgicos e tratamentos milimétricos",
    icon: "precision",
  },
  {
    id: "4",
    title: "Acompanhamento App",
    description: "Monitore sua evolução pelo smartphone",
    icon: "app",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria Silva",
    age: 34,
    avatar: "",
    text: "Minha experiência na Essence foi transformadora! O atendimento humanizado e a tecnologia de ponta fizeram toda a diferença. Hoje tenho o sorriso dos meus sonhos.",
    rating: 5,
    treatment: "Lentes de Contato",
  },
  {
    id: "2",
    name: "Carlos Santos",
    age: 45,
    avatar: "",
    text: "Depois de anos com medo de dentista, encontrei na Essence um ambiente acolhedor. A equipe é excepcional e os resultados superaram minhas expectativas.",
    rating: 5,
    treatment: "Implante Dentário",
  },
  {
    id: "3",
    name: "Ana Paula Costa",
    age: 28,
    avatar: "",
    text: "A harmonização facial mudou minha autoestima! Os profissionais são incríveis e o resultado ficou super natural. Recomendo de olhos fechados.",
    rating: 5,
    treatment: "Harmonização Facial",
  },
  {
    id: "4",
    name: "Roberto Lima",
    age: 52,
    avatar: "",
    text: "O clareamento ficou perfeito! Tratamento rápido, indolor e com resultados impressionantes. A clínica é linda e moderna.",
    rating: 5,
    treatment: "Clareamento Dental",
  },
  {
    id: "5",
    name: "Juliana Ferreira",
    age: 31,
    avatar: "",
    text: "Fiz o tratamento com alinhadores invisíveis e foi a melhor decisão! Ninguém percebe que estou usando e meus dentes já estão muito mais alinhados.",
    rating: 5,
    treatment: "Ortodontia Invisível",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Mitos Sobre Implantes Dentários Desvendados",
    excerpt: "Descubra a verdade por trás dos mitos mais comuns sobre implantes e tome uma decisão informada.",
    category: "Implantodontia",
    image: scanner3d,
    date: "2024-12-05",
    slug: "mitos-implantes-dentarios",
  },
  {
    id: "2",
    title: "Harmonização Facial: O Que Você Precisa Saber",
    excerpt: "Tudo sobre os procedimentos de harmonização e como eles podem realçar sua beleza natural.",
    category: "Estética Facial",
    image: facialTreatment,
    date: "2024-12-01",
    slug: "harmonizacao-facial-guia",
  },
  {
    id: "3",
    title: "Tecnologia 3D: A Revolução na Odontologia",
    excerpt: "Como a tecnologia 3D está transformando os tratamentos odontológicos e proporcionando resultados mais precisos.",
    category: "Tecnologia",
    image: digitalSmile,
    date: "2024-11-28",
    slug: "tecnologia-3d-odontologia",
  },
];

export const treatmentOptions = [
  { value: "odontologia-estetica", label: "Odontologia Estética" },
  { value: "implantodontia", label: "Implantodontia Digital" },
  { value: "estetica-facial", label: "Estética Facial" },
  { value: "ortodontia", label: "Ortodontia Invisível" },
  { value: "clareamento", label: "Clareamento Dental" },
  { value: "outros", label: "Outros" },
];

export const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#tecnologia", label: "Tecnologia" },
  { href: "#resultados", label: "Resultados" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#blog", label: "Blog" },
  { href: "#contato", label: "Contato" },
];

export const contactInfo = {
  whatsapp: "+55 11 99999-9999",
  phone: "+55 11 3333-3333",
  email: "contato@essenceclinic.com.br",
  address: "Av. Paulista, 1000 - São Paulo, SP",
  hours: {
    weekdays: "08:00 - 20:00",
    saturday: "09:00 - 14:00",
    sunday: "Fechado",
  },
};

export const socialLinks = [
  { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
  { name: "Facebook", url: "https://facebook.com", icon: "facebook" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "YouTube", url: "https://youtube.com", icon: "youtube" },
];
