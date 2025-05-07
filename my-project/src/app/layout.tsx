import type { Metadata } from "next";
import { Unbounded, Open_Sans } from "next/font/google";
 
import Header from "@/components/header";
import "@/styles/globals.css";


const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded"
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans"
});

export const metadata: Metadata = {
  title: "My Project",
  description: "Description of my project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${unbounded.variable} ${openSans.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}