export interface ProofDocument {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  category: 'work' | 'education' | 'award' | 'recommendation' | 'venture';
  highlights: string[];
  fullSummary: string;
  metadataBadges?: string[];
  referenceNumber?: string;
  fileLabel?: string;
  actualDocumentUrl?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  department: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Internship';
  highlightMetric: string;
  description: string[];
  coreSkills: string[];
  proofId?: string;
  proofName?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  grade: string;
  highlights: string[];
  subjectsOrCourses?: { name: string; score?: string; grade?: string }[];
  proofId?: string;
}

export interface VentureItem {
  id: string;
  name: string;
  tagline: string;
  period: string;
  status: string;
  category: string;
  revenueOrImpact: string;
  description: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
  proofId?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  organizer: string;
  rank: string;
  year: string;
  category: 'Finance' | 'Rebranding & Marketing' | 'National Case Comp' | 'Corporate Milestone' | 'Academics';
  description: string;
  proofId?: string;
  iconName: string;
}

export interface LeadershipItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  impactMetrics: string;
  responsibilities: string[];
  proofId?: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  designation: string;
  institution: string;
  quote: string;
  date: string;
  proofId?: string;
}

export interface ProjectShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  status: string;
  period: string;
  impactBadge: string;
  summary: string;
  detailedDescription: string[];
  technologies: { name: string; category?: string }[];
  liveUrl?: string;
  liveUrlLabel?: string;
  repoUrl?: string;
  proofId?: string;
  gallery: {
    title: string;
    caption: string;
    type: 'image' | 'chart' | 'mockup';
    visualKey: string;
  }[];
  metrics: { label: string; value: string }[];
}

export interface NarrativeStage {
  id: string;
  chapterNumber: string;
  title: string;
  period: string;
  location: string;
  tagline: string;
  narrativeParagraphs: string[];
  milestones: string[];
  personalityTraits: string[];
  futureAmbitionPointers?: string[];
  quote: string;
  quoteAuthor: string;
  badge: string;
  iconName: string;
}

export interface SkillCategoryItem {
  id: string;
  name: string;
  shortLabel: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: number;
    context: string;
    toolType?: 'discipline' | 'platform' | 'software' | 'analytics';
  }[];
}
