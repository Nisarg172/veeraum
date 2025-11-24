import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Home", to: "hero", type: "section" },
    { label: "About", to: "about", type: "section" },
    // { label: "Products", to: "products", type: "section" },
    // { label: "Services", to: "services", type: "section" },
    { label: "Technical Info", to: "technical-info", type: "section" },
    { label: "Installation", to: "installation-layout", type: "section" },
    { label: "Global Portfolio", to: "installation", type: "section" },

    // PAGE ROUTE
    { label: "Application", to: "/application", type: "route" },
  ];

  const handleNavClick = (item) => {
    if (item.type === "section") {
      // If user is NOT on Home page → first navigate to Home
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(item.to)?.scrollIntoView({
            behavior: "smooth",
          });
        }, 300);
      } else {
        document.getElementById(item.to)?.scrollIntoView({
          behavior: "smooth",
        });
      }
    } else if (item.type === "route") {
      navigate(item.to);
    }

    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
          <img
            src="logo.png"
            alt="logo.png"
            className="h-12 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold text-gray-700">
          {navItems.map((item, i) => (
            <li
              key={i}
              onClick={() => handleNavClick(item)}
              className="cursor-pointer hover:text-[#F6C553] transition-colors duration-200"
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          {navItems.map((item, i) => (
            <li
              key={i}
              onClick={() => handleNavClick(item)}
              className="cursor-pointer hover:text-[#F6C553] font-medium transition-colors duration-200"
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
