import React from "react";

export default function Details({ group, members, onClose }) {
  if (!group) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl mx-4 rounded-3xl p-8
         bg-gradient-to-br from-slate-50 to-slate-200 shadow-2xl max-h-[90vh] flex flex-col"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black/10 hover:bg-red-500
                     hover:text-white transition-all duration-300 text-xl font-bold"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-6 flex-shrink-0 ">
          {group.toUpperCase()} TEAM
        </h2>

        {/* Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto pr-2 flex-1">
          {members.map((m) => (
            <div
              key={m.id}
              className="flex flex-col rounded-2xl overflow-visible bg-white shadow-lg
                         transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              
              {/* IMAGE */}
              <div className="flex-shrink-0 p-5 rounded-t-2xl bg-gradient-to-br from-indigo-100 to-blue-100">
                <img
                  src={m.img || "/placeholder.png"}
                  alt={m.name}
                  className=" w-full aspect-square object-cover rounded-xl shadow-md"
                />
              </div>

              {/* DETAILS SECTION */}
              <div className="flex-1 p-5 rounded-b-2xl bg-slate-50 border-t flex flex-col justify-between">
                <h3 className="text-lg font-bold text-slate-900">{m.name}</h3>

                <p className="text-sm font-medium text-indigo-600">{m.role}</p>

                <div className="mt-3 text-sm text-slate-600 space-y-1">
                  <a href={`tel: ${m.phone}`}>📞 {m.phone}</a>
                  <hr />
                  <a href={`mailto: ${m.email}`}>✉️ {m.email}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
