"use client";

import { useState } from "react";
import Logo from "./logo";
import Navigation from "./navigation";
import MobileMenuToggle from "./MobileMenuToggle";
import Wrapper from "./wrapper";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="py-4 border-b border-fuchsia-50 bg-yellow-50">
      
  <Wrapper>
    <div className="flex items-center justify-between flex-wrap gap-6 mr-36 ">
      {/* Logo on the left */}
      <Logo />

      {/* Navigation on the right */}
      <Navigation />
      
      {/* Mobile menu toggle */}
      <MobileMenuToggle onToggle={toggleMenu} />
    </div>
  </Wrapper>
</header>
  );  
}

