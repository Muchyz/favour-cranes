import SectionHeading from "../components/ui/SectionHeading.jsx";
import { MapPin } from "lucide-react";

const areas = [
  "Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika",
  "Machakos", "Kiambu", "Naivasha", "Athi River", "Embakasi", "Ruiru",
];

export default function AreasWeServe() {
  return (
    <div className="section-pad max-w-5xl mx-auto">
      <SectionHeading
        eyebrow="Coverage"
        title="Areas We Serve"
        subtitle="We mobilize cranes, transport, and lifting equipment across Nairobi and the wider East African region."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        {areas.map((a) => (
          <div key={a} className="flex items-center gap-2 bg-offwhite rounded-lg p-4 shadow-sm">
            <MapPin className="text-brandred" size={18} />
            <span className="font-medium text-navy">{a}</span>
          </div>
        ))}
      </div>

      <div className="bg-navy text-white rounded-xl p-6 text-center">
        <p className="text-gray-300 text-sm">
          Don't see your location listed? We regularly mobilize equipment for projects outside our
          standard coverage areas — reach out and we'll arrange logistics for you.
        </p>
      </div>
    </div>
  );
}