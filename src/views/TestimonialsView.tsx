/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Star, CheckCircle, MessageSquare, Sparkles, Quote } from "lucide-react";
import { REVIEWS } from "../data";
import { Review } from "../types";
import SEO from "../components/SEO";

export default function TestimonialsView() {
  const [reviewsList] = useState<Review[]>(() => {
    const saved = localStorage.getItem("hari_automobiles_reviews");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return [...parsed, ...REVIEWS];
      } catch (e) {
        return REVIEWS;
      }
    }
    return REVIEWS;
  });

  const [selectedTag, setSelectedTag] = useState<string>("All");
  const [sortBy, setSortBy] = useState<string>("Most relevant");

  return (
    <div id="testimonials-page-view" className="bg-slate-900 text-white font-sans min-h-screen py-16 px-4 md:px-8">
      <SEO 
        title="Customer Reviews & Diagnostics | Hari Automobiles" 
        description="Read real reviews from Bangalore car owners about Hari Automobiles. See our expert diagnostics, before-and-after cases, and verifiable service logs."
      />
      <div className="mx-auto max-w-5xl">
        
        {/* On-Page Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono tracking-widest text-amber-500 uppercase block mb-2 font-bold">
            Proof of Excellence
          </span>
          <h1 className="text-3xl font-black md:text-5xl tracking-tight text-white uppercase">
            Customer Reviews & Diagnostics
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Real feedback from Bangalore passenger car owners. Explore before & after structural records representing complex mechanical challenges resolved at our laboratory.
          </p>
        </div>

        {/* Global Google Reviews Indicator / Trust Badge Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-center select-none">
          <a 
            href="https://www.google.com/search?q=hari+automobiles"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-950 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition cursor-pointer flex flex-col justify-center items-center group"
          >
            <span className="block text-4xl font-mono font-black text-white group-hover:text-amber-400 transition-colors">4.9 / 5</span>
            <div className="flex text-amber-500 my-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-500" />
              ))}
            </div>
            <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider group-hover:text-white transition-colors">
              303 Google Reviews ↗
            </span>
          </a>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center items-center">
            <span className="block text-4xl font-mono font-black text-amber-500">99.2%</span>
            <span className="block text-xs font-bold text-white mt-1">First-Time Resolution Rate</span>
            <span className="block text-[10px] text-slate-500 mt-0.5">Accurate diagnostics via factory codes</span>
          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col justify-center items-center">
            <span className="block text-4xl font-mono font-black text-white">0%</span>
            <span className="block text-xs font-bold text-white mt-1">Hidden Charge Disputes</span>
            <span className="block text-[10px] text-slate-500 mt-0.5">Transparent pre-order visual receipts</span>
          </div>
        </div>

        {/* Before & After Cases Showcase */}
        <div className="mb-20">
          <div className="mb-8">
            <h2 className="text-xl font-extrabold text-white sm:text-2xl flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span>Symptom / Resolution Cases</span>
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Visual comparisons of actual mechanical issues and custom fixes achieved by our senior specialists.
            </p>
          </div>

          <div className="space-y-8">
            {reviewsList.filter(r => r.beforeAfter).map((rev) => (
              <div 
                key={rev.id}
                className="bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 space-y-6"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-900 pb-4 gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-bold">Case Study: {rev.vehicle}</span>
                    <h3 className="text-base font-bold text-white mt-0.5">Diagnosed for Customer: {rev.author}</h3>
                  </div>
                  <div className="flex text-amber-500 text-xs shrink-0 items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-emerald-500" />
                    <span className="font-bold text-emerald-500">Fixed & Verified</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <span className="inline-block rounded bg-red-500/10 border border-red-500/20 px-2 py-0.5 text-[10px] font-mono text-red-400 uppercase font-bold">
                      Before (Symptom Reported)
                    </span>
                    <div className="h-44 w-full rounded-xl overflow-hidden relative border border-slate-900 bg-slate-950">
                      <img
                        src={rev.beforeAfter?.beforeImg}
                        alt="Damaged component visual"
                        className="h-full w-full object-cover opacity-60"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed italic">
                      "{rev.beforeAfter?.beforeDesc}"
                    </p>
                  </div>

                  <div className="space-y-3">
                    <span className="inline-block rounded bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-mono text-emerald-400 uppercase font-bold">
                      After (Expert Restoration)
                    </span>
                    <div className="h-44 w-full rounded-xl overflow-hidden relative border border-slate-900 bg-slate-950">
                      <img
                        src={rev.beforeAfter?.afterImg}
                        alt="Restored component visual"
                        className="h-full w-full object-cover opacity-80"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {rev.beforeAfter?.afterDesc}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed italic">
                  "{rev.text}"
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="border-t border-slate-850 pt-16 mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 px-2 gap-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-amber-500 uppercase block mb-1 font-bold">
                EXPERIENCE LOGS
              </span>
              <h3 className="text-xl font-extrabold text-white sm:text-2xl tracking-normal uppercase">
                Recent Verifiable Service Logs
              </h3>
            </div>
            
            <div className="mt-4 md:mt-0 shrink-0">
              <a
                href="https://www.google.com/search?q=hari+automobiles"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-extrabold px-4 py-2.5 text-xs transition shadow-md cursor-pointer"
              >
                <span>Write Review on Google ↗</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviewsList.filter(r => !r.beforeAfter).map((rev) => (
              <div 
                key={rev.id}
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex flex-col relative"
              >
                <div className="absolute top-4 right-6 opacity-5">
                  <Quote className="h-8 w-8 text-amber-500" />
                </div>
                <div className="flex text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-3 w-3 ${i < rev.rating ? "fill-amber-500" : "text-slate-800"}`} />
                  ))}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed italic mb-6 flex-grow">
                  "{rev.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-900">
                  <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold text-[10px]">
                    {rev.author.charAt(0)}
                  </div>
                  <div>
                    <span className="block text-[11px] font-bold text-white">{rev.author}</span>
                    <span className="block text-[9px] text-slate-500 uppercase font-mono">{rev.vehicle}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
