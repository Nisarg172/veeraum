import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
    setOpen(false); 
  }, [location]);

  const navItems = [
    { label: "Home", to: "hero", type: "section" },
    { label: "About", to: "about", type: "section" },
    { label: "Products", to: "product", type: "section" },
    { label: "Contact", to: "/contact", type: "route" },
  ];

  const handleNavClick = (item) => {
    setOpen(false);
    if (item.type === "section") {
      if (location.pathname !== "/") {
        navigate(`/#${item.to}`);
      } else {
        const el = document.getElementById(item.to);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(item.to);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        
        {/* LOGO */}
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => navigate("/")}
        >
          <img
            src="/logo.png"
            alt="Veeraum Logo"
            className={`h-10 md:h-12 w-auto transition-all duration-500 ${
              !scrolled && "brightness-0 invert" 
            }`}
          />
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex gap-10">
            {navItems.map((item, i) => (
              <li
                key={i}
                onClick={() => handleNavClick(item)}
                className={`relative cursor-pointer text-[12px] font-bold uppercase tracking-[0.2em] transition-all duration-300 group ${
                  scrolled ? "text-slate-800" : "text-white"
                } hover:text-[#F6C553]`}
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#F6C553] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <button 
            onClick={() => navigate("/contact")}
            className={`group relative px-8 py-3 rounded-full overflow-hidden transition-all duration-300 active:scale-95 border-2 ${
              scrolled 
              ? "bg-slate-900 border-slate-900 text-white" 
              : "bg-white/10 border-white/20 text-white backdrop-blur-sm"
            }`}
          >
            <div className="absolute inset-0 bg-[#F6C553] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className="relative z-10 flex items-center gap-2">
              <span className="text-[11px] font-black uppercase tracking-widest group-hover:text-black transition-colors">Start Project</span>
              <ArrowRight size={14} className="group-hover:text-black group-hover:translate-x-1 transition-all" />
            </div>
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <div 
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-slate-900 transition-all duration-500 ease-in-out ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col h-full p-8 pt-24 gap-8">
          
            <X 
              size={32} 
              className="absolute top-8 right-8 text-white" 
              onClick={() => setOpen(false)} 
            />
            
          {navItems.map((item, i) => (
            <div
              key={i}
              onClick={() => handleNavClick(item)}
              className="text-2xl font-bold uppercase tracking-widest text-white flex items-center justify-between py-4 border-b border-white/10"
            >
              {item.label}
              <ArrowRight size={20} className="text-[#F6C553]" />
            </div>
          ))}
          <button 
            onClick={() => { navigate("/contact"); setOpen(false); }}
            className="w-full mt-auto mb-12 bg-[#F6C553] text-black font-black uppercase tracking-widest py-5 rounded-xl text-sm"
          >
            Start Project
          </button>
        </div>
      </div>
    </nav>
  );
}