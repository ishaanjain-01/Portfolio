import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Globe2, 
  TrendingUp, 
  Layers, 
  ExternalLink, 
  ShieldCheck, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Cpu, 
  BarChart3, 
  Package, 
  Compass, 
  ArrowUpRight,
  Eye,
  Maximize2
} from 'lucide-react';
import { FLAGSHIP_PROJECTS } from '../data/portfolioData';
import { ProjectShowcaseItem } from '../types';
import { ProjectGalleryVisual } from './ProjectGalleryVisual';
import { sound } from '../utils/audioEffects';

interface Props {
  onOpenProof: (id: string) => void;
}

export const InteractiveProjectsShowcase: React.FC<Props> = ({ onOpenProof }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const selectedProject = FLAGSHIP_PROJECTS.find(p => p.id === selectedProjectId) || null;

  // Handle ESC key to close expanded modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProjectId) {
        setSelectedProjectId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProjectId]);

  // Reset gallery index on project switch
  useEffect(() => {
    setActiveGalleryIndex(0);
  }, [selectedProjectId]);

  const categories = [
    { id: 'all', label: 'All Ventures & Projects' },
    { id: 'AI-FinTech', label: 'AI & FinTech' },
    { id: 'D2C', label: 'Mass Premium D2C' },
    { id: 'E-Commerce', label: 'E-Commerce' },
    { id: 'Commercial', label: 'Commercial GTM' },
    { id: 'Research', label: 'Governance Research' },
  ];

  const filteredProjects = FLAGSHIP_PROJECTS.filter(p => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'AI-FinTech') return p.category.includes('AI') || p.category.includes('FinTech');
    if (filterCategory === 'D2C') return p.category.includes('D2C') || p.category.includes('Fragrance');
    if (filterCategory === 'E-Commerce') return p.category.includes('E-Commerce') || p.category.includes('Logistics');
    if (filterCategory === 'Commercial') return p.category.includes('Commercial') || p.category.includes('Global Trade');
    if (filterCategory === 'Research') return p.category.includes('Corporate Governance') || p.category.includes('Civic');
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 bg-[#070a12] border-t border-slate-800/80 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ventures & Execution Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Interactive Flagship <span className="italic font-normal text-indigo-300">Projects & Ventures</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-lg text-sm sm:text-base font-sans leading-relaxed">
            Click any project card to expand full operational workflows, technical architectures, live links, and verified document proof.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                sound.playClick();
                setFilterCategory(cat.id);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filterCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
          <span className="text-xs text-slate-400 ml-auto font-mono hidden sm:inline-block">
            Showing {filteredProjects.length} Flagship Initiatives
          </span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => {
                sound.playClick();
                setSelectedProjectId(project.id);
              }}
              className="bg-slate-900/70 border border-slate-800/90 hover:border-indigo-500/50 rounded-3xl p-6 flex flex-col justify-between cursor-pointer transition-all group shadow-xl hover:shadow-2xl hover:shadow-indigo-500/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-bl-full pointer-events-none group-hover:bg-indigo-500/10 transition-colors" />

              <div>
                {/* Header Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-slate-400">
                    {project.period}
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    {project.impactBadge}
                  </span>
                </div>

                {/* Category */}
                <span className="text-[11px] uppercase tracking-wider font-semibold text-indigo-400 block mb-1">
                  {project.category}
                </span>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-serif font-bold text-white group-hover:text-indigo-300 transition-colors mb-1.5">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.subtitle}
                </p>

                {/* Project Summary */}
                <p className="text-xs text-slate-300 mb-6 leading-relaxed line-clamp-3 bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                  {project.summary}
                </p>

                {/* Technologies Preview */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 text-[10px] font-mono border border-slate-700/60"
                    >
                      {tech.name}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded-md bg-slate-800/40 text-slate-400 text-[10px] font-mono">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer: Metrics & Expand Action */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <div className="text-xs font-medium text-slate-400">
                  <span className="text-white font-bold block text-sm">
                    {project.metrics[0]?.value}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {project.metrics[0]?.label}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        sound.playClick();
                      }}
                      className="px-2.5 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 text-xs font-semibold flex items-center gap-1 transition-all"
                    >
                      <span>{project.id === 'project-ora-perfumes' ? 'Live Store' : 'Live App'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 transition-colors">
                    <span>Details</span>
                    <Maximize2 className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* EXPANDED PROJECT MODAL / DRAWER */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProjectId(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-md"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
                className="bg-[#0b0f19] border border-slate-700/80 rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl relative z-10 my-auto max-h-[90vh] overflow-y-auto scrollbar-thin"
              >
                {/* Close Button */}
                <button
                  id="close-project-modal-btn"
                  onClick={() => setSelectedProjectId(null)}
                  className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
                  title="Close (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="mb-6 pr-8">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold">
                      {selectedProject.category}
                    </span>
                    <span className="text-slate-400 text-xs">•</span>
                    <span className="text-xs font-mono text-slate-400">
                      {selectedProject.period}
                    </span>
                    <span className="text-slate-400 text-xs">•</span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                      {selectedProject.status}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 font-medium">
                    {selectedProject.subtitle}
                  </p>
                </div>

                {/* Interactive Action Bar */}
                <div className="flex flex-wrap items-center gap-3 mb-8 p-3 bg-slate-900/80 rounded-2xl border border-slate-800">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.playClick()}
                      className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-indigo-600 hover:from-emerald-500 hover:to-indigo-500 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-lg shadow-emerald-600/25 group"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span>{selectedProject.liveUrlLabel || "Launch Live Application"}</span>
                    </a>
                  )}

                  {selectedProject.proofId && (
                    <button
                      onClick={() => {
                        sound.playClick();
                        onOpenProof(selectedProject.proofId!);
                      }}
                      className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-lg shadow-indigo-600/20"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>{selectedProject.liveUrlLabel || "Inspect Verified Document"}</span>
                    </button>
                  )}

                  <div className="text-xs text-slate-400 ml-auto flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Audited Portfolio Evidence</span>
                  </div>
                </div>

                {/* Interactive Gallery Showcase */}
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                        <Layers className="w-4 h-4" />
                        Interactive Visual Artifacts & Gallery
                      </h4>
                      <span className="text-xs text-slate-400 font-mono">
                        Artifact {activeGalleryIndex + 1} of {selectedProject.gallery.length}
                      </span>
                    </div>

                    {/* Gallery Visual Canvas */}
                    <div className="mb-3">
                      <ProjectGalleryVisual 
                        visualKey={selectedProject.gallery[activeGalleryIndex].visualKey}
                        title={selectedProject.gallery[activeGalleryIndex].title}
                      />
                    </div>

                    {/* Gallery Item Caption */}
                    <p className="text-xs text-slate-400 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 mb-3">
                      <strong className="text-slate-200 block mb-0.5">
                        {selectedProject.gallery[activeGalleryIndex].title}
                      </strong>
                      {selectedProject.gallery[activeGalleryIndex].caption}
                    </p>

                    {/* Gallery Navigation Thumbnails */}
                    <div className="flex items-center gap-2">
                      {selectedProject.gallery.map((item, gIdx) => (
                        <button
                          key={gIdx}
                          onClick={() => {
                            sound.playClick();
                            setActiveGalleryIndex(gIdx);
                          }}
                          className={`flex-1 py-2 px-3 rounded-xl text-xs font-semibold text-left transition-all border ${
                            activeGalleryIndex === gIdx
                              ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <span className="block truncate">{item.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantitative Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  {selectedProject.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800/80 text-center">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                        {m.label}
                      </span>
                      <span className="text-sm sm:text-base font-extrabold text-white">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Detailed Description */}
                <div className="mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                    In-Depth Problem, Strategy & Execution
                  </h4>
                  <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-5 rounded-2xl border border-slate-800/60">
                    {selectedProject.detailedDescription.map((descPara, pIdx) => (
                      <p key={pIdx}>{descPara}</p>
                    ))}
                  </div>
                </div>

                {/* Key Technologies & Methodologies */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-1.5">
                    <Cpu className="w-4 h-4" />
                    Key Technologies, Tools & Strategic Frameworks Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, tIdx) => (
                      <div
                        key={tIdx}
                        className="px-3 py-1.5 rounded-xl bg-slate-900 text-slate-200 text-xs font-medium border border-slate-800 flex items-center gap-1.5 shadow-sm"
                      >
                        {tech.category && (
                          <span className="text-[10px] font-mono uppercase text-indigo-400 bg-indigo-500/10 px-1.5 py-0.2 rounded">
                            {tech.category}
                          </span>
                        )}
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Project ID: {selectedProject.id}</span>
                  <button
                    onClick={() => setSelectedProjectId(null)}
                    className="text-slate-300 hover:text-white font-semibold flex items-center gap-1"
                  >
                    <span>Close Window</span>
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
