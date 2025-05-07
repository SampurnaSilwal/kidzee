"use client";
import { Button } from "./ui/Button";
import Wrapper from "./wrapper";
import Navigation from "./navigation";
import MobileMenuToggle from "./MobileMenuToggle";
import Logo from "./logo";
import { useState } from "react";
import { LucideSquareArrowOutDownLeft, Scale3D } from "lucide-react";
import { Devonshire } from "next/font/google";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };


  return (
    <header className="py-5 border-b border-dark">
      <Wrapper>
        <div className="flex justify-between md:items-center flex-wrap items-end gap-6">
          <Logo />
          
          <Navigation />
          <MobileMenuToggle onToggle={toggleMenu}>
            
          </MobileMenuToggle>
          
        </div>
      </Wrapper>
    </header>
  );
}
