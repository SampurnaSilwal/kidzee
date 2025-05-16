"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" passHref>
      <div className="flex items-center cursor-pointer">
        <Image
          src="/newlogo.png"
          alt="Logo"
          width={250} 
          height={150}
          priority
        />
      </div>
    </Link>
  );
}
