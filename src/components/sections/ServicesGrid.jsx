import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "../../data/services.js";
import EquipmentTag from "../ui/EquipmentTag.jsx";
import Card from "../ui/Card.jsx";

export default function ServicesGrid({ preview = false }) {
  const list = preview ? services.slice(0, 3) : services;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {list.map((s, i) => (
        <motion.div
          key={s.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <Card>
            <img src={s.photo} alt={s.name} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-bold text-navy mb-2">{s.name}</h3>
              <div className="mb-3">
                {s.equipment.map((e) => <EquipmentTag key={e}>{e}</EquipmentTag>)}
              </div>
              <p className="text-sm text-slate mb-4">{s.description}</p>
              <Link
                to={`/fleet?cat=${s.fleetCategory}`}
                className="text-sky font-semibold text-sm hover:underline"
              >
                View matching fleet →
              </Link>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}