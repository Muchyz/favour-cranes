import SectionHeading from "../components/ui/SectionHeading.jsx";

export default function Terms() {
  return (
    <div className="section-pad max-w-3xl mx-auto">
      <SectionHeading title="Terms & Conditions" center={false} />
      <div className="space-y-4 text-sm text-slate">
        <p>
          By using this website or engaging Favour Cranes Limited's services, you agree to the
          following terms. All quotes provided via this website are estimates and subject to
          confirmation following site assessment and contract agreement.
        </p>
        <p>
          Favour Cranes Limited operates in compliance with LOLER, OSHA, and applicable East
          African safety regulations. Clients are responsible for providing accurate site and
          load information to ensure safe equipment deployment.
        </p>
        <p>
          We reserve the right to decline any job request that does not meet our safety standards.
          Pricing, availability, and scheduling are confirmed only upon formal booking.
        </p>
        <p>For full contractual terms specific to your project, please contact us directly.</p>
      </div>
    </div>
  );
}