import crane1 from "../assets/images/crane-lifting-container.jpg";
import lowbed from "../assets/images/lowbed-truck.jpg";
import telehandler from "../assets/images/telehandler-yard.jpg";
import xcmg from "../assets/images/xcmg-offload.jpg";
import scissor from "../assets/images/scissor-lift-warehouse.jpg";
import rescue from "../assets/images/rescue-recovery.jpg";

export const services = [
  {
    slug: "crane-hire",
    name: "Crane Hire Services",
    photo: crane1,
    equipment: ["Mobile Cranes", "Truck-Mounted Cranes", "Crawler Cranes (25–550T)"],
    description:
      "On-demand crane hire for lifting, positioning, and placing heavy loads on construction, industrial, and logistics sites, with certified operators and full safety compliance.",
    fleetCategory: "cranes",
  },
  {
    slug: "lowbed-transport",
    name: "Lowbed Truck Transport",
    photo: lowbed,
    equipment: ["Heavy-Duty Lowbed Trailers", "Flatbed Trucks (Mitsubishi Fuso)"],
    description:
      "Specialized transport for oversized and heavy equipment — including cranes themselves — moved safely between sites with route planning and load securing.",
    fleetCategory: "cranes",
  },
  {
    slug: "machinery-mobilization",
    name: "Heavy Machinery Mobilization",
    photo: telehandler,
    equipment: ["Telehandlers", "Forklifts", "Side Loaders"],
    description:
      "End-to-end mobilization of heavy machinery to and from project sites, including disassembly/reassembly coordination where required for transport.",
    fleetCategory: "telehandlers",
  },
  {
    slug: "loading-offloading",
    name: "Equipment Loading & Offloading",
    photo: xcmg,
    equipment: ["Forklifts", "Telehandlers", "Truck-Mounted Cranes (XCMG)"],
    description:
      "Safe, efficient loading and offloading of containers, machinery, and bulk cargo at ports, warehouses, and construction sites.",
    fleetCategory: "forklifts",
  },
  {
    slug: "construction-lifting",
    name: "Construction Site Lifting Solutions",
    photo: scissor,
    equipment: ["Scissor Lifts", "Cherry Pickers / Boom Lifts", "Telehandlers"],
    description:
      "Aerial work platforms and lifting solutions for working at height — facade work, installations, maintenance, and material placement on active construction sites.",
    fleetCategory: "scissor-lifts",
  },
  {
    slug: "rescue-recovery",
    name: "Vehicle Rescue & Recovery",
    photo: rescue,
    equipment: ["Flatbed Recovery Truck", "Winch & Rigging", "Towing Equipment"],
    description:
      "Fast, professional vehicle rescue and recovery services for construction machinery, trucks, and 4x4s — on-site or roadside across Nairobi and beyond.",
    fleetCategory: "cranes",
  },
];