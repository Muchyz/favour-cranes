import SectionHeading from "../components/ui/SectionHeading.jsx";
import { Helmet } from "react-helmet-async";
import ServicesGrid from "../components/sections/ServicesGrid.jsx";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Crane Hire Services Nairobi | Forklift, Lowbed & Aerial Access – Favour Cranes</title>
        <meta name="description" content="Mobile crane hire, lowbed transport, forklift rental, telehandlers, scissor lifts and cherry pickers across Nairobi and East Africa. LOLER compliant." />
        <link rel="canonical" href="https://www.favourcranes.co.ke/services" />
      </Helmet>
    <div className="section-pad max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="Comprehensive heavy lifting and logistics solutions, backed by certified equipment and operators."
      />
      <ServicesGrid />
    </div>
    </>
  );
}