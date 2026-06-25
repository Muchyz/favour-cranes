import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function StatCounter({ value, suffix = "", label, icon: Icon }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 1200;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-6 h-full"
    >
      {Icon && (
        <div className="flex items-center justify-center w-11 h-11 rounded-full bg-brandred/10 mb-3">
          <Icon size={20} className="text-brandred" />
        </div>
      )}
      <p className="text-3xl md:text-4xl font-extrabold text-brandred leading-none">
        {count}{suffix}
      </p>
      <p className="text-navy font-medium mt-2 text-sm leading-snug">{label}</p>
    </motion.div>
  );
}
