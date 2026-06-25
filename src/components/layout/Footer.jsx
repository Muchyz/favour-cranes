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
              favourcranesltd@gmail.com
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
        © {new Date().getFullYear()} Favour Cranes Limited (formerly Venus Cranes Ltd). All rights
        reserved.
      </div>
    </footer>
  );
}
