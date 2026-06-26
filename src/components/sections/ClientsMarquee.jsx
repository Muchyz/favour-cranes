import { clients } from "../../data/clients.js";

export default function ClientsMarquee() {
  return (
    <div className="bg-navy py-5 overflow-hidden border-t-2 border-brandred">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...clients, ...clients].map((c, i) => (
          <span key={i} className="text-white/80 font-semibold text-base mx-6">
            {c} <span className="text-brandred mx-2">·</span>
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
          animation: marquee 6s linear infinite;
        }
      `}</style>
    </div>
  );
}
