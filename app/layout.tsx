import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import { ContextProviderWrapper } from "@/lib/context/authContext";
import Footer from "@/components/layout/Footer";


const PoppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Auth App",
  description: "Authentication App using Next.js 13, Tailwind CSS, and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${PoppinsFont.variable}  antialiased`}
      >
        <ContextProviderWrapper>
          {children}
          <Footer />
        </ContextProviderWrapper>
      </body>
    </html>
  );
}
