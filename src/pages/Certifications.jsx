import SectionHeading from "../components/ui/SectionHeading.jsx";
import { ShieldCheck, FileDown } from "lucide-react";

const certs = [
  { name: "LOLER", desc: "Lifting Operations & Lifting Equipment Regulations compliance for all lifting equipment." },
  { name: "OSHA", desc: "Occupational safety standards applied across all job sites and operations." },
  { name: "NITA Certified Operators", desc: "Operators certified by Kenya's National Industrial Training Authority." },
  { name: "Lloyds British", desc: "Internationally recognized certification body for crane and lifting equipment operators." },
];

export default function Certifications() {
  return (
    <div className="section-pad max-w-5xl mx-auto">
      <SectionHeading
        eyebrow="Compliance"
        title="Certifications & Standards"
        subtitle="We hold ourselves to international and local safety standards on every project."
      />

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {certs.map((c) => (
          <div key={c.name} className="bg-white rounded-xl shadow-md p-6 flex gap-4">
            <ShieldCheck className="text-brandred shrink-0" size={32} />
            <div>
              <h3 className="font-bold text-navy mb-1">{c.name}</h3>
              <p className="text-sm text-slate">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-navy text-white rounded-xl p-8 text-center">
        <FileDown className="mx-auto mb-3 text-sky" size={32} />
        <h3 className="font-bold text-lg mb-2">Company Profile & Brochure</h3>
        <p className="text-sm text-gray-300 mb-4">Download our full company profile for project planning and procurement.</p>
        <a href="/company-profile.pdf" className="btn-primary inline-flex">Download PDF</a>
      </div>
    </div>
  );
}