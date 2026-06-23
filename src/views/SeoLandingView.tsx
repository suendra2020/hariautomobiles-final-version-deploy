/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { useParams } from "react-router-dom";
import { 
  MapPin, Phone, MessageSquare, ShieldCheck, 
  Star, Wrench, Clock, Navigation
} from "lucide-react";
import { SEO_DATA } from "../data";
import SEO from "../components/SEO";

interface LandingPageData {
  name: string;
  slug: string;
  distance: string;
  timeLine: string;
  zipCode: string;
  primaryKeyword: string;
  metaTitle: string;
  metaDesc: string;
  introHeading: string;
  introBody: string;
  uspHighlight: string;
  faq1Question: string;
  faq1Answer: string;
}

const LOCATION_PAGES: LandingPageData[] = [
  {
    name: "Whitefield",
    slug: "car-service-whitefield",
    distance: "16 km from Kada Agrahara workshop",
    timeLine: "Within 45 mins driver arrival time",
    zipCode: "560066",
    primaryKeyword: "Car Service Whitefield",
    metaTitle: "Best Car Service Center in Whitefield Bangalore | Hari AutoMobiles",
    metaDesc: "Searching for high-quality Car Service in Whitefield? Independent Fiat & Jeep Specialist. Free premium pickup & drop-off for tech parks & residential villas.",
    introHeading: "Premium Multi-Brand Car Service & Repair in Whitefield, Bangalore",
    introBody: "Skip the heavy lines and premium markups at IT park dealership workshops. Hari AutoMobiles delivers dealergrade diagnostic scans, expert mechanical repairs, and robust suspension tuning for car owners located across Whitefield, Hope Farm, and Varthur.",
    uspHighlight: "Highly active free pickup & drop-off active for Prestige Shantiniketan, DivyaSree, and Brigade Tech Park blocks daily.",
    faq1Question: "How do you manage car pickup from Whitefield offices?",
    faq1Answer: "Our verified and insured technicians collect your car directly from your Whitefield IT office baseline basement or residential community parking."
  },
  {
    name: "Marathahalli",
    slug: "car-service-marathahalli",
    distance: "14 km from Kada Agrahara workshop",
    timeLine: "Within 40 mins driver arrival time",
    zipCode: "560037",
    primaryKeyword: "Best Car Service Center Marathahalli",
    metaTitle: "Affordable Car Repair & Service in Marathahalli | Hari AutoMobiles",
    metaDesc: "Get premium car repair in Marathahalli at affordable rates. Specialist in diesel motor repairs, clutch overhauls, and steering mechanics.",
    introHeading: "Professional independent Car Workshop near Marathahalli",
    introBody: "Damp and high-traffic conditions along the Outer Ring Road demand reliable vehicle health. Whether it's a hatchback throttle body cleaning or a premium diesel SUV timing belt replacement, we serve the entire Marathahalli zone.",
    uspHighlight: "Same-day express periodic servicing with authentic spares (Magneti Marelli, Mopar, Valeo) backed by an inspection warranty.",
    faq1Question: "Can I get on-site battery replacement near Marathahalli bridge?",
    faq1Answer: "Yes! We run active emergency response teams for flat car battery replacements, delivering genuine Exide or Amaron batteries within 60 minutes."
  }
];

interface SeoLandingViewProps {
  onOpenBooking: () => void;
}

export default function SeoLandingView({ onOpenBooking }: SeoLandingViewProps) {
  const { slug } = useParams<{ slug: string }>();
  
  const location = slug 
    ? LOCATION_PAGES.find(loc => loc.slug === slug) || LOCATION_PAGES[0]
    : LOCATION_PAGES[0];

  return (
    <div id="seo-landing-view" className="bg-slate-900 text-white font-sans min-h-screen py-16 px-4 md:px-8">
      <SEO 
        title={location.metaTitle} 
        description={location.metaDesc}
      />
      <div className="mx-auto max-w-5xl">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-4">
            <MapPin className="h-3 w-3" />
            <span>Serving {location.name}</span>
          </div>
          <h1 className="text-3xl font-black md:text-6xl tracking-tight text-white uppercase mb-6">
            {location.introHeading}
          </h1>
          <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {location.introBody}
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          <button 
            onClick={onOpenBooking}
            className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-amber-500 text-slate-950 font-black hover:bg-amber-400 transition shadow-xl shadow-amber-500/10"
          >
            <Clock className="h-5 w-5" />
            <span>Book Service Now</span>
          </button>
          <a 
            href={`tel:${SEO_DATA.phone.replace(/\s+/g, "")}`}
            className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-slate-950 border border-slate-800 text-white font-bold hover:bg-slate-900 transition"
          >
            <Phone className="h-5 w-5 text-amber-500" />
            <span>Call Workshop</span>
          </a>
          <a 
            href={`https://wa.me/${SEO_DATA.whatsapp.replace(/[+\s]/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-emerald-600 text-white font-bold hover:bg-emerald-500 transition shadow-xl shadow-emerald-600/10"
          >
            <MessageSquare className="h-5 w-5" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* USP Highlight */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-8 md:p-12 mb-20 text-center">
          <h2 className="text-2xl font-black text-white mb-4 uppercase">Special Offer for {location.name}</h2>
          <p className="text-amber-500 font-bold mb-0">{location.uspHighlight}</p>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="flex gap-4">
            <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-5 w-5 text-amber-500" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">Specialized Expertise</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Advanced diagnostics and repairs for Fiat, Jeep, and all major car brands using factory-grade tools.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
              <Navigation className="h-5 w-5 text-amber-500" />
            </div>
            <div>
              <h3 className="font-bold text-white mb-2">Doorstep Convenience</h3>
              <p className="text-xs text-slate-400 leading-relaxed">Free pick-up and drop-off service across {location.name} and surrounding Bangalore areas.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-slate-950 rounded-3xl border border-slate-800 p-8 md:p-12">
          <h2 className="text-2xl font-black text-white mb-8 uppercase">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-b border-slate-900 pb-6">
              <h4 className="font-bold text-white mb-3">Q: {location.faq1Question}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">A: {location.faq1Answer}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
