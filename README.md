# Joe Do - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean, Apple-inspired design with smooth animations
- 🌙 **Dark/Light Mode**: Toggle between dark and light themes
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Built with Vite for lightning-fast development and builds
- 🎯 **Accessible**: Smooth scrolling navigation and keyboard-friendly interactions

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view your portfolio

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/     # React components
├── contexts/       # React contexts (Theme)
├── data/          # Resume data and content
├── images/        # Static images and assets
├── types/         # TypeScript type definitions
└── App.tsx        # Main application component
```

## Customization

1. **Update personal information** in `src/data/resume.ts`
2. **Replace profile picture** in `src/images/pfp.jpg`
3. **Update resume** in `src/images/Joe_s_Resume.pdf`
4. **Modify styling** in `src/index.css` and Tailwind config

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment

## License

This project is open source and available under the [MIT License](LICENSE).
