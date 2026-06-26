import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    fetch("https://formspree.io/f/mrewqkvd", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(e.target),
    })
      .then((res) => {
        if (res.ok) {
          setSubmitted(true);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  };

  return (
    <>
      <Helmet>
        <title>Get a Free Quote | Contact Favour Cranes Limited – Nairobi</title>
        <meta name="description" content="Request a free crane hire or equipment rental quote. Call 0712 919 576 or email info@favourcranes.co.ke. Based in Embakasi, Nairobi – serving all of East Africa." />
        <link rel="canonical" href="https://www.favourcranes.co.ke/contact" />
      </Helmet>
    <div className="section-pad max-w-6xl mx-auto">
      <SectionHeading eyebrow="Get In Touch" title="Contact & Request a Quote" />

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-bold text-navy text-lg mb-4">Quote Request</h3>
          {submitted ? (
            <p className="text-green-600 font-semibold">
              Thank you! Your request has been sent — we'll be in touch shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <p className="text-red-600 font-semibold bg-red-50 border border-red-200 rounded-lg px-4 py-2">
                  Something went wrong. Please try again or call us at 0712 919 576.
                </p>
              )}
              <input name="name" required placeholder="Full Name" className="w-full border rounded-lg px-4 py-2" />
              <input name="email" type="email" required placeholder="Email Address" className="w-full border rounded-lg px-4 py-2" />
              <input name="phone" required placeholder="Phone Number" className="w-full border rounded-lg px-4 py-2" />
              <select name="equipment" className="w-full border rounded-lg px-4 py-2">
                <option value="">Equipment Type Needed</option>
                <option>Crane</option>
                <option>Forklift</option>
                <option>Telehandler</option>
                <option>Cherry Picker</option>
                <option>Scissor Lift</option>
                <option>Lowbed Transport</option>
              </select>
              <input name="tonnage" placeholder="Approx. Tonnage" className="w-full border rounded-lg px-4 py-2" />
              <input name="dates" placeholder="Project Dates" className="w-full border rounded-lg px-4 py-2" />
              <input name="location" placeholder="Project Location" className="w-full border rounded-lg px-4 py-2" />
              <input name="duration" placeholder="Duration" className="w-full border rounded-lg px-4 py-2" />
              <textarea name="message" placeholder="Additional Details" rows={4} className="w-full border rounded-lg px-4 py-2" />
              <button type="submit" className="btn-primary w-full justify-center">Submit Quote Request</button>
            </form>
          )}
        </div>

        <div>
          <h3 className="font-bold text-navy text-lg mb-4">Reach Us Directly</h3>
          <ul className="space-y-4 mb-8 text-slate">
            <li className="flex items-center gap-3"><Phone className="text-brandred" /> 0712 919 576</li>
            <li className="flex items-center gap-3"><Mail className="text-brandred" /> info@favourcranes.co.ke</li>
            <li className="flex items-start gap-3">
              <MapPin className="text-brandred mt-1" />
              Kimson Plaza, Eastern Bypass, Embakasi, Nairobi<br />P.O. Box 7456, 00100, Nairobi
            </li>
          </ul>
          <div className="rounded-xl overflow-hidden shadow-md h-64">
            <iframe
              title="Favour Cranes Location"
              className="w-full h-full"
              loading="lazy"
              src="https://maps.google.com/maps?q=Kimson%20Plaza%20Eastern%20Bypass%20Embakasi%20Nairobi&t=&z=14&ie=UTF8&iwloc=&output=embed"
            />
          </div>
          {/* Social Links */}
          <div className="mt-6">
            <p className="font-bold text-navy text-sm mb-3">Follow Us</p>
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/profile.php?id=61583458994898" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-110"
                style={{ background: "#1877F2" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.instagram.com/favourcranesltd?igsh=MWYzejRxaWdxd3UzOQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-110"
                style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
                </svg>
              </a>
              <a href="https://vm.tiktok.com/ZS96AXhJCArcm-jCykV/" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                className="w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-110"
                style={{ background: "#010101" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
              </a>
              <a href="https://wa.me/254712919576" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-110"
                style={{ background: "#25D366" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </a>
              <a href="mailto:info@favourcranes.co.ke" aria-label="Email"
                className="w-10 h-10 rounded-full flex items-center justify-center transition hover:scale-110"
                style={{ background: "#EA4335" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}