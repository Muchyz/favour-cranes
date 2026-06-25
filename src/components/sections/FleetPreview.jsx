import { motion } from "framer-motion";
import { fleet } from "../../data/fleet.js";
import Card from "../ui/Card.jsx";

export default function FleetPreview() {
  const items = fleet.slice(0, 6);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {items.map((f, i) => (
        <motion.div
          key={f.id}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
        >
          <Card>
            <img src={f.photo} alt={f.name} className="h-28 w-full object-cover" />
            <p className="text-xs font-semibold text-navy p-2 text-center">{f.name}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}