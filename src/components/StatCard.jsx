import React from "react";

const StatCard = ({ icon: Icon, label, value, subValue }) => {
  return (
    <div className="glass p-4 rounded-3xl flex items-start gap-3 hover:bg-white/10 transition-all group border border-white/5 hover:border-white/20 h-full min-h-[90px]">
      <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all shrink-0 mt-0.5">
        <Icon size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-0.5 opacity-70">
          {label}
        </p>
        <p className="text-slate-100 text-base md:text-lg font-bold leading-tight wrap-anywhere">
          {value}
        </p>
        {subValue && (
          <p className="text-slate-500 text-[10px] mt-1 font-medium truncate opacity-60">
            {subValue}
          </p>
        )}
      </div>
    </div>
  );
};

export default StatCard;
