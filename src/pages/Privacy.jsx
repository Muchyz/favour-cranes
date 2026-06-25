import SectionHeading from "../components/ui/SectionHeading.jsx";

export default function Privacy() {
  return (
    <div className="section-pad max-w-3xl mx-auto">
      <SectionHeading title="Privacy Policy" center={false} />
      <div className="space-y-4 text-sm text-slate">
        <p>
          Favour Cranes Limited ("we", "us") respects your privacy. This policy explains how we
          collect, use, and protect personal information submitted through our website forms,
          including quote requests and CV submissions.
        </p>
        <p>
          We collect information such as your name, email, phone number, and project details
          solely to respond to your inquiry or quote request. We do not sell or share your
          information with third parties except as required to process your request (e.g. form
          processing services).
        </p>
        <p>
          You may contact us at favourcranesltd@gmail.com at any time to request access to,
          correction of, or deletion of your personal data.
        </p>
        <p>This policy may be updated periodically. Continued use of our site constitutes acceptance of any changes.</p>
      </div>
    </div>
  );
}