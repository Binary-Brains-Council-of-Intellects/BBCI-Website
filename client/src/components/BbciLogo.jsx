import React from 'react';
import bbciLogoImg from '../assets/BBCI_Logo.jpeg';

/**
 * Official BBCI Logo Component
 * Renders the official BBCI Logo from assets
 */
export default function BbciLogo({ 
  size = "md", 
  showTagline = false, 
  showFullName = false, 
  inverted = false,
  className = "" 
}) {
  // Dimension presets
  const sizeClasses = {
    xs: "h-6 w-auto",
    sm: "h-8 w-auto",
    md: "h-11 w-auto",
    lg: "h-16 w-auto",
    xl: "h-24 w-auto",
    hero: "h-32 md:h-44 w-auto"
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;
  const textColor = inverted ? "text-white" : "text-bbci-indigo";
  const subTextColor = inverted ? "text-slate-300" : "text-slate-600";

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <img 
        src={bbciLogoImg}
        alt="Binary Brains Council of Intellects Official Logo"
        className={`${currentSize} object-contain flex-shrink-0 transition-transform duration-300 rounded`}
      />

      {/* Typography Label */}
      {(showFullName || showTagline) && (
        <div className="flex flex-col text-left">
          {showFullName && (
            <span className={`font-extrabold tracking-wider leading-none text-base md:text-lg uppercase ${textColor}`}>
              BBCI
            </span>
          )}
          {showFullName && (
            <span className={`text-[10px] md:text-xs font-semibold tracking-wider uppercase ${subTextColor}`}>
              Binary Brains Council of Intellects
            </span>
          )}
          {showTagline && (
            <span className="text-[11px] italic font-editorial text-bbci-teal tracking-wide mt-0.5">
              "A Global Council Connecting Intellects"
            </span>
          )}
        </div>
      )}
    </div>
  );
}

