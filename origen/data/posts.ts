export interface Post {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
  content: string;
  slug: string;
}

export const posts: Post[] = [
  {
    id: "1",
    slug: "seguridad-contenedores-docker-kubernetes",
    title: "Seguridad de contenedores: protección de Docker y Kubernetes",
    date: "2025-01-15",
    readTime: "8 min",
    summary: "Análisis exhaustivo de las mejores prácticas para asegurar entornos de contenedores en producción. Exploramos técnicas de hardening, escaneo de vulnerabilidades y configuraciones de seguridad.",
    tags: ["DevSecOps", "Docker", "Kubernetes"],
    content: `
# Seguridad de contenedores: protección de Docker y Kubernetes

La seguridad de contenedores es fundamental en entornos de producción modernos. En este artículo, exploraremos las mejores prácticas para proteger Docker y Kubernetes.

## Hardening de contenedores

El hardening de contenedores implica reducir la superficie de ataque mediante:

- Uso de imágenes base mínimas
- Escaneo de vulnerabilidades con herramientas como Trivy
- Implementación de políticas de seguridad con Pod Security Standards
- Configuración de contextos de seguridad restrictivos

## Escaneo de vulnerabilidades

Es crucial implementar un pipeline de CI/CD que incluya:

1. Análisis estático de imágenes
2. Escaneo de dependencias
3. Verificación de firmas
4. Políticas de admisión

## Configuraciones de red

Kubernetes ofrece múltiples capas de seguridad de red:

- Network Policies para microsegmentación
- Service Mesh para cifrado mTLS
- Ingress Controllers con WAF integrado

## Conclusión

La seguridad de contenedores requiere un enfoque de defensa en profundidad, combinando múltiples capas de protección.
    `
  },
  {
    id: "2",
    slug: "sistemas-deteccion-amenazas-ia",
    title: "Sistemas de detección de amenazas impulsados por IA",
    date: "2025-01-12",
    readTime: "10 min",
    summary: "Descubre cómo el machine learning y la inteligencia artificial están revolucionando la detección de amenazas en tiempo real, mejorando la respuesta ante incidentes de seguridad.",
    tags: ["AI", "Machine Learning", "Threat Detection"],
    content: `
# Sistemas de detección de amenazas impulsados por IA

La inteligencia artificial está transformando la ciberseguridad, permitiendo detectar amenazas complejas que antes eran imposibles de identificar.

## Machine Learning en ciberseguridad

Los algoritmos de ML pueden:

- Analizar patrones de comportamiento anómalo
- Detectar malware de día cero
- Predecir vectores de ataque
- Automatizar respuestas ante incidentes

## Técnicas de detección

### Análisis de comportamiento

Los sistemas modernos utilizan:

- Análisis de series temporales
- Detección de anomalías con autoencoders
- Clasificación supervisada de amenazas
- Clustering de eventos similares

### Deep Learning

Las redes neuronales profundas permiten:

- Análisis de tráfico de red cifrado
- Detección de ataques APT
- Clasificación de malware polimórfico

## Desafíos

Los principales retos incluyen:

- Falsos positivos
- Adversarial machine learning
- Interpretabilidad de modelos
- Requisitos computacionales

## Futuro

La convergencia de IA y ciberseguridad continuará evolucionando, con sistemas cada vez más autónomos y efectivos.
    `
  },
  {
    id: "3",
    slug: "exploits-zero-day-aplicaciones-web",
    title: "Exploits de día cero en aplicaciones web modernas",
    date: "2025-01-10",
    readTime: "12 min",
    summary: "Exploración profunda de vulnerabilidades de día cero en frameworks web populares. Casos prácticos reales, técnicas de explotación y estrategias efectivas de mitigación.",
    tags: ["Aplicaciones web", "Zero-Day", "MITRE ATT&CK"],
    content: `
# Exploits de día cero en aplicaciones web modernas

Los exploits de día cero representan las amenazas más peligrosas en el panorama actual de ciberseguridad.

## ¿Qué son los exploits de día cero?

Son vulnerabilidades desconocidas para los fabricantes, lo que significa:

- No existe parche disponible
- Los sistemas de detección tradicionales no las identifican
- Alto valor en mercados clandestinos
- Impacto potencialmente devastador

## Vectores de ataque comunes

### Inyección de código

- SQL Injection evolucionado
- NoSQL Injection
- Template Injection
- SSTI (Server-Side Template Injection)

### Deserialización insegura

Frameworks afectados:

- Java (Apache Commons, Spring)
- Python (Pickle)
- PHP (unserialize)
- Node.js (node-serialize)

## Casos prácticos

### Log4Shell (CVE-2021-44228)

Una de las vulnerabilidades más críticas:

- Explotación mediante JNDI Lookup
- Ejecución remota de código
- Afectó a millones de aplicaciones Java

### Spring4Shell (CVE-2022-22965)

Vulnerabilidad en Spring Framework:

- RCE mediante Class Loader manipulation
- Bypass de protecciones existentes

## Estrategias de mitigación

1. **Defensa en profundidad**
   - WAF con reglas personalizadas
   - Runtime Application Self-Protection (RASP)
   - Análisis de comportamiento

2. **Bug Bounty Programs**
   - Incentivos para investigadores
   - Divulgación responsable

3. **Threat Intelligence**
   - Monitoreo de IoCs
   - Integración con frameworks MITRE ATT&CK

## Conclusión

La protección contra día cero requiere una estrategia proactiva combinando múltiples capas de defensa.
    `
  },
  {
    id: "4",
    slug: "analisis-forense-digital-herramientas",
    title: "Análisis forense digital: herramientas y metodologías",
    date: "2025-01-08",
    readTime: "9 min",
    summary: "Guía completa sobre análisis forense digital, incluyendo herramientas esenciales, cadena de custodia y técnicas avanzadas de investigación en ciberseguridad.",
    tags: ["Forense", "Investigación", "DFIR"],
    content: `
# Análisis forense digital: herramientas y metodologías

El análisis forense digital es crucial para investigar incidentes de seguridad y procesos legales.

## Principios fundamentales

### Cadena de custodia

- Preservación de evidencia
- Documentación exhaustiva
- Hashing criptográfico (SHA-256)
- Timestamping confiable

### Metodología

El proceso forense sigue estas fases:

1. **Identificación** - Localizar evidencia potencial
2. **Preservación** - Crear copias forenses
3. **Análisis** - Examinar datos
4. **Documentación** - Registrar hallazgos
5. **Presentación** - Reportar resultados

## Herramientas esenciales

### Adquisición

- FTK Imager
- dd / dcfldd
- EnCase
- Autopsy

### Análisis de memoria

- Volatility Framework
- Rekall
- WinDbg

### Análisis de red

- Wireshark
- tcpdump
- NetworkMiner
- Zeek (Bro)

### Timeline analysis

- Plaso / log2timeline
- Timesketch

## Técnicas avanzadas

### Anti-forensics

Técnicas que complican el análisis:

- Esteganografía
- Cifrado de datos
- Limpieza de logs
- Timestomping

### Análisis de malware

- Análisis estático vs dinámico
- Sandboxing (Cuckoo, Any.run)
- Ingeniería inversa
- YARA rules

## Casos de uso

### Respuesta a incidentes

1. Identificación del vector de compromiso
2. Determinación del alcance
3. Recolección de artefactos
4. Análisis de persistencia
5. Erradicación y recuperación

### Investigaciones legales

- E-discovery
- Análisis de dispositivos móviles
- Recuperación de datos borrados
- Análisis de redes sociales

## Conclusión

El análisis forense requiere metodología rigurosa, herramientas especializadas y conocimiento profundo de sistemas.
    `
  },
  {
    id: "5",
    slug: "red-team-vs-blue-team-estrategias",
    title: "Red Team vs Blue Team: estrategias ofensivas y defensivas",
    date: "2025-01-05",
    readTime: "11 min",
    summary: "Comparativa detallada entre operaciones de Red Team y Blue Team. Metodologías, herramientas y cómo construir un programa efectivo de seguridad ofensiva y defensiva.",
    tags: ["Red Team", "Blue Team", "Pentesting"],
    content: `
# Red Team vs Blue Team: estrategias ofensivas y defensivas

La dicotomía Red Team/Blue Team representa los dos enfoques complementarios de la ciberseguridad moderna.

## Red Team: Seguridad ofensiva

### Objetivos

- Simular adversarios reales
- Identificar vulnerabilidades antes que atacantes
- Probar controles de seguridad
- Mejorar detección y respuesta

### Metodologías

**Cyber Kill Chain**
1. Reconnaissance
2. Weaponization
3. Delivery
4. Exploitation
5. Installation
6. Command & Control
7. Actions on Objectives

**MITRE ATT&CK**
- Framework de tácticas y técnicas
- Mapeo de comportamiento adversario
- Base para purple teaming

### Herramientas Red Team

- **Reconocimiento**: Shodan, Amass, theHarvester
- **Explotación**: Metasploit, Cobalt Strike, Empire
- **Post-explotación**: Mimikatz, BloodHound, PowerShell Empire
- **Lateral movement**: PsExec, WMI, RDP
- **Exfiltración**: DNS tunneling, HTTPS C2

## Blue Team: Seguridad defensiva

### Objetivos

- Detectar amenazas en tiempo real
- Responder a incidentes
- Fortalecer defensas
- Reducir tiempo de permanencia del adversario

### Capacidades clave

**Detección**
- SIEM (Splunk, ELK, QRadar)
- EDR (CrowdStrike, SentinelOne)
- NDR (Darktrace, Vectra)
- UEBA (User and Entity Behavior Analytics)

**Análisis**
- Threat hunting proactivo
- Análisis de logs
- Correlación de eventos
- Indicadores de compromiso (IoCs)

### Herramientas Blue Team

- **Monitoreo**: Wazuh, OSSEC, Sysmon
- **Análisis**: Wireshark, Zeek, Suricata
- **Respuesta**: TheHive, MISP, Cortex
- **Forense**: Volatility, Autopsy, FTK

## Purple Team: El puente

Purple teaming combina lo mejor de ambos mundos:

- Colaboración continua
- Feedback loops
- Mejora iterativa
- Validación de controles

### Ejercicios Purple Team

1. **Atomic Red Team**
   - Tests atómicos de ATT&CK
   - Validación rápida de detecciones

2. **Breach and Attack Simulation (BAS)**
   - Automatización de ataques
   - Validación continua

3. **Adversary emulation**
   - Simulación de APTs específicos
   - Escenarios realistas

## Construcción de programa

### Madurez del programa

**Nivel 1**: Pentesting básico
**Nivel 2**: Red Team operativo
**Nivel 3**: Purple Team integrado
**Nivel 4**: Threat Intelligence driven

### Métricas

- Mean Time to Detect (MTTD)
- Mean Time to Respond (MTTR)
- Tasa de detección
- Cobertura de MITRE ATT&CK
- False positive rate

## Conclusión

Red Team y Blue Team no son adversarios, sino colaboradores en la mejora continua de la postura de seguridad organizacional.
    `
  },
  {
    id: "6",
    slug: "seguridad-apis-rest-autenticacion",
    title: "Seguridad en APIs REST: autenticación y autorización",
    date: "2025-01-03",
    readTime: "7 min",
    summary: "Mejores prácticas para implementar seguridad robusta en APIs REST. JWT, OAuth 2.0, rate limiting y protección contra ataques comunes como injection y IDOR.",
    tags: ["API Security", "OAuth", "JWT"],
    content: `
# Seguridad en APIs REST: autenticación y autorización

Las APIs REST son el backbone de las aplicaciones modernas, y su seguridad es crítica.

## Autenticación

### JWT (JSON Web Tokens)

Estructura de un JWT:
\`\`\`
header.payload.signature
\`\`\`

**Ventajas:**
- Stateless
- Escalable
- Incluye claims personalizados

**Consideraciones de seguridad:**
- Usar algoritmos fuertes (RS256 > HS256)
- Validar siempre el token
- Implementar token refresh
- Almacenamiento seguro en cliente

### OAuth 2.0

Flows principales:

1. **Authorization Code** - Para aplicaciones web
2. **Client Credentials** - Para APIs server-to-server
3. **Resource Owner Password** - Legacy (evitar)
4. **Implicit** - Deprecated para SPAs

**PKCE (Proof Key for Code Exchange)**
- Obligatorio para aplicaciones públicas
- Previene authorization code interception

## Autorización

### RBAC (Role-Based Access Control)

\`\`\`json
{
  "user_id": "123",
  "roles": ["admin", "editor"],
  "permissions": ["users:read", "users:write"]
}
\`\`\`

### ABAC (Attribute-Based Access Control)

Políticas más granulares basadas en:
- Atributos del usuario
- Atributos del recurso
- Contexto de la petición

## Protección contra ataques

### Injection

**SQL Injection**
- Usar prepared statements
- ORMs con validación
- Sanitización de inputs

**NoSQL Injection**
\`\`\`javascript
// Vulnerable
db.users.find({ username: req.body.username })

// Seguro
db.users.find({ username: String(req.body.username) })
\`\`\`

### IDOR (Insecure Direct Object Reference)

Siempre validar ownership:

\`\`\`javascript
// Vulnerable
GET /api/users/123/orders/456

// Correcto: validar que user 123 sea dueño de order 456
if (order.user_id !== authenticated_user.id) {
  return 403
}
\`\`\`

### Rate Limiting

Implementar throttling:

\`\`\`javascript
// Express + rate-limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // límite de requests
})

app.use('/api/', limiter)
\`\`\`

### CORS

Configuración segura:

\`\`\`javascript
app.use(cors({
  origin: ['https://trusted-domain.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))
\`\`\`

## Security Headers

Headers esenciales:

\`\`\`
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Strict-Transport-Security: max-age=31536000
\`\`\`

## Validación de entrada

Usar schemas de validación:

\`\`\`typescript
import { z } from 'zod'

const userSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(128),
  age: z.number().min(18).max(120)
})
\`\`\`

## Logging y Monitoreo

Registrar eventos importantes:

- Intentos de autenticación fallidos
- Cambios en permisos
- Accesos a recursos sensibles
- Anomalías en patrones de uso

**Nunca loguear:**
- Passwords
- Tokens
- Datos sensibles (PII)

## API Gateways

Beneficios de un API Gateway:

- Rate limiting centralizado
- Autenticación/autorización
- Logging unificado
- Transformación de requests
- Circuit breaker

## Conclusión

La seguridad en APIs requiere múltiples capas: autenticación robusta, autorización granular, validación estricta y monitoreo continuo.
    `
  }
];

// Utilidad para obtener posts
export const getAllPosts = (): Post[] => {
  return [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const getRecentPosts = (limit: number): Post[] => {
  return getAllPosts().slice(0, limit);
};

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};

export const getPostsByTag = (tag: string): Post[] => {
  return getAllPosts().filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
};

export const searchPosts = (query: string): Post[] => {
  const lowerQuery = query.toLowerCase().trim();
  if (lowerQuery.length < 3) return [];
  
  return getAllPosts().filter(post =>
    post.title.toLowerCase().includes(lowerQuery) ||
    post.summary.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};

export const getAllTags = (): { name: string; count: number }[] => {
  const tagCount = new Map<string, number>();
  
  posts.forEach(post => {
    post.tags.forEach(tag => {
      tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
    });
  });
  
  return Array.from(tagCount.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
};
