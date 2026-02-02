import React from "react";

export default function GroupCard({ title, subtitle, img, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer group relative w-[260px] rounded-2xl overflow-hidden
        bg-gradient-to-br from-[#e9ecee] to-[#c7cbcd]
        shadow-lg transition-all duration-700 ease-out
        hover:-translate-y-3 hover:shadow-2xl"
    >
      <div
        className="
          absolute inset-0 rounded-2xl opacity-0
          bg-gradient-to-r from-[#FF9933]/50 via-white/40 to-[#138808]/45
          blur-2xl transition-opacity duration-700
          group-hover:opacity-100"
      />

      <div className="relative z-10">
        <div className="flex justify-center items-center p-6">
          <img
            src={img}
            alt={title}
            className="
              h-40 object-contain
              transition-transform duration-700 ease-out
              group-hover:scale-110 group-hover:-rotate-3
            "
          />
        </div>

        <div
          className="
            bg-gradient-to-r from-[#ccbdaf] to-[#afe3e2]
            text-black text-center py-4 transition-all duration-700s
            group-hover:tracking-wider"
        >
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm font-semibold opacity-90">{subtitle}</p>
        </div>
      </div>

      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-r from-transparent via-white/40 to-transparent
          translate-x-[-120%] group-hover:translate-x-[120%]
          transition-transform duration-700 ease-out"
      />
    </div>
  );
}
