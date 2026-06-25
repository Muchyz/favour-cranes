import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "../../assets/images/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Fleet" },
  { to: "/areas-we-serve", label: "Areas We Serve" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/certifications", label: "Certifications" },
  { to: "/news", label: "News" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-4 md:px-8 py-3 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="Favour Cranes Limited" className="h-14 w-auto" />
          <span className="font-bold text-navy text-lg hidden sm:block">
            Favour Cranes <span className="text-sky">Limited</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium">
          {links.map((l) => (
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
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:0712919576" className="btn-outline text-sm">
            <Phone size={16} /> Call Now
          </a>
          <Link to="/contact" className="btn-primary text-sm">
            Get a Free Quote
          </Link>
        </div>

        <button className="lg:hidden text-navy" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t px-4 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-2 border-b ${isActive ? "text-brandred" : "text-navy"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary justify-center mt-2" onClick={() => setOpen(false)}>
            Get a Free Quote
          </Link>
        </div>
      )}
    </header>
  );
}