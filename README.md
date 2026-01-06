# E-Commerce Product Details App

A modern e-commerce application built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS**. Features product listings, product details pages with carousels, rating & reviews, and a responsive footer.

## 🚀 Features

- **Product Details Page**: Comprehensive product showcase with image carousel and specifications
- **Image Carousel**: Interactive Swiper carousel for product images with navigation controls
- **Rating & Reviews**: Display user ratings, reviews breakdown, and comment sections
- **Similar Products**: Related product carousel using Swiper
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Authentication Ready**: Built-in auth context for future authentication integration
- **Custom Components**: Reusable UI components (CustomContainer, CustomTitle, Landing, etc.)
- **Modern UI**: Clean, professional design with consistent color scheme and typography

## 📋 Tech Stack

- **Frontend Framework**: [Next.js 16.1.1](https://nextjs.org/)
- **UI Library**: React 19.2.3
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Icons**: [React Icons 5.5.0](https://react-icons.github.io/react-icons/)
- **Carousel**: [Swiper 12.0.3](https://swiperjs.com/)
- **HTTP Client**: [Axios 1.13.2](https://axios-http.com/)
- **Utilities**: [js-cookie 3.0.5](https://github.com/js-cookie/js-cookie)

## 📁 Project Structure

```
my-app/
├── app/                          # Next.js app directory
│   ├── auth/                     # Authentication pages
│   │   ├── login/
│   │   ├── register/
│   │   └── verify/
│   ├── product-details/          # Product details page
│   ├── layout.tsx                # Root layout with Footer
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/                   # Reusable React components
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Product.tsx           # Product details component
│   │   ├── Footer.tsx            # Footer component
│   │   └── ...
│   └── ui/
│       ├── CustomContainer.tsx   # Centered container wrapper
│       ├── CustomTitle.tsx       # Page title component
│       ├── Landing.tsx           # Landing hero section
│       ├── Rating.tsx            # Rating & reviews component
│       ├── Similar.tsx           # Similar products carousel
│       └── ...
├── lib/
│   ├── axios.ts                  # Axios instance configuration
│   └── context/
│       └── authContext.tsx       # Authentication context
├── types/
│   └── Types.ts
├── public/                       # Static assets
│   ├── images/
│   │   ├── footer.jpg
│   │   ├── produc1.png
│   │   └── ...
│   ├── logo-trans.svg
│   └── ...
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.js
└── README.md
```

## 🛠️ Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd my-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables** (if needed):
   Create a `.env.local` file in the root directory with any required API endpoints.

## 🚀 Getting Started

### Development Server

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
npm run build
npm start
```

## 📄 Available Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Build the production-ready application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🎨 Design Features

- **Color Scheme**: Warm earth tones (#BE968E primary, #3b2f29 secondary)
- **Typography**: Poppins font family (400 & 700 weights)
- **Responsive**: Mobile-first design with `md:` and `lg:` breakpoints
- **Components**: 
  - Product carousel with custom navigation buttons
  - Rating breakdown with visual bars
  - Comment section with user information
  - Responsive footer with different layouts for mobile/desktop

## 🔧 Key Components

### Product Component (`components/layout/Product.tsx`)
Main product details page with:
- Product images with carousel
- Thumbnail gallery
- Specifications (type, size, colors, quantity)
- Add to cart functionality
- Rating display

### Rating Component (`components/ui/Rating.tsx`)
Displays:
- Overall rating score
- Rating breakdown percentages
- User comments with timestamps
- Social follow buttons

### Similar Component (`components/ui/Similar.tsx`)
Carousel showcase of related products using Swiper with:
- Product images
- Pricing information
- Color options
- Navigation controls

### Footer Component (`components/layout/Footer.tsx`)
Responsive footer with:
- Logo and description
- Contact information
- Quick links
- Email subscription
- Social media icons

## 🔑 Environment Variables

Create a `.env.local` file if your app needs API configuration:

```
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the repository in Vercel
3. Vercel automatically detects Next.js and configures the build settings
4. Click "Deploy"

[Learn more about deploying Next.js on Vercel](https://nextjs.org/docs/app/building-your-application/deploying)

### Deploy on Other Platforms

- **Docker**: Create a Dockerfile for containerization
- **Self-hosted**: Run `npm run build` then `npm start` on your server
- **Netlify**: Use Next.js adapter for Netlify

## 📝 License

This project is private and for internal use.

## 👨‍💻 Author

Built with ❤️ for modern e-commerce experiences.
