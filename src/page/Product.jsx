import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import productsData from "../data/products.json";

const TrustedPartners = () => {
  const germanyPartners = [
    { name: "Omeras", src: "Omeras-img.svg", sub: "powered by HLE" },
    { name: "GEZE", src: "GEZE-img.png", sub: "GEZE" },
    { name: "ELKO", src: "ELKO-removebg-preview.png", sub: "iNELS" },
  ];

  const indiaPartners = [
    { name: "E3 Wood", src: "e3wood.jpeg", sub: "Eco Wood - WPC" },
    { name: "Aelius", src: "aelius-removebg-preview.png", sub: "Aelius" },
    { name: "H-Line", src: "HL.png", sub: "H-Line" },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <img
          src="/world-map.png"
          alt="background map"
          className="w-[120%] h-full object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-20 text-center flex flex-col items-center">
          <h2 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter mb-4">
            Trusted Partners
          </h2>
          <p className="text-slate-500 max-w-2xl text-sm font-medium leading-relaxed">
            We collaborate with industry-leading brands, grouping them by their
            origin to showcase our global partnerships and diverse expertise.
          </p>
        </header>

        <div className="flex flex-col items-center gap-20">
    
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full">
            <div className="flex flex-col items-center md:items-start gap-4 min-w-40">
              <div className="w-24 h-24 rounded-full  flex items-center justify-center  overflow-hidden">
                <img
                  src="Germany.png"
                  className="w-full h-full object-contain rounded-full transform scale-90"
                  alt="Made in Germany"
                />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-center md:text-left">
                Made in Germany
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
              {germanyPartners.map((logo, i) => (
                <div
                  key={i}
                  className="group flex flex-col items-center min-w-[120px]"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-8 md:h-10 w-auto grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 scale-95 group-hover:scale-105"
                  />
                  {logo.sub && (
                    <span className="text-[8px] mt-3 font-bold text-slate-300 uppercase tracking-widest text-center">
                      {logo.sub}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* GROUP: INDIA */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 w-full">
            <div className="flex flex-col items-center md:items-start gap-4 min-w-40">
             <div className="w-24 h-24 rounded-full  flex items-center justify-center  overflow-hidden">
                <img
                  src="ind.png"
                  className="w-full h-full object-contain rounded-full transform scale-90"
                  alt="Made in India"
                />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-center md:text-left">
                Made in India
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
              {indiaPartners.map((logo, i) => (
                <div
                  key={i}
                  className="group flex flex-col items-center min-w-[120px]"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-8 md:h-10 w-auto grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100 scale-95 group-hover:scale-105"
                  />
                  {logo.sub && (
                    <span className="text-[8px] mt-3 font-bold text-slate-300 uppercase tracking-widest text-center">
                      {logo.sub}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <>
      <section
        id="product"
        className="relative min-h-screen bg-white pt-32 pb-20 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-16 lg:mb-24 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#F6C553] font-black tracking-[0.2em] uppercase text-[10px] mb-3 block">
                Innovation & Precision
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight uppercase italic">
                Architectural <br />{" "}
                <span className="text-slate-400 font-light not-italic">
                  Excellence.
                </span>
              </h1>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-lg font-medium">
                Discover our curated collection of high-performance facade
                solutions designed to redefine the modern skyline.
              </p>
            </motion.div>
          </header>

          <div className="space-y-32">
            {products.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Showcase */}
                <div className="w-full lg:w-[55%] relative group">
                  <div className="relative aspect-16/10 bg-slate-100 rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-[#F6C553]/10">
                    <div className="absolute inset-0 bg-slate-200">
                      <img
                        src={`/${item.image}`}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <div
                    className={`absolute -bottom-6 hidden md:block w-28 h-28 bg-white shadow-xl rounded-2xl p-3 border border-slate-100 transition-all duration-500 group-hover:-translate-y-2 ${
                      index % 2 === 0 ? "-right-6" : "-left-6"
                    }`}
                  >
                    <div className="w-full h-full bg-slate-50 rounded-xl flex flex-col items-center justify-center text-center p-1">
                      <p className="text-[7px] uppercase tracking-widest text-[#F6C553] font-black mb-1">
                        Quality Grade
                      </p>
                      <p className="text-[9px] font-black text-slate-800 uppercase leading-none">
                        Premium
                        <br />
                        Standard
                      </p>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-[45%] space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">
                      {item.title}
                    </h3>
                    <div className="h-1 w-12 bg-[#F6C553] mb-6" />

                    <div className="space-y-4">
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold">
                        {item.description1}
                      </p>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed border-l-2 border-[#F6C553] pl-4 italic">
                        {item.description2}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to={`/product/${item.id}`} className="block sm:w-52">
                      <button className="w-full px-8 py-4 bg-slate-900 text-white rounded-full flex items-center justify-between group/btn overflow-hidden relative transition-all active:scale-95 text-[10px] uppercase tracking-[0.2em] font-black">
                        <div className="absolute inset-0 bg-[#F6C553] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                        <span className="relative z-10 group-hover/btn:text-black transition-colors">
                          View Specs
                        </span>
                        <ArrowUpRight
                          className="relative z-10 group-hover/btn:text-black group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-all"
                          size={16}
                        />
                      </button>
                    </Link>

                   
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TrustedPartners />
    </>
  );
}

export default Product;
