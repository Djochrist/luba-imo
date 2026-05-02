import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Send } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-background relative pt-12 md:pt-20 pb-8 md:pb-10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-border"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          <div className="sr-bottom lg:col-span-2">
            <div className="mb-6">
              <Logo className="h-10 w-auto" />
            </div>
            <p className="text-muted-foreground mb-8 max-w-md text-lg leading-relaxed">
              L'excellence immobilière à Lubumbashi. Nous concevons des expériences de vie premium à travers nos villas exclusives et nos appartements modernes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-11 h-11 rounded-full bg-secondary/50 border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-white/20 transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-secondary/50 border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-white/20 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-secondary/50 border border-border flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-white/20 transition-all duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div className="sr-bottom" style={{ transitionDelay: '100ms' }}>
            <h4 className="text-xl font-bold text-white mb-6">Liens Rapides</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#home" className="text-muted-foreground hover:text-primary hover:translate-x-2 transition-all inline-block font-medium">Accueil</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary hover:translate-x-2 transition-all inline-block font-medium">Nos Services</a></li>
              <li><a href="#maisons" className="text-muted-foreground hover:text-primary hover:translate-x-2 transition-all inline-block font-medium">Maisons (Longue Durée)</a></li>
              <li><a href="#appartements" className="text-muted-foreground hover:text-primary hover:translate-x-2 transition-all inline-block font-medium">Appartements (Courte Durée)</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary hover:translate-x-2 transition-all inline-block font-medium">Nous Contacter</a></li>
            </ul>
          </div>

          <div className="sr-bottom" style={{ transitionDelay: '200ms' }}>
            <h4 className="text-xl font-bold text-white mb-6">Newsletter</h4>
            <p className="text-muted-foreground text-sm mb-4">Restez informé de nos nouvelles disponibilités.</p>
            <form className="relative mb-6">
              <input 
                type="email" 
                placeholder="Votre adresse email" 
                className="w-full bg-secondary/30 border border-border rounded-xl pl-4 pr-12 py-3.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary text-white rounded-lg flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Send size={14} />
              </button>
            </form>
            
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1" size={18} />
                <span className="text-muted-foreground text-sm">Bel-Air, Lubumbashi, RDC</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary" size={18} />
                <span className="text-muted-foreground text-sm">+243 000 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary" size={18} />
                <span className="text-muted-foreground text-sm">contact@lubaimmobilier.cd</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground font-medium">
            © {new Date().getFullYear()} Luba Immobilier. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground font-medium">
            <a href="#" className="hover:text-primary transition-colors">Conditions Générales</a>
            <a href="#" className="hover:text-primary transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
