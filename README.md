# Flexa Digital - Next.js Version

This is the Next.js version of the Flexa Digital website, converted from the original React project.

## Features

- ✅ Next.js 15 with App Router
- ✅ TypeScript support
- ✅ Tailwind CSS for styling
- ✅ Shadcn/ui components
- ✅ Framer Motion animations
- ✅ React Query for data fetching
- ✅ Responsive design
- ✅ SEO optimized
- ✅ All original components converted

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # Shadcn/ui components
│   ├── Header.tsx     # Navigation header
│   ├── Footer.tsx     # Site footer
│   └── Hero.tsx       # Hero section
├── lib/               # Utility functions
├── hooks/             # Custom React hooks
├── assets/            # Static assets
└── config/            # Configuration files
```

## Key Changes from React Version

1. **Routing**: Converted from React Router to Next.js App Router
2. **Images**: Using Next.js Image component for optimization
3. **Links**: Using Next.js Link component
4. **Client Components**: Added "use client" directive where needed
5. **Providers**: Wrapped providers in client components
6. **Metadata**: Added proper SEO metadata in layout

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)