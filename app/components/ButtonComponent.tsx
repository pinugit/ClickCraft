"use client";

import Link from "next/link";

export function ButtonComponent({ children }: { children: React.ReactNode }) {
  return (
    <Link href="" className="btn_primary">
      {children}
    </Link>
  );
}
