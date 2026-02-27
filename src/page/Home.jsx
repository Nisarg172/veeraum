import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "./Hero";
import About from "./About";
import Products from "./Product";
import { Mail, Phone, MapPin, ArrowUpRight, Linkedin, Instagram, Facebook } from "lucide-react";

export default function Home() {
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative w-full bg-white antialiased selection:bg-[#F6C553]/30">
  
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#F6C553] origin-left z-50"
        style={{ scaleX }}
      />

      <main>
        <Hero />
        
        <div className="relative h-20 bg-white">
            <div className="absolute inset-0 bg-slate-50 [clip-path:polygon(0_100%,100%_0,100%_100%)]"></div>
        </div>

        <About />
        <Products/>

        <div className="space-y-32">
        </div>
      </main>
      <footer className="bg-[#0f172a] text-white pt-20 pb-10 mt-20 relative overflow-hidden">
    
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/1 -skew-x-12 translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
            
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl font-black italic tracking-tighter uppercase">
                VEERAUM<span className="text-[#F6C553]">.</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Redefining modern skylines through high-performance facade engineering. 
                Our solutions combine technical precision with architectural beauty.
              </p>
              <div className="flex gap-4 pt-2">
                {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-[#F6C553] hover:border-[#F6C553] hover:text-black transition-all duration-300 group">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links (3 Cols) */}
            <div className="lg:col-span-3">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F6C553] mb-8">Navigation</h4>
              <ul className="space-y-4">
                {['Home', 'About', 'Product', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="group flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors">
                      <span className="w-0 group-hover:w-4 h-px bg-[#F6C553] mr-0 group-hover:mr-3 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info (4 Cols) */}
            <div className="lg:col-span-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F6C553] mb-8">Connect with us</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="mt-1 p-2 rounded-lg bg-slate-800 text-[#F6C553] group-hover:bg-[#F6C553] group-hover:text-black transition-colors">
                    <MapPin size={16} />
                  </div>
                  <p className="text-sm text-slate-400 group-hover:text-white transition-colors">
                    Ahmedabad, Gujarat, India
                  </p>
                </div>

                <a href="mailto:sanjay@veeraum.com" className="flex items-center gap-4 group">
                  <div className="p-2 rounded-lg bg-slate-800 text-[#F6C553] group-hover:bg-[#F6C553] group-hover:text-black transition-colors">
                    <Mail size={16} />
                  </div>
                  <p className="text-sm text-slate-400 group-hover:text-white transition-colors">sanjay@veeraum.com</p>
                </a>

                <a href="tel:+919737003153" className="flex items-center gap-4 group">
                  <div className="p-2 rounded-lg bg-slate-800 text-[#F6C553] group-hover:bg-[#F6C553] group-hover:text-black transition-colors">
                    <Phone size={16} />
                  </div>
                  <p className="text-sm text-slate-400 group-hover:text-white transition-colors">+91 97370 03153</p>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              © {new Date().getFullYear()} Veeraum Industry. All Rights Reserved.
            </p>
            
            <div className="flex gap-8">
              <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-[#F6C553] transition-colors">Privacy Policy</a>
              <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:text-[#F6C553] transition-colors">Terms</a>
            </div>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#F6C553]"
            >
              Back to top <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}