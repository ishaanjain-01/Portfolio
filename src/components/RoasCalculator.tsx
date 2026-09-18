import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sliders, Calculator, TrendingUp, DollarSign, Store, Sparkles, HelpCircle, CheckCircle } from 'lucide-react';

export const RoasCalculator: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'zomato' | 'ecommerce'>('zomato');

  // Zomato Simulator States
  const [adSpend, setAdSpend] = useState<number>(45000); // ₹
  const [avgTicket, setAvgTicket] = useState<number>(1400); // ₹
  const [roasMultiple, setRoasMultiple] = useState<number>(8.5); // 8.5x (within 7-10x range)
  const [foodCostRatio, setFoodCostRatio] = useState<number>(35); // 35%

  // Calculated Zomato Outputs
  const projectedRevenue = Math.round(adSpend * roasMultiple);
  const incrementalTables = Math.round(projectedRevenue / avgTicket);
  const estimatedCost = adSpend + Math.round(projectedRevenue * (foodCostRatio / 100));
  const netMerchantProfit = projectedRevenue - estimatedCost;

  // E-Commerce Simulator States
  const [monthlyOrders, setMonthlyOrders] = useState<number>(320);
  const [aovEur, setAovEur] = useState<number>(42); // €
  const [cogsPercent, setCogsPercent] = useState<number>(38); // %
  const [amazonFeesPercent, setAmazonFeesPercent] = useState<number>(25); // %

  const grossEur = monthlyOrders * aovEur;
  const netEur = Math.round(grossEur * (1 - (cogsPercent + amazonFeesPercent) / 100));
  const inrConversionRate = 92; // 1 EUR = ~92 INR
  const annualizedInr = Math.round(grossEur * 12 * inrConversionRate);

  return (
    <section id="simulator" className="py-20 md:py-28 bg-[#0e1424] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Sliders className="w-3.5 h-3.5" />
              <span>Interactive Growth Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Interactive Commercial & <span className="italic font-normal text-indigo-300">ROAS Simulator</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-lg text-sm sm:text-base font-sans leading-relaxed">
            Test the math behind Ishaan's 7-10X ROAS portfolio at Zomato and 7-figure cross-border European e-commerce unit economics.
          </p>
        </div>

        {/* Mode Switcher */}
        <div className="flex p-1.5 bg-slate-900 border border-slate-800 rounded-2xl max-w-md mx-auto mb-10">
          <button
            id="mode-zomato-btn"
            onClick={() => setActiveMode('zomato')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              activeMode === 'zomato'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Zomato 7-10X ROAS Model</span>
          </button>
          <button
            id="mode-ecommerce-btn"
            onClick={() => setActiveMode('ecommerce')}
            className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
              activeMode === 'ecommerce'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Store className="w-4 h-4" />
            <span>Cross-Border EU Model</span>
          </button>
        </div>

        {/* Interactive Sandbox */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {activeMode === 'zomato' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders Column */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-300">
                      Monthly Dining Ad Spend (₹)
                    </label>
                    <span className="text-sm font-bold font-mono text-indigo-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                      ₹{adSpend.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <input
                    id="slider-ad-spend"
                    type="range"
                    min="10000"
                    max="200000"
                    step="5000"
                    value={adSpend}
                    onChange={(e) => setAdSpend(Number(e.target.value))}
                    className="w-full accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>₹10,000 (Small Bistro)</span>
                    <span>₹2,00,000 (Multi-Outlet Group)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-300">
                      Target ROAS Multiple (Based on Ishaan's 7-10X Track Record)
                    </label>
                    <span className="text-sm font-bold font-mono text-emerald-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                      {roasMultiple.toFixed(1)}X ROAS
                    </span>
                  </div>
                  <input
                    id="slider-roas-multiple"
                    type="range"
                    min="5"
                    max="12"
                    step="0.5"
                    value={roasMultiple}
                    onChange={(e) => setRoasMultiple(Number(e.target.value))}
                    className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>5.0X Baseline</span>
                    <span>8.5X Avg (Ishaan's Portfolio)</span>
                    <span>12.0X Peak Carnival</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-300">
                      Average Dining Table Bill Size (₹)
                    </label>
                    <span className="text-sm font-bold font-mono text-white bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                      ₹{avgTicket.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <input
                    id="slider-avg-ticket"
                    type="range"
                    min="600"
                    max="3500"
                    step="100"
                    value={avgTicket}
                    onChange={(e) => setAvgTicket(Number(e.target.value))}
                    className="w-full accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-400 leading-relaxed">
                  <strong className="text-slate-300 font-semibold">Real-World Application:</strong> At Zomato Kolkata, Ishaan used this exact algorithmic pacing and target CPC/ROAS structure to scale Kolkata's largest dining ads portfolio, contributing ~20% of city dining ad revenue with 100% quota attainment.
                </div>
              </div>

              {/* Real-time Metric Dashboard Column */}
              <div className="lg:col-span-5 bg-gradient-to-b from-slate-950 to-[#0b0f19] border border-indigo-500/30 rounded-2xl p-6 sm:p-7 shadow-xl space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                    Projected Merchant Impact
                  </span>
                  <span className="text-[11px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10">
                    Live Calculation
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block mb-1">
                    Estimated Direct Monthly Revenue
                  </span>
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono block">
                    ₹{projectedRevenue.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-slate-400 mt-1 block">
                    Direct top-line generated from Zomato Dining Out ads
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Incremental Tables</span>
                    <span className="text-xl font-bold text-white font-mono">
                      ~{incrementalTables.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">Net Merchant Profit</span>
                    <span className="text-xl font-bold text-emerald-400 font-mono">
                      ₹{netMerchantProfit.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200">
                  ⚡ <strong>Ishaan's Track Record:</strong> Delivered 7-10X ROAS consistently across casual bistros, microbreweries, and high-end fine dining accounts.
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders Column */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-300">
                      Monthly European Orders (Units Shipped)
                    </label>
                    <span className="text-sm font-bold font-mono text-indigo-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                      {monthlyOrders} orders/mo
                    </span>
                  </div>
                  <input
                    id="slider-eu-orders"
                    type="range"
                    min="50"
                    max="1000"
                    step="25"
                    value={monthlyOrders}
                    onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                    className="w-full accent-indigo-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-semibold text-slate-300">
                      Average Order Value (€ AOV)
                    </label>
                    <span className="text-sm font-bold font-mono text-emerald-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                      €{aovEur}
                    </span>
                  </div>
                  <input
                    id="slider-eu-aov"
                    type="range"
                    min="15"
                    max="100"
                    step="1"
                    value={aovEur}
                    onChange={(e) => setAovEur(Number(e.target.value))}
                    className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-400 leading-relaxed">
                  <strong className="text-slate-300 font-semibold">Real-World Application:</strong> Under Door Step Essentials EU (Firetech), Ishaan bootstrapped multi-currency operations spanning Germany, the UK, France, and Italy, generating ₹35 Lakh+ with verified Amazon Europe Seller statements.
                </div>
              </div>

              {/* Real-time Metric Dashboard Column */}
              <div className="lg:col-span-5 bg-gradient-to-b from-slate-950 to-[#0b0f19] border border-emerald-500/30 rounded-2xl p-6 sm:p-7 shadow-xl space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    E-Commerce Annualized Run-Rate
                  </span>
                  <span className="text-[11px] text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10">
                    7-Figure Net
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block mb-1">
                    Gross Monthly Revenue (€)
                  </span>
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono block">
                    €{grossEur.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-400 mt-1 block">
                    ~₹{Math.round(grossEur * inrConversionRate).toLocaleString('en-IN')} / month
                  </span>
                </div>

                <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block mb-1">
                    Annualized Run Rate in INR
                  </span>
                  <span className="text-2xl font-black text-emerald-400 font-mono">
                    ₹{(annualizedInr / 100000).toFixed(1)} Lakhs / year
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-1">
                    Net monthly operating profit post COGS & marketplace fees: ~€{netEur.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
