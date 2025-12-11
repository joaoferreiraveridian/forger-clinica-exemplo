# Essence Clinic - Design Guidelines

## Design Approach
**Disruptive Premium Medical/Aesthetic**: Combine glassmorphism with neomorphic elements, creating a futuristic yet warm medical environment that stands apart from traditional clinic websites. Heavy use of micro-interactions, 3D depth effects, and flowing animations throughout.

## Color System
**Primary Gradient**: Deep petrol blue `#0A2E36` → Vibrant emerald green `#00D9C0` (technology, health, renewal)
**Secondary**: Metallic rose gold `#E8C4B8`, Pearl white `#F8F9FA` (luxury, cleanliness)
**Interactive/CTA**: Soft coral `#FF6B9D`
**Backgrounds**: Glassmorphism effects with subtle gradients and backdrop blur

## Typography
**Headings**: Poppins (48-72px desktop, elegant, impactful)
**Body**: Inter (16-18px, modern, professional)
**Hierarchy**: Clear scale with generous spacing (line-height: 1.6-1.8)
**Responsive**: Fluid sizing using clamp() - e.g., `clamp(1rem, 2vw, 1.5rem)`

## Layout System
**Spacing**: Generous whitespace, glassmorphic section separators
**Breakpoints**: 320px (mobile-s) | 376px (mobile) | 768px (tablet-p) | 1025px (tablet-l) | 1367px (desktop) | 1921px+ (large)
**Max-width**: 1600px centered for large screens
**Touch Targets**: Minimum 44px on mobile

## Header (Fixed, Glassmorphic)
- Logo "Essence Clinic" (SVG gradient, transparent, ~60px desktop/45px mobile, subtle fade-in animation)
- Horizontal nav (desktop) / Hamburger full-screen slide-in (mobile)
- Links: Início | Tratamentos | Tecnologia | Equipe | Galeria | Blog | Contato
- Prominent CTA button: "Agendar Consulta" (animated gradient)
- Semi-transparent blur background appears on scroll

## Hero Section (Full Viewport)
**Layout 60/40**:
- **Left (60%)**: 
  - Title: "Transforme Seu Sorriso, Renove Sua Essência"
  - Subtitle + description
  - 2 CTAs: Primary "Agendar Avaliação Gratuita" + Secondary "Conheça Nossos Tratamentos"
  - Floating mini badges: "15 anos" | "20.000+ sorrisos" | "Tecnologia 3D"
- **Right (40%)**: Professional dentist image (AI-generated, transparent background, 3D integrated effect)
- **Effects**: Animated gradient background, floating geometric particles, sequential fade-in text, levitating image with parallax

## Section: Diferenciais (3 Columns)
**Glassmorphic Cards** with animated gradient borders:
1. Tecnologia de Ponta (3D scanner icon)
2. Equipe Especializada (medical team icon)
3. Atendimento Humanizado (heart+hands icon)

**Hover**: Card elevation with glow, pulsing animations, shimmer effects

## Section: Tratamentos Premium (2x2 Grid)
**4 Interactive Cards**:
1. Odontologia Estética
2. Implantodontia Digital
3. Estética Facial
4. Ortodontia Invisível

Each with large AI-generated image, treatment list, "Saiba mais" button. Hover: zoom image + gradient overlay, flip/slide animations. Badge "Mais procurado" on featured treatment.

## Section: Tecnologia (Horizontal Timeline)
4 connected stages with animated line: Escaneamento 3D → Planejamento Digital → Execução Precisa → Acompanhamento App. Icons illuminate on scroll, cards appear sequentially.

## Section: Resultados (Antes/Depois Gallery)
Carousel with 6 cases, interactive draggable comparison slider, neon border on hover, auto-play with pause on hover, smooth transitions.

## Section: Depoimentos
Slider with 5-6 testimonial cards: avatar, name+age, review text (3-4 lines), 5 stars with fill animation, treatment type. Large decorative quotation marks, gradient background, fade transitions.

## Section: Blog (3 Columns)
Latest 3 articles with AI-generated thumbnails, category badge, title, 2-line summary, date, "Ler mais" button.

## Section: CTA Final
Vibrant gradient background, glassmorphic inline form (Nome, WhatsApp, Tratamento select, "Quero Agendar Agora" button with pulse animation). Inputs with glow on focus. Side contact icons (WhatsApp, phone, email, address) with hover effects.

## Footer (3 Columns, Dark Mode)
- Logo + social icons (animated hover)
- Quick links
- Hours + address + mini map
- Copyright bar

## Images (All AI-Generated via Unsplash/Similar)
**Hero**: Professional female dentist, modern white coat, smiling, futuristic clinic, soft lighting, high-tech background, ultra-realistic 8K, transparent background cutout, 3D integrated style

**Additional**: Dental chairs, aesthetic treatments, 3D scanners, digital screens, laser equipment, professional team portraits (4), before/after comparisons (6), blog thumbnails (3) - all with consistent professional lighting

## Animation System
**Micro-interactions everywhere**: Hover effects, scroll-triggered animations, entrance animations, parallax backgrounds, floating particles, glowing borders, pulsing buttons, sequential reveals, smooth page transitions. Minimize distractions but maintain premium feel.

## Responsive Strategy
**Mobile**: Single column, stacked cards, hamburger menu, reduced font scaling, 44px touch targets
**Tablet**: 2-column hybrid, adapted spacing
**Desktop**: 3-4 columns, full effects
**Fluid**: Grid with minmax(auto-fill), proportional spacing (vw/vh), object-fit: cover for images

## Component Design Principles
- Glassmorphism (backdrop-filter blur) on cards/overlays
- Deep 3D shadows for depth
- Animated gradient borders
- Floating/elevated elements
- Neon accents on interaction
- Premium spacing and breathing room throughout