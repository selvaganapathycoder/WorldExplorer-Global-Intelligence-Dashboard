import React from "react";
import { Search, X } from "lucide-react";

const SearchBar = ({ query, setQuery, onClear }) => {
  return (
    <div className="relative w-full max-w-2xl mx-auto group">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-400 transition-colors">
        <Search size={20} />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter nation name or capital city..."
        className="w-full bg-slate-900/40 border border-white/5 text-slate-100 pl-14 pr-14 py-5 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/30 backdrop-blur-2xl transition-all placeholder:text-slate-500/50 shadow-2xl font-medium text-lg"
      />
      {query && (
        <button
          onClick={onClear}
          className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
