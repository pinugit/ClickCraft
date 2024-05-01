"use client";

import Link from "next/link";

export function ButtonComponent({ children }: { children: React.ReactNode }) {
  return (
    <button className="">
      <Link href=""> {children}</Link>
    </button>
  );
}
