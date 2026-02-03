import React from "react";

const EmbeddedMap = ({ countryName }) => {
  if (!countryName) return null;

  // Use the country name for the search query in Google Maps Embed
  const encodedName = encodeURIComponent(countryName);

  // Fallback map if no API key is provided (Standard Google Maps search link)
  const fallbackSrc = `https://maps.google.com/maps?q=${encodedName}&t=&z=5&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="w-full h-[400px] rounded-4xl overflow-hidden border-2 border-white/10 shadow-premium relative group">
      <div className="absolute inset-0 bg-blue-600/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
      <iframe
        title={`Map of ${countryName}`}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src={fallbackSrc}
        className="grayscale-[0.2] contrast-[1.1] brightness-[0.9] invert-[0.9] hue-rotate-180 group-hover:invert-0 group-hover:hue-rotate-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:grayscale-0 transition-all duration-1000"
      ></iframe>

      <div className="absolute bottom-4 left-4 glass px-4 py-2 rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <span className="text-xs font-black uppercase tracking-widest text-white">
          Live Satellite Feed
        </span>
      </div>
    </div>
  );
};

export default EmbeddedMap;
