import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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

const whyChooseItems = [
  {
    n: "01",
    t: "LOLER & OSHA Compliant",
    d: "Every crane in our fleet undergoes annual load testing and certification through independent inspectors, so you can deploy with full confidence in our safety standards.",
  },
  {
    n: "02",
    t: "Certified Operators",
    d: "Our crews hold NITA, Mainport, and Lloyds British certifications — trained professionals who understand both the equipment and the job site, not just the controls.",
  },
  {
    n: "03",
    t: "Modern, Versatile Fleet",
    d: "From compact forklifts to 550-tonne cranes, telehandlers, and aerial platforms, we match the right machine to your job instead of forcing a one-size-fits-all approach.",
  },
  {
    n: "04",
    t: "Rapid, Reliable Response",
    d: "Tight project timelines don't wait, and neither do we. Our team mobilizes quickly across Nairobi and East Africa to keep your site moving on schedule.",
  },
  {
    n: "05",
    t: "Transparent Pricing",
    d: "No hidden mobilization fees or surprise charges. We scope your job upfront and give you a clear quote before any equipment leaves the yard.",
  },
  {
    n: "06",
    t: "Dedicated Project Support",
    d: "A single point of contact from quote to completion, so you're never left chasing updates or re-explaining your job to someone new.",
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Crane Hire Nairobi | Favour Cranes Limited – LOLER &amp; OSHA Certified</title>
        <meta name="description" content="Crane hire, forklift rental, lowbed transport &amp; aerial access across Nairobi and East Africa. NITA certified operators, LOLER &amp; OSHA compliant. Free quote: 0712 919 576." />
        <link rel="canonical" href="https://www.favourcranes.co.ke/" />
      </Helmet>
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

      <section className="section-pad bg-navy text-white relative overflow-hidden">
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 60% 70%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px, 60px 60px",
          }}
        />

        <div className="relative">
          <SectionHeading
            title="Why Choose Favour Cranes"
            subtitle="Reliability, safety, and certified expertise — every lift."
            light
          />

          <div className="max-w-3xl mx-auto px-4 flex flex-col">
            {whyChooseItems.map((item, i) => (
              <div
                key={item.n}
                className={`relative flex gap-5 py-7 px-4 rounded-xl transition-colors hover:bg-white/5 ${
                  i !== whyChooseItems.length - 1 ? "border-b border-white/10" : ""
                }`}
              >
                {/* Ghost numeral background */}
                <span
                  className="absolute right-2 top-1/2 -translate-y-1/2 font-extrabold pointer-events-none select-none"
                  style={{ fontSize: "4.5rem", color: "rgba(255,255,255,0.04)", lineHeight: 1 }}
                >
                  {item.n}
                </span>

                {/* Foreground number */}
                <span
                  className="text-brandred font-extrabold text-2xl leading-none flex-shrink-0 relative z-10"
                  style={{ minWidth: "2.2rem" }}
                >
                  {item.n}
                </span>

                <div className="relative z-10">
                  <h3 className="font-bold text-sky mb-1.5">{item.t}</h3>
                  <span className="block w-8 h-[2px] bg-brandred/60 mb-2" />
                  <p className="text-sm text-gray-300 leading-relaxed">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-8 pb-4 bg-offwhite text-center">
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
