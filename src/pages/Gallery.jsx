import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { X } from "lucide-react";

import crane1 from "../assets/images/crane-lifting-container.jpg";
import craneHook from "../assets/images/crane-hook-90t.jpg";
import scissorWarehouse from "../assets/images/scissor-lift-warehouse.jpg";
import forkliftStreet from "../assets/images/forklift-street.jpg";
import forkliftLifting from "../assets/images/lonking-forklift-balcony.jpg";
import telehandlerYard from "../assets/images/telehandler-yard.jpg";
import boomFacade from "../assets/images/genie-boom-facade.jpg";
import boomSilo from "../assets/images/boom-lift-silo.jpg";
import boomField from "../assets/images/boom-lift-field.jpg";
import xcmgTruck from "../assets/images/xcmg-offload.jpg";
import lowbed from "../assets/images/lowbed-truck.jpg";
import craneStudio from "../assets/images/zoomlion-crane-studio.jpg";

const photos = [
  crane1, craneHook, scissorWarehouse, forkliftStreet, forkliftLifting,
  telehandlerYard, boomFacade, boomSilo, boomField, xcmgTruck, lowbed, craneStudio,
];

const caseStudies = [
  {
    title: "Container Lift in Open Terrain",
    challenge: "A heavy shipping container needed lifting and precise placement on uneven, remote ground.",
    equipment: "Mobile crane with extended boom rigging",
  },
  {
    title: "Industrial Silo Maintenance at Height",
    challenge: "Maintenance access was needed to the top of a tall industrial silo/chimney structure.",
    equipment: "Truck-mounted boom lift",
  },
  {
    title: "Balcony-Level Material Placement",
    challenge: "Construction materials needed delivery directly to an upper-floor balcony on an active site.",
    equipment: "Forklift with extended mast reach",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <Helmet>
        <title>Project Gallery | Crane Lifts & Heavy Equipment – Favour Cranes Nairobi</title>
        <meta name="description" content="View photos of our crane lifts, forklift operations, boom lift access and lowbed transport projects across Nairobi and East Africa." />
        <link rel="canonical" href="https://www.favourcranes.co.ke/gallery" />
      </Helmet>
    <div className="section-pad max-w-6xl mx-auto">
      <SectionHeading eyebrow="Our Work" title="Project Gallery" />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16 [column-fill:_balance]">
        {photos.map((p, i) => (
          <button key={i} onClick={() => setLightbox(p)} className="block">
            <img src={p} alt={`Project ${i + 1}`} className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition" />
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-white" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <img src={lightbox} alt="Enlarged project" className="max-h-[85vh] rounded-lg" />
        </div>
      )}

      <SectionHeading title="Case Studies" />
      <div className="grid md:grid-cols-3 gap-6">
        {caseStudies.map((c) => (
          <div key={c.title} className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-bold text-navy mb-2">{c.title}</h3>
            <p className="text-sm text-slate mb-2"><span className="font-semibold">Challenge:</span> {c.challenge}</p>
            <p className="text-sm text-slate"><span className="font-semibold">Equipment Used:</span> {c.equipment}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}