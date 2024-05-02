"use client";

import Link from "next/link";

/**
 * A button component that takes in children and renders them inside
 * a link component.
 */
export function ButtonComponent({ children }: { children: React.ReactNode }) {
  // Render a link component with className 'btn_primary' and the children
  // passed into this component as props.
  return (
    <Link href="" className="btn_primary">
      {/* The children passed into this component. */}
      {children}
    </Link>
  );
}
