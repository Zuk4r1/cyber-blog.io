import { Home, Tags, FileText, User, Github, Mail, Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
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

export const BlogSidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-card border-r border-border flex-col">
      {/* Profile Section */}
      <div className="p-6 border-b border-border">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            <img
              src={profileImage}
              alt="Zuk4r1"
              className="w-24 h-24 rounded-full object-cover ring-2 ring-primary animate-glow-pulse"
            />
          </div>
          <h2 className="text-xl font-bold text-primary glow-text mb-2">Zuk4r1</h2>
          <p className="text-sm text-muted-foreground">
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
        <h3 className="text-sm font-medium text-foreground text-center mb-3">CONECTAR</h3>
        <div className="flex gap-3 justify-center">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-primary ring-2 ring-primary animate-glow-pulse transition-all duration-200 hover:scale-110"
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
  );
};
