import { testimonials } from "../../data/testimonials.js";

export default function TestimonialsPreview() {
  return (
    <div className="flex flex-col gap-5 max-w-2xl mx-auto px-4">
      {testimonials.slice(0, 3).map((t, i) => (
        <div
          key={i}
          className="relative bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100"
        >
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-brandred via-yellow-400 to-brandred" />

          <div className="p-5">
            {/* Stars */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, s) => (
                <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>

            {/* Large decorative quote mark */}
            <span
              className="absolute top-8 right-5 text-gray-100 font-serif select-none pointer-events-none"
              style={{ fontSize: "5rem", lineHeight: 1 }}
            >
              "
            </span>

            <p className="text-slate text-sm leading-relaxed mb-5 italic relative z-10">
              "{t.quote}"
            </p>

            {/* Divider */}
            <div className="w-10 h-[2px] bg-brandred mb-4" />

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-navy to-sky flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0 shadow-sm">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-navy text-sm">{t.name}</p>
                <p className="text-xs font-semibold text-brandred">{t.company}</p>
              </div>
              {/* Verified badge */}
              <div className="ml-auto flex items-center gap-1 bg-green-50 border border-green-200 rounded-full px-2 py-0.5">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#16a34a">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#16a34a" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
                <span className="text-green-700 font-semibold" style={{fontSize:"9px"}}>Verified</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
