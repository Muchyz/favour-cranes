import SectionHeading from "../components/ui/SectionHeading.jsx";
import { news } from "../data/news.js";
import Card from "../components/ui/Card.jsx";

export default function News() {
  return (
    <div className="section-pad max-w-5xl mx-auto">
      <SectionHeading eyebrow="Updates" title="News & Insights" />

      <div className="grid md:grid-cols-3 gap-6">
        {news.map((n) => (
          <Card key={n.id}>
            <img src={n.image} alt={n.title} className="h-44 w-full object-cover" />
            <div className="p-5">
              <p className="text-xs text-gray-500 mb-1">
                {new Date(n.date).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
              </p>
              <h3 className="font-bold text-navy mb-2">{n.title}</h3>
              <p className="text-sm text-slate">{n.excerpt}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}