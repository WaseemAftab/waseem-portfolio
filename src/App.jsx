import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

const whatsappNumber = "971506309005";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Waseem,%20I%20want%20to%20discuss%20a%20marketing%20opportunity`;

const highlights = [
  { label: "Experience", value: "3+ Years UAE Market" },
  { label: "Specialization", value: "Performance Marketing & Meta Ads" },
  { label: "Industries", value: "Real Estate • Banking • Automotive" }
];

const clients = [
  "DAMAC Properties",
  "Danube Properties",
  "Reportage Properties",
  "Emirates NBD",
  "RAK Bank",
  "Luxury Car Rental Brands"
];

const caseStudies = [
  {
    id: "damac-lagoons",
    title: "DAMAC Lagoons",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    industry: "Real Estate",
    problem: "High competition in Dubai luxury property leads.",
    strategy: "Meta Ads funnel + premium creatives + investor targeting.",
    result: "Consistent qualified investor leads.",
    impact: "Positioned as premium waterfront lifestyle community.",
    metric: "High CTR • Strong Lead Quality"
  },
  {
    id: "danube-bay",
    title: "Danube Bay 102",
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d",
    industry: "Real Estate",
    problem: "Low conversion from traffic to inquiries.",
    strategy: "Landing page optimization + retargeting system.",
    result: "Improved conversion rate significantly.",
    impact: "Higher buyer intent pipeline.",
    metric: "Reduced CPL • Higher CTR"
  },
  {
    id: "emirates-nbd",
    title: "Emirates NBD Credit Cards",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
    industry: "Banking",
    problem: "Need for compliant scalable acquisition.",
    strategy: "Compliance-safe Meta Ads + structured funnel.",
    result: "High volume credit card applications.",
    impact: "Stable banking acquisition flow.",
    metric: "Consistent Monthly Leads"
  },
  {
    id: "car-rental",
    title: "Luxury Car Rental Campaigns",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    industry: "Automotive",
    problem: "Low booking conversions from social media.",
    strategy: "Reels marketing + retargeting + high intent ads.",
    result: "Increased booking inquiries.",
    impact: "Stronger ROI from paid ads.",
    metric: "Improved Conversion Rate"
  }
];

export default function AppleStylePortfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white text-black min-h-screen font-sans">

      <a href={whatsappLink} target="_blank" className="fixed bottom-6 right-6 bg-green-500 text-black p-4 rounded-full shadow-xl z-50">
        <MessageCircle />
      </a>

      <section className="flex flex-col items-center justify-center text-center px-6 py-32 bg-gradient-to-b from-white to-gray-100">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-semibold tracking-tight">
          Waseem Aftab
        </motion.h1>
        <p className="text-sm text-gray-600">+971 506 309 005 • Waseem.aftab18@gmail.com</p>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
          I help UAE real estate, banking, and automotive brands generate high-quality leads through Meta Ads and conversion systems.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {highlights.map((h, i) => (
            <div key={i} className="text-sm text-gray-700 border px-4 py-2 rounded-full bg-white shadow-sm">
              <b>{h.label}:</b> {h.value}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 text-center">
        <p className="text-gray-500 text-sm mb-6">Trusted exposure across UAE brands</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
          {clients.map((c, i) => (
            <span key={i} className="px-3 py-1 border rounded-full bg-gray-50">{c}</span>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Case Studies</h2>

        <div className="space-y-10">
          {caseStudies.map((c) => (
            <motion.div key={c.id} whileHover={{ scale: 1.01 }} onClick={() => setSelected(c)} className="cursor-pointer rounded-3xl overflow-hidden shadow-lg border bg-white">
              <div className="grid md:grid-cols-2">
                <img src={c.image} className="h-72 w-full object-cover" />

                <div className="p-10 flex flex-col justify-center">
                  <p className="text-sm text-gray-500">{c.industry}</p>
                  <h3 className="text-2xl font-semibold mt-2">{c.title}</h3>
                  <p className="text-gray-600 mt-4 text-sm">{c.metric}</p>
                  <p className="text-blue-600 mt-6 text-sm font-medium">View Case Study →</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6 z-50" onClick={() => setSelected(null)}>
            <motion.div className="bg-white max-w-2xl w-full p-8 rounded-3xl" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-2xl font-semibold">{selected.title}</h2>
              <p className="text-gray-500 mt-1">{selected.industry}</p>

              <div className="mt-6 space-y-3 text-sm text-gray-700">
                <p><b>Problem:</b> {selected.problem}</p>
                <p><b>Strategy:</b> {selected.strategy}</p>
                <p><b>Result:</b> {selected.result}</p>
                <p><b>Impact:</b> {selected.impact}</p>
                <p className="text-green-600 font-semibold">{selected.metric}</p>
              </div>

              <button onClick={() => setSelected(null)} className="mt-8 bg-black text-white px-6 py-3 rounded-full">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="text-center py-28 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-semibold">Let’s Build Your Next Campaign</h2>
        <p className="text-gray-500 mt-3">Available for marketing roles in Dubai / UAE</p>

        <a href={whatsappLink} className="mt-10 inline-block bg-black text-white px-8 py-3 rounded-full">
          Contact on WhatsApp
        </a>
      </section>

    </div>
  );
}
