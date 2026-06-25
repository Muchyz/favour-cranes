const badges = ["LOLER Compliant", "OSHA Standards", "NITA Certified Operators", "Lloyds British Certified"];

export default function TrustStrip() {
  return (
    <div className="bg-offwhite py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-6 text-navy font-semibold text-sm">
        {badges.map((b) => (
          <span key={b} className="bg-white px-4 py-2 rounded-full shadow-sm border border-sky/20">
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}