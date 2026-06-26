import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import heroImg1 from "../../assets/images/crane-lifting-container.jpg";
import heroImg2 from "../../assets/images/crane-hook-90t.jpg";
import heroImg5 from "../../assets/images/boom-lift-field.jpg";

const heroImages = [heroImg1, heroImg2, heroImg5];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ height: "calc(100svh - 72px)" }}>

      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={index}
            src={heroImages[index]}
            alt="Favour Cranes equipment in action"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 80%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
        {/* Base gradient — kept gentle so image stays visible */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,42,71,0.55) 0%, rgba(14,42,71,0.35) 40%, rgba(14,42,71,0.15) 70%, rgba(14,42,71,0.05) 100%)" }} />
      </div>

      <div className="relative z-10 h-full flex flex-col px-4 pt-3 pb-3">

        {/* Badges — top */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex-shrink-0 flex justify-between">
          {["LOLER", "NITA Certified", "OSHA"].map((b) => (
            <span key={b} className="bg-black/50 border border-white/20 text-white font-semibold px-2 py-0.5 rounded-full" style={{ fontSize: "10px" }}>
              ✓ {b}
            </span>
          ))}
        </motion.div>

        {/* Top spacer */}
        <div className="flex-1" />

        {/* CENTER content block — own dark backdrop for guaranteed contrast */}
        <div
          className="flex-shrink-0 flex flex-col gap-2 rounded-2xl"
          style={{
            background: "linear-gradient(180deg, rgba(14,42,71,0.0) 0%, rgba(14,42,71,0.55) 15%, rgba(14,42,71,0.7) 85%, rgba(14,42,71,0.0) 100%)",
            padding: "14px 10px",
            margin: "-14px -10px",
          }}
        >

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center gap-2">
            <span className="w-5 h-[2px] bg-brandred flex-shrink-0" />
            <span className="text-sky font-bold uppercase tracking-widest" style={{ fontSize: "9px" }}>Est. 2016 · Nairobi, Kenya</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="font-extrabold text-white tracking-tight leading-none"
            style={{ fontSize: "clamp(1.8rem, 8vw, 2.8rem)" }}
          >
            Heavy Lifting,<br />
            <span className="text-brandred">Delivered.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-gray-300 leading-snug" style={{ fontSize: "11px" }}>
            Crane hire, lowbed transport &amp; aerial access across East Africa — certified operators, zero incidents.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="flex gap-2">
            <Link to="/contact" className="flex-1 flex items-center justify-center gap-1 bg-brandred text-white font-bold rounded-lg" style={{ padding: "9px 0", fontSize: "12px" }}>
              Free Quote <ArrowRight size={12} />
            </Link>
            <a href="tel:0712919576" className="flex-1 flex items-center justify-center gap-1 border border-white/30 bg-white/10 text-white font-semibold rounded-lg" style={{ padding: "9px 0", fontSize: "12px" }}>
              <Phone size={12} /> Call Now
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="grid grid-cols-4 rounded-xl overflow-hidden border border-white/10">
            {[
              { v: "550T", l: "Max Lift" },
              { v: "30+", l: "Units" },
              { v: "9yr", l: "Est." },
              { v: "7k+", l: "Clients" },
            ].map((s, i) => (
              <div key={s.l} className={`text-center ${i % 2 === 0 ? "bg-white/10" : "bg-white/5"}`} style={{ padding: "6px 0" }}>
                <p className="font-extrabold text-white leading-none" style={{ fontSize: "14px" }}>{s.v}</p>
                <p className="text-gray-400 uppercase tracking-wide mt-0.5" style={{ fontSize: "8px" }}>{s.l}</p>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Bottom spacer */}
        <div className="flex-1" />

      </div>
    </section>
  );
}
