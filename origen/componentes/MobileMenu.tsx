import { useState } from "react";
import { Menu, X, Home, Tags, FileText, User, Github, Mail, Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const navigation = [
  { name: "Inicio", icon: Home, href: "/" },
  { name: "Etiquetas", icon: Tags, href: "/tags" },
  { name: "Contenido", icon: FileText, href: "/content" },
  { name: "Acerca de", icon: User, href: "/about" },
];

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "Email", icon: Mail, href: "mailto:contact@ciberblog.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
];

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-card border-r border-border flex flex-col z-40 transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Profile Section */}
        <div className="p-6 border-b border-border mt-16">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4">
              <img
                src={profileImage}
                alt="Zuk4r1"
                className="w-20 h-20 rounded-full object-cover ring-2 ring-primary"
              />
            </div>
            <h2 className="text-lg font-bold text-primary glow-text mb-2">Zuk4r1</h2>
            <p className="text-xs text-muted-foreground">
              Explorando la frontera digital de la ciberseguridad y la piratería ética
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-primary/10 text-primary border border-primary/30"
                        : "text-foreground hover:bg-muted hover:text-primary"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="p-4 border-t border-border">
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">CONECTAR</h3>
          <div className="flex gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-all duration-200"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            ©2025–2026 Zuk4r1
            <br />
            Derechos reservados
          </p>
        </div>
      </aside>
    </>
  );
};
