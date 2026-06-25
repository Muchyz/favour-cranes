import { testimonials } from "../../data/testimonials.js";
import Card from "../ui/Card.jsx";
import { Quote } from "lucide-react";

export default function TestimonialsPreview() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.slice(0, 3).map((t, i) => (
        <Card key={i} className="p-6">
          <Quote className="text-sky mb-3" size={28} />
          <p className="text-slate text-sm mb-4">"{t.quote}"</p>
          <p className="font-semibold text-navy">{t.name}</p>
          <p className="text-xs text-gray-500">{t.company}</p>
        </Card>
      ))}
    </div>
  );
}