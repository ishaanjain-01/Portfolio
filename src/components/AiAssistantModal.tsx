import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  RefreshCw, 
  Copy, 
  Check, 
  ExternalLink, 
  CornerDownRight,
  Bookmark
} from 'lucide-react';
import { generateLocalAnswer, ChatHistoryItem } from '../utils/aiKnowledgeEngine';
import { sound } from '../utils/audioEffects';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialPrompt?: string;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  source?: 'gemini' | 'knowledge_base';
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-1',
    sender: 'assistant',
    text: "Hello! I am Ishaan Jain's portfolio AI assistant. I have full context on his international launches at Linc (50+ countries, ₹2 Cr+ revenue), 100% target achievement throughout employment tenure at Zomato (7–10X ROAS), OmniSpend AI spend tracker, Masters' Union Merit Scholarship, and mass-premium fragrance brand ORA Gourmand. How can I assist your inquiry?",
    timestamp: 'Just now',
    source: 'gemini',
  },
];

const QUICK_PROMPTS = [
  "How old is Ishaan?",
  "Tell me about OmniSpend AI Spend Tracker",
  "How did you maintain 100% target achievement throughout your tenure at Zomato?",
  "Tell me about your global launch work at Linc Ltd.",
  "What is ORA Gourmand Perfumes?",
  "Where can I find Ishaan on LinkedIn & Instagram?",
  "How is Ishaan AI kept up to date?",
  "Summarize your dissertation on Women CEOs in India.",
  "How did you scale your European e-commerce venture?",
];

function renderLineSegments(text: string, baseKey: number) {
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }

    if (match[1] && match[2]) {
      const label = match[1];
      const url = match[2];
      elements.push(
        <a
          key={`${baseKey}-${match.index}-link`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8A6726] hover:text-[#5E4413] underline font-medium inline-flex items-center gap-0.5"
        >
          {label}
          <ExternalLink className="w-3 h-3 inline ml-0.5 opacity-80" />
        </a>
      );
    } else if (match[3]) {
      elements.push(
        <strong key={`${baseKey}-${match.index}-bold`} className="text-[#09090B] font-bold">
          {match[3]}
        </strong>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return elements;
}

const FormattedMessage: React.FC<{ text: string }> = ({ text }) => {
  const lines = text.split('\n');

  return (
    <div className="space-y-2 text-xs sm:text-sm leading-relaxed text-[#1C1917]">
      {lines.map((line, lineIdx) => {
        if (!line.trim()) {
          return <div key={lineIdx} className="h-1" />;
        }

        const isBullet = line.trim().startsWith('- ') || line.trim().startsWith('* ');
        const isNumbered = /^\d+\.\s/.test(line.trim());
        const cleanedLine = isBullet ? line.trim().substring(2) : isNumbered ? line.trim().replace(/^\d+\.\s/, '') : line;
        const formattedSpans = renderLineSegments(cleanedLine, lineIdx);

        if (isBullet) {
          return (
            <div key={lineIdx} className="flex items-start gap-2 pl-1">
              <span className="text-[#8A6726] font-bold shrink-0 mt-0.5">•</span>
              <div className="flex-1">{formattedSpans}</div>
            </div>
          );
        }

        if (isNumbered) {
          const numMatch = line.trim().match(/^(\d+)\./);
          const num = numMatch ? numMatch[1] : '';
          return (
            <div key={lineIdx} className="flex items-start gap-2 pl-1">
              <span className="text-[#8A6726] font-semibold shrink-0">{num}.</span>
              <div className="flex-1">{formattedSpans}</div>
            </div>
          );
        }

        return <p key={lineIdx}>{formattedSpans}</p>;
      })}
    </div>
  );
};

function getSuggestedQuestions(lastText: string): string[] {
  const lower = lastText.toLowerCase();

  if (lower.includes('age') || lower.includes('24') || lower.includes('born') || lower.includes('2001')) {
    return [
      "What is Ishaan's current academic program?",
      "Tell me about his work experience at Zomato.",
      "What 0-to-1 ventures has he built?",
    ];
  }

  if (lower.includes('zomato') || lower.includes('dining') || lower.includes('roas')) {
    return [
      "How did you achieve 7-10X ROAS for merchants?",
      "Tell me about your intern-to-full-time offer at Zomato.",
      "What did you do at Linc Limited?",
    ];
  }

  if (lower.includes('linc') || lower.includes('pentonic') || lower.includes('50+')) {
    return [
      "How did you generate ₹2 Cr+ in launch revenue?",
      "How did you save ₹35 Lakhs in negotiations?",
      "Tell me about OmniSpend AI Spend Tracker.",
    ];
  }

  if (lower.includes('omnispend') || lower.includes('receipt') || lower.includes('sms')) {
    return [
      "How does the autonomous SMS & Gmail parser work?",
      "What is ORA Gourmand Perfumes?",
      "What did you research in your dissertation?",
    ];
  }

  if (lower.includes('ora') || lower.includes('perfume') || lower.includes('fragrance') || lower.includes('dropshipping')) {
    return [
      "How did ORA cross ₹2.5L in its first 30 days?",
      "What were your margins on Amazon Europe e-commerce?",
      "Tell me about your corporate experience at Zomato.",
    ];
  }

  if (lower.includes('dissertation') || lower.includes('women ceo') || lower.includes('research')) {
    return [
      "What statistical methods were used in the research?",
      "What was the conclusion of your women CEOs study?",
      "What awards have you won in business competitions?",
    ];
  }

  return [
    "How old is Ishaan?",
    "Tell me about OmniSpend AI Spend Tracker.",
    "What was your 100% target achievement record at Zomato?",
    "Tell me about your international launches at Linc Ltd.",
  ];
}

export const AiAssistantModal: React.FC<Props> = ({
  isOpen,
  onClose,
  initialPrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll on new message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // Handle initial prompt injection from external triggers
  useEffect(() => {
    if (isOpen && initialPrompt) {
      handleSend(initialPrompt);
    }
  }, [isOpen, initialPrompt]);

  // Contextual suggested questions based on the last message
  const contextualSuggestions = useMemo(() => {
    const lastBotMsg = [...messages].reverse().find((m) => m.sender === 'assistant');
    if (!lastBotMsg) return QUICK_PROMPTS.slice(0, 3);
    return getSuggestedQuestions(lastBotMsg.text);
  }, [messages]);

  const handleCopy = (id: string, text: string) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSend = async (textToSend?: string) => {
    const userText = textToSend || input;
    if (!userText.trim() || loading) return;

    sound.playClick();

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const currentHistory = [...messages, userMsg];
    setMessages(currentHistory);
    setInput('');
    setLoading(true);

    let replyText = '';
    let source: 'gemini' | 'knowledge_base' = 'knowledge_base';

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 25000);

      // Pass the last 8 conversation turns for contextual multi-turn memory
      const historyPayload = currentHistory.slice(-8).map((m) => ({
        role: m.sender === 'user' ? 'user' : 'model',
        text: m.text,
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText.trim(),
          history: historyPayload,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        if (data && data.reply) {
          replyText = data.reply;
          source = data.source === 'gemini' ? 'gemini' : 'knowledge_base';
        }
      }
    } catch {
      // Handled via local fallback engine below
    }

    if (!replyText) {
      const historyItems: ChatHistoryItem[] = currentHistory.map((m) => ({
        sender: m.sender,
        text: m.text,
      }));
      replyText = generateLocalAnswer(userText.trim(), historyItems);
      source = 'knowledge_base';
    }

    const botMsg: ChatMessage = {
      id: `bot-${Date.now()}`,
      sender: 'assistant',
      text: replyText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      source,
    };

    sound.playSuccess();
    setMessages((prev) => [...prev, botMsg]);
    setLoading(false);
  };

  const handleReset = () => {
    sound.playClick();
    setMessages(INITIAL_MESSAGES);
  };

  const handleClose = () => {
    sound.playModalClose();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        id="ai-assistant-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm overflow-hidden"
        onClick={handleClose}
      >
        <motion.div
          id="ai-assistant-window"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="relative w-full max-w-xl h-[90vh] max-h-[720px] bg-gradient-to-b from-[#F7EED8] via-[#F2E5C5] to-[#E9D5A8] border border-[#C5AA74] rounded-2xl sm:rounded-3xl shadow-manila-folder flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Manila Header Bar */}
          <div className="bg-[#EAD8AF]/90 p-4 border-b border-[#D5BF8F] flex items-center justify-between shadow-[inset_0_1px_2px_rgba(100,75,25,0.08)]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FAF2DF] border border-[#D5C29B] flex items-center justify-center text-[#70582D] shadow-xs">
                <Sparkles className="w-5 h-5 text-[#8A6726]" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <h3 className="text-sm font-bold text-[#1C1917] font-sans">Ishaan AI Assistant</h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#FAF3E2] text-[#6E5528] border border-[#D5C29B]">
                    ARCHIVAL INTELLIGENCE
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-100/90 text-emerald-800 border border-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    WEEKLY SYNC
                  </span>
                </div>
                <p className="text-xs text-[#544122] font-mono">Interactive Career & Commercial Knowledge</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                id="reset-chat-btn"
                onClick={handleReset}
                className="p-2 text-[#70582D] hover:text-[#1C1917] rounded-lg hover:bg-[#E2CD9D] transition-colors cursor-pointer"
                title="Restart Chat"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                id="close-chat-btn"
                onClick={handleClose}
                className="p-2 text-[#70582D] hover:text-[#1C1917] rounded-lg hover:bg-[#E2CD9D] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Prompts Strip */}
          <div className="px-4 py-2.5 bg-[#EFE3C4]/80 border-b border-[#D8C498] overflow-x-auto flex gap-2 no-scrollbar">
            {QUICK_PROMPTS.map((prompt, i) => (
              <button
                key={i}
                id={`quick-prompt-${i}`}
                onClick={() => handleSend(prompt)}
                disabled={loading}
                className="text-xs font-medium px-3 py-1.5 rounded-lg bg-white/95 hover:bg-white text-[#3D2C06] hover:text-[#09090B] border border-[#D5C29B] hover:border-[#8A6726] shadow-xs transition-all whitespace-nowrap shrink-0 disabled:opacity-50 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Messages Area (Bond Paper Sheet Interior) */}
          <div ref={scrollRef} className="flex-1 p-4 sm:p-5 space-y-4 overflow-y-auto bg-[#FCFBF8] border-x border-[#DED4C0]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-[#F5ECD6] border border-[#D8C498] flex items-center justify-center text-[#70582D] shrink-0 mt-0.5 shadow-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm relative group shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-[#1C1917] text-[#FAF5E6] rounded-tr-none'
                      : 'bg-white text-[#1C1917] border border-[#E8DFC9] rounded-tl-none'
                  }`}
                >
                  {msg.sender === 'assistant' ? (
                    <FormattedMessage text={msg.text} />
                  ) : (
                    <p className="whitespace-pre-line leading-relaxed">{msg.text}</p>
                  )}
                  <div 
                    className={`flex items-center justify-between mt-2 pt-1 border-t text-[10px] font-mono ${
                      msg.sender === 'user' 
                        ? 'border-white/10 text-white/60' 
                        : 'border-[#E8DFC9] text-[#71717A]'
                    }`}
                  >
                    <span>
                      {msg.timestamp}
                      {msg.sender === 'assistant' && (
                        <span className="ml-2 text-[#8A6726] font-semibold">
                          {msg.source === 'gemini' ? '• Gemini 3.8 Flash' : '• Verified Archive'}
                        </span>
                      )}
                    </span>
                    {msg.sender === 'assistant' && (
                      <button
                        onClick={() => handleCopy(msg.id, msg.text)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[#71717A] hover:text-[#09090B] px-1.5 py-0.5 rounded hover:bg-[#F5ECD6] cursor-pointer"
                        title="Copy answer"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600 text-[10px]">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span className="text-[10px]">Copy</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-[#1C1917] border border-[#3F3F46] flex items-center justify-center text-white shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 justify-start items-center">
                <div className="w-7 h-7 rounded-lg bg-[#F5ECD6] border border-[#D8C498] flex items-center justify-center text-[#70582D] shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-[#E8DFC9] rounded-2xl rounded-tl-none px-4 py-3 flex items-center gap-2 shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-[#8A6726] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-[#8A6726] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-[#8A6726] animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="text-xs text-[#52525B] font-mono ml-1">Analyzing career dossiers...</span>
                </div>
              </div>
            )}
          </div>

          {/* Contextual Smart Follow-Ups */}
          {!loading && contextualSuggestions.length > 0 && (
            <div className="px-4 py-2 bg-[#F7EED8] border-t border-[#D8C498] flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-[#7A6136] flex items-center gap-1 mr-1">
                <CornerDownRight className="w-3 h-3 text-[#8A6726]" />
                Follow up:
              </span>
              {contextualSuggestions.map((suggestion, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(suggestion)}
                  className="text-xs px-2.5 py-1 rounded-full bg-white hover:bg-[#FAF4E5] text-[#544122] hover:text-[#09090B] border border-[#D5C29B] transition-colors text-left cursor-pointer"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          {/* Input Footer */}
          <div className="p-3 sm:p-4 bg-[#F2E5C5] border-t border-[#D8C498]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex gap-2"
            >
              <input
                id="ai-chat-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Ishaan's age, metrics, launches, or experience..."
                disabled={loading}
                className="flex-1 bg-white border border-[#D5C29B] rounded-xl px-4 py-2.5 text-sm text-[#09090B] placeholder-[#8C7A58] focus:outline-none focus:border-[#8A6726] focus:ring-1 focus:ring-[#8A6726] shadow-inner transition-colors disabled:opacity-50 font-sans"
              >
              </input>
              <button
                id="send-ai-chat-btn"
                type="submit"
                disabled={!input.trim() || loading}
                className="px-4 py-2.5 bg-[#1C1917] hover:bg-[#2C2623] disabled:bg-[#D5C29B] disabled:text-[#8C7A58] text-white rounded-xl font-medium transition-colors flex items-center justify-center shrink-0 shadow-sm cursor-pointer"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-[11px] font-mono text-[#7A6136] text-center mt-2">
              Contextually grounded in Ishaan Jain&apos;s verified credentials, live ventures & corporate P&amp;L records.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
