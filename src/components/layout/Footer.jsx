import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import logo from "../../assets/images/logo.png";

const quickLinks = [
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Our Fleet" },
  { to: "/certifications", label: "Certifications" },
  { to: "/careers", label: "Careers" },
];

const legalLinks = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms & Conditions" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white relative">
      <div className="h-1 w-full bg-gradient-to-r from-brandred via-sky to-brandred" />

      <div className="max-w-7xl mx-auto px-6 py-10 md:py-16 grid gap-10 md:gap-12 md:grid-cols-4">
        <div className="text-center md:text-left pb-8 md:pb-0 border-b border-white/10 md:border-0">
          <img
            src={logo}
            alt="Favour Cranes Limited"
            className="h-16 md:h-20 w-auto mx-auto md:mx-0 mb-3"
          />
          <p className="text-sm text-gray-300 leading-relaxed max-w-xs mx-auto md:max-w-none md:mx-0">
            Professional Heavy Lifting & Logistics Solutions across East Africa. Safe, reliable,
            and efficient — every lift, every time.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sky uppercase tracking-wide text-sm">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm text-gray-300">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  <ChevronRight size={14} className="text-brandred" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sky uppercase tracking-wide text-sm">
            Legal
          </h4>
          <ul className="space-y-2.5 text-sm text-gray-300">
            {legalLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="flex items-center gap-1.5 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                  <ChevronRight size={14} className="text-brandred" />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sky uppercase tracking-wide text-sm">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-center gap-3">
              <span className="bg-white/10 p-2 rounded-full">
                <Phone size={15} className="text-sky" />
              </span>
              0712 919 576
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-white/10 p-2 rounded-full">
                <Mail size={15} className="text-sky" />
              </span>
              info@favourcranes.co.ke
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-white/10 p-2 rounded-full mt-0.5">
                <MapPin size={15} className="text-sky" />
              </span>
              <span>
                Kimson Plaza, Eastern Bypass, Embakasi, Nairobi
                <br />
                P.O. Box 7456, 00100
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 text-center text-xs text-gray-400 py-5">
        
      {/* Social Icons */}
      <div className="flex items-center justify-center gap-4 mt-6 mb-4">
        {/* Facebook */}
        <a href="https://www.facebook.com/profile.php?id=61583458994898" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
          className="w-9 h-9 rounded-full flex items-center justify-center transition hover:scale-110"
          style={{ background: "#1877F2" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
        {/* Instagram */}
        <a href="https://www.instagram.com/favourcranesltd?igsh=MWYzejRxaWdxd3UzOQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
          className="w-9 h-9 rounded-full flex items-center justify-center transition hover:scale-110"
          style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
          </svg>
        </a>
        {/* TikTok */}
        <a href="https://vm.tiktok.com/ZS96AXhJCArcm-jCykV/" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
          className="w-9 h-9 rounded-full flex items-center justify-center transition hover:scale-110"
          style={{ background: "#010101" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
          </svg>
        </a>
        {/* WhatsApp */}
        <a href="https://wa.me/254712919576" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
          className="w-9 h-9 rounded-full flex items-center justify-center transition hover:scale-110"
          style={{ background: "#25D366" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
        </a>
        {/* Email */}
        <a href="mailto:info@favourcranes.co.ke" aria-label="Email"
          className="w-9 h-9 rounded-full flex items-center justify-center transition hover:scale-110"
          style={{ background: "#EA4335" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>
      </div>
      © {new Date().getFullYear()} Favour Cranes Limited (formerly Venus Cranes Ltd). All rights
        reserved.
      </div>
    </footer>
  );
}
