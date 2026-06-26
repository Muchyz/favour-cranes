export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden border-t-4 border-transparent hover:border-brandred ${className}`}>
      {children}
    </div>
  );
}