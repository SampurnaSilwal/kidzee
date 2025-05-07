// components/Logo.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" passHref>
      <div className="flex items-center cursor-pointer ml-186">
        <Image
          src="/newlogo.png" // Make sure the logo is inside your public/ directory
          alt="Logo"
          width={150}
          height={50}
          priority
        />
      </div>
    </Link>
  );
}
