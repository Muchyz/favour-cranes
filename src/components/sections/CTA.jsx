import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <div className="relative bg-brandred text-white text-center py-16 px-6 overflow-hidden">
      {/* Subtle diagonal texture for depth */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 18px)",
        }}
      />
      {/* Soft dark glow bottom-left for richness */}
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14,42,71,0.3) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Lift Your Next Project?</h2>
        <p className="mb-7 text-white/90">Talk to our team today for a fast, transparent quote.</p>

        <div className="flex justify-center gap-3 flex-wrap">
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 bg-white text-brandred font-bold rounded-lg px-6 py-3 text-sm hover:bg-gray-100 transition shadow-sm"
          >
            Get a Free Quote <ArrowRight size={16} />
          </Link>
          <a
            href="tel:0712919576"
            className="flex items-center justify-center gap-2 border-2 border-white text-white font-semibold rounded-lg px-6 py-3 text-sm hover:bg-white hover:text-brandred transition"
          >
            <Phone size={16} /> Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
