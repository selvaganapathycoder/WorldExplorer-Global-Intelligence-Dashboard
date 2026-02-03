import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse space-y-16 max-w-7xl mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column Skeleton */}
        <div className="lg:col-span-5 xl:col-span-4 space-y-8">
          <div className="aspect-[4/3] bg-slate-900 border border-white/5 rounded-5xl"></div>
          <div className="h-10 bg-slate-900 border border-white/5 rounded-2xl w-3/4 mt-10"></div>
        </div>

        {/* Right Column Skeleton */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-12">
          <div className="space-y-6">
            <div className="h-20 bg-slate-900 border border-white/5 rounded-3xl w-full"></div>
            <div className="h-8 bg-slate-900 border border-white/5 rounded-2xl w-1/3"></div>
          </div>

          <div className="pro-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="h-24 bg-slate-900 border border-white/5 rounded-3xl"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
