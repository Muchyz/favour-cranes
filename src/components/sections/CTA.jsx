import Button from "../ui/Button.jsx";

export default function CTA() {
  return (
    <div className="bg-brandred text-white text-center py-14 px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Lift Your Next Project?</h2>
      <p className="mb-6 text-white/90">Talk to our team today for a fast, transparent quote.</p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Button to="/contact" variant="outline" className="bg-white text-brandred border-white">
          Get a Free Quote
        </Button>
        <a href="tel:0712919576" className="btn-outline border-white text-white hover:bg-white hover:text-brandred">
          Call Now
        </a>
      </div>
    </div>
  );
}