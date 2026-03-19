# Fitness Center - Next.js Application

A modern, responsive fitness center website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Responsive Design** - Mobile-first approach with breakpoints for all screen sizes
- 🌙 **Dark Mode** - Complete dark mode support with theme toggle
- 🔔 **Toast Notifications** - Beautiful animated notification system
- 📝 **Contact Form** - Form validation with error handling
- ⚡ **Performance Optimized** - Next.js 16+ with image optimization
- 🎯 **Modern UI** - Clean, professional interface with Tailwind CSS

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **Git** (optional, for cloning)

## Getting Started Locally

### 1. Clone or Download the Project

```bash
# If cloning from Git
git clone <repository-url>
cd fitness_center

```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
fitness_center/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── layout/             # Page sections
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/                 # Reusable components
│   │   │   ├── Buttons.tsx
│   │   │   ├── FormInput.tsx
│   │   │   ├── CustomNotification.tsx
│   │   │   └── NotificationContainer.tsx
│   │   ├── providers/          # Context providers
│   │   │   ├── ThemeProvider.tsx
│   │   │   └── NotificationProvider.tsx
│   │   └── examples/
│   ├── lib/
│   │   └── FormValidations.ts
│   └── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.ts
```

## Available Scripts

### Development

```bash
npm run dev
```

Runs the app in development mode with hot-reload.

### Build

```bash
npm run build
```

Builds the production-optimized application.

### Start Production

```bash
npm run start
```

Runs the built app in production mode.

### Lint

```bash
npm run lint
```

Runs ESLint to check for code issues.

## Technologies Used

- **Framework**: Next.js 16.1.7
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Icons**: Lucide React
- **Runtime**: React 19.2.3

## Key Features Explained

### 1. Theme Provider

- Automatic dark/light mode detection
- LocalStorage persistence
- Smooth theme transitions

### 2. Notification System

- Success, Error, and Warning notifications
- Auto-dismiss with customizable duration
- Stack multiple notifications

### 3. Contact Form

- Real-time validation
- Error messages
- Success notifications on submit

### 4. Responsive Layout

- Mobile-first design
- Tablet and desktop optimizations
- Maximum width constraint (1280px) on desktop

## Environment Setup

No environment variables are required for local development.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port 3000 Already in Use

```bash
# Windows - Kill process on port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- -p 3001
```

### Dependencies Issues

```bash
# Clear cache and reinstall
rm -r node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Clean build
npm run build -- --no-cache
```

## Customization

### Colors

Edit `src/app/globals.css` to customize the color scheme (currently using yellow and black).

### Fonts

Fonts are configured in `src/app/layout.tsx` using Geist font family.

### Components

All components are located in `src/components/` organized by type (layout, ui, providers).

## Performance Tips

- Images are automatically optimized by Next.js
- CSS is minified and bundled efficiently
- Consider using ISR (Incremental Static Regeneration) for future API integration

## Deployment

### Deploy on Other Platforms

```bash
# Build the project
npm run build

# This creates a .next folder with the optimized build
# Deploy the entire project to your hosting provider
```

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or contributions, please reach out or open an issue in the repository.

---

**Developed & Designed By Shakil Ridmika**
