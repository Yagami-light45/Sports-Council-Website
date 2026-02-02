import { useState } from "react";

export default function Members({ title, Subtitle, img, email, phone }) {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      {/* Card */}
      <div className="flex justify-items-center gap-[2.5rem] m-[3rem]">
        <div
          className="w-[30rem] h-full bg-white rounded-xl shadow-md
                      flex flex-col items-center p-4 gap-3
                      transition-transform hover:-translate-y-2 hover:shadow-xl"
        >
          {/* Image box */}
          <div
            className="w-[100%] h-80 bg-gray-100 rounded-lg 
                        flex items-center justify-center overflow-hidden"
          >
            <img
              src={img}
              alt={title}
              onClick={() => setShowImage(true)}
              className="h-full w-full object-cover cursor-pointer
                       transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Text */}
          <h3 className="text-lg font-bold mt-3">{title}</h3>
          <p className="text-sm text-gray-500">{Subtitle}</p>

          <a href={`mailto:${email}`} className="mt-3 text-sm text-blue-600 space-y-1">
            ✉️ {email}
          </a>
        
          <a href={`tel: ${phone}`} className="mt-3 text-sm text-blue-600 space-y-1">
            📞 {phone}
          </a>
        </div>

        {/* Image Modal */}
        {showImage && (
          <div
            onClick={() => setShowImage(false)}
            className="fixed inset-0 z-50 flex items-center justify-center
                     bg-black/70 backdrop-blur-sm"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-xl p-4
                       max-w-[90%] max-h-[90%]"
            >
              <button
                onClick={() => setShowImage(false)}
                className="absolute top-2 right-3 text-2xl font-bold"
              >
                ✕
              </button>

              <img
                src={img}
                alt={title}
                className="max-h-[80vh] max-w-full rounded-lg object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
