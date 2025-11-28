# Portfolio v2

A modern, responsive portfolio website for freelance full-stack developers. Built with React, TypeScript, and Tailwind CSS. Features automatic theme detection, project showcase, and a clean, professional design.

## ✨ Features

- **Modern Design**: Clean, minimalist design with glassmorphism effects
- **Theme System**: Dark, light, and system modes with automatic OS preference detection
- **Responsive**: Fully responsive design that works on all devices
- **Project Showcase**: Display projects with status badges, tags, and descriptions
- **Tech Stack Section**: Comprehensive display of technologies and tools
- **Smooth Animations**: Subtle hover effects and transitions
- **Performance**: Optimized with Vite, code splitting, and lazy loading
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **React 19** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool & Dev Server
- **Tailwind CSS** - Utility-first CSS Framework
- **Lucide React** - Icon Library

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🎨 Customization

### Update Your Information

1. **Personal Info**: Edit `src/App.tsx` to update:
   - Name and tagline (Hero section)
   - Email address (Contact section)
   - Social media links (GitHub, LinkedIn, etc.)
   - Bio and capabilities (About section)

2. **Projects**: Edit `src/data/projects.ts` to:
   - Add/remove projects
   - Update project descriptions
   - Modify tags and categories
   - Add project URLs

3. **Tech Stack**: Edit `src/App.tsx` (Tech Stack section) to:
   - Update technology categories
   - Add/remove technologies
   - Modify tech stack descriptions

### Theme Customization

The portfolio supports three theme modes:
- **Dark Mode**: Dark background with light text
- **Light Mode**: Light background with dark text
- **System Mode**: Automatically follows OS preference

Theme preference is saved in `localStorage` and persists across sessions.

### Styling

The design uses Tailwind CSS with a custom color scheme:
- **Primary**: Indigo (`indigo-300`, `indigo-400`, `indigo-500`)
- **Accent**: Emerald (`emerald-300`, `emerald-400`, `emerald-500`)
- **Background**: Slate (light: `white`, `slate-50` / dark: `slate-950`, `slate-900`)
- **Text**: Slate (light: `slate-900`, `slate-700` / dark: `slate-50`, `slate-300`)

## 📁 Project Structure

```
portfolio-v2/
├── public/
│   └── favicon.svg          # Web developer favicon
├── src/
│   ├── data/
│   │   └── projects.ts      # Project data and interface
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles and Tailwind imports
├── index.html               # HTML template
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── vercel.json              # Vercel deployment configuration
└── package.json             # Dependencies and scripts
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect the Vite configuration
4. Deploy!

The `vercel.json` file is already configured with:
- Build command: `pnpm run build`
- Output directory: `dist`
- SPA rewrites for client-side routing

### Other Platforms

The portfolio can be deployed to any static hosting service:

```bash
# Build the project
pnpm run build

# Deploy the dist folder to your hosting provider
```

**Supported platforms:**
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- Any static hosting service

## 🎯 Sections

The portfolio includes the following sections:

1. **Hero** - Introduction, tagline, and call-to-action
2. **Work** - Selected projects showcase
3. **Technologies** - Tech stack and tools
4. **About** - Personal story and capabilities
5. **Contact** - Email and social links
6. **Footer** - Copyright and credits

## 🔧 Development

### Prerequisites

- Node.js 18+ (20+ recommended)
- pnpm (or npm/yarn)

### Available Scripts

- `pnpm dev` - Start development server (http://localhost:5173)
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally
- `pnpm lint` - Run ESLint

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 🙏 Acknowledgments

- Design inspired by modern portfolio layouts
- Icons from [Lucide](https://lucide.dev/)
- Font from [Inter](https://rsms.me/inter/)
- Built with [Vite](https://vitejs.dev/) and [React](https://react.dev/)

---

Built with ❤️ for showcasing freelance work and projects.
