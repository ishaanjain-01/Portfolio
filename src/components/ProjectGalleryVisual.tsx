import React from 'react';
import { 
  Sparkles, 
  Globe2, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  BarChart3, 
  CheckCircle2, 
  ShoppingBag, 
  Flame, 
  Award, 
  ExternalLink,
  Search,
  Package,
  FileText,
  Repeat,
  PieChart,
  DollarSign,
  ArrowRight,
  Clock,
  Zap,
  Mail
} from 'lucide-react';
import { OmniSpendLiveDemo } from './OmniSpendLiveDemo';

interface Props {
  visualKey: string;
  title: string;
}

export const ProjectGalleryVisual: React.FC<Props> = ({ visualKey, title }) => {
  // Render high-fidelity graphic artifacts based on visualKey
  switch (visualKey) {
    case 'omnispend-parser':
      return (
        <div className="w-full">
          <OmniSpendLiveDemo compact />
        </div>
      );

    case 'omnispend-dashboard':
      return (
        <div className="min-h-[18rem] w-full bg-gradient-to-b from-[#0e1426] to-[#080d1a] rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-indigo-500/30 relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between border-b border-indigo-500/20 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-xs font-mono text-indigo-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-indigo-400" />
                OmniSpend Financial Health & Burn Dashboard
              </span>
            </div>
            <a
              href="https://omnispendtracker.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-indigo-600/30 text-indigo-300 hover:text-white border border-indigo-500/40 flex items-center gap-1 transition-colors"
            >
              <span>omnispendtracker.lovable.app</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-3">
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Monthly Total</span>
              <span className="text-lg font-mono font-extrabold text-white">₹34,850</span>
              <span className="text-[10px] text-emerald-400 font-mono block">↓ 12% vs last month</span>
            </div>
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Recurring Spends</span>
              <span className="text-lg font-mono font-extrabold text-indigo-300">₹5,420</span>
              <span className="text-[10px] text-slate-400 font-mono block">6 active subs</span>
            </div>
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">AI Discretionary</span>
              <span className="text-lg font-mono font-extrabold text-amber-300">₹29,430</span>
              <span className="text-[10px] text-slate-400 font-mono block">Food, Transit & Retail</span>
            </div>
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Savings Runway</span>
              <span className="text-lg font-mono font-extrabold text-emerald-400">94 / 100</span>
              <span className="text-[10px] text-emerald-300 font-mono block">Optimal Health</span>
            </div>
          </div>

          <div className="space-y-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
              Real-Time Categorical Expense Allocation
            </span>
            <div className="w-full h-3 bg-slate-900 rounded-full flex overflow-hidden border border-slate-800">
              <div style={{ width: '38%' }} className="bg-amber-500" title="Food & Dining (38%)" />
              <div style={{ width: '22%' }} className="bg-rose-500" title="Entertainment & Subscriptions (22%)" />
              <div style={{ width: '18%' }} className="bg-emerald-500" title="Travel & Transit (18%)" />
              <div style={{ width: '14%' }} className="bg-sky-500" title="Shopping & Retail (14%)" />
              <div style={{ width: '8%' }} className="bg-violet-500" title="Utilities & Cloud (8%)" />
            </div>
            <div className="flex flex-wrap items-center justify-between text-[10px] text-slate-300 font-mono pt-1">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" /> Food & Dining 38%</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500" /> Subscriptions 22%</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Rides 18%</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-sky-500" /> Shopping 14%</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center justify-between border-t border-indigo-500/20 pt-2.5 mt-2">
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              100% Zero Manual Spreadsheets
            </span>
            <span className="font-mono text-indigo-300">Syncs Live with Gmail & SMS</span>
          </div>
        </div>
      );

    case 'omnispend-recurring':
      return (
        <div className="min-h-[18rem] w-full bg-gradient-to-b from-[#0c1222] to-[#070b16] rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-violet-500/30 relative overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between border-b border-violet-500/20 pb-3">
            <div className="flex items-center gap-2">
              <Repeat className="w-4 h-4 text-violet-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="text-xs font-mono text-violet-300 font-bold uppercase tracking-wider">
                Automated Recurring Spend & Subscription Engine
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/20 text-violet-300">
              Predictive Cadence
            </span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold text-xs">
                  N
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Netflix Premium UHD</span>
                  <span className="text-[10px] text-slate-400 font-mono">Cadence: Monthly • Next: 12-Apr</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-white font-mono block">₹649 / mo</span>
                <span className="text-[9px] text-emerald-400 font-mono">Auto-Tracked</span>
              </div>
            </div>

            <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center font-bold text-xs">
                  A
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Amazon Web Services (AWS)</span>
                  <span className="text-[10px] text-slate-400 font-mono">Cadence: Monthly • Next: 02-Apr</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-white font-mono block">$28.40 / mo</span>
                <span className="text-[9px] text-emerald-400 font-mono">Auto-Tracked</span>
              </div>
            </div>

            <div className="bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-xs">
                  S
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Spotify Premium Duo</span>
                  <span className="text-[10px] text-slate-400 font-mono">Cadence: Monthly • Next: 19-Apr</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-white font-mono block">₹149 / mo</span>
                <span className="text-[9px] text-emerald-400 font-mono">Auto-Tracked</span>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center justify-between border-t border-violet-500/20 pt-2.5 mt-2">
            <span>Eliminates zombie subscriptions & unexpected auto-debits</span>
            <a
              href="https://omnispendtracker.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-300 hover:text-white font-semibold flex items-center gap-1 transition-colors"
            >
              <span>Try Live in App</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      );

    case 'ora-pyramid':
      return (
        <div className="h-64 sm:h-72 w-full bg-gradient-to-b from-[#130d1d] to-[#0a0710] rounded-2xl p-4 flex flex-col justify-between border border-violet-500/20 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Olfactory Scent Pyramid Architecture
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-500/20 text-violet-300">
              Extrait de Parfum
            </span>
          </div>

          <div className="space-y-2.5 my-auto max-w-md mx-auto w-full">
            {/* Top Notes */}
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-2.5 text-center">
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block mb-0.5">
                Top Notes (Instant Allure)
              </span>
              <p className="text-xs font-medium text-white">
                Roasted Tonka Bean • Bitter Almond Blossom • Bergamot Zest
              </p>
            </div>
            {/* Heart Notes */}
            <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-2.5 text-center">
              <span className="text-[10px] font-bold text-rose-300 uppercase tracking-wider block mb-0.5">
                Heart Notes (Gourmand Core)
              </span>
              <p className="text-xs font-medium text-white">
                Toasted Hazelnut Cream • Madagascar Vanilla Orchid • Caramelized Sugar
              </p>
            </div>
            {/* Base Notes */}
            <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-2.5 text-center">
              <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-wider block mb-0.5">
                Base Notes (12hr+ Sillage)
              </span>
              <p className="text-xs font-medium text-white">
                Molten Golden Amber • Aged Mysore Sandalwood • Cashmere Musk
              </p>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center justify-between border-t border-violet-500/15 pt-2">
            <span>Formula: 26% Perfume Concentration</span>
            <span className="font-mono text-violet-300">Independently Formulated &amp; Scaled</span>
          </div>
        </div>
      );

    case 'ora-bottle':
      return (
        <div className="h-64 sm:h-72 w-full bg-[#0d0f17] rounded-2xl p-5 flex flex-col justify-between border border-slate-800 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-indigo-400 font-bold uppercase">
              Packaging & Flacon Engineering
            </span>
            <span className="text-[10px] font-mono text-slate-400">100ml Heavy Glass</span>
          </div>

          <div className="flex items-center justify-center my-auto gap-6">
            {/* Flacon Graphic */}
            <div className="w-24 h-40 bg-gradient-to-b from-amber-500/20 via-violet-900/30 to-amber-950/40 rounded-xl border-2 border-amber-400/40 p-2 flex flex-col justify-between items-center shadow-2xl relative backdrop-blur-sm">
              <div className="w-8 h-4 bg-amber-400/80 rounded-t-sm shadow-md" />
              <div className="text-center my-auto">
                <span className="text-[9px] tracking-widest uppercase font-serif font-bold text-amber-200 block">
                  ORA
                </span>
                <span className="text-[7px] tracking-widest text-slate-300 uppercase">
                  Gourmand
                </span>
              </div>
              <span className="text-[8px] font-mono text-amber-300/80">PARFUM</span>
            </div>

            {/* Packaging Specifications */}
            <div className="text-xs space-y-2">
              <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                <span className="text-indigo-400 font-bold block text-[11px]">Material</span>
                <span className="text-slate-300">French flint glass + solid brass atomizer</span>
              </div>
              <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                <span className="text-indigo-400 font-bold block text-[11px]">Closure</span>
                <span className="text-slate-300">Magnetic click precision cap</span>
              </div>
              <div className="bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                <span className="text-indigo-400 font-bold block text-[11px]">Sustainability</span>
                <span className="text-slate-300">FSC certified recyclable outer rigid box</span>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800 pt-2">
            <span>D2C Mass Premium Positioning</span>
            <span className="text-emerald-400 font-semibold">Target Price: ₹3,500 – ₹4,800</span>
          </div>
        </div>
      );

    case 'ora-funnel':
      return (
        <div className="h-64 sm:h-72 w-full bg-[#0a0f1d] rounded-2xl p-5 flex flex-col justify-between border border-indigo-500/20 relative">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-indigo-400 font-bold uppercase">
              Omnichannel GTM Launch Engine
            </span>
            <span className="text-[10px] font-mono text-emerald-400">Targeting High LTV</span>
          </div>

          <div className="grid grid-cols-3 gap-2.5 my-auto">
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Phase 1</span>
              <h5 className="text-xs font-bold text-white mb-1">Discovery Discovery</h5>
              <p className="text-[11px] text-slate-400 leading-tight">Discovery sample kit (5x2ml) for risk-free trial</p>
            </div>
            <div className="bg-slate-900/90 p-3 rounded-xl border border-indigo-500/40 text-center shadow-lg">
              <span className="text-[10px] font-bold text-indigo-400 uppercase block mb-1">Phase 2</span>
              <h5 className="text-xs font-bold text-white mb-1">Full Flacon Conversion</h5>
              <p className="text-[11px] text-slate-400 leading-tight">100% discovery kit voucher credited to 100ml purchase</p>
            </div>
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Phase 3</span>
              <h5 className="text-xs font-bold text-white mb-1">Collectors Club</h5>
              <p className="text-[11px] text-slate-400 leading-tight">Private seasonal releases & GCC retail partner stockists</p>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800 pt-2">
            <span>Primary Channels: Shopify Plus • Meta Ads • Creators</span>
            <span className="font-mono text-indigo-400">Target ROAS: 3.5X+</span>
          </div>
        </div>
      );

    case 'amazon-dashboard':
      return (
        <div className="h-64 sm:h-72 w-full bg-[#080d1a] rounded-2xl p-5 flex flex-col justify-between border border-amber-500/20 font-mono relative">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs text-amber-400 font-bold uppercase flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5" />
              Amazon Europe Unified Account (Firetech)
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Account Status: Healthy
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2 my-auto text-center">
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Amazon.de</span>
              <span className="text-sm font-bold text-white">€11,480</span>
              <span className="text-[9px] text-emerald-400 block">Top Volume</span>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Amazon.co.uk</span>
              <span className="text-sm font-bold text-white">£5,240</span>
              <span className="text-[9px] text-indigo-400 block">High Margin</span>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Amazon.fr</span>
              <span className="text-sm font-bold text-white">€3,920</span>
              <span className="text-[9px] text-emerald-400 block">Direct Merchant</span>
            </div>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 block">Amazon.it/es</span>
              <span className="text-sm font-bold text-white">€2,850</span>
              <span className="text-[9px] text-slate-400 block">Cross-Border</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
            <span>Total Gross: ₹35 Lakhs+ (€20K+)</span>
            <span className="text-emerald-400 font-bold">Net Profit: Double-Digit %</span>
          </div>
        </div>
      );

    case 'amazon-research':
      return (
        <div className="h-64 sm:h-72 w-full bg-[#080d1a] rounded-2xl p-5 flex flex-col justify-between border border-indigo-500/20 font-mono relative">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs text-indigo-400 font-bold uppercase flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5" />
              Market Research &amp; Pricing Matrix
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              Pan-European Demand
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 my-auto">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 uppercase block mb-1">Competitor Scan</span>
              <span className="text-xs font-bold text-white block">Price Elasticity</span>
              <span className="text-[10px] text-indigo-300 block mt-1">Underserved Gaps</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 uppercase block mb-1">Product Selection</span>
              <span className="text-xs font-bold text-white block">High Velocity</span>
              <span className="text-[10px] text-emerald-400 block mt-1">Margin-Optimized</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 uppercase block mb-1">Customer Service</span>
              <span className="text-xs font-bold text-white block">5-Star Feedback</span>
              <span className="text-[10px] text-indigo-400 block mt-1">Fast Response SLA</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800">
            <span>Focus: Discovery • Pricing • Quality Support</span>
            <span className="text-emerald-400 font-bold">Audited Profitability</span>
          </div>
        </div>
      );

    case 'zomato-roas':
      return (
        <div className="h-64 sm:h-72 w-full bg-[#110c14] rounded-2xl p-5 flex flex-col justify-between border border-rose-500/20 relative">
          <div className="flex items-center justify-between border-b border-rose-500/20 pb-2">
            <span className="text-xs font-mono text-rose-400 font-bold uppercase flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              Zomato Dining Ads Performance Console
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
              Kolkata Portfolio
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 my-auto text-center">
            <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase block">Average ROAS</span>
              <span className="text-xl font-extrabold text-white">7.0X – 10.0X</span>
              <span className="text-[10px] text-emerald-400 block">Return on Ad Spend</span>
            </div>
            <div className="bg-slate-950/80 p-3 rounded-xl border border-rose-500/30">
              <span className="text-[10px] text-slate-400 uppercase block">Sales Attainment</span>
              <span className="text-xl font-extrabold text-rose-400">100%</span>
              <span className="text-[10px] text-rose-300 block">All Quarters (Sole Achiever)</span>
            </div>
            <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase block">City Share</span>
              <span className="text-xl font-extrabold text-white">~20%</span>
              <span className="text-[10px] text-indigo-400 block">Of Kolkata Dining Ads</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800 pt-2">
            <span>Portfolio: Microbreweries, Fine Dining & Bistros</span>
            <span className="text-white font-mono">100+ Merchants Onboarded</span>
          </div>
        </div>
      );

    case 'linc-map':
      return (
        <div className="h-64 sm:h-72 w-full bg-[#08111e] rounded-2xl p-5 flex flex-col justify-between border border-sky-500/20 relative">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-mono text-sky-400 font-bold uppercase flex items-center gap-1.5">
              <Globe2 className="w-3.5 h-3.5" />
              Linc Global Export Footprint (50+ Countries)
            </span>
            <span className="text-[10px] font-mono text-emerald-400">₹2 Cr+ Launch Rev</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-auto text-xs">
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
              <span className="text-sky-400 font-bold block text-[11px]">APAC</span>
              <span className="text-slate-300">14 Countries</span>
              <p className="text-[10px] text-slate-400">Modern Trade chains</p>
            </div>
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
              <span className="text-sky-400 font-bold block text-[11px]">Middle East & Africa</span>
              <span className="text-slate-300">18 Countries</span>
              <p className="text-[10px] text-slate-400">Distributor expansion</p>
            </div>
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
              <span className="text-sky-400 font-bold block text-[11px]">Europe</span>
              <span className="text-slate-300">12 Countries</span>
              <p className="text-[10px] text-slate-400">Paperworld Frankfurt</p>
            </div>
            <div className="bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
              <span className="text-sky-400 font-bold block text-[11px]">Latin America</span>
              <span className="text-slate-300">8 Countries</span>
              <p className="text-[10px] text-slate-400">Export packaging</p>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800 pt-2">
            <span>Exhibition Savings: ₹35 Lakhs Negotiated</span>
            <span className="text-emerald-400 font-semibold">3 Quarters of Execution</span>
          </div>
        </div>
      );

    case 'research-turnitin':
      return (
        <div className="h-64 sm:h-72 w-full bg-[#0d131f] rounded-2xl p-5 flex flex-col justify-between border border-indigo-500/20 font-mono relative">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs text-indigo-400 font-bold uppercase flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" />
              Turnitin Originality Report & Dissertation
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
              91% Score (9% Match)
            </span>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 my-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-white">Title: Women CEOs & Corporate Performance in India</span>
              <span className="text-xs text-slate-400">24 Pages</span>
            </div>
            <div className="space-y-1 text-xs text-slate-300">
              <p>• Primary Survey: 190 Validated Corporate Respondents</p>
              <p>• Longitudinal Case Studies: Axis Bank, Britannia, Welspun, Lupin, HCL</p>
              <p>• Supervisor: Prof. Monojit Dutta, St. Xavier's University</p>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800 pt-2">
            <span>Degree: B.Com (Hons in Finance)</span>
            <span className="text-indigo-400 font-bold">First Class with Distinction</span>
          </div>
        </div>
      );

    case 'leo-relief':
      return (
        <div className="h-64 sm:h-72 w-full bg-[#0c1410] rounded-2xl p-5 flex flex-col justify-between border border-emerald-500/20 relative">
          <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
            <span className="text-xs font-mono text-emerald-400 font-bold uppercase flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Civic Humanitarian Mission (Leo Club Sealdah)
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
              Presidential Tenure
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 my-auto text-center">
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase block">Citizens Fed</span>
              <span className="text-xl font-extrabold text-emerald-400">5,000+</span>
              <span className="text-[10px] text-slate-400 block">Nutritious hot meals</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase block">Youth Mobilized</span>
              <span className="text-xl font-extrabold text-white">20+</span>
              <span className="text-[10px] text-slate-400 block">Active volunteers</span>
            </div>
            <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
              <span className="text-[10px] text-slate-400 uppercase block">Affiliation</span>
              <span className="text-sm font-extrabold text-indigo-300 mt-1 block">Lions Clubs</span>
              <span className="text-[10px] text-slate-400 block">District 322B2</span>
            </div>
          </div>

          <div className="text-[11px] text-slate-400 flex items-center justify-between border-t border-slate-800 pt-2">
            <span>Scope: Hunger relief, blanket distribution & health camps</span>
            <span className="text-emerald-400 font-semibold">Awarded Best Club</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="h-64 sm:h-72 w-full bg-slate-950 rounded-2xl p-6 flex flex-col justify-between border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-indigo-400 uppercase">{title}</span>
            <span className="text-[10px] font-mono text-slate-400">Verified Artifact</span>
          </div>
          <div className="my-auto text-center">
            <Layers className="w-10 h-10 text-indigo-400/60 mx-auto mb-2" />
            <p className="text-sm font-semibold text-white">{title}</p>
            <p className="text-xs text-slate-400 mt-1">Detailed operational diagram & metadata documentation</p>
          </div>
          <div className="text-[11px] text-slate-400 border-t border-slate-800 pt-2 flex justify-between">
            <span>Official Record</span>
            <span className="text-emerald-400">Verified</span>
          </div>
        </div>
      );
  }
};
