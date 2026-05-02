import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { MapPin, Phone, Mail, Home as HomeIcon, BedDouble, Bath, SquareSquare, Wifi, Tv, Send, Calendar, Shield, ChevronDown, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import heroBg from "@/assets/images/hero-bg.png";
import villaA from "@/assets/images/villa-a.png";
import villaB from "@/assets/images/villa-b.png";
import villaInterior from "@/assets/images/villa-interior.png";
import studioInterior from "@/assets/images/studio-interior.png";
import aptPrestige from "@/assets/images/apartment-prestige.png";

export default function Home() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: '60px',
      duration: 2500,
      delay: 400,
      reset: false
    });

    sr.reveal('.sr-top', { origin: 'top' });
    sr.reveal('.sr-bottom', { origin: 'bottom' });
    sr.reveal('.sr-left', { origin: 'left' });
    sr.reveal('.sr-right', { origin: 'right' });
    sr.reveal('.sr-fade', { opacity: 0, distance: '0px' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-[100dvh] flex flex-col items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Vue de Lubumbashi" 
            className="w-full h-full object-cover object-center brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/30"></div>
          <div className="hero-impact-flash absolute inset-0 bg-white pointer-events-none z-20"></div>
        </div>

        <div className="hero-container-shake container relative z-10 mx-auto px-6 md:px-8 text-center flex flex-col items-center justify-center flex-1">
          <div className="max-w-3xl overflow-hidden">
            <div className="hero-slam-1 text-3xl sm:text-4xl md:text-6xl font-black leading-[1.1] mb-1 text-white tracking-tight uppercase">
              Votre chez-vous à
            </div>
            <div className="hero-slam-2 text-5xl sm:text-6xl md:text-8xl font-black leading-[1.0] mb-6 text-primary tracking-tight uppercase">
              Lubumbashi
            </div>
            
            <p className="hero-slam-3 text-base sm:text-lg md:text-xl text-white/70 mb-8 max-w-xl mx-auto font-light leading-relaxed">
              Maisons de prestige en longue durée et appartements modernes pour vos séjours à Lubumbashi.
            </p>
            
            <div className="hero-slam-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#maisons" className="w-full sm:w-auto bg-primary text-white px-8 py-3.5 rounded-full font-bold hover:bg-primary/90 transition-all text-center">
                Voir les propriétés
              </a>
              <a href="#appartements" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border border-white/25 px-8 py-3.5 rounded-full font-bold hover:bg-white/20 transition-all text-center">
                Séjours courts
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-subtle text-white/30 cursor-pointer">
          <a href="#services">
            <ChevronDown size={28} />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-10 md:mb-20 sr-top">
            <span className="text-muted-foreground font-semibold tracking-widest uppercase text-sm mb-2 block">L'Excellence</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 red-line">Nos Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Une offre sur-mesure pour répondre à vos exigences les plus élevées.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="sr-left gradient-border-card p-6 md:p-10 rounded-2xl group overflow-hidden">
              <div className="absolute -right-4 -top-10 text-[180px] font-black text-primary/[0.03] select-none pointer-events-none group-hover:scale-110 transition-transform duration-700">01</div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-secondary text-foreground/60 transition-all duration-300">
                  <HomeIcon size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Location Longue Durée</h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Des villas spacieuses idéales pour les familles ou les expatriés souhaitant s'installer à Lubumbashi sur le long terme. Situées dans le quartier exclusif de Bel-Air.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4"><CheckCircle2 className="text-primary" size={20}/> <span className="font-medium">Villas de prestige 3 chambres</span></li>
                  <li className="flex items-center gap-4"><CheckCircle2 className="text-primary" size={20}/> <span className="font-medium">Quartier hautement sécurisé</span></li>
                  <li className="flex items-center gap-4"><CheckCircle2 className="text-primary" size={20}/> <span className="font-medium">Contrats flexibles mensuels</span></li>
                </ul>
              </div>
            </div>

            <div className="sr-right gradient-border-card p-6 md:p-10 rounded-2xl group overflow-hidden">
              <div className="absolute -right-4 -top-10 text-[180px] font-black text-primary/[0.03] select-none pointer-events-none group-hover:scale-110 transition-transform duration-700">02</div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-secondary text-foreground/60 transition-all duration-300">
                  <MapPin size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Location Courte Durée</h3>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Des appartements et studios modernes entièrement meublés pour vos voyages d'affaires, week-ends ou vacances. Le luxe d'un hôtel, le confort d'une maison.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4"><CheckCircle2 className="text-primary" size={20}/> <span className="font-medium">Design contemporain meublé</span></li>
                  <li className="flex items-center gap-4"><CheckCircle2 className="text-primary" size={20}/> <span className="font-medium">Internet Fibre & Smart TV</span></li>
                  <li className="flex items-center gap-4"><CheckCircle2 className="text-primary" size={20}/> <span className="font-medium">Nuitée, week-end ou semaine</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maisons à louer */}
      <section id="maisons" className="py-16 md:py-32 bg-card relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-20 sr-top">
            <span className="text-muted-foreground font-semibold tracking-widest uppercase text-sm mb-2 block">Longue Durée</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 red-line">Villas de Prestige</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos propriétés d'exception au cœur du quartier Bel-Air.
            </p>
          </div>

          <div className="sr-bottom">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 30 },
                1024: { slidesPerView: 3, spaceBetween: 40 }
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: false,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="w-full py-10 pb-20"
            >
              {[
                { img: villaA, name: "Villa Bel-Air A", price: "$350/mois", status: "Disponible" },
                { img: villaB, name: "Villa Bel-Air B", price: "$350/mois", status: "Disponible" },
                { img: villaInterior, name: "Intérieur Design", price: "Premium", status: "Visite" }
              ].map((villa, idx) => (
                <SwiperSlide key={idx} className="max-w-[420px] w-full">
                  <div className="bg-background rounded-2xl overflow-hidden group border border-border/50 hover:border-white/10 transition-all duration-500 h-full flex flex-col relative">
                    <div className="relative h-[280px] overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                      <img src={villa.img} alt={villa.name} className="w-full h-full object-cover group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-700 ease-out" />
                      
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-black/50 backdrop-blur-sm text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15">
                          {villa.status}
                        </span>
                      </div>
                      
                      {villa.price.includes('$') && (
                        <div className="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur-md border border-white/15 text-white font-bold text-base py-1.5 px-4 rounded-full">
                          {villa.price}
                        </div>
                      )}
                    </div>
                    
                    <div className="p-8 flex-1 flex flex-col relative z-20 bg-background">
                      <h3 className="text-2xl font-black mb-6">{villa.name}</h3>
                      <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-8">
                        <div className="flex items-center gap-3 text-muted-foreground font-medium">
                          <SquareSquare size={18} className="text-foreground/40"/> ~120m²
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground font-medium">
                          <BedDouble size={18} className="text-foreground/40"/> 3 Chambres
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground font-medium">
                          <Bath size={18} className="text-foreground/40"/> 1 SDB
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground font-medium">
                          <MapPin size={18} className="text-foreground/40"/> Bel-Air
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <a href="#contact" className="block w-full text-center bg-secondary text-foreground py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all duration-300">
                          Demander une visite
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-14 md:py-24 bg-background relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-8 md:mb-16 sr-top">
            <h2 className="text-2xl md:text-4xl font-black mb-4">Pourquoi Luba Immobilier ?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            <div className="sr-bottom bg-white/5 backdrop-blur-sm border border-white/10 p-5 md:p-8 rounded-2xl hover:border-white/20 transition-all group">
              <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-6 text-foreground/60 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">Emplacement Premium</h4>
              <p className="text-muted-foreground">Bel-Air, le meilleur quartier résidentiel de Lubumbashi, calme, sécurisé et accessible.</p>
            </div>
            
            <div className="sr-bottom bg-white/5 backdrop-blur-sm border border-white/10 p-5 md:p-8 rounded-2xl hover:border-white/20 transition-all group" style={{ transitionDelay: '100ms' }}>
              <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-6 text-foreground/60 group-hover:scale-110 transition-transform">
                <Calendar size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">Flexibilité Totale</h4>
              <p className="text-muted-foreground">Des offres adaptées à chaque besoin : courte durée au jour ou longue durée au mois.</p>
            </div>
            
            <div className="sr-bottom bg-white/5 backdrop-blur-sm border border-white/10 p-5 md:p-8 rounded-2xl hover:border-white/20 transition-all group" style={{ transitionDelay: '200ms' }}>
              <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-6 text-foreground/60 group-hover:scale-110 transition-transform">
                <Shield size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3">Service de Confiance</h4>
              <p className="text-muted-foreground">Une expertise reconnue depuis 5 ans avec un accompagnement dédié et des clients fidèles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Appartements Courts Séjours */}
      <section id="appartements" className="py-16 md:py-32 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-20 sr-top">
            <span className="text-muted-foreground font-semibold tracking-widest uppercase text-sm mb-2 block">Courte Durée</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 red-line">Séjours Exclusifs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nos appartements modernes et meublés pour un passage inoubliable à Lubumbashi.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Studio */}
            <div className="sr-left flex flex-col bg-background border border-border/50 rounded-2xl overflow-hidden group hover:border-white/10 transition-all duration-500 relative">
              <div className="h-[300px] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img src={studioInterior} alt="Studio Moderne" className="w-full h-full object-cover group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10"></div>
                <h3 className="absolute bottom-6 left-8 text-3xl font-black text-white z-20">Studio Moderne</h3>
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-black/50 backdrop-blur-sm text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15">Disponible</span>
                </div>
              </div>
              <div className="p-5 md:p-8 flex-1 flex flex-col z-20 relative bg-background">
                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  <span className="bg-secondary text-sm px-3 py-1.5 rounded-full flex items-center gap-1.5"><BedDouble size={14} className="text-foreground/40"/> 1 Chambre</span>
                  <span className="bg-secondary text-sm px-3 py-1.5 rounded-full flex items-center gap-1.5"><Wifi size={14} className="text-foreground/40"/> WiFi</span>
                  <span className="bg-secondary text-sm px-3 py-1.5 rounded-full flex items-center gap-1.5"><Bath size={14} className="text-foreground/40"/> Salle de bain</span>
                </div>
                <p className="text-muted-foreground mb-5 md:mb-8">
                  Studio cosy au design épuré. Idéal pour un séjour d'affaires ou un week-end en couple.
                </p>
                <div className="mt-auto">
                  <div className="bg-card rounded-xl p-5 mb-6 border border-border/50">
                    <h4 className="font-semibold mb-3 text-xs uppercase tracking-widest text-muted-foreground">Tarification</h4>
                    <div className="flex justify-between items-center py-2.5 border-b border-border/50">
                      <span className="text-sm">Nuitée</span> <span className="font-bold text-lg">$45</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5 border-b border-border/50">
                      <span className="text-sm">Week-end</span> <span className="font-bold text-lg">$80</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-sm">Semaine</span> <span className="font-bold text-lg">$250</span>
                    </div>
                  </div>
                  <a href="#contact" className="block w-full text-center bg-primary text-white py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-colors">
                    Réserver
                  </a>
                </div>
              </div>
            </div>

            {/* Prestige */}
            <div className="sr-right flex flex-col bg-background border border-border/50 rounded-2xl overflow-hidden group hover:border-white/10 transition-all duration-500 relative">
              <div className="h-[300px] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img src={aptPrestige} alt="Appartement Prestige" className="w-full h-full object-cover group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10"></div>
                <h3 className="absolute bottom-6 left-8 text-3xl font-black text-white z-20">Appartement Prestige</h3>
              </div>
              <div className="p-5 md:p-8 flex-1 flex flex-col z-20 relative bg-background">
                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  <span className="bg-secondary text-sm px-3 py-1.5 rounded-full flex items-center gap-1.5"><BedDouble size={14} className="text-foreground/40"/> 2 Chambres</span>
                  <span className="bg-secondary text-sm px-3 py-1.5 rounded-full flex items-center gap-1.5"><Tv size={14} className="text-foreground/40"/> TV Smart</span>
                  <span className="bg-secondary text-sm px-3 py-1.5 rounded-full flex items-center gap-1.5"><Wifi size={14} className="text-foreground/40"/> Cuisine équipée</span>
                </div>
                <p className="text-muted-foreground mb-5 md:mb-8">
                  Un appartement spacieux et élégant. Idéal pour les voyages d'affaires ou une petite famille.
                </p>
                <div className="mt-auto">
                  <div className="bg-card rounded-xl p-5 mb-6 border border-border/50">
                    <h4 className="font-semibold mb-3 text-xs uppercase tracking-widest text-muted-foreground">Tarification</h4>
                    <div className="flex justify-between items-center py-2.5 border-b border-border/50">
                      <span className="text-sm">Nuitée</span> <span className="font-bold text-lg">$75</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5 border-b border-border/50">
                      <span className="text-sm">Week-end</span> <span className="font-bold text-lg">$140</span>
                    </div>
                    <div className="flex justify-between items-center py-2.5">
                      <span className="text-sm">Semaine</span> <span className="font-bold text-lg">$450</span>
                    </div>
                  </div>
                  <a href="#contact" className="block w-full text-center bg-primary text-white py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-colors">
                    Réserver
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localisation */}
      <section className="py-16 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-16 sr-top">
            <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-6 red-line">Notre Emplacement</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Retrouvez-nous au cœur du quartier résidentiel le plus prisé.
            </p>
          </div>

          <div className="max-w-6xl mx-auto sr-bottom relative">
            <div className="absolute z-20 left-8 top-1/2 -translate-y-1/2 w-72 bg-card/95 backdrop-blur-xl p-7 rounded-2xl border border-border shadow-2xl hidden lg:block">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center mb-5">
                <MapPin size={20} className="text-foreground/60" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quartier Bel-Air</h3>
              <ul className="space-y-2 mb-6 text-muted-foreground text-sm">
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-border"></div> Lubumbashi</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-border"></div> Haut-Katanga</li>
                <li className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-border"></div> RDC</li>
              </ul>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-foreground/70 font-semibold hover:text-foreground transition-colors">
                Voir sur Google Maps <ChevronDown className="-rotate-90" size={14} />
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border/50">
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62157.27!2d27.4594!3d-11.6609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19723b3fb4d70049%3A0x9bed5108a3e84bfe!2sLubumbashi!5e0!3m2!1sfr!2scd!4v1" width="100%" height="500" style="border:0" allowfullscreen loading="lazy"></iframe>`
                }} 
                className="w-full h-[300px] md:h-[500px] grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-32 bg-card relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-20">
            <div className="lg:w-5/12 sr-left relative">
              <div className="absolute -top-16 -left-10 text-[150px] font-serif text-foreground/5 leading-none select-none hidden md:block">"</div>
              <h2 className="text-3xl md:text-5xl font-black mb-5 md:mb-8 relative z-10">Prêt à emménager ?</h2>
              <p className="text-muted-foreground mb-8 md:mb-12 leading-relaxed relative z-10">
                Contactez notre équipe d'experts dès aujourd'hui pour planifier une visite exclusive ou réserver votre séjour premium.
              </p>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-background border border-border rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-foreground/50" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Adresse de l'agence</h4>
                    <p className="text-muted-foreground">Quartier Bel-Air<br />Lubumbashi, RDC</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-background border border-border rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-foreground/50" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Assistance Directe</h4>
                    <p className="text-muted-foreground">+243 000 000 000</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-background border border-border rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="text-foreground/50" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Email Commercial</h4>
                    <p className="text-muted-foreground">contact@lubaimmobilier.cd</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-7/12 sr-right">
              <form className="bg-background border border-border p-5 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                <h3 className="text-2xl md:text-3xl font-black mb-5 md:mb-8">Envoyez-nous un message</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-muted-foreground mb-2">Nom complet</label>
                    <input type="text" className="w-full bg-secondary/50 border border-border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-foreground" placeholder="Votre nom" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-muted-foreground mb-2">Email</label>
                      <input type="email" className="w-full bg-secondary/50 border border-border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-foreground" placeholder="Votre email" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-muted-foreground mb-2">Téléphone</label>
                      <input type="tel" className="w-full bg-secondary/50 border border-border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-foreground" placeholder="Votre numéro" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-muted-foreground mb-2">Sujet</label>
                    <select className="w-full bg-secondary/50 border border-border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-foreground appearance-none">
                      <option>Location de maison longue durée</option>
                      <option>Location d'appartement courte durée</option>
                      <option>Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-muted-foreground mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-secondary/50 border border-border rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all text-foreground resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button type="button" className="flex-1 bg-primary text-white py-4 px-6 rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-3 group/btn">
                      <Send size={18} className="group-hover/btn:translate-x-1 transition-transform" /> Envoyer la demande
                    </button>
                    <a href="https://wa.me/243000000000" target="_blank" rel="noreferrer" className="sm:w-auto bg-secondary border border-border text-muted-foreground py-4 px-8 rounded-xl font-bold hover:text-foreground hover:border-white/20 transition-all flex items-center justify-center gap-2">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
