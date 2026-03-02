"use client";

import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" aria-label="Ir a la página de inicio">
      <Image
        src="/logo.png"
        alt="Logo de la empresa"
        width={150}
        height={60}
        priority
        className="cursor-pointer"
      />
    </Link>
  );
}
