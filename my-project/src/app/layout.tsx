import type { Metadata } from "next";
import { Unbounded, Open_Sans } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer"; // ✅ Capitalized component import
import "@/styles/globals.css";

// ✅ Fonts
const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

// ✅ Metadata
export const metadata: Metadata = {
  title: "My Project",
  description: "Description of my project",
};

// ✅ Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} ${openSans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
