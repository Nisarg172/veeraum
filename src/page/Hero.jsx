import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const images = ["home-img1.jpg"];

  const [slide, setSlide] = useState(0);
  const brandGold = "text-[#F6C553]";
  const brandGoldBg = "bg-[#F6C553]";

  useEffect(() => {
    if (images.length > 1) {
      const timer = setInterval(() => {
        setSlide((prev) => (prev + 1) % images.length);
      }, 5000); // Increased time for better UX
      return () => clearInterval(timer);
    }
  }, [images.length]);

  return (
    <section
      id="hero"
      className="w-full h-screen relative bg-slate-900 overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={images[slide]}
            alt="Veeraum Project"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* HERO CONTENT */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl pt-20 md:pt-0"
        >
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <div className={`h-0.5 w-8 md:w-12 ${brandGoldBg}`} />
            <span
              className={`text-[10px] md:text-sm font-black uppercase tracking-[0.3em] md:tracking-[0.5em] ${brandGold}`}
            >
              Engineering Excellence
            </span>
          </div>

          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-black uppercase italic leading-none md:leading-[0.9] tracking-tighter">
            Innovating <br />
            <span className={brandGold}>Facades</span>
          </h1>

          <p className="mt-6 md:mt-8 text-slate-300 text-base md:text-xl max-w-sm md:max-w-xl leading-relaxed font-medium">
            We supply premium facade materials combining
            <span className="text-white italic"> structural innovation</span>,
            extreme durability & modern aesthetic design.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
            <button
              className={`group relative overflow-hidden ${brandGoldBg} text-black px-8 py-4 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest shadow-2xl w-full sm:w-auto text-center`}
            >
              <span className="absolute inset-0 bg-white translate-x-full translate-y-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
              <span className="relative z-10">Explore Projects</span>
            </button>

            <button className="group relative overflow-hidden border border-white/30 backdrop-blur-md text-white px-8 py-4 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest transition-colors duration-300 hover:text-black w-full sm:w-auto text-center">
              <span className="absolute inset-0 bg-[#F6C553] translate-x-full translate-y-full transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0" />
              <span className="relative z-10">Our Materials</span>
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-10 hidden md:block opacity-20 hover:opacity-100 transition-opacity">
        <img
          src="/logo.png"
          alt="Veeraum"
          className="h-20 w-auto brightness-0 invert"
        />
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-10 left-6 z-20 flex gap-4">
          <button
            onClick={() =>
              setSlide((slide - 1 + images.length) % images.length)
            }
            className="p-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={() => setSlide((slide + 1) % images.length)}
            className="p-3 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      )}

      {/* SIDE SCROLL INDICATOR */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <span className="rotate-90 text-[10px] font-bold uppercase tracking-[0.5em] text-white/40 mb-10">
          SCROLL
        </span>
        <div className="w-px h-20 bg-white/20 relative">
          <motion.div
            animate={{ y: [0, 80, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className={`absolute top-0 left-0 w-full h-1/3 ${brandGoldBg}`}
          />
        </div>
      </div>
    </section>
  );
}
