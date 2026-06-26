import craneStudio from "../assets/images/zoomlion-crane-studio.jpg";
import craneHook from "../assets/images/crane-hook-90t.jpg";
import forkliftStreet from "../assets/images/forklift-street.jpg";
import forkliftLifting from "../assets/images/lonking-forklift-balcony.jpg";
import telehandlerYard from "../assets/images/telehandler-yard.jpg";
import boomFacade from "../assets/images/genie-boom-facade.jpg";
import boomSilo from "../assets/images/boom-lift-silo.jpg";
import boomField from "../assets/images/boom-lift-field.jpg";
import xcmgTruck from "../assets/images/xcmg-offload.jpg";
import scissorWarehouse from "../assets/images/scissor-lift-warehouse.jpg";
import crawlerCrane from "../assets/images/crawler-crane.jpg";
import sideLoader from "../assets/images/side-loader-forklift.jpg";
import lowbedTruck from "../assets/images/lowbed-truck.jpg";
import recoveryTruck from "../assets/images/rescue-recovery.jpg";

export const fleet = [
  {
    id: "f1",
    category: "cranes",
    name: "Zoomlion Mobile Crane (ZTC550V5-2R)",
    photo: craneStudio,
    capacity: "Up to 55 Ton",
    reach: "Full telescopic boom",
  },
  {
    id: "f2",
    category: "cranes",
    name: "Heavy Crane Rigging — 90T Hook Block",
    photo: craneHook,
    capacity: "90 Ton hook capacity",
    reach: "Multi-part reeving",
  },
  {
    id: "f3",
    category: "forklifts",
    name: "5-Ton Diesel Forklift",
    photo: forkliftStreet,
    capacity: "5,000 kg",
    reach: "3-stage mast",
  },
  {
    id: "f4",
    category: "forklifts",
    name: "Lonking Forklift",
    photo: forkliftLifting,
    capacity: "3,000 kg",
    reach: "Standard mast lift",
  },
  {
    id: "f5",
    category: "telehandlers",
    name: "Rough-Terrain Telehandler",
    photo: telehandlerYard,
    capacity: "3,500 kg",
    reach: "Extendable boom, container-yard rated",
  },
  {
    id: "f6",
    category: "cherry-pickers",
    name: "Genie Boom Lift",
    photo: boomFacade,
    capacity: "1 person basket",
    reach: "Facade & high-rise reach",
  },
  {
    id: "f7",
    category: "cherry-pickers",
    name: "Truck-Mounted Boom Lift",
    photo: boomSilo,
    capacity: "1–2 person basket",
    reach: "Industrial silo / chimney height",
  },
  {
    id: "f8",
    category: "cherry-pickers",
    name: "Telescopic Boom Lift",
    photo: boomField,
    capacity: "1 person basket",
    reach: "Max extension, open-field works",
  },
  {
    id: "f9",
    category: "cranes",
    name: "XCMG Truck-Mounted Crane",
    photo: xcmgTruck,
    capacity: "Container & cargo class",
    reach: "Articulated knuckle-boom",
  },
  {
    id: "f10",
    category: "scissor-lifts",
    name: "Electric/Diesel Scissor Lift",
    photo: scissorWarehouse,
    capacity: "2-person platform",
    reach: "Warehouse-height access",
  },,
  {
    id: "f11",
    category: "transport",
    name: "Heavy-Duty Lowbed Trailer",
    photo: lowbedTruck,
    capacity: "Up to 60 Ton payload",
    reach: "Multi-axle, extendable deck",
  },
  {
    id: "f12",
    category: "transport",
    name: "Mitsubishi Fuso Flatbed Truck",
    photo: lowbedTruck,
    capacity: "Medium cargo class",
    reach: "Site-to-site haulage",
  },
  {
    id: "f13",
    category: "recovery",
    name: "Flatbed Recovery Truck",
    photo: recoveryTruck,
    capacity: "Up to 10 Ton recovery",
    reach: "Roadside & on-site, 24/7",
  },
  {
    id: "f14",
    category: "cranes",
    name: "Crawler Crane",
    photo: crawlerCrane,
    capacity: "25–550 Ton",
    reach: "Heavy lift, soft-ground rated",
  },
  {
    id: "f15",
    category: "telehandlers",
    name: "Side Loader Forklift",
    photo: sideLoader,
    capacity: "Up to 10,000 kg",
    reach: "Long load handling",
  },
];

export const fleetCategories = [
  { key: "all", label: "All" },
  { key: "cranes", label: "Cranes" },
  { key: "forklifts", label: "Forklifts" },
  { key: "telehandlers", label: "Telehandlers" },
  { key: "cherry-pickers", label: "Cherry Pickers" },
  { key: "scissor-lifts", label: "Scissor Lifts" },
  { key: "transport", label: "Transport" },
  { key: "recovery", label: "Recovery" },
];