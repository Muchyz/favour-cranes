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
        </div>
      </div>
    </div>
    </>
  );
}