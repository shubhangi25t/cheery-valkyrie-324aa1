import {
  Atom,
  BookMarked,
  BriefcaseBusiness,
  Calculator,
  ChartNoAxesCombined,
  ClipboardCheck,
  Dna,
  FileText,
  FlaskConical,
  GraduationCap,
  Languages,
  LaptopMinimalCheck,
  LineChart,
  NotebookTabs,
  Sigma,
  Target,
  Users,
} from 'lucide-react'

export const schoolClasses = [
  { grade: '08', title: 'Foundation Eight', subjects: 'Maths · Science · English', tone: 'sun' },
  { grade: '09', title: 'Concept Builder', subjects: 'Maths · Science · SST · English', tone: 'cream' },
  { grade: '10', title: 'Board Mastery', subjects: 'Complete CBSE preparation', tone: 'ink' },
  { grade: '11', title: 'Senior Secondary', subjects: 'PCM · PCB · Commerce', tone: 'cream' },
  { grade: '12', title: 'Boards + Entrance', subjects: 'Boards, JEE and NEET alignment', tone: 'sun' },
]

export const examTracks = [
  {
    name: 'JEE Main + Advanced',
    eyebrow: 'Engineering track',
    description: 'A two-year, problem-first path through Physics, Chemistry and Mathematics.',
    icon: Atom,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=85',
    stats: ['540+ lessons', '11,800 questions', '32 full tests'],
  },
  {
    name: 'NEET UG',
    eyebrow: 'Medical track',
    description: 'NCERT-led preparation with visual Biology, applied Chemistry and focused Physics.',
    icon: Dna,
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85',
    stats: ['610+ lessons', '14,200 questions', '36 full tests'],
  },
]

export const courseBundles = [
  {
    label: 'School success',
    title: 'Complete Classes 8–10',
    copy: 'Clear chapter teaching, weekly practice, board-style answer writing and parent progress notes.',
    icon: GraduationCap,
    modules: ['Maths', 'Science', 'English', 'Social Science'],
  },
  {
    label: 'Senior secondary',
    title: 'Complete Classes 11–12',
    copy: 'Stream-wise live learning for PCM, PCB and Commerce, aligned with school exams and boards.',
    icon: NotebookTabs,
    modules: ['PCM', 'PCB', 'Commerce', 'Board revision'],
  },
  {
    label: 'Competitive exams',
    title: 'JEE & NEET Power Batch',
    copy: 'Deep concepts, daily problem practice, doubt rooms, test analytics and rank-building revision.',
    icon: Target,
    modules: ['JEE Main', 'JEE Advanced', 'NEET UG', 'Dropper batches'],
  },
  {
    label: 'Career growth',
    title: 'Professional Learning Lab',
    copy: 'Practical communication, data and productivity courses designed for graduates and working teams.',
    icon: BriefcaseBusiness,
    modules: ['Business English', 'Excel', 'Data basics', 'Leadership'],
  },
]

export const resources = [
  { title: 'Concept modules', copy: 'Chapter-wise notes with examples, diagrams and solved applications.', icon: BookMarked, count: '1,240+' },
  { title: 'Practice sheets', copy: 'Daily practice sheets calibrated from warm-up to exam difficulty.', icon: FileText, count: '3,800+' },
  { title: 'Question bank', copy: 'Topic filters, PYQs, exemplar problems and assertion-reason questions.', icon: ClipboardCheck, count: '26,000+' },
  { title: 'Test series', copy: 'Timed chapter, part-syllabus and full-syllabus papers with analytics.', icon: LaptopMinimalCheck, count: '420+' },
]

export const subjects = [
  { name: 'Mathematics', icon: Sigma, text: 'Visual concepts and layered problem sets' },
  { name: 'Physics', icon: Atom, text: 'Derivations, intuition and numericals' },
  { name: 'Chemistry', icon: FlaskConical, text: 'Physical, organic and inorganic clarity' },
  { name: 'Biology', icon: Dna, text: 'NCERT maps, diagrams and recall drills' },
  { name: 'English', icon: Languages, text: 'Grammar, literature and professional fluency' },
  { name: 'Applied skills', icon: LineChart, text: 'Excel, analytics and workplace readiness' },
]

export const testSeries = [
  { name: 'Board Sprint', for: 'Classes 10 & 12', tests: '18 papers', questions: '720 questions', icon: Calculator },
  { name: 'JEE Rank Lab', for: 'Main + Advanced', tests: '32 papers', questions: '2,160 questions', icon: ChartNoAxesCombined },
  { name: 'NEET Precision', for: 'NEET UG', tests: '36 papers', questions: '6,480 questions', icon: Dna },
  { name: 'Weekly Checkpoint', for: 'Classes 8–12', tests: '48 papers', questions: '1,920 questions', icon: Users },
]

export const testimonials = [
  { quote: 'The chapter plan stopped me from jumping between books. My JEE mock score moved from 138 to 186.', name: 'Aarav Menon', meta: 'JEE 2026 learner' },
  { quote: 'Every Biology sheet points back to NCERT. Revision feels much less stressful now.', name: 'Meher Saini', meta: 'NEET 2027 learner' },
  { quote: 'The weekend sessions fit around work, and the Excel modules are immediately useful with my team.', name: 'Rohit Kulkarni', meta: 'Operations professional' },
]
