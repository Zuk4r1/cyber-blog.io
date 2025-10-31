# Sistema de Posts - CIBERBLOG

## Estructura de datos

Los posts del blog están centralizados en `posts.ts` para facilitar la gestión y el tipado TypeScript.

### Formato de un Post

```typescript
{
  id: string;              // Identificador único
  slug: string;            // URL-friendly identifier
  title: string;           // Título de la publicación
  date: string;            // Formato: YYYY-MM-DD
  readTime: string;        // Ejemplo: "8 min"
  summary: string;         // Resumen corto para cards
  tags: string[];          // Array de etiquetas
  content: string;         // Contenido completo en Markdown
}
```

## Añadir nueva publicación

1. Abre `src/data/posts.ts`
2. Añade un nuevo objeto al array `posts`:

```typescript
{
  id: "7",
  slug: "mi-nuevo-articulo",
  title: "Mi Nuevo Artículo sobre Seguridad",
  date: "2025-01-20",
  readTime: "10 min",
  summary: "Descripción breve del artículo...",
  tags: ["Seguridad", "Web"],
  content: `
# Mi Nuevo Artículo sobre Seguridad

Contenido en Markdown aquí...

## Secciones

- Punto 1
- Punto 2

\`\`\`javascript
// Código de ejemplo
const ejemplo = "Hola mundo";
\`\`\`
  `
}
```

3. Las publicaciones se ordenan automáticamente por fecha (más recientes primero)
4. Los tags se actualizan automáticamente en la página de Etiquetas

## Características de Seguridad

### Validación de inputs
- Todos los slugs son validados contra inyecciones
- Las búsquedas son sanitizadas automáticamente
- Rate limiting en búsquedas para prevenir abuse

### Prevención XSS
- Sanitización automática de HTML
- ReactMarkdown renderiza de forma segura el contenido
- Sin uso de `dangerouslySetInnerHTML`

### Headers de seguridad
- Content-Security-Policy
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy

## Funcionalidades

### Búsqueda
- Autosugerencias después de 3 caracteres
- Búsqueda por título, resumen o tags
- Rate limiting integrado

### Filtrado por etiquetas
- Click en cualquier tag para filtrar
- Animación de carga
- URL actualizable para compartir filtros

### Páginas individuales
- Cada post tiene su propia URL: `/post/slug-del-articulo`
- Renderizado completo del contenido Markdown
- Tags clickeables que llevan a filtros

### SEO
- Meta tags optimizados
- OpenGraph para redes sociales
- Estructura semántica HTML5
- URLs amigables
