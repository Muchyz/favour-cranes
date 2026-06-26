import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Card from "../components/ui/Card.jsx";
import { fleet, fleetCategories } from "../data/fleet.js";

export default function Fleet() {
  const [searchParams] = useSearchParams();
  const [activeCat, setActiveCat] = useState("all");
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat) setActiveCat(cat);
  }, [searchParams]);

  const filtered = activeCat === "all" ? fleet : fleet.filter((f) => f.category === activeCat);

  return (
    <>
      <Helmet>
        <title>Crane & Equipment Fleet | Mobile Cranes, Forklifts, Telehandlers – Favour Cranes Nairobi</title>
        <meta name="description" content="Browse our fleet: mobile cranes up to 550T, forklifts, rough-terrain telehandlers, boom lifts, scissor lifts and lowbed trucks available for hire across East Africa." />
        <link rel="canonical" href="https://www.favourcranes.co.ke/fleet" />
      </Helmet>
    <div className="section-pad max-w-6xl mx-auto">
      <SectionHeading eyebrow="Equipment Catalog" title="Our Fleet" />

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {fleetCategories.map((c) => (
          <button
            key={c.key}
            onClick={() => setActiveCat(c.key)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              activeCat === c.key ? "bg-brandred text-white" : "bg-offwhite text-navy hover:bg-sky/20"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((f) => (
          <Card key={f.id}>
            <img src={f.photo} alt={f.name} className="h-52 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-bold text-navy mb-2">{f.name}</h3>
              <button
                onClick={() => setExpanded(expanded === f.id ? null : f.id)}
                className="text-sky text-sm font-semibold hover:underline"
              >
                {expanded === f.id ? "Hide Details" : "View Details"}
              </button>
              {expanded === f.id && (
                <div className="mt-3 text-sm text-slate space-y-1">
                  <p><span className="font-semibold">Capacity:</span> {f.capacity}</p>
                  <p><span className="font-semibold">Reach/Height:</span> {f.reach}</p>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
    </>
  );
}