"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SlidingArrowButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "white" | "outline" | "blue";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SlidingArrowButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
}: SlidingArrowButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-xs gap-2",
    md: "px-7 py-3.5 text-xs sm:text-sm gap-2.5",
    lg: "px-8 py-4 text-sm sm:text-base gap-3",
  };

  const variantClasses = {
    primary:
      "bg-[#000B33] text-white hover:bg-[#2F4E82] shadow-md hover:shadow-lg active:scale-[0.98]",
    white:
      "bg-white text-[#000B33] hover:bg-slate-50 border border-slate-200/80 shadow-sm hover:shadow-md active:scale-[0.98]",
    blue:
      "bg-[#2F4E82] text-white hover:bg-[#1C335A] shadow-md hover:shadow-lg active:scale-[0.98]",
    outline:
      "bg-transparent text-[#000B33] border border-slate-300 hover:border-[#2F4E82] hover:bg-[#F2F7FF] active:scale-[0.98]",
  };

  const baseClasses = `group inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer select-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const arrowIcon = (
    <span className="relative inline-flex items-center justify-center overflow-hidden w-4 h-4 shrink-0">
      {/* Existing arrow sliding OUT to the right */}
      <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-full text-current" />
      {/* Incoming arrow sliding IN from the left */}
      <ArrowRight className="w-4 h-4 absolute inset-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] -translate-x-full group-hover:translate-x-0 text-current" />
    </span>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        <span>{children}</span>
        {arrowIcon}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      <span>{children}</span>
      {arrowIcon}
    </button>
  );
}
