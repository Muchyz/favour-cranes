import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What areas do you cover?",
    a: "We primarily serve Nairobi and the wider East African region, with mobilization available for projects outside our standard coverage area.",
  },
  {
    q: "Are your operators certified?",
    a: "Yes — all operators are certified by recognized bodies including NITA, Mainport, and Lloyds British.",
  },
  {
    q: "Do you handle equipment transport as well as lifting?",
    a: "Yes, our lowbed truck fleet handles transport of cranes and heavy machinery between sites, in addition to on-site lifting services.",
  },
  {
    q: "How do I request a quote?",
    a: "Use our Contact page quote form with equipment type, tonnage, dates, and location — or call us directly on 0712 919 576.",
  },
  {
    q: "What is the maximum lifting capacity in your fleet?",
    a: "Our largest crane handles up to 550 tonnes, with a range of smaller units available for lighter or more confined-space jobs.",
  },
  {
    q: "How quickly can you mobilize equipment to site?",
    a: "Mobilization time depends on your location and the equipment required, but we prioritize fast turnaround and can usually confirm availability within the same day.",
  },
  {
    q: "Do you offer short-term and long-term hire?",
    a: "Yes, we accommodate both single-lift jobs and extended multi-week or multi-month hire arrangements depending on your project's needs.",
  },
  {
    q: "What safety documentation do you provide?",
    a: "We provide LOLER and OSHA compliance certificates, load test reports, and operator certifications for every job upon request.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="max-w-3xl mx-auto px-4 flex flex-col gap-3">
      {faqs.map((f, i) => {
        const isOpen = openIdx === i;
        return (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <button
              className="flex w-full justify-between items-center gap-4 text-left font-semibold text-navy px-5 py-4"
              onClick={() => setOpenIdx(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{f.q}</span>
              <span
                className={`flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full transition-all ${
                  isOpen ? "bg-brandred rotate-45" : "bg-gray-100"
                }`}
              >
                <Plus size={16} className={isOpen ? "text-white" : "text-navy"} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-slate leading-relaxed">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
