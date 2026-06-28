// ============================================================
// AEOS Mock Data — AI Engineering Student Seed (v2)
// ============================================================

import { BossRank } from './gamification'

export type TaskType = 'Main' | 'Side' | 'Daily'
export type TaskStatus = 'todo' | 'done'
export type BossStatus = 'active' | 'defeated'

export type KnowledgeCategory =
  | 'Paper'
  | 'Course'
  | 'Tool'
  | 'Documentation'
  | 'Video'
  | 'Book'

export interface Task {
  id: string
  title: string
  type: TaskType
  status: TaskStatus
  xpReward: number
  bossId: string | null
  date: string // ISO date string YYYY-MM-DD
}

export interface Boss {
  id: string
  title: string
  subtitle: string
  rank: BossRank
  status: BossStatus
  totalTasks: number
  completedTasks: number
  description: string
}

export interface KnowledgeItem {
  id: string
  title: string
  category: KnowledgeCategory
  url: string
  tags: string[]
  dateAdded: string
}

export interface Habit {
  id: string
  title: string
  icon: string
  completedToday: boolean
  streak: number
  description: string
}

export interface UserProfile {
  name: string
  title: string       // e.g. "B.Tech AI Engineer"
  lifetimeXp: number
}

// ─── TODAY'S DATE ────────────────────────────────────────────
const today = new Date().toISOString().split('T')[0]
const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]

// ─── USER PROFILE ────────────────────────────────────────────
// Level 5 (D-Rank) — XP = (5-1)^2 * 100 = 1600. Set to 1800 (comfortably in D-Rank).
export const initialUserProfile: UserProfile = {
  name: 'Prince',
  title: 'B.Tech AI Engineer',
  lifetimeXp: 1800,
}

// ─── BOSSES ──────────────────────────────────────────────────
export const initialBosses: Boss[] = [
  {
    id: 'boss-001',
    title: '100 Days of Deep Learning',
    subtitle: 'Neural Networks → Transformers',
    rank: 'S',
    status: 'active',
    totalTasks: 100,
    completedTasks: 34,
    description: 'Complete a structured 100-day curriculum covering fundamentals through advanced transformer architectures.',
  },
  {
    id: 'boss-002',
    title: 'End-Semester Exam Conquest',
    subtitle: 'Final Exams — All Subjects',
    rank: 'A',
    status: 'active',
    totalTasks: 24,
    completedTasks: 9,
    description: 'Dominate all final exams: OS, Algorithms, Linear Algebra, ML Theory, and Probability.',
  },
  {
    id: 'boss-003',
    title: 'LeetCode 300 Mastery',
    subtitle: 'DSA Problem Gauntlet',
    rank: 'SS',
    status: 'active',
    totalTasks: 300,
    completedTasks: 87,
    description: 'Solve 300 curated LeetCode problems spanning arrays, graphs, DP, and system design.',
  },
  {
    id: 'boss-004',
    title: 'Research Paper: Implement Mamba SSM',
    subtitle: 'State Space Model from Scratch',
    rank: 'SSS',
    status: 'active',
    totalTasks: 18,
    completedTasks: 3,
    description: 'Read the Mamba paper, understand selective SSMs, and build a working PyTorch implementation.',
  },
  {
    id: 'boss-005',
    title: 'ML System Design Portfolio',
    subtitle: 'Production-Ready ML Systems',
    rank: 'B',
    status: 'active',
    totalTasks: 12,
    completedTasks: 5,
    description: 'Design and document 4 end-to-end ML systems: recommendation, NLP pipeline, CV service, and RAG.',
  },
  {
    id: 'boss-006',
    title: 'Python Fundamentals',
    subtitle: 'Core Language Mastery',
    rank: 'D',
    status: 'defeated',
    totalTasks: 20,
    completedTasks: 20,
    description: 'Master Python: data structures, OOP, decorators, generators, and async programming.',
  },
]

// ─── TASKS ───────────────────────────────────────────────────
export const initialTasks: Task[] = [
  // TODAY — Main Quest
  {
    id: 'task-001',
    title: 'Study Attention Mechanism & Self-Attention (Day 35)',
    type: 'Main',
    status: 'todo',
    xpReward: 150,
    bossId: 'boss-001',
    date: today,
  },
  // TODAY — Side Quests
  {
    id: 'task-002',
    title: 'Solve 3× Two-Pointer LeetCode Problems',
    type: 'Side',
    status: 'todo',
    xpReward: 75,
    bossId: 'boss-003',
    date: today,
  },
  {
    id: 'task-003',
    title: 'Review OS Chapter 7: Virtual Memory',
    type: 'Side',
    status: 'todo',
    xpReward: 60,
    bossId: 'boss-002',
    date: today,
  },
  // TODAY — extra (not shown on cockpit directly)
  {
    id: 'task-004',
    title: 'Read Mamba SSM paper sections 3.1–3.3',
    type: 'Side',
    status: 'todo',
    xpReward: 100,
    bossId: 'boss-004',
    date: today,
  },
  // YESTERDAY — completed tasks
  {
    id: 'task-005',
    title: 'Implement RNN from Scratch in PyTorch',
    type: 'Main',
    status: 'done',
    xpReward: 150,
    bossId: 'boss-001',
    date: yesterday,
  },
  {
    id: 'task-006',
    title: 'Solve Binary Search Problems (5×)',
    type: 'Side',
    status: 'done',
    xpReward: 75,
    bossId: 'boss-003',
    date: yesterday,
  },
  {
    id: 'task-007',
    title: 'Linear Algebra Review: Eigenvalues & SVD',
    type: 'Side',
    status: 'done',
    xpReward: 60,
    bossId: 'boss-002',
    date: yesterday,
  },
  {
    id: 'task-008',
    title: 'Design ML Recommendation System Architecture',
    type: 'Side',
    status: 'done',
    xpReward: 90,
    bossId: 'boss-005',
    date: yesterday,
  },
]

// ─── DAILY HABITS (Non-Negotiables) ──────────────────────────
// Exactly as specified: Chess 160, all others 0
export const initialHabits: Habit[] = [
  {
    id: 'habit-001',
    title: 'Chess',
    icon: 'Chess',
    completedToday: false,
    streak: 160,
    description: 'Daily chess puzzles & game analysis',
  },
  {
    id: 'habit-002',
    title: 'DSA',
    icon: 'Code2',
    completedToday: false,
    streak: 0,
    description: '1 LeetCode problem minimum',
  },
  {
    id: 'habit-003',
    title: 'Run',
    icon: 'Zap',
    completedToday: false,
    streak: 0,
    description: '30 min outdoor run',
  },
  {
    id: 'habit-004',
    title: 'Duolingo',
    icon: 'Globe',
    completedToday: false,
    streak: 0,
    description: 'Daily language learning session',
  },
  {
    id: 'habit-005',
    title: 'Vocabulary',
    icon: 'BookA',
    completedToday: false,
    streak: 0,
    description: '10 new words with context',
  },
]

// ─── KNOWLEDGE VAULT ─────────────────────────────────────────
export const initialKnowledgeItems: KnowledgeItem[] = [
  {
    id: 'k-001',
    title: 'Attention Is All You Need (Transformer Paper)',
    category: 'Paper',
    url: 'https://arxiv.org/abs/1706.03762',
    tags: ['transformers', 'attention', 'NLP'],
    dateAdded: '2026-06-10',
  },
  {
    id: 'k-002',
    title: 'Mamba: Linear-Time Sequence Modeling with Selective State Spaces',
    category: 'Paper',
    url: 'https://arxiv.org/abs/2312.00752',
    tags: ['SSM', 'sequence models', 'mamba'],
    dateAdded: '2026-06-15',
  },
  {
    id: 'k-003',
    title: 'Andrej Karpathy — Neural Networks: Zero to Hero',
    category: 'Course',
    url: 'https://youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ',
    tags: ['neural networks', 'backprop', 'GPT'],
    dateAdded: '2026-05-20',
  },
  {
    id: 'k-004',
    title: 'The Illustrated Transformer — Jay Alammar',
    category: 'Documentation',
    url: 'https://jalammar.github.io/illustrated-transformer/',
    tags: ['transformers', 'visualization'],
    dateAdded: '2026-06-08',
  },
  {
    id: 'k-005',
    title: 'PyTorch Official Documentation',
    category: 'Documentation',
    url: 'https://pytorch.org/docs/stable/index.html',
    tags: ['pytorch', 'deep learning', 'framework'],
    dateAdded: '2026-05-01',
  },
  {
    id: 'k-006',
    title: 'Weights & Biases — Experiment Tracking',
    category: 'Tool',
    url: 'https://wandb.ai/site',
    tags: ['MLOps', 'experiment tracking'],
    dateAdded: '2026-06-01',
  },
  {
    id: 'k-007',
    title: 'Deep Learning Specialization — Andrew Ng (Coursera)',
    category: 'Course',
    url: 'https://www.coursera.org/specializations/deep-learning',
    tags: ['deep learning', 'coursera', 'neural networks'],
    dateAdded: '2026-05-10',
  },
  {
    id: 'k-008',
    title: 'Flash Attention: Fast and Memory-Efficient Exact Attention',
    category: 'Paper',
    url: 'https://arxiv.org/abs/2205.14135',
    tags: ['attention', 'optimization', 'GPU'],
    dateAdded: '2026-06-20',
  },
  {
    id: 'k-009',
    title: '3Blue1Brown — But what is a neural network?',
    category: 'Video',
    url: 'https://www.youtube.com/watch?v=aircAruvnKk',
    tags: ['neural networks', 'visualization', 'intro'],
    dateAdded: '2026-05-05',
  },
  {
    id: 'k-010',
    title: 'Designing Machine Learning Systems — Chip Huyen',
    category: 'Book',
    url: 'https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/',
    tags: ['MLOps', 'system design', 'production'],
    dateAdded: '2026-06-18',
  },
]
