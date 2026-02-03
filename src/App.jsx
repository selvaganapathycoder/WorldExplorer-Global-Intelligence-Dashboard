import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  MapPin,
  Globe,
  Clock,
  Coins,
  Languages,
  ExternalLink,
  ChevronRight,
  LandPlot,
  ArrowLeft,
} from "lucide-react";
import SearchBar from "./components/SearchBar";
import StatCard from "./components/StatCard";
import MapButtons from "./components/MapButtons";
import BorderCountries from "./components/BorderCountries";
import LoadingSkeleton from "./components/LoadingSkeleton";
import WeatherWidget from "./components/WeatherWidget";
import EmbeddedMap from "./components/EmbeddedMap";

import { MOCK_COUNTRIES } from "./mockData";

const API_URL = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountries] = useState(MOCK_COUNTRIES);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        // Try to get cached data first
        const cachedData = localStorage.getItem("countries_cache");
        if (cachedData) {
          const parsedData = JSON.parse(cachedData);
          setCountries(parsedData);
          setLoading(false);
          // Still fetch in background to update cache (stale-while-revalidate)
        }

        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch countries");
        const data = await response.json();

        // Sort countries by name
        const sorted = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common),
        );

        setCountries(sorted);
        localStorage.setItem("countries_cache", JSON.stringify(sorted));
      } catch (err) {
        console.warn("API Error, using fallback data:", err.message);
        // Silently fallback to mock data
        setCountries((prev) => (prev.length === 0 ? MOCK_COUNTRIES : prev));
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  const countryMap = useMemo(() => {
    return countries.reduce((acc, c) => {
      acc[c.cca3] = c.name.common;
      return acc;
    }, {});
  }, [countries]);

  const filteredCountries = useMemo(() => {
    if (!searchQuery) return [];
    const searchLow = searchQuery.toLowerCase();
    return countries
      .filter(
        (c) =>
          c.name.common.toLowerCase().includes(searchLow) ||
          (c.capital && c.capital[0].toLowerCase().includes(searchLow)) ||
          (c.cca2 && c.cca2.toLowerCase().includes(searchLow)),
      )
      .slice(0, 8); // Limit suggestions
  }, [countries, searchQuery]);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSearchQuery("");
  };

  const handleBorderClick = (code) => {
    const country = countries.find((c) => c.cca3 === code);
    if (country) setSelectedCountry(country);
  };

  const formatPop = (num) => new Intl.NumberFormat().format(num);
  const formatArea = (num) => new Intl.NumberFormat().format(num);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <LoadingSkeleton />
      </div>
    );

  return (
    <div className="min-h-screen pb-20 px-4 md:px-8 bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden antialiased">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/5 blur-[150px] rounded-full animate-pulse" />
      </div>

      <header className="pt-20 pb-24 relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-gradient leading-none">
            WorldExplorer
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-medium text-balance opacity-80 underline-offset-8">
            The intelligent gateway to global insights and geographic analytics.
          </p>
        </motion.div>

        <div className="mt-16 max-w-2xl mx-auto relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative">
            <SearchBar
              query={searchQuery}
              setQuery={setSearchQuery}
              onClear={() => setSearchQuery("")}
            />
          </div>

          <AnimatePresence>
            {searchQuery && filteredCountries.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                className="absolute top-full left-0 right-0 mt-4 glass overflow-hidden rounded-3xl z-50 p-2 border border-white/10"
              >
                <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                  {filteredCountries.map((c) => (
                    <button
                      key={c.cca3}
                      onClick={() => handleCountrySelect(c)}
                      className="w-full flex items-center justify-between p-4 hover:bg-white/5 rounded-2xl transition-all text-left group/item"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-8 shrink-0 overflow-hidden rounded-lg shadow-lg">
                          <img
                            src={c.flags.svg}
                            className="w-full h-full object-cover transition-transform group-hover/item:scale-110"
                            alt=""
                          />
                        </div>
                        <div>
                          <p className="font-bold text-slate-100 group-hover/item:text-blue-400 transition-colors">
                            {c.name.common}
                          </p>
                          <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">
                            {c.capital?.[0] || "No Capital"}
                          </p>
                        </div>
                      </div>
                      <ChevronRight
                        size={18}
                        className="text-slate-700 group-hover/item:text-blue-400 group-hover/item:translate-x-1 transition-all"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <main className="max-w-7xl mx-auto relative z-10 px-4 mb-32">
        {!selectedCountry && !loading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 border border-white/10 shadow-premium rotate-12 hover:rotate-0 transition-all duration-700 group cursor-default">
              <Globe
                className="text-blue-500 group-hover:scale-110 transition-transform duration-500"
                size={40}
              />
            </div>
            <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
              Awaiting Selection
            </h2>
            <p className="text-slate-400 max-w-sm mx-auto text-lg leading-relaxed opacity-70">
              Select a nation above to initialize deep geographic intelligence
              and visual mapping.
            </p>
          </motion.div>
        )}

        {selectedCountry && (
          <div className="animate-slide-up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Left Column: Visual Assets */}
              <div className="lg:col-span-5 xl:col-span-4 space-y-8">
                <div className="relative group perspective-1000">
                  <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700"></div>
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: -5 }}
                    className="relative"
                  >
                    <img
                      src={selectedCountry.flags.svg}
                      alt={selectedCountry.name.common}
                      className="w-full aspect-[4/3] object-cover rounded-5xl shadow-premium ring-1 ring-white/10 border-4 border-white/5"
                    />
                    {selectedCountry.coatOfArms?.svg && (
                      <div className="absolute -bottom-8 -right-8 w-40 h-40 glass rounded-4xl p-8 flex items-center justify-center animate-fade-scale shadow-premium border-2 border-white/10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500">
                        <img
                          src={selectedCountry.coatOfArms.svg}
                          className="max-w-full max-h-full drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                          alt="Coat of Arms"
                        />
                      </div>
                    )}
                  </motion.div>
                </div>

                <div className="pt-6">
                  <WeatherWidget
                    capital={selectedCountry.capital?.[0]}
                    countryCode={selectedCountry.cca2}
                  />
                </div>

                <div className="pt-10">
                  <h3 className="text-white text-sm font-black mb-6 flex items-center gap-3 uppercase tracking-[0.3em] opacity-50">
                    <MapPin size={16} className="text-blue-500" />
                    Spatial Intelligence
                  </h3>
                  <MapButtons
                    googleMaps={selectedCountry.maps.googleMaps}
                    openStreetMaps={selectedCountry.maps.openStreetMaps}
                  />
                </div>
              </div>

              {/* Right Column: Data Engine */}
              <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
                <div className="mb-12">
                  <div className="flex flex-wrap items-end gap-5 mb-8">
                    <h2 className="text-5xl md:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-none wrap-anywhere">
                      {selectedCountry.name.common}
                    </h2>
                    <div className="px-5 py-2 bg-blue-600/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-2 shadow-inner">
                      {selectedCountry.cca2}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 flex-wrap">
                    <p className="text-2xl md:text-3xl text-slate-400 font-bold italic tracking-tight opacity-90">
                      {Object.values(selectedCountry.name.nativeName || {})[0]
                        ?.common || selectedCountry.name.common}
                    </p>
                    <div className="w-2 h-2 bg-blue-500/50 rounded-full mb-1"></div>
                    <p className="text-blue-500/70 font-black uppercase tracking-[0.4em] text-sm">
                      {selectedCountry.region}
                    </p>
                  </div>
                </div>

                <div className="pro-grid">
                  <StatCard
                    icon={MapPin}
                    label="Metropolis"
                    value={selectedCountry.capital?.[0] || "N/A"}
                  />
                  <StatCard
                    icon={Users}
                    label="Total Inhabitants"
                    value={formatPop(selectedCountry.population)}
                  />
                  <StatCard
                    icon={LandPlot}
                    label="Territorial Magnitude"
                    value={`${formatArea(selectedCountry.area)} km²`}
                  />
                  <StatCard
                    icon={Globe}
                    label="Zone Segment"
                    value={selectedCountry.subregion || "N/A"}
                  />
                  <StatCard
                    icon={Clock}
                    label="Temporal Reference"
                    value={selectedCountry.timezones?.[0] || "N/A"}
                    subValue={
                      selectedCountry.timezones?.length > 1
                        ? `+${selectedCountry.timezones.length - 1} additional`
                        : null
                    }
                  />
                  <StatCard
                    icon={Coins}
                    label="Economic Tender"
                    value={
                      Object.values(selectedCountry.currencies || {})[0]
                        ?.name || "N/A"
                    }
                    subValue={Object.keys(selectedCountry.currencies || {})[0]}
                  />
                  <StatCard
                    icon={Languages}
                    label="Linguistic Base"
                    value={
                      Object.values(selectedCountry.languages || {})[0] || "N/A"
                    }
                    subValue={Object.values(selectedCountry.languages || {})
                      .slice(1)
                      .join(", ")}
                  />
                  <StatCard
                    icon={ExternalLink}
                    label="Digital Namespace"
                    value={selectedCountry.tld?.[0] || "N/A"}
                  />
                </div>

                <div className="mt-12 pt-8 border-t border-white/5">
                  <BorderCountries
                    borders={selectedCountry.borders}
                    countryMap={countryMap}
                    onBorderClick={handleBorderClick}
                  />
                </div>
              </div>
            </div>

            {/* Full Width Map Reveal Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-20 relative"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px bg-linear-to-r from-blue-600/50 to-transparent flex-1"></div>
                <h3 className="text-white text-sm font-black uppercase tracking-[0.4em] opacity-40">
                  Interactive Geospatial Grid
                </h3>
                <div className="h-px bg-linear-to-l from-blue-600/50 to-transparent flex-1"></div>
              </div>

              <EmbeddedMap
                countryName={selectedCountry.name.common}
                latlng={selectedCountry.latlng}
              />
            </motion.div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
