import SectionHeading from "../components/ui/SectionHeading.jsx";
import Button from "../components/ui/Button.jsx";

export default function Careers() {
  return (
    <div className="section-pad max-w-4xl mx-auto text-center">
      <SectionHeading
        eyebrow="Join Our Team"
        title="Careers at Favour Cranes"
        subtitle="We're built on safety, reliability, and a culture of certified excellence. We're always interested in skilled operators and logistics professionals."
      />

      <div className="bg-offwhite rounded-xl p-8 mb-8">
        <h3 className="font-bold text-navy text-lg mb-2">Current Openings</h3>
        <p className="text-slate text-sm">
          No open positions currently — but we welcome you to send us your CV for future
          opportunities in crane operation, logistics, and equipment maintenance.
        </p>
      </div>

      <Button to="/contact" variant="primary">Send Us Your CV</Button>
    </div>
  );
}