# E-Commerce Product Details & Authentication App

A modern frontend e-commerce application built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.  
The project focuses on implementing a complete **authentication flow** alongside a **product details page** based on the provided task and UI design.

## 🚀 Features

- **Full authentication flow** (Register, Login, Account Verification)
- **Email verification** using a verification code
- **Token-based authentication** handling and user session management
- **Protected profile page** acting as a simple dashboard
- **Product details page** implementation
- **Similar products carousel** using Swiper
- **Pixel-perfect UI** implementation from Figma design
- **Fully responsive layout** (desktop & mobile)
- **Reusable and clean component structure**
- **Smooth animations and transitions** using Framer Motion
- **Consistent layout structure** using `CustomContainer`

### 🔐 Authentication

- **Register Page**: Create a new account using email, password, and mobile number
- **Email Verification**: Account activation using a numeric verification code
- **Post-Verification Redirect**: Automatically redirect user to profile page after activation
- **Login Page**: Standard login flow for returning users
- **Auth Context**: Centralized authentication state using React Context API
- **Token Storage**: User data and token stored using cookies

### 🛍️ Product Details
- **Product Details Page**: Full product details view based on Figma UI
- **Image Carousel**: Swiper slider with custom navigation buttons
- **Ratings & Reviews**: Ratings summary and reviews UI
- **Similar Products**: Related products carousel
- **Reusable Components**:
  - `CustomTitle` for repeated titles
  - `CustomContainer` for layout consistency

### 🎨 UI & UX
- Responsive, mobile-first design
- Clean and modern UI using Tailwind CSS
- Footer separated logically from unrelated pages
- Consistent colors and typography

## 📋 Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Carousel**: Swiper
- **Icons**: React Icons
- **Cookies**: js-cookie

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

## 🎯 Project Purpose

This project was developed as a **technical task**, focusing on:

- Proper authentication flow
- Clean UI implementation based on Figma design
- Code organization and component reusability
- Real-world frontend architecture using Next.js

## 📝 License

This project is for technical evaluation purposes only.
