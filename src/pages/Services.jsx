import SectionHeading from "../components/ui/SectionHeading.jsx";
import ServicesGrid from "../components/sections/ServicesGrid.jsx";

export default function Services() {
  return (
    <div className="section-pad max-w-6xl mx-auto">
      <SectionHeading
        eyebrow="What We Offer"
        title="Our Services"
        subtitle="Comprehensive heavy lifting and logistics solutions, backed by certified equipment and operators."
      />
      <ServicesGrid />
    </div>
  );
}