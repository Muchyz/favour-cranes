import SectionHeading from "../components/ui/SectionHeading.jsx";
import { testimonials } from "../data/testimonials.js";
import Card from "../components/ui/Card.jsx";
import Button from "../components/ui/Button.jsx";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="section-pad max-w-6xl mx-auto">
      <SectionHeading eyebrow="Client Feedback" title="Testimonials" />

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {testimonials.map((t, i) => (
          <Card key={i} className="p-6">
            <Quote className="text-sky mb-3" size={28} />
            <p className="text-slate text-sm mb-4">"{t.quote}"</p>
            <p className="font-semibold text-navy">{t.name}</p>
            <p className="text-xs text-gray-500">{t.company}</p>
          </Card>
        ))}
      </div>

      <div className="text-center bg-offwhite rounded-xl p-8">
        <h3 className="font-bold text-navy text-lg mb-2">Worked With Us?</h3>
        <p className="text-slate text-sm mb-4">We'd love to hear about your experience.</p>
        <Button to="/contact" variant="primary">Share Your Experience</Button>
      </div>
    </div>
  );
}