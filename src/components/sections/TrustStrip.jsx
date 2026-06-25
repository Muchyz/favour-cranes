import { ShieldCheck, BadgeCheck, Award, Stamp } from "lucide-react";

const badges = [
  { label: "LOLER Compliant", icon: ShieldCheck },
  { label: "OSHA Standards", icon: BadgeCheck },
  { label: "NITA Certified Operators", icon: Award },
  { label: "Lloyds British Certified", icon: Stamp },
];

export default function TrustStrip() {
  return (
    <div className="bg-offwhite py-8">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 gap-3">
        {badges.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.label}
              className="flex items-center justify-center gap-2 bg-white px-4 py-3 rounded-xl shadow-sm border border-sky/20 text-navy font-semibold text-sm text-center"
            >
              <Icon size={16} className="text-brandred flex-shrink-0" />
              <span>{b.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
