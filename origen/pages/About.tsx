import { BlogSidebar } from "@/components/BlogSidebar";
import { MobileMenu } from "@/components/MobileMenu";
import { Shield, Code, Terminal } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <BlogSidebar />
      <MobileMenu />
      
      <main className="md:ml-64 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary glow-text mb-8">Acerca de</h1>
          
          <div className="bg-card border border-border rounded-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-4">Sobre CIBERBLOG</h2>
            <p className="text-muted-foreground mb-4">
              CIBERBLOG es un espacio dedicado a explorar las fronteras de la ciberseguridad, 
              el hacking ético y las tecnologías emergentes. Aquí compartimos conocimientos técnicos, 
              análisis de vulnerabilidades y las mejores prácticas en seguridad informática.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Seguridad</h3>
              <p className="text-muted-foreground text-sm">
                Análisis profundo de vulnerabilidades y técnicas de protección
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
              <Code className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Desarrollo</h3>
              <p className="text-muted-foreground text-sm">
                Código seguro y mejores prácticas en desarrollo
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all">
              <Terminal className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Hacking Ético</h3>
              <p className="text-muted-foreground text-sm">
                Técnicas y metodologías de pentesting profesional
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
