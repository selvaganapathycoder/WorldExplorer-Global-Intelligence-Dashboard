import React from "react";
import { Map, ExternalLink } from "lucide-react";

const MapButtons = ({ googleMaps, openStreetMaps }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <a
        href={googleMaps}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-900/20 active:scale-95 flex-1"
      >
        <Map size={18} />
        Open in Google Maps
      </a>
      <a
        href={openStreetMaps}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-white/5 rounded-xl font-semibold transition-all active:scale-95 flex-1"
      >
        <ExternalLink size={18} />
        OpenStreetMaps
      </a>
    </div>
  );
};

export default MapButtons;
