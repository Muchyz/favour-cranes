import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Phone, ArrowRight, Home, Info, Truck, Wrench,
  MapPin, Mail, Image, Quote, ShieldCheck, Newspaper, Briefcase, ChevronDown,
} from "lucide-react";
import logo from "../../assets/images/logo.png";

const mainLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/services", label: "Services", icon: Wrench },
  { to: "/fleet", label: "Fleet", icon: Truck },
  { to: "/areas-we-serve", label: "Areas We Serve", icon: MapPin },
  { to: "/contact", label: "Contact", icon: Mail },
];

const moreLinks = [
  { to: "/gallery", label: "Gallery", icon: Image },
  { to: "/testimonials", label: "Testimonials", icon: Quote },
  { to: "/certifications", label: "Certifications", icon: ShieldCheck },
  { to: "/news", label: "News", icon: Newspaper },
  { to: "/careers", label: "Careers", icon: Briefcase },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 md:px-8 py-3 max-w-7xl mx-auto">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0" onClick={() => setOpen(false)}>
          <img src={logo} alt="Favour Cranes Limited" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium">
          {mainLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `hover:text-brandred transition ${isActive ? "text-brandred" : "text-navy"}`
              }
            >
              {l.label}
            </NavLink>
          ))}

          {/* More dropdown */}
          <div className="relative" ref={moreRef}>
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center gap-1 text-navy hover:text-brandred transition font-medium text-sm"
            >
              More <ChevronDown size={14} className={`transition-transform ${moreOpen ? "rotate-180" : ""}`} />
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50"
                >
                  {moreLinks.map((l) => {
                    const Icon = l.icon;
                    return (
                      <NavLink
                        key={l.to}
                        to={l.to}
                        onClick={() => setMoreOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition ${
                            isActive ? "text-brandred bg-brandred/5" : "text-navy hover:bg-gray-50"
                          }`
                        }
                      >
                        <Icon size={16} />
                        {l.label}
                      </NavLink>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:0712919576" className="btn-outline text-sm">
            <Phone size={16} /> Call Now
          </a>
          <Link to="/contact" className="btn-primary text-sm">
            Get a Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden text-navy" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="lg:hidden fixed top-0 right-0 h-full w-[78%] max-w-xs bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <img src={logo} alt="Favour Cranes Limited" className="h-10 w-auto" />
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-navy">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col">
                <div className="flex flex-col gap-1">
                  {mainLinks.map((l) => {
                    const Icon = l.icon;
                    return (
                      <NavLink
                        key={l.to}
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition ${
                            isActive ? "bg-brandred/10 text-brandred" : "text-navy hover:bg-gray-50"
                          }`
                        }
                      >
                        <Icon size={18} className="flex-shrink-0" />
                        {l.label}
                      </NavLink>
                    );
                  })}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="px-3 text-gray-400 font-semibold uppercase tracking-wider mb-1" style={{ fontSize: "10px" }}>
                    More
                  </p>
                  <div className="flex flex-col gap-1">
                    {moreLinks.map((l) => {
                      const Icon = l.icon;
                      return (
                        <NavLink
                          key={l.to}
                          to={l.to}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition ${
                              isActive ? "bg-brandred/10 text-brandred" : "text-navy hover:bg-gray-50"
                            }`
                          }
                        >
                          <Icon size={18} className="flex-shrink-0" />
                          {l.label}
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="px-5 py-4 border-t border-gray-100 flex flex-col gap-2 bg-gray-50/50">
                <a
                  href="tel:0712919576"
                  className="flex items-center justify-center gap-2 border border-navy/20 text-navy font-semibold rounded-lg py-2.5 text-sm"
                  onClick={() => setOpen(false)}
                >
                  <Phone size={16} /> Call Now
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 bg-brandred text-white font-bold rounded-lg py-2.5 text-sm"
                  onClick={() => setOpen(false)}
                >
                  Get a Free Quote <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
