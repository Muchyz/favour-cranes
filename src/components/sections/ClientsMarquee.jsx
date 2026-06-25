import { clients } from "../../data/clients.js";

export default function ClientsMarquee() {
  return (
    <div className="bg-navy py-8 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {[...clients, ...clients].map((c, i) => (
          <span key={i} className="text-white/70 font-semibold text-lg">
            {c}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
}