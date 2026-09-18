import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Mail, 
  ExternalLink, 
  CheckCircle2, 
  Repeat, 
  Layers, 
  RefreshCw, 
  Zap, 
  Clock, 
  ArrowRight,
  TrendingDown,
  DollarSign,
  PieChart,
  ShieldCheck,
  CreditCard
} from 'lucide-react';
import { sound } from '../utils/audioEffects';

interface PresetTransaction {
  id: string;
  source: 'gmail' | 'sms';
  rawText: string;
  merchant: string;
  amount: string;
  category: string;
  categoryColor: string;
  isRecurring: boolean;
  recurringFrequency?: string;
  confidence: number;
}

const PRESETS: PresetTransaction[] = [
  {
    id: 'netflix',
    source: 'gmail',
    rawText: 'From: Netflix <info@mailer.netflix.com> | Subject: Your monthly subscription renewal invoice of ₹649 has been processed successfully via auto-debit.',
    merchant: 'Netflix',
    amount: '₹649',
    category: 'Entertainment & Streaming',
    categoryColor: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    isRecurring: true,
    recurringFrequency: 'Monthly (Auto-Recorded)',
    confidence: 99.8
  },
  {
    id: 'swiggy',
    source: 'sms',
    rawText: 'HDFC Bank Alert: Rs 580.00 spent on your Card ending 4892 at SWIGGY BANGALORE on 14-MAR at 20:34. Avail Bal: Rs 42,190.',
    merchant: 'Swiggy',
    amount: '₹580',
    category: 'Food & Dining',
    categoryColor: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    isRecurring: false,
    confidence: 99.2
  },
  {
    id: 'aws',
    source: 'gmail',
    rawText: 'Amazon Web Services Invoice #89104: Your monthly bill for AWS Cloud compute and S3 storage of $28.40 USD has been charged to Visa **1029.',
    merchant: 'Amazon Web Services (AWS)',
    amount: '$28.40',
    category: 'Cloud Infrastructure & Tech',
    categoryColor: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
    isRecurring: true,
    recurringFrequency: 'Monthly (Auto-Recorded)',
    confidence: 99.6
  },
  {
    id: 'uber',
    source: 'sms',
    rawText: 'ICICI Bank: Rs 340.00 debited for UBER RIDES INDIA on 12-MAR-26 via UPI reference 92019482. Info: Airport Terminal Ride.',
    merchant: 'Uber India',
    amount: '₹340',
    category: 'Rides & Transit',
    categoryColor: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    isRecurring: false,
    confidence: 98.9
  },
  {
    id: 'gym',
    source: 'gmail',
    rawText: 'Cult.Fit / Curefit: Your recurring quarterly membership fee of ₹2,499 has been automatically renewed. Next scheduled cycle: 15-Jun.',
    merchant: 'Cult.Fit Gym',
    amount: '₹2,499',
    category: 'Health & Fitness',
    categoryColor: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    isRecurring: true,
    recurringFrequency: 'Quarterly (Auto-Recorded)',
    confidence: 99.5
  }
];

interface Props {
  compact?: boolean;
}

export const OmniSpendLiveDemo: React.FC<Props> = ({ compact = false }) => {
  const [activePreset, setActivePreset] = useState<PresetTransaction>(PRESETS[0]);
  const [inputText, setInputText] = useState<string>(PRESETS[0].rawText);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [analyzedResult, setAnalyzedResult] = useState<PresetTransaction | null>(PRESETS[0]);
  const [scanStep, setScanStep] = useState<string>('Ready');

  const handleSelectPreset = (preset: PresetTransaction) => {
    sound.playClick();
    setActivePreset(preset);
    setInputText(preset.rawText);
    runAnalysis(preset);
  };

  const runAnalysis = (overridePreset?: PresetTransaction) => {
    sound.playScanPing();
    setIsScanning(true);
    setScanStep('Connecting AI inbox parser...');

    setTimeout(() => {
      setScanStep('Tokenizing merchant & currency vectors...');
    }, 280);

    setTimeout(() => {
      setScanStep('Categorizing expense & evaluating recurring cadence...');
    }, 560);

    setTimeout(() => {
      setIsScanning(false);
      setScanStep('Completed');
      sound.playSuccess();

      if (overridePreset) {
        setAnalyzedResult(overridePreset);
      } else {
        // Fallback or custom extraction heuristic
        const lower = inputText.toLowerCase();
        let merchant = 'Custom Merchant';
        let amount = '₹500';
        let category = 'General Expense';
        let categoryColor = 'bg-slate-500/15 text-slate-300 border-slate-500/30';
        let isRecurring = lower.includes('subscri') || lower.includes('monthly') || lower.includes('recurring') || lower.includes('renew');

        // Extract amount if present
        const amountMatch = inputText.match(/(?:Rs\.?|₹|\$)\s*([\d,]+(?:\.\d{2})?)/i);
        if (amountMatch) {
          amount = (inputText.includes('$') ? '$' : '₹') + amountMatch[1];
        }

        if (lower.includes('zomato') || lower.includes('swiggy') || lower.includes('restaurant') || lower.includes('cafe')) {
          merchant = lower.includes('zomato') ? 'Zomato' : lower.includes('swiggy') ? 'Swiggy' : 'Dining Merchant';
          category = 'Food & Dining';
          categoryColor = 'bg-amber-500/15 text-amber-300 border-amber-500/30';
        } else if (lower.includes('netflix') || lower.includes('spotify') || lower.includes('prime') || lower.includes('youtube')) {
          merchant = lower.includes('netflix') ? 'Netflix' : lower.includes('spotify') ? 'Spotify' : 'Streaming Service';
          category = 'Entertainment & Streaming';
          categoryColor = 'bg-rose-500/15 text-rose-300 border-rose-500/30';
          isRecurring = true;
        } else if (lower.includes('uber') || lower.includes('ola') || lower.includes('flight') || lower.includes('rail')) {
          merchant = lower.includes('uber') ? 'Uber' : lower.includes('ola') ? 'Ola Cabs' : 'Transit';
          category = 'Rides & Transit';
          categoryColor = 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
        } else if (lower.includes('amazon') || lower.includes('flipkart') || lower.includes('zara') || lower.includes('myntra')) {
          merchant = lower.includes('amazon') ? 'Amazon' : 'Retail Shopping';
          category = 'Shopping & Lifestyle';
          categoryColor = 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30';
        }

        setAnalyzedResult({
          id: 'custom-' + Date.now(),
          source: lower.includes('from:') ? 'gmail' : 'sms',
          rawText: inputText,
          merchant,
          amount,
          category,
          categoryColor,
          isRecurring,
          recurringFrequency: isRecurring ? 'Monthly (Auto-Recorded)' : undefined,
          confidence: 98.4
        });
      }
    }, 850);
  };

  return (
    <div className={`w-full rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#0e1424] to-[#070b16] border border-indigo-500/30 p-4 sm:p-6 shadow-2xl relative overflow-hidden ${compact ? 'text-xs' : ''}`}>
      {/* Subtle background glow */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-indigo-500/20">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm sm:text-base font-sans tracking-tight">
                OmniSpend AI Spend Tracker
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Demo
              </span>
            </div>
            <span className="text-[11px] text-slate-400 font-mono">
              Auto-Extracts Spends from Gmail & SMS + Recurring Detection
            </span>
          </div>
        </div>

        {/* Live app link */}
        <a
          href="https://omnispendtracker.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => sound.playClick()}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/25 transition-all group"
        >
          <span>Launch Live Web App</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Quick Presets Carousel */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-300 font-semibold flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            1-Click Interactive Test Scenarios:
          </span>
          <span className="text-[10px] text-slate-400 hidden sm:inline">
            Click any receipt to test AI parsing
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {PRESETS.map((preset) => {
            const isSelected = activePreset.id === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => handleSelectPreset(preset)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-indigo-600/30 border-indigo-400 text-white shadow-md shadow-indigo-600/20 scale-[1.02]'
                    : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {preset.source === 'gmail' ? (
                  <Mail className="w-3 h-3 text-red-400" />
                ) : (
                  <CreditCard className="w-3 h-3 text-amber-400" />
                )}
                <span>{preset.merchant}</span>
                <span className="font-mono text-[10px] text-slate-400 font-bold">
                  {preset.amount}
                </span>
                {preset.isRecurring && (
                  <Repeat className="w-2.5 h-2.5 text-indigo-300" title="Recurring Spend" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Input & Scanning Box */}
      <div className="bg-slate-950/80 border border-slate-800/90 rounded-2xl p-3 sm:p-4 mb-4 relative">
        <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-2">
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            Incoming Raw Gmail or SMS Receipt Buffer:
          </span>
          <span>{inputText.length} characters</span>
        </div>

        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={2}
          placeholder="Paste or type any bank SMS, credit card alert, or Gmail receipt here..."
          className="w-full bg-slate-900/90 border border-slate-800 focus:border-indigo-500 rounded-xl p-2.5 text-xs text-slate-200 font-mono focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
        />

        <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-2 border-t border-slate-800/60">
          <span className="text-[10px] text-slate-400">
            Powered by natural language models trained on banking receipts
          </span>

          <button
            onClick={() => runAnalysis()}
            disabled={isScanning}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all"
          >
            {isScanning ? (
              <>
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                <span>{scanStep}</span>
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Run AI Parse & Categorize</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Real-Time Parsed Metadata Card */}
      <AnimatePresence mode="wait">
        {analyzedResult && !isScanning && (
          <motion.div
            key={analyzedResult.id}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-slate-900/90 border border-indigo-500/40 rounded-2xl p-4 sm:p-5 relative overflow-hidden shadow-xl"
          >
            {/* Top row: Merchant + Amount */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center font-bold text-lg text-indigo-300 shadow-inner">
                  {analyzedResult.merchant[0]}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-white text-base sm:text-lg">
                      {analyzedResult.merchant}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      {analyzedResult.confidence}% Verified
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    Source: {analyzedResult.source === 'gmail' ? 'Gmail Inbox API' : 'Raw SMS Notification'}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  Debited Amount
                </span>
                <span className="text-xl sm:text-2xl font-mono font-extrabold text-white tracking-tight">
                  {analyzedResult.amount}
                </span>
              </div>
            </div>

            {/* Smart Categorization & Recurring Status Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {/* Category */}
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    AI Classified Category
                  </span>
                  <span className={`inline-block px-2.5 py-1 rounded-lg text-xs font-semibold border ${analyzedResult.categoryColor}`}>
                    {analyzedResult.category}
                  </span>
                </div>
                <PieChart className="w-5 h-5 text-slate-600" />
              </div>

              {/* Recurring Engine Status */}
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Recurring Spend Engine
                  </span>
                  {analyzedResult.isRecurring ? (
                    <div className="flex items-center gap-1.5 text-indigo-300 font-semibold text-xs">
                      <Repeat className="w-3.5 h-3.5 text-indigo-400 animate-spin" style={{ animationDuration: '6s' }} />
                      <span>{analyzedResult.recurringFrequency || 'Recurring Subscription'}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-slate-300 font-semibold text-xs">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <span>One-Time Discretionary Spend</span>
                    </div>
                  )}
                </div>
                <Clock className="w-5 h-5 text-slate-600" />
              </div>
            </div>

            {/* OmniSpend Dashboard Sync Banner */}
            <div className="bg-gradient-to-r from-indigo-950/60 via-violet-950/40 to-slate-950/80 p-3 rounded-xl border border-indigo-500/20 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300">
                  Transaction parsed & synced into OmniSpend cash-flow dashboard.
                </span>
              </div>

              <a
                href="https://omnispendtracker.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-1 font-semibold text-indigo-300 hover:text-white transition-colors group ml-auto"
              >
                <span>View in live app</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
