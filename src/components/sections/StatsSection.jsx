import StatCounter from "../ui/StatCounter.jsx";

export default function StatsSection() {
  return (
    <div className="section-pad bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <StatCounter value={2016} label="Founded As Venus Cranes" />
        <StatCounter value={10} suffix="+" label="Fleet Units" />
        <StatCounter value={550} suffix="T" label="Max Lifting Capacity" />
        <StatCounter value={7} suffix="+" label="Key Corporate Clients" />
      </div>
    </div>
  );
}