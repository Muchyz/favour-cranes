export default function EquipmentTag({ children }) {
  return (
    <span className="inline-block bg-offwhite border border-sky/30 text-navy text-xs font-medium px-3 py-1 rounded-full mr-2 mb-2">
      {children}
    </span>
  );
}