import Hero from "../components/sections/Hero.jsx";
import TrustStrip from "../components/sections/TrustStrip.jsx";
import StatsSection from "../components/sections/StatsSection.jsx";
import ServicesGrid from "../components/sections/ServicesGrid.jsx";
import FleetPreview from "../components/sections/FleetPreview.jsx";
import ClientsMarquee from "../components/sections/ClientsMarquee.jsx";
import TestimonialsPreview from "../components/sections/TestimonialsPreview.jsx";
import FAQ from "../components/sections/FAQ.jsx";
import CTA from "../components/sections/CTA.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Button from "../components/ui/Button.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <StatsSection />

      <section className="section-pad bg-offwhite">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Core Services"
          subtitle="From crane hire to heavy transport, we cover every stage of your lifting and logistics project."
        />
        <ServicesGrid preview />
        <div className="text-center mt-8">
          <Button to="/services" variant="outline">View All Services</Button>
        </div>
      </section>

      <section className="section-pad bg-white">
        <SectionHeading eyebrow="Our Equipment" title="Featured Fleet" />
        <FleetPreview />
        <div className="text-center mt-8">
          <Button to="/fleet" variant="primary">View Full Fleet</Button>
        </div>
      </section>

      <section className="section-pad bg-navy text-white">
        <SectionHeading
          title="Why Choose Favour Cranes"
          subtitle="Reliability, safety, and certified expertise — every lift."
          light
        />
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          {[
            { t: "LOLER & OSHA Compliant", d: "Annual load testing and certification through independent inspectors." },
            { t: "Certified Operators", d: "NITA, Mainport, and Lloyds British certified crane and equipment operators." },
            { t: "Modern, Versatile Fleet", d: "Cranes, forklifts, telehandlers, and aerial platforms for any job size." },
          ].map((item) => (
            <div key={item.t}>
              <h3 className="font-bold text-sky mb-2">{item.t}</h3>
              <p className="text-sm text-gray-300">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-offwhite text-center">
        <SectionHeading
          eyebrow="Coverage"
          title="Serving Nairobi & East Africa"
          subtitle="We mobilize equipment across the region — wherever your project is."
        />
        <Link to="/areas-we-serve" className="text-sky font-semibold hover:underline">
          See all areas we serve →
        </Link>
      </section>

      <ClientsMarquee />

      <section className="section-pad bg-white">
        <SectionHeading eyebrow="Client Feedback" title="What Our Clients Say" />
        <TestimonialsPreview />
        <div className="text-center mt-8">
          <Button to="/testimonials" variant="outline">Read More Testimonials</Button>
        </div>
      </section>

      <section className="section-pad bg-offwhite">
        <SectionHeading title="Frequently Asked Questions" />
        <FAQ />
      </section>

      <CTA />
    </>
  );
}