# 🌿 Sabiduría Diaria - Daily Profound Phrases

Una aplicación web moderna que te presenta una reflexión profunda cada día del año. Conecta con la filosofía estoica y sabiduría universal a través de un diseño minimalista y contemplativo.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Características

- 📅 **365 frases profundas** - Una reflexión única para cada día del año
- 🧭 **Navegación fluida** - Explora frases de días pasados y presentes
- 📱 **Diseño responsivo** - Funciona perfectamente en mobile, tablet y desktop
- 🎨 **Geometría sagrada** - Patrón visual inspirado en diseño estoico
- 🌙 **Tema adaptativo** - Soporte automático para modo claro y oscuro
- ⚡ **Rendimiento optimizado** - Build ultra rápido con Next.js 16
- 🔤 **Tipografía elegante** - Fuentes Cormorant Garamond para lectura meditativa

## 🚀 Quick Start

### Requisitos previos
- Node.js 20+ (recomendado 20.9.0 o superior)
- npm, yarn, pnpm, o bun

### Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/tuusuario/daily-profound-phrases.git
cd daily-profound-phrases
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

4. **Abre en tu navegador**
```
http://localhost:3000
```

## 📖 Uso

La aplicación se carga con la frase del día actual. Puedes:

- **⬅️ ➡️ Navegar** entre días usando los botones de flecha
- **📅 Saltar a hoy** con el botón "Hoy"

## 🏗️ Estructura del Proyecto

```
.
├── app/                          # Aplicación Next.js
│   ├── layout.tsx               # Layout raíz
│   ├── page.tsx                 # Página principal
│   └── globals.css              # Estilos globales
├── components/                   # Componentes React
│   ├── stoic-background.tsx     # Fondo con geometría sagrada
│   ├── theme-provider.tsx       # Proveedor de tema
│   └── ui/                      # Componentes de UI reutilizables
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts            # Detectar dispositivo móvil
│   └── use-toast.ts             # Sistema de notificaciones
├── lib/                          # Utilidades y helpers
│   ├── quotes.ts                # Base de 365 frases profundas
│   └── utils.ts                 # Funciones auxiliares
├── public/                       # Archivos estáticos
├── package.json                 # Dependencias del proyecto
└── tsconfig.json                # Configuración de TypeScript
```

## 💻 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor en http://localhost:3000

# Producción
npm run build        # Construye para producción
npm start            # Inicia servidor en modo producción

# Validación
npm run lint         # Ejecuta ESLint
```

## 🛠️ Tecnologías Utilizadas

### Frontend Framework
- **Next.js 16** - React framework con SSR/SSG
- **React 19** - Librería UI moderna
- **TypeScript** - Type safety

### Estilos
- **Tailwind CSS 4** - Utility-first CSS
- **PostCSS** - Procesamiento de CSS
- **Lucide React** - Iconografía moderna

### Componentes
- **Radix UI** - Primitivos accesibles
- **React Hook Form** - Gestión de formularios
- **Zod** - Validación de esquemas

### Utilidades
- **date-fns** - Manipulación de fechas
- **clsx** - Utilidad para clases condicionales
- **cmdk** - Paleta de comandos
- **next-themes** - Gestor de temas

## 🎯 Características de la Base de Datos de Frases

La aplicación incluye **365 frases profundas** de filósofos, pensadores y autores reconocidos:

- **Sócrates, Platón, Aristóteles** - Filosofía clásica
- **Séneca, Epicteto, Marco Aurelio** - Estoicismo
- **Confucio, Lao Tzu** - Filosofía oriental
- **Descartes, Kant, Hegel** - Filosofía moderna
- **Schopenhauer, Nietzsche** - Filosofía contemporánea
- **Autores modernos** - Reflexiones actuales

Cada frase está seleccionada para promover la introspección y el crecimiento personal.

## 🎨 Personalización

### Cambiar colores del fondo
Edita `components/stoic-background.tsx` para modificar:
- Colores del gradiente de fondo
- Patrón geométrico
- Opacidad del patrón

### Agregar más frases
1. Abre `lib/quotes.ts`
2. Agrega nuevas frases al array `quotes`:
```typescript
{
  text: "Tu frase aquí",
  author: "Nombre del autor"
}
```
3. Asegúrate de que haya exactamente 365 frases

### Temas
La aplicación soporta cambio de tema mediante CSS variables. Usa `next-themes` para agregar más temas.

## 🌐 Despliegue

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

### Docker
```bash
docker build -t daily-profound-phrases .
docker run -p 3000:3000 daily-profound-phrases
```

### Otras plataformas
Compatible con cualquier plataforma que soporte Node.js 18+:
- Netlify
- Railway
- Render
- AWS Amplify
- DigitalOcean

## 📝 Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios significativos:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 💡 Ideas de Mejora

- [ ] Agregar animaciones suavizadas
- [ ] Sistema de favoritos con almacenamiento local
- [ ] Búsqueda por autor o palabra clave
- [ ] Exportar calendario de frases
- [ ] API REST para obtener frases
- [ ] Notificaciones diarias
- [ ] Multiidioma (español, inglés, francés, etc.)
- [ ] Análisis de sentimiento en frases
- [ ] Opción de compartir frases (Web Share API)

## 📧 Contacto

Si tienes preguntas o sugerencias, no dudes en abrir un issue o contactarme directamente.

---

*"La vida no examinada no vale la pena ser vivida." - Sócrates*
