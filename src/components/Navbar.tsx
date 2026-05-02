import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Maisons", href: "#maisons" },
    { name: "Appartements", href: "#appartements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'nav-glass py-4 shadow-lg shadow-black/40 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#home" className="z-50 group" data-testid="link-logo">
          <Logo className="h-10 w-auto group-hover:scale-105 transition-transform duration-300" />
        </a>

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-sm font-semibold tracking-wider uppercase text-foreground/80 hover:text-primary transition-colors duration-300 relative group" data-testid={`link-nav-${link.name}`}>
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(224,31,61,0.5)]" />
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="bg-primary text-white text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(224,31,61,0.4)] hover:-translate-y-1 transition-all duration-300" data-testid="button-contact-nav">
            Nous contacter
          </a>
        </div>

        <div className="flex md:hidden items-center gap-3 z-50">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2 hover:text-primary transition-colors" data-testid="button-mobile-menu">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={`fixed inset-0 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 z-40 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
          <Logo className="h-14 w-auto mb-16" />
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => (
              <li key={link.name} style={{ transitionDelay: `${i * 100}ms` }} className={`transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <a href={link.href} className="text-3xl font-black text-white hover:text-primary transition-colors uppercase tracking-wider" onClick={() => setIsMenuOpen(false)} data-testid={`link-mobile-${link.name}`}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className={`mt-12 bg-primary text-white font-bold uppercase tracking-wider px-10 py-4 rounded-full hover:bg-primary/90 shadow-[0_0_20px_rgba(224,31,61,0.3)] transition-all duration-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '500ms' }} onClick={() => setIsMenuOpen(false)}>
            Nous contacter
          </a>
        </div>
      </div>
    </nav>
  );
}
