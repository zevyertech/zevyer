# Zevyer Digital Growth Solutions

A modern Next.js application for Zevyer - 360° Digital Marketing, Custom Development & AI Solutions.

## Features

- 🚀 Next.js 16 with App Router
- 🎨 Modern UI with Tailwind CSS
- 📝 Contact form with backend API
- 📅 Booking system for consultations
- 📊 Growth plan request form
- 🔒 Type-safe with TypeScript
- ⚡ Optimized for performance

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. (Optional) Create a `.env.local` file for environment variables:
```bash
# Copy .env.example to .env.local if needed
# Most features work without environment variables
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
npm start
```

## API Routes

The application includes the following API endpoints:

- `POST /api/contact` - Contact form submission
- `POST /api/booking` - Consultation booking
- `POST /api/growth-plan` - Growth plan request

All API routes include:
- Input validation
- Error handling
- JSON responses

## Project Structure

```
├── app/
│   ├── api/          # API routes
│   ├── about/        # About page
│   ├── blog/         # Blog pages
│   ├── contact/      # Contact page
│   ├── services/     # Services pages
│   └── page.tsx      # Home page
├── components/       # React components
│   └── ui/           # UI components
├── lib/              # Utility functions
└── public/           # Static assets
```

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **Lucide React** - Icons
- **Framer Motion** - Animations

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Notes

- The API routes currently log submissions to the console. In production, you would integrate with:
  - Database (PostgreSQL, MongoDB, etc.)
  - Email service (SendGrid, Resend, etc.)
  - CRM system (HubSpot, Salesforce, etc.)
  - Calendar integration (Google Calendar, Calendly, etc.)

## License

Private - All rights reserved
