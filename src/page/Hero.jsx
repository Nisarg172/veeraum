import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Hero() {
  const images = [
    "home-img1.jpg",
    // "home-img2.jpeg",
    // "home-img3.jpeg",
    // "home-img4.jpeg",
    // "home-img5.jpeg",
  ];

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="w-full h-screen relative">

      {/* FULLSCREEN IMAGE */}
      <img
        src={images[slide]}
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* HERO CONTENT */}
      <div
        className="
          absolute inset-0 
          flex flex-col items-center justify-center 
          text-center px-4
        "
      >
        <div
          className="
            bg-white/70 backdrop-blur-md 
            px-6 py-4 sm:px-10 sm:py-6 
            rounded-xl shadow-lg 
            max-w-3xl
          "
        >
          <h1
            className="
              text-black 
              text-3xl sm:text-4xl md:text-6xl 
              font-bold flex justify-center items-center gap-3
            "
          >
            Welcome to
            <img
              src="logo.png"
              alt="Logo"
              className="h-12 sm:h-14 md:h-20 w-auto"
            />
          </h1>

          <p
            className="
              mt-4 sm:mt-6 
              text-black 
              text-base sm:text-lg md:text-2xl 
              leading-relaxed
            "
          >
            We supply premium facade materials combining innovation, durability
            & modern design.
          </p>
        </div>
      </div>

      {/* PREV BUTTON */}
      <button
        onClick={() => setSlide((slide - 1 + images.length) % images.length)}
        className="
          absolute left-3 md:left-4 
          top-1/2 -translate-y-1/2 
          p-1.5 md:p-2 
          bg-white/80 backdrop-blur 
          rounded-full shadow hover:bg-white
        "
      >
        <FiChevronLeft size={18} />
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={() => setSlide((slide + 1) % images.length)}
        className="
          absolute right-3 md:right-4 
          top-1/2 -translate-y-1/2 
          p-1.5 md:p-2 
          bg-white/80 backdrop-blur 
          rounded-full shadow hover:bg-white
        "
      >
        <FiChevronRight size={18} />
      </button>
    </section>
  );
}
