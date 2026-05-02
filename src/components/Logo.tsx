export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 220 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="18,6 34,18 2,18" fill="#e01f3d"/>
      <rect x="6" y="18" width="24" height="18" rx="1" fill="#e01f3d"/>
      <rect x="14" y="26" width="8" height="10" rx="1" fill="#0b0a09"/>
      <rect x="8" y="21" width="6" height="6" rx="1" fill="#0b0a09" opacity="0.5"/>
      <rect x="25" y="11" width="4" height="8" rx="1" fill="#c0182e"/>
      <text x="42" y="29" fontFamily="Poppins, Arial, sans-serif" fontWeight="700" fontSize="20" fill="white" letterSpacing="0.5">LUBA</text>
      <rect x="109" y="10" width="2" height="28" rx="1" fill="#e01f3d" opacity="0.7"/>
      <text x="118" y="29" fontFamily="Poppins, Arial, sans-serif" fontWeight="400" fontSize="14" fill="#9d9895" letterSpacing="1.5">IMMOBILIER</text>
    </svg>
  );
}
