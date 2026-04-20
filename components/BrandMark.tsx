interface BrandMarkProps {
  size?: number;
}

export function BrandMark({ size = 28 }: BrandMarkProps) {
  return (
    <svg viewBox="0 0 40 40" width={size} height={size} fill="none" aria-hidden="true">
      <path
        d="M20 3L35.5 14.3L29.6 32.5H10.4L4.5 14.3L20 3Z"
        stroke="#4F46E5"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="20" r="4" fill="#4F46E5" />
      <circle cx="20" cy="3" r="2.2" fill="#4F46E5" />
      <circle cx="35.5" cy="14.3" r="2.2" fill="#4F46E5" />
      <circle cx="29.6" cy="32.5" r="2.2" fill="#4F46E5" />
      <circle cx="10.4" cy="32.5" r="2.2" fill="#4F46E5" />
      <circle cx="4.5" cy="14.3" r="2.2" fill="#4F46E5" />
    </svg>
  );
}
