import SectionHeading from "../components/ui/SectionHeading.jsx";
import { clients } from "../data/clients.js";
import { Link } from "react-router-dom";
import craneStudio from "../assets/images/zoomlion-crane-studio.jpg";

export default function About() {
  return (
    <div className="section-pad max-w-6xl mx-auto">
      <SectionHeading eyebrow="Our Story" title="About Favour Cranes Limited" />

      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <img src={craneStudio} alt="Favour Cranes fleet" className="rounded-xl shadow-lg" />
        <div>
          <p className="text-slate mb-4">
            Favour Cranes Limited began life in 2016 as Venus Cranes Ltd, building a reputation
            across Nairobi and East Africa for dependable heavy lifting and logistics support. In
            2025, we renamed to Favour Cranes Limited — the same trusted team, certified operators,
            and safety-first culture, under a refreshed identity.
          </p>
          <p className="text-slate">
            Today we serve construction, manufacturing, mining, and logistics clients with a fleet
            spanning mobile cranes, forklifts, telehandlers, scissor lifts, and boom lifts — backed
            by transparent pricing and full regulatory compliance.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-brandred">
          <h3 className="font-bold text-navy text-lg mb-2">Our Vision</h3>
          <p className="text-sm text-slate">
            To be the most trusted and innovative heavy-lifting partner across the East African
            region.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-sky">
          <h3 className="font-bold text-navy text-lg mb-2">Our Mission</h3>
          <p className="text-sm text-slate">
            To provide professional, high-quality heavy lifting equipment and logistics solutions
            that exceed international safety standards, ensuring maximum uptime and project success
            for our clients.
          </p>
        </div>
      </div>

      <div className="bg-navy text-white rounded-xl p-8 mb-16">
        <h3 className="font-bold text-sky text-xl mb-3">Safety & Commitment</h3>
        <p className="text-sm text-gray-300 mb-3">
          We guarantee on-site safety, equipment reliability, and transparent, cost-effective
          solutions. We comply with Lifting Operations & Lifting Equipment Regulations (LOLER) and
          perform annual/periodic load testing and certification through competent, independent
          third-party inspectors to meet OSHA and local East African safety standards.
        </p>
        <p className="text-sm text-gray-300">
          Our operators are certified by globally recognized bodies including NITA, Mainport, and
          Lloyds British.
        </p>
      </div>

      <SectionHeading title="Key Clients" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {clients.map((c) => (
          <div key={c} className="bg-offwhite rounded-lg p-4 text-center font-semibold text-navy text-sm shadow-sm">
            {c}
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-slate mb-3">Interested in joining our team?</p>
        <Link to="/careers" className="btn-primary inline-flex">View Careers</Link>
      </div>
    </div>
  );
}