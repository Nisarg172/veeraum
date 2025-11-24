import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ProjectPage() {
  const images = [
    "/gp-img9.jpg",
    "/gp-img3.jpg",
    "/gp-img4.jpg",
    "/gp-img2.jpg",
    "/gp-img7.jpg",
  ];

  const [slide, setSlide] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="min-h-screen w-full py-14 px-4 md:px-10 lg:px-20">
      {/* TITLE */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        Project Title
      </h1>

      {/* DESCRIPTION */}
      <p className="mt-4 text-center max-w-2xl mx-auto text-gray-600 text-sm md:text-base lg:text-lg">
        This is the full description of the project. It contains details,
        purpose, features, material info, installation process etc.
      </p>

      {/* SLIDER */}
      <div className="max-w-5xl mx-auto mt-10 relative">
        <img
          src={images[slide]}
          className="
            w-full 
            h-48 sm:h-64 md:h-80 lg:h-[450px] 
            object-cover rounded-xl shadow-xl 
            transition-all duration-500
          "
        />

        {/* PREV BUTTON */}
        <button
          onClick={() => setSlide((slide - 1 + images.length) % images.length)}
          className="
            absolute left-2 sm:left-4 
            top-1/2 -translate-y-1/2 
            p-1.5 sm:p-2 md:p-3 
            bg-white/80 rounded-full shadow
          "
        >
          <FiChevronLeft size={22} className="sm:hidden" />
          <FiChevronLeft size={26} className="hidden sm:block" />
        </button>

        {/* NEXT BUTTON */}
        <button
          onClick={() => setSlide((slide + 1) % images.length)}
          className="
            absolute right-2 sm:right-4 
            top-1/2 -translate-y-1/2 
            p-1.5 sm:p-2 md:p-3 
            bg-white/80 rounded-full shadow
          "
        >
          <FiChevronRight size={22} className="sm:hidden" />
          <FiChevronRight size={26} className="hidden sm:block" />
        </button>
      </div>

      {/* DOTS */}
      <div className="max-w-5xl mx-auto mt-4 flex gap-2 sm:gap-3 justify-center">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`
              w-2.5 h-2.5 sm:w-3 sm:h-3 
              rounded-full cursor-pointer transition-all duration-300 
              ${slide === idx ? "bg-yellow-400" : "bg-gray-300"}
            `}
            onClick={() => setSlide(idx)}
          />
        ))}
      </div>
    </section>
  );
}
