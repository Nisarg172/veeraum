import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Award, ShieldCheck, Zap } from "lucide-react";

export default function About() {
  const brandGold = "text-[#F6C553]";
  const brandGoldBg = "bg-[#F6C553]";
  const brandGoldBorder = "border-[#F6C553]";

  return (
    <section id="about" className="relative py-12 md:py-24 bg-white overflow-hidden">
      {/* Structural Watermark - Hidden on Mobile for clean UI */}
      <div className="absolute top-10 left-10 text-[10rem] font-black text-black/[0.02] leading-none select-none z-0 hidden lg:block">
        EST. 2026
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-0 bg-white shadow-2xl rounded-2xl md:rounded-3xl overflow-hidden border border-slate-100">
          
          {/* LEFT: Image Side - Responsive Aspect Ratio */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-[40%] bg-slate-900 relative aspect-square lg:aspect-auto min-h-[350px] group overflow-hidden"
          >
            <img
              src="founder.jpeg"
              alt="Sanjay Dankhara"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 right-6 z-20">
              <div className="flex items-center gap-3 mb-2">
                <div className={`h-[2px] w-6 ${brandGoldBg}`}></div>
                <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${brandGold}`}>Leadership</span>
              </div>
              <h3 className="text-white text-xl md:text-2xl font-black uppercase italic tracking-tight">
                Sanjay Dankhara
              </h3>
              <p className="text-white/60 text-[9px] md:text-[10px] uppercase tracking-widest mt-1">Founder & Managing Director</p>
            </div>
          </motion.div>

          {/* RIGHT: Content Side - Adjusted Padding for Mobile */}
          <div className="w-full lg:w-[60%] p-6 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Award size={16} className={brandGold} />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">The Visionary</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 leading-tight uppercase italic">
                Engineering <br className="hidden md:block" /> 
                <span className={brandGold}>Structural Aesthetics</span>
              </h2>

              <div className="space-y-5 md:space-y-6">
                <div className="relative">
                  <span className={`absolute -left-3 md:-left-4 -top-3 text-5xl md:text-6xl font-serif ${brandGold} opacity-10`}>“</span>
                  <p className="text-sm md:text-lg text-slate-700 font-medium leading-relaxed italic pl-4">
                    My objective is to help business owners find the right fit for their needs while I handle the technical complexities.
                  </p>
                </div>

                <p className="text-slate-500 leading-relaxed text-xs md:text-base">
                  With 15+ years of expertise in facade engineering, Sanjay leads Veeraum with a focus on high-performance solutions that blend durability with visual precision.
                </p>

                {/* Technical Mini-Grid - Stackable on small screens if needed */}
                <div className="grid grid-cols-2 gap-4 md:gap-6 py-6 border-y border-slate-50">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className={`p-2 rounded-lg bg-slate-50 shrink-0`}>
                      <ShieldCheck className={brandGold} size={18} />
                    </div>
                    <span className="text-[8px] md:text-[10px] font-bold text-slate-800 uppercase tracking-widest leading-tight">Structural Integrity</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className={`p-2 rounded-lg bg-slate-50 shrink-0`}>
                      <Zap className={brandGold} size={18} />
                    </div>
                    <span className="text-[8px] md:text-[10px] font-bold text-slate-800 uppercase tracking-widest leading-tight">Rapid Deployment</span>
                  </div>
                </div>

                {/* Contact Row - Wrapped for smaller devices */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-6 md:gap-8 pt-4">
                  <a href="tel:+919737003153" className="group flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-full group-hover:bg-[#F6C553]/10 group-hover:border-[#F6C553] transition-all">
                      <Phone size={16} className="text-slate-600 group-hover:text-[#F6C553]" />
                    </div>
                    <div>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Direct</p>
                      <p className="text-xs font-black text-slate-900">+91 97370 03153</p>
                    </div>
                  </a>

                  <a href="mailto:sanjay@veeraum.com" className="group flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-slate-50 border border-slate-100 rounded-full group-hover:bg-[#F6C553]/10 group-hover:border-[#F6C553] transition-all">
                      <Mail size={16} className="text-slate-600 group-hover:text-[#F6C553]" />
                    </div>
                    <div>
                      <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Email</p>
                      <p className="text-xs font-black text-slate-900">sanjay@veeraum.com</p>
                    </div>
                  </a>
                </div>

                <div className="pt-4 md:pt-6">
                  <a
                    href="https://www.linkedin.com/in/sanjay-dankhara-273b818b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] pb-1 border-b-2 ${brandGoldBorder} hover:text-[#F6C553] hover:tracking-[0.3em] transition-all`}
                  >
                    LinkedIn Profile <Linkedin size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}