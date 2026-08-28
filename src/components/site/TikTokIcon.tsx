interface TikTokIconProps {
  className?: string;
  strokeWidth?: number;
}

export function TikTokIcon({ className, strokeWidth = 1.2 }: TikTokIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 3c.4 2.6 2.2 4.3 5 4.5" />
    </svg>
  );
}
