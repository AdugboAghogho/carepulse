"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5s
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-dark-300">
        {/* Logo */}
        <Image
          src="/assets/icons/logo-full.svg"
          height={180}
          width={180}
          alt="logo"
          className="h-16 w-auto md:h-24 mb-6"
        />

        {/* GIF */}
        <Image
          src="/assets/gifs/success.gif"
          height={400}
          width={400}
          alt="loading..."
          className="h-40 w-auto md:h-72"
        />
      </div>
    );
  }

  return <>{children}</>;
}
