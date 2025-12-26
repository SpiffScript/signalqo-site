import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "contact" | "navy";
type Size = "sm" | "md" | "lg";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const base =
  "inline-flex items-center justify-center font-semibold rounded-none " +
  "transition-all duration-200 ease-out " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 " +
  "disabled:opacity-50 disabled:cursor-not-allowed " +
  "active:translate-y-[1px]";

const variants: Record<Variant, string> = {
  primary:
    "bg-slate-800/90 text-white border border-white/20 " +
    "shadow-[0_10px_30px_rgba(0,0,0,0.6)] " +
    "hover:bg-slate-800 hover:border-white/30 " +
    "hover:shadow-[0_14px_38px_rgba(0,0,0,0.7)] " +
    "hover:scale-[1.03]",

  secondary:
    "bg-transparent text-slate-800/90 border border-white/15 " +
    "shadow-[0_8px_24px_rgba(0,0,0,0.45)] " +
    "hover:text-white hover:border-white/25 " +
    "hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)] " +
    "hover:scale-[1.03]",

  contact:
    "bg-slate-900/95 text-white border border-blue-400/40 " +
    "shadow-[0_12px_36px_rgba(0,0,0,0.65)] " +
    "hover:border-blue-400/70 " +
    "hover:shadow-[0_18px_44px_rgba(0,0,0,0.75)] " +
    "hover:scale-[1.04]",

  navy:
    "bg-blue-600 text-white border border-blue-500 " +
    "shadow-[0_10px_30px_rgba(0,0,0,0.55)] " +
    "hover:bg-blue-500 hover:border-blue-400 " +
    "hover:shadow-[0_16px_40px_rgba(0,0,0,0.7)] " +
    "hover:scale-[1.04]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-sm",
};

export function CtaButton({
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  ...props
}: Props) {
  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
