"use client";

interface LogoProps {
  className?: string;
  size?: number;
  variant?: "full" | "mark";
}

export default function Logo({ className = "", size = 48, variant = "full" }: LogoProps) {
  if (variant === "mark") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Vanilla Antara mark"
      >
        {/* Outer botanical ring */}
        <circle cx="40" cy="40" r="37" stroke="#C5A059" strokeWidth="1" fill="none" />
        <circle cx="40" cy="40" r="33" stroke="#C5A059" strokeWidth="0.5" fill="none" strokeDasharray="2 3" />

        {/* Vanilla pod — center vertical */}
        <path
          d="M40 14 C40 14 38 22 38 32 C38 42 40 50 40 58 C40 50 42 42 42 32 C42 22 40 14 40 14Z"
          fill="#2A3B28"
          opacity="0.9"
        />
        {/* Pod tip */}
        <ellipse cx="40" cy="13" rx="2" ry="3" fill="#C5A059" />
        <ellipse cx="40" cy="59" rx="2" ry="2.5" fill="#C5A059" />

        {/* Left leaf */}
        <path
          d="M40 34 C36 30 28 28 24 30 C28 32 34 36 40 38Z"
          fill="#2A3B28"
          opacity="0.7"
        />
        {/* Right leaf */}
        <path
          d="M40 34 C44 30 52 28 56 30 C52 32 46 36 40 38Z"
          fill="#2A3B28"
          opacity="0.7"
        />

        {/* Small blossom dots */}
        <circle cx="32" cy="26" r="1.5" fill="#C5A059" />
        <circle cx="48" cy="26" r="1.5" fill="#C5A059" />
        <circle cx="29" cy="44" r="1" fill="#C5A059" opacity="0.6" />
        <circle cx="51" cy="44" r="1" fill="#C5A059" opacity="0.6" />
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="40" cy="40" r="37" stroke="#C5A059" strokeWidth="1" fill="none" />
        <circle cx="40" cy="40" r="33" stroke="#C5A059" strokeWidth="0.5" fill="none" strokeDasharray="2 3" />
        <path
          d="M40 14 C40 14 38 22 38 32 C38 42 40 50 40 58 C40 50 42 42 42 32 C42 22 40 14 40 14Z"
          fill="#2A3B28"
          opacity="0.9"
        />
        <ellipse cx="40" cy="13" rx="2" ry="3" fill="#C5A059" />
        <ellipse cx="40" cy="59" rx="2" ry="2.5" fill="#C5A059" />
        <path d="M40 34 C36 30 28 28 24 30 C28 32 34 36 40 38Z" fill="#2A3B28" opacity="0.7" />
        <path d="M40 34 C44 30 52 28 56 30 C52 32 46 36 40 38Z" fill="#2A3B28" opacity="0.7" />
        <circle cx="32" cy="26" r="1.5" fill="#C5A059" />
        <circle cx="48" cy="26" r="1.5" fill="#C5A059" />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className="font-serif text-forest tracking-[0.18em] uppercase"
          style={{ fontSize: size * 0.38, letterSpacing: "0.18em" }}
        >
          Vanilla
        </span>
        <span
          className="font-serif text-gold tracking-[0.32em] uppercase font-light"
          style={{ fontSize: size * 0.28, letterSpacing: "0.32em" }}
        >
          Antara
        </span>
      </div>
    </div>
  );
}
