import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizes = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16",
  };

  return (
    <div className={cn("flex items-center gap-2", className)} data-testid="logo">
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(sizes[size], "w-auto")}
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0A2E36" />
            <stop offset="100%" stopColor="#00D9C0" />
          </linearGradient>
          <linearGradient id="leafGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D9C0" />
            <stop offset="100%" stopColor="#0A2E36" />
          </linearGradient>
        </defs>
        <path
          d="M24 4C18 4 13 9 12 16C11 23 14 30 20 34C21 35 22 36 24 38C26 36 27 35 28 34C34 30 37 23 36 16C35 9 30 4 24 4Z"
          fill="url(#logoGradient)"
        />
        <path
          d="M24 10C20 10 17 13 16.5 17C16 21 18 25 22 27.5C22.5 27.8 23 28.2 24 29C25 28.2 25.5 27.8 26 27.5C30 25 32 21 31.5 17C31 13 28 10 24 10Z"
          fill="white"
          fillOpacity="0.9"
        />
        <path
          d="M32 28C36 24 40 28 40 34C40 40 34 44 24 44C14 44 8 40 8 34C8 28 12 24 16 28"
          stroke="url(#leafGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="24" cy="18" r="4" fill="url(#logoGradient)" />
      </svg>
      <div className="flex flex-col">
        <span
          className={cn(
            "font-heading font-bold leading-none tracking-tight",
            size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-2xl"
          )}
          style={{
            background: "linear-gradient(135deg, #0A2E36 0%, #00D9C0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Essence
        </span>
        <span
          className={cn(
            "font-heading font-medium leading-none tracking-widest text-petrol-500 dark:text-emerald-400",
            size === "sm" ? "text-[10px]" : size === "md" ? "text-xs" : "text-sm"
          )}
        >
          CLINIC
        </span>
      </div>
    </div>
  );
}
