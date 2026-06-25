import { Calendar, Truck, Gauge, Building2 } from "lucide-react";
import StatCounter from "../ui/StatCounter.jsx";

export default function StatsSection() {
  return (
    <div className="section-pad bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <span className="text-brandred font-bold uppercase tracking-widest text-xs">
            By The Numbers
          </span>
          <h2 className="text-navy font-extrabold text-2xl md:text-3xl mt-1">
            Trusted Across East Africa
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <StatCounter value={2016} label="Founded As Venus Cranes" icon={Calendar} />
          <StatCounter value={10} suffix="+" label="Fleet Units" icon={Truck} />
          <StatCounter value={550} suffix="T" label="Max Lifting Capacity" icon={Gauge} />
          <StatCounter value={7} suffix="+" label="Key Corporate Clients" icon={Building2} />
        </div>
      </div>
    </div>
  );
}
