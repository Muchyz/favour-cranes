import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-gray-200">
      {faqs.map((f, i) => (
        <div key={i} className="py-4">
          <button
            className="flex w-full justify-between items-center text-left font-semibold text-navy"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
          >
            {f.q}
            <ChevronDown
              className={`transition-transform ${openIdx === i ? "rotate-180 text-brandred" : ""}`}
              size={20}
            />
          </button>
          {openIdx === i && <p className="mt-2 text-sm text-slate">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}