(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/mockData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// ============================================================
// AEOS Mock Data — AI Engineering Student Seed (v2)
// ============================================================
__turbopack_context__.s({
    "initialBosses": (()=>initialBosses),
    "initialHabits": (()=>initialHabits),
    "initialKnowledgeItems": (()=>initialKnowledgeItems),
    "initialTasks": (()=>initialTasks),
    "initialUserProfile": (()=>initialUserProfile)
});
// ─── TODAY'S DATE ────────────────────────────────────────────
const today = new Date().toISOString().split('T')[0];
const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
const initialUserProfile = {
    name: 'Prince',
    title: 'B.Tech AI Engineer',
    lifetimeXp: 1800
};
const initialBosses = [
    {
        id: 'boss-001',
        title: '100 Days of Deep Learning',
        subtitle: 'Neural Networks → Transformers',
        rank: 'S',
        status: 'active',
        totalTasks: 100,
        completedTasks: 34,
        description: 'Complete a structured 100-day curriculum covering fundamentals through advanced transformer architectures.'
    },
    {
        id: 'boss-002',
        title: 'End-Semester Exam Conquest',
        subtitle: 'Final Exams — All Subjects',
        rank: 'A',
        status: 'active',
        totalTasks: 24,
        completedTasks: 9,
        description: 'Dominate all final exams: OS, Algorithms, Linear Algebra, ML Theory, and Probability.'
    },
    {
        id: 'boss-003',
        title: 'LeetCode 300 Mastery',
        subtitle: 'DSA Problem Gauntlet',
        rank: 'SS',
        status: 'active',
        totalTasks: 300,
        completedTasks: 87,
        description: 'Solve 300 curated LeetCode problems spanning arrays, graphs, DP, and system design.'
    },
    {
        id: 'boss-004',
        title: 'Research Paper: Implement Mamba SSM',
        subtitle: 'State Space Model from Scratch',
        rank: 'SSS',
        status: 'active',
        totalTasks: 18,
        completedTasks: 3,
        description: 'Read the Mamba paper, understand selective SSMs, and build a working PyTorch implementation.'
    },
    {
        id: 'boss-005',
        title: 'ML System Design Portfolio',
        subtitle: 'Production-Ready ML Systems',
        rank: 'B',
        status: 'active',
        totalTasks: 12,
        completedTasks: 5,
        description: 'Design and document 4 end-to-end ML systems: recommendation, NLP pipeline, CV service, and RAG.'
    },
    {
        id: 'boss-006',
        title: 'Python Fundamentals',
        subtitle: 'Core Language Mastery',
        rank: 'D',
        status: 'defeated',
        totalTasks: 20,
        completedTasks: 20,
        description: 'Master Python: data structures, OOP, decorators, generators, and async programming.'
    }
];
const initialTasks = [
    // TODAY — Main Quest
    {
        id: 'task-001',
        title: 'Study Attention Mechanism & Self-Attention (Day 35)',
        type: 'Main',
        status: 'todo',
        xpReward: 150,
        bossId: 'boss-001',
        date: today
    },
    // TODAY — Side Quests
    {
        id: 'task-002',
        title: 'Solve 3× Two-Pointer LeetCode Problems',
        type: 'Side',
        status: 'todo',
        xpReward: 75,
        bossId: 'boss-003',
        date: today
    },
    {
        id: 'task-003',
        title: 'Review OS Chapter 7: Virtual Memory',
        type: 'Side',
        status: 'todo',
        xpReward: 60,
        bossId: 'boss-002',
        date: today
    },
    // TODAY — extra (not shown on cockpit directly)
    {
        id: 'task-004',
        title: 'Read Mamba SSM paper sections 3.1–3.3',
        type: 'Side',
        status: 'todo',
        xpReward: 100,
        bossId: 'boss-004',
        date: today
    },
    // YESTERDAY — completed tasks
    {
        id: 'task-005',
        title: 'Implement RNN from Scratch in PyTorch',
        type: 'Main',
        status: 'done',
        xpReward: 150,
        bossId: 'boss-001',
        date: yesterday
    },
    {
        id: 'task-006',
        title: 'Solve Binary Search Problems (5×)',
        type: 'Side',
        status: 'done',
        xpReward: 75,
        bossId: 'boss-003',
        date: yesterday
    },
    {
        id: 'task-007',
        title: 'Linear Algebra Review: Eigenvalues & SVD',
        type: 'Side',
        status: 'done',
        xpReward: 60,
        bossId: 'boss-002',
        date: yesterday
    },
    {
        id: 'task-008',
        title: 'Design ML Recommendation System Architecture',
        type: 'Side',
        status: 'done',
        xpReward: 90,
        bossId: 'boss-005',
        date: yesterday
    }
];
const initialHabits = [
    {
        id: 'habit-001',
        title: 'Chess',
        icon: 'Chess',
        completedToday: false,
        streak: 160,
        description: 'Daily chess puzzles & game analysis'
    },
    {
        id: 'habit-002',
        title: 'DSA',
        icon: 'Code2',
        completedToday: false,
        streak: 0,
        description: '1 LeetCode problem minimum'
    },
    {
        id: 'habit-003',
        title: 'Run',
        icon: 'Zap',
        completedToday: false,
        streak: 0,
        description: '30 min outdoor run'
    },
    {
        id: 'habit-004',
        title: 'Duolingo',
        icon: 'Globe',
        completedToday: false,
        streak: 0,
        description: 'Daily language learning session'
    },
    {
        id: 'habit-005',
        title: 'Vocabulary',
        icon: 'BookA',
        completedToday: false,
        streak: 0,
        description: '10 new words with context'
    }
];
const initialKnowledgeItems = [
    {
        id: 'k-001',
        title: 'Attention Is All You Need (Transformer Paper)',
        category: 'Paper',
        url: 'https://arxiv.org/abs/1706.03762',
        tags: [
            'transformers',
            'attention',
            'NLP'
        ],
        dateAdded: '2026-06-10'
    },
    {
        id: 'k-002',
        title: 'Mamba: Linear-Time Sequence Modeling with Selective State Spaces',
        category: 'Paper',
        url: 'https://arxiv.org/abs/2312.00752',
        tags: [
            'SSM',
            'sequence models',
            'mamba'
        ],
        dateAdded: '2026-06-15'
    },
    {
        id: 'k-003',
        title: 'Andrej Karpathy — Neural Networks: Zero to Hero',
        category: 'Course',
        url: 'https://youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ',
        tags: [
            'neural networks',
            'backprop',
            'GPT'
        ],
        dateAdded: '2026-05-20'
    },
    {
        id: 'k-004',
        title: 'The Illustrated Transformer — Jay Alammar',
        category: 'Documentation',
        url: 'https://jalammar.github.io/illustrated-transformer/',
        tags: [
            'transformers',
            'visualization'
        ],
        dateAdded: '2026-06-08'
    },
    {
        id: 'k-005',
        title: 'PyTorch Official Documentation',
        category: 'Documentation',
        url: 'https://pytorch.org/docs/stable/index.html',
        tags: [
            'pytorch',
            'deep learning',
            'framework'
        ],
        dateAdded: '2026-05-01'
    },
    {
        id: 'k-006',
        title: 'Weights & Biases — Experiment Tracking',
        category: 'Tool',
        url: 'https://wandb.ai/site',
        tags: [
            'MLOps',
            'experiment tracking'
        ],
        dateAdded: '2026-06-01'
    },
    {
        id: 'k-007',
        title: 'Deep Learning Specialization — Andrew Ng (Coursera)',
        category: 'Course',
        url: 'https://www.coursera.org/specializations/deep-learning',
        tags: [
            'deep learning',
            'coursera',
            'neural networks'
        ],
        dateAdded: '2026-05-10'
    },
    {
        id: 'k-008',
        title: 'Flash Attention: Fast and Memory-Efficient Exact Attention',
        category: 'Paper',
        url: 'https://arxiv.org/abs/2205.14135',
        tags: [
            'attention',
            'optimization',
            'GPU'
        ],
        dateAdded: '2026-06-20'
    },
    {
        id: 'k-009',
        title: '3Blue1Brown — But what is a neural network?',
        category: 'Video',
        url: 'https://www.youtube.com/watch?v=aircAruvnKk',
        tags: [
            'neural networks',
            'visualization',
            'intro'
        ],
        dateAdded: '2026-05-05'
    },
    {
        id: 'k-010',
        title: 'Designing Machine Learning Systems — Chip Huyen',
        category: 'Book',
        url: 'https://www.oreilly.com/library/view/designing-machine-learning/9781098107956/',
        tags: [
            'MLOps',
            'system design',
            'production'
        ],
        dateAdded: '2026-06-18'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/gamification.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// ============================================================
// AEOS Gamification Math Engine
// ============================================================
__turbopack_context__.s({
    "BOSS_RANK_COLORS": (()=>BOSS_RANK_COLORS),
    "RANK_COLORS": (()=>RANK_COLORS),
    "bossHPColor": (()=>bossHPColor),
    "calcBossHP": (()=>calcBossHP),
    "calcLevel": (()=>calcLevel),
    "calcRank": (()=>calcRank),
    "formatXP": (()=>formatXP),
    "xpForLevel": (()=>xpForLevel),
    "xpProgress": (()=>xpProgress),
    "xpToNextLevel": (()=>xpToNextLevel)
});
function calcLevel(lifetimeXp) {
    return Math.floor(Math.sqrt(lifetimeXp / 100)) + 1;
}
function xpForLevel(level) {
    return (level - 1) * (level - 1) * 100;
}
function xpProgress(lifetimeXp) {
    const level = calcLevel(lifetimeXp);
    const currentLevelStart = xpForLevel(level);
    const nextLevelStart = xpForLevel(level + 1);
    const progress = (lifetimeXp - currentLevelStart) / (nextLevelStart - currentLevelStart);
    return Math.min(Math.max(progress, 0), 1);
}
function xpToNextLevel(lifetimeXp) {
    const level = calcLevel(lifetimeXp);
    return xpForLevel(level + 1) - lifetimeXp;
}
function calcRank(level) {
    if (level >= 40) return 'S';
    if (level >= 30) return 'A';
    if (level >= 20) return 'B';
    if (level >= 10) return 'C';
    if (level >= 5) return 'D';
    return 'E';
}
function calcBossHP(totalTasks, completedTasks) {
    if (totalTasks === 0) return 0;
    return Math.max(0, (totalTasks - completedTasks) / totalTasks * 100);
}
function bossHPColor(hp) {
    if (hp > 60) return '#FF3B30' // danger red
    ;
    if (hp > 30) return '#FF9F0A' // orange
    ;
    return '#30D158' // green (almost dead)
    ;
}
const RANK_COLORS = {
    E: {
        text: '#A1A1AA',
        bg: '#27272A',
        border: '#3F3F46',
        glow: 'transparent'
    },
    D: {
        text: '#30D158',
        bg: '#30D15815',
        border: '#30D15840',
        glow: '#30D15830'
    },
    C: {
        text: '#0A84FF',
        bg: '#0A84FF15',
        border: '#0A84FF40',
        glow: '#0A84FF30'
    },
    B: {
        text: '#BF5AF2',
        bg: '#BF5AF215',
        border: '#BF5AF240',
        glow: '#BF5AF230'
    },
    A: {
        text: '#FF9F0A',
        bg: '#FF9F0A15',
        border: '#FF9F0A40',
        glow: '#FF9F0A30'
    },
    S: {
        text: '#FFD60A',
        bg: '#FFD60A15',
        border: '#FFD60A40',
        glow: '#FFD60A60'
    }
};
const BOSS_RANK_COLORS = {
    E: {
        text: '#A1A1AA',
        bg: '#27272A',
        border: '#3F3F46'
    },
    D: {
        text: '#30D158',
        bg: '#30D15815',
        border: '#30D15840'
    },
    C: {
        text: '#0A84FF',
        bg: '#0A84FF15',
        border: '#0A84FF40'
    },
    B: {
        text: '#BF5AF2',
        bg: '#BF5AF215',
        border: '#BF5AF240'
    },
    A: {
        text: '#FF9F0A',
        bg: '#FF9F0A15',
        border: '#FF9F0A40'
    },
    S: {
        text: '#FFD60A',
        bg: '#FFD60A15',
        border: '#FFD60A40'
    },
    SS: {
        text: '#FF6B6B',
        bg: '#FF6B6B15',
        border: '#FF6B6B40'
    },
    SSS: {
        text: '#FF3B30',
        bg: '#FF3B3015',
        border: '#FF3B3060'
    }
};
function formatXP(xp) {
    return xp.toLocaleString();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// ============================================================
// AEOS Global Zustand Store (v2 — with full edit actions)
// ============================================================
__turbopack_context__.s({
    "useAeosStore": (()=>useAeosStore),
    "useBosses": (()=>useBosses),
    "useCompleteTask": (()=>useCompleteTask),
    "useHabits": (()=>useHabits),
    "useKnowledgeItems": (()=>useKnowledgeItems),
    "useTasks": (()=>useTasks),
    "useToggleHabit": (()=>useToggleHabit),
    "useToggleTask": (()=>useToggleTask),
    "useUncompleteTask": (()=>useUncompleteTask),
    "useUpdateBoss": (()=>useUpdateBoss),
    "useUpdateProfile": (()=>useUpdateProfile),
    "useUpdateStreak": (()=>useUpdateStreak),
    "useUserProfile": (()=>useUserProfile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware/immer.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mockData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gamification.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature(), _s10 = __turbopack_context__.k.signature(), _s11 = __turbopack_context__.k.signature();
;
;
;
;
const useAeosStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2f$immer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["immer"])((set, get)=>({
        // ── Initial State ──────────────────────────────────────
        userProfile: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialUserProfile"],
        tasks: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialTasks"],
        bosses: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialBosses"],
        knowledgeItems: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialKnowledgeItems"],
        habits: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mockData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialHabits"],
        // ── Derived Getters ───────────────────────────────────
        getLevel: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLevel"])(get().userProfile.lifetimeXp),
        getRank: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRank"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLevel"])(get().userProfile.lifetimeXp)),
        getTodaysTasks: ()=>{
            const today = new Date().toISOString().split('T')[0];
            return get().tasks.filter((t)=>t.date === today);
        },
        getMainQuestToday: ()=>{
            const today = new Date().toISOString().split('T')[0];
            return get().tasks.find((t)=>t.date === today && t.type === 'Main');
        },
        getSideQuestsToday: ()=>{
            const today = new Date().toISOString().split('T')[0];
            return get().tasks.filter((t)=>t.date === today && t.type === 'Side').slice(0, 2);
        },
        // ── Task Actions ──────────────────────────────────────
        /**
     * Complete a task:
     * 1. Mark task as done
     * 2. Award XP to user profile
     * 3. Increment boss.completedTasks (deals damage to HP)
     * 4. Auto-defeat boss if completedTasks >= totalTasks
     */ completeTask: (taskId)=>set((state)=>{
                const task = state.tasks.find((t)=>t.id === taskId);
                if (!task || task.status === 'done') return;
                task.status = 'done';
                state.userProfile.lifetimeXp += task.xpReward;
                if (task.bossId) {
                    const boss = state.bosses.find((b)=>b.id === task.bossId);
                    if (boss && boss.status === 'active') {
                        boss.completedTasks = Math.min(boss.completedTasks + 1, boss.totalTasks);
                        if (boss.completedTasks >= boss.totalTasks) {
                            boss.status = 'defeated';
                        }
                    }
                }
            }),
        /**
     * Uncomplete a task — reverses XP and boss damage
     */ uncompleteTask: (taskId)=>set((state)=>{
                const task = state.tasks.find((t)=>t.id === taskId);
                if (!task || task.status === 'todo') return;
                task.status = 'todo';
                state.userProfile.lifetimeXp = Math.max(0, state.userProfile.lifetimeXp - task.xpReward);
                if (task.bossId) {
                    const boss = state.bosses.find((b)=>b.id === task.bossId);
                    if (boss) {
                        boss.completedTasks = Math.max(0, boss.completedTasks - 1);
                        if (boss.status === 'defeated') boss.status = 'active';
                    }
                }
            }),
        /** Unified toggle wrapper */ toggleTask: (taskId)=>{
            const task = get().tasks.find((t)=>t.id === taskId);
            if (!task) return;
            if (task.status === 'todo') {
                get().completeTask(taskId);
            } else {
                get().uncompleteTask(taskId);
            }
        },
        /** Add a new task to the store */ addTask: (task)=>set((state)=>{
                const newTask = {
                    ...task,
                    id: `task-${Date.now()}`
                };
                state.tasks.push(newTask);
            }),
        /** Delete a task by id */ deleteTask: (taskId)=>set((state)=>{
                state.tasks = state.tasks.filter((t)=>t.id !== taskId);
            }),
        // ── Habit Actions ─────────────────────────────────────
        /**
     * Toggle completedToday — awards or revokes +25 XP
     * Note: does NOT touch the numeric streak counter.
     * Streaks are managed independently via updateStreak / increment / decrement.
     */ toggleHabit: (habitId)=>set((state)=>{
                const habit = state.habits.find((h)=>h.id === habitId);
                if (!habit) return;
                habit.completedToday = !habit.completedToday;
                if (habit.completedToday) {
                    state.userProfile.lifetimeXp += 25;
                } else {
                    state.userProfile.lifetimeXp = Math.max(0, state.userProfile.lifetimeXp - 25);
                }
            }),
        /** Directly set a habit streak to an exact number (used in Settings form) */ updateStreak: (habitId, count)=>set((state)=>{
                const habit = state.habits.find((h)=>h.id === habitId);
                if (habit) habit.streak = Math.max(0, count);
            }),
        /** Increment streak by 1 (inline cockpit control) */ incrementStreak: (habitId)=>set((state)=>{
                const habit = state.habits.find((h)=>h.id === habitId);
                if (habit) habit.streak += 1;
            }),
        /** Decrement streak by 1, clamp at 0 (inline cockpit control) */ decrementStreak: (habitId)=>set((state)=>{
                const habit = state.habits.find((h)=>h.id === habitId);
                if (habit) habit.streak = Math.max(0, habit.streak - 1);
            }),
        // ── Profile Actions ───────────────────────────────────
        /**
     * Update any subset of user profile fields.
     * Useful for name, title, and manual XP/level adjustment from Settings.
     */ updateProfile: (fields)=>set((state)=>{
                Object.assign(state.userProfile, fields);
                // Clamp XP at 0
                if (state.userProfile.lifetimeXp < 0) state.userProfile.lifetimeXp = 0;
            }),
        // ── Boss Actions ──────────────────────────────────────
        /**
     * Update any subset of boss fields by id.
     * Auto-recalculates status when totalTasks/completedTasks change.
     */ updateBoss: (id, fields)=>set((state)=>{
                const boss = state.bosses.find((b)=>b.id === id);
                if (!boss) return;
                Object.assign(boss, fields);
                // Clamp completedTasks within [0, totalTasks]
                boss.completedTasks = Math.min(Math.max(0, boss.completedTasks), boss.totalTasks);
                // Auto-update status
                if (boss.completedTasks >= boss.totalTasks) {
                    boss.status = 'defeated';
                } else if (boss.status === 'defeated') {
                    boss.status = 'active';
                }
            }),
        // ── Knowledge Vault Actions ───────────────────────────
        addKnowledgeItem: (item)=>set((state)=>{
                const newItem = {
                    ...item,
                    id: `k-${Date.now()}`,
                    dateAdded: new Date().toISOString().split('T')[0]
                };
                state.knowledgeItems.unshift(newItem);
            }),
        deleteKnowledgeItem: (id)=>set((state)=>{
                state.knowledgeItems = state.knowledgeItems.filter((k)=>k.id !== id);
            })
    })));
const useUserProfile = ()=>{
    _s();
    return useAeosStore({
        "useUserProfile.useAeosStore": (s)=>s.userProfile
    }["useUserProfile.useAeosStore"]);
};
_s(useUserProfile, "nFkUB9LlGmOxE1aFL3YBdVutyxA=", false, function() {
    return [
        useAeosStore
    ];
});
const useTasks = ()=>{
    _s1();
    return useAeosStore({
        "useTasks.useAeosStore": (s)=>s.tasks
    }["useTasks.useAeosStore"]);
};
_s1(useTasks, "nFkUB9LlGmOxE1aFL3YBdVutyxA=", false, function() {
    return [
        useAeosStore
    ];
});
const useBosses = ()=>{
    _s2();
    return useAeosStore({
        "useBosses.useAeosStore": (s)=>s.bosses
    }["useBosses.useAeosStore"]);
};
_s2(useBosses, "nFkUB9LlGmOxE1aFL3YBdVutyxA=", false, function() {
    return [
        useAeosStore
    ];
});
const useKnowledgeItems = ()=>{
    _s3();
    return useAeosStore({
        "useKnowledgeItems.useAeosStore": (s)=>s.knowledgeItems
    }["useKnowledgeItems.useAeosStore"]);
};
_s3(useKnowledgeItems, "nFkUB9LlGmOxE1aFL3YBdVutyxA=", false, function() {
    return [
        useAeosStore
    ];
});
const useHabits = ()=>{
    _s4();
    return useAeosStore({
        "useHabits.useAeosStore": (s)=>s.habits
    }["useHabits.useAeosStore"]);
};
_s4(useHabits, "nFkUB9LlGmOxE1aFL3YBdVutyxA=", false, function() {
    return [
        useAeosStore
    ];
});
const useCompleteTask = ()=>{
    _s5();
    return useAeosStore({
        "useCompleteTask.useAeosStore": (s)=>s.completeTask
    }["useCompleteTask.useAeosStore"]);
};
_s5(useCompleteTask, "nFkUB9LlGmOxE1aFL3YBdVutyxA=", false, function() {
    return [
        useAeosStore
    ];
});
const useUncompleteTask = ()=>{
    _s6();
    return useAeosStore({
        "useUncompleteTask.useAeosStore": (s)=>s.uncompleteTask
    }["useUncompleteTask.useAeosStore"]);
};
_s6(useUncompleteTask, "nFkUB9LlGmOxE1aFL3YBdVutyxA=", false, function() {
    return [
        useAeosStore
    ];
});
const useToggleTask = ()=>{
    _s7();
    return useAeosStore({
        "useToggleTask.useAeosStore": (s)=>s.toggleTask
    }["useToggleTask.useAeosStore"]);
};
_s7(useToggleTask, "nFkUB9LlGmOxE1aFL3YBdVutyxA=", false, function() {
    return [
        useAeosStore
    ];
});
const useToggleHabit = ()=>{
    _s8();
    return useAeosStore({
        "useToggleHabit.useAeosStore": (s)=>s.toggleHabit
    }["useToggleHabit.useAeosStore"]);
};
_s8(useToggleHabit, "nFkUB9LlGmOxE1aFL3YBdVutyxA=", false, function() {
    return [
        useAeosStore
    ];
});
const useUpdateProfile = ()=>{
    _s9();
    return useAeosStore({
        "useUpdateProfile.useAeosStore": (s)=>s.updateProfile
    }["useUpdateProfile.useAeosStore"]);
};
_s9(useUpdateProfile, "nFkUB9LlGmOxE1aFL3YBdVutyxA=", false, function() {
    return [
        useAeosStore
    ];
});
const useUpdateBoss = ()=>{
    _s10();
    return useAeosStore({
        "useUpdateBoss.useAeosStore": (s)=>s.updateBoss
    }["useUpdateBoss.useAeosStore"]);
};
_s10(useUpdateBoss, "nFkUB9LlGmOxE1aFL3YBdVutyxA=", false, function() {
    return [
        useAeosStore
    ];
});
const useUpdateStreak = ()=>{
    _s11();
    return useAeosStore({
        "useUpdateStreak.useAeosStore": (s)=>s.updateStreak
    }["useUpdateStreak.useAeosStore"]);
};
_s11(useUpdateStreak, "nFkUB9LlGmOxE1aFL3YBdVutyxA=", false, function() {
    return [
        useAeosStore
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/RankBadge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BossRankBadge": (()=>BossRankBadge),
    "RankBadge": (()=>RankBadge)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gamification.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
function RankBadge({ rank, size = 'md', showLabel = false }) {
    const colors = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_COLORS"][rank];
    const sizeClasses = {
        sm: 'text-[10px] px-1.5 py-0.5 rounded-md',
        md: 'text-xs px-2 py-1 rounded-lg',
        lg: 'text-sm px-3 py-1.5 rounded-lg font-bold',
        xl: 'text-2xl px-5 py-2 rounded-xl font-black tracking-widest'
    };
    const glowClass = {
        E: '',
        D: '',
        C: 'rank-glow-c',
        B: 'rank-glow-b',
        A: 'rank-glow-a',
        S: 'rank-glow-s'
    }[rank];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('inline-flex items-center gap-1 font-bold tracking-wider transition-all duration-300', sizeClasses[size], glowClass),
        style: {
            color: colors.text,
            backgroundColor: colors.bg,
            border: `1px solid ${colors.border}`
        },
        children: [
            showLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "opacity-60 font-normal text-[9px] uppercase tracking-widest",
                children: "Rank"
            }, void 0, false, {
                fileName: "[project]/components/ui/RankBadge.tsx",
                lineNumber: 47,
                columnNumber: 21
            }, this),
            rank
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/RankBadge.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = RankBadge;
function BossRankBadge({ rank, size = 'md' }) {
    const colors = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOSS_RANK_COLORS"][rank];
    const sizeClasses = {
        sm: 'text-[10px] px-1.5 py-0.5 rounded-md',
        md: 'text-xs px-2 py-1 rounded-lg',
        lg: 'text-sm px-3 py-1.5 rounded-lg font-bold'
    };
    const isSSS = rank === 'SSS';
    const isSS = rank === 'SS';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('inline-flex items-center font-bold tracking-wider transition-all', sizeClasses[size], isSSS && 'rank-glow-sss', isSS && 'rank-glow-s'),
        style: {
            color: colors.text,
            backgroundColor: colors.bg,
            border: `1px solid ${colors.border}`
        },
        children: rank
    }, void 0, false, {
        fileName: "[project]/components/ui/RankBadge.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_c1 = BossRankBadge;
var _c, _c1;
__turbopack_context__.k.register(_c, "RankBadge");
__turbopack_context__.k.register(_c1, "BossRankBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/layout/Sidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Sidebar": (()=>Sidebar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$swords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Swords$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/swords.js [app-client] (ecmascript) <export default as Swords>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-marked.js [app-client] (ecmascript) <export default as BookMarked>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cpu.js [app-client] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gamification.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$RankBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/RankBadge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const NAV_ITEMS = [
    {
        href: '/',
        label: 'The Cockpit',
        sublabel: 'Home',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"]
    },
    {
        href: '/missions',
        label: 'Mission Control',
        sublabel: 'Boss Battles',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$swords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Swords$3e$__["Swords"]
    },
    {
        href: '/vault',
        label: 'Knowledge Vault',
        sublabel: 'Research',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$marked$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookMarked$3e$__["BookMarked"]
    },
    {
        href: '/settings',
        label: 'Profile & Settings',
        sublabel: 'Edit Everything',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"]
    }
];
function Sidebar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const userProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "Sidebar.useAeosStore[userProfile]": (s)=>s.userProfile
    }["Sidebar.useAeosStore[userProfile]"]);
    const { name, title, lifetimeXp } = userProfile;
    const level = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLevel"])(lifetimeXp);
    const rank = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRank"])(level);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xpProgress"])(lifetimeXp);
    const colors = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_COLORS"][rank];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-64 flex-shrink-0 flex flex-col h-screen glass border-r border-aeos-border relative z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-6 border-b border-aeos-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-9 h-9 rounded-xl bg-aeos-blue flex items-center justify-center shadow-lg shadow-aeos-blue/30",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"], {
                                size: 18,
                                className: "text-white"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/layout/Sidebar.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-sm font-black tracking-[0.15em] text-aeos-text uppercase",
                                    children: "AEOS"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] text-aeos-muted font-medium tracking-widest uppercase",
                                    children: "AI Engineer OS"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/Sidebar.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/Sidebar.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 px-3 py-4 space-y-1 overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] font-semibold text-aeos-muted uppercase tracking-widest px-3 pb-2 pt-1",
                        children: "Navigation"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    NAV_ITEMS.map((item)=>{
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        const isSettings = item.href === '/settings';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative overflow-hidden', isActive ? isSettings ? 'bg-aeos-purple/10 text-aeos-purple border border-aeos-purple/20' : 'bg-aeos-blue/10 text-aeos-blue border border-aeos-blue/20' : 'text-aeos-subtext hover:text-aeos-text hover:bg-white/5 border border-transparent'),
                            children: [
                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 rounded-r-full",
                                    style: {
                                        background: isSettings ? '#BF5AF2' : '#0A84FF'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                    lineNumber: 99,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    size: 17,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('flex-shrink-0 transition-colors', isActive ? isSettings ? 'text-aeos-purple' : 'text-aeos-blue' : 'text-aeos-muted group-hover:text-aeos-subtext')
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('text-sm font-medium leading-tight truncate', isActive && (isSettings ? 'text-aeos-purple' : 'text-aeos-blue')),
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Sidebar.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-aeos-muted leading-tight",
                                            children: item.sublabel
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Sidebar.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this),
                                isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                    size: 13,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('flex-shrink-0', isSettings ? 'text-aeos-purple/60' : 'text-aeos-blue/60')
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/Sidebar.tsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.href, true, {
                            fileName: "[project]/components/layout/Sidebar.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 pb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/settings",
                    className: "block",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl p-4 space-y-3 transition-all duration-200 hover:brightness-110",
                        style: {
                            background: `linear-gradient(135deg, ${colors.bg}80, rgba(24,24,27,0.8))`,
                            border: `1px solid ${colors.border}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-aeos-text truncate max-w-[100px]",
                                                children: name
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-aeos-muted mt-0.5 truncate max-w-[110px]",
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$RankBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RankBadge"], {
                                        rank: rank,
                                        size: "lg"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-aeos-muted uppercase tracking-wider",
                                                children: "XP Progress"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px]",
                                                style: {
                                                    color: colors.text
                                                },
                                                children: [
                                                    "Lv. ",
                                                    level
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/layout/Sidebar.tsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1.5 rounded-full bg-[#27272A] overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "xp-bar-fill h-full rounded-full",
                                            style: {
                                                width: `${progress * 100}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/Sidebar.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-aeos-muted text-right",
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatXP"])(lifetimeXp),
                                            " XP"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/Sidebar.tsx",
                                        lineNumber: 176,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/Sidebar.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/Sidebar.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/layout/Sidebar.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/Sidebar.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/Sidebar.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "SYg+t4WBUR2C5x/eowGCkVn5T6o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/cockpit/XPHeader.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "XPHeader": (()=>XPHeader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gamification.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function XPHeader() {
    _s();
    const lifetimeXp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "XPHeader.useAeosStore[lifetimeXp]": (s)=>s.userProfile.lifetimeXp
    }["XPHeader.useAeosStore[lifetimeXp]"]);
    const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "XPHeader.useAeosStore[name]": (s)=>s.userProfile.name
    }["XPHeader.useAeosStore[name]"]);
    const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "XPHeader.useAeosStore[title]": (s)=>s.userProfile.title
    }["XPHeader.useAeosStore[title]"]);
    const level = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLevel"])(lifetimeXp);
    const rank = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRank"])(level);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xpProgress"])(lifetimeXp);
    const nextLevelXp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xpForLevel"])(level + 1);
    const xpNeeded = nextLevelXp - lifetimeXp;
    const colors = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_COLORS"][rank];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl p-6 relative overflow-hidden animate-fade-in",
        style: {
            background: `linear-gradient(135deg, #18181B 0%, ${colors.bg}60 100%)`,
            border: `1px solid ${colors.border}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none",
                style: {
                    background: colors.text
                }
            }, void 0, false, {
                fileName: "[project]/components/cockpit/XPHeader.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl",
                                style: {
                                    background: `linear-gradient(135deg, ${colors.bg}, ${colors.bg}80)`,
                                    border: `2px solid ${colors.border}`,
                                    boxShadow: `0 0 24px ${colors.glow}`
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl font-black tracking-widest",
                                    style: {
                                        color: colors.text
                                    },
                                    children: rank
                                }, void 0, false, {
                                    fileName: "[project]/components/cockpit/XPHeader.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/cockpit/XPHeader.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                size: 13,
                                                className: "text-aeos-muted"
                                            }, void 0, false, {
                                                fileName: "[project]/components/cockpit/XPHeader.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-aeos-muted uppercase tracking-widest font-medium",
                                                children: "Hunter Profile"
                                            }, void 0, false, {
                                                fileName: "[project]/components/cockpit/XPHeader.tsx",
                                                lineNumber: 58,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cockpit/XPHeader.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-bold text-aeos-text",
                                        children: name
                                    }, void 0, false, {
                                        fileName: "[project]/components/cockpit/XPHeader.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-aeos-muted mt-0.5",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/components/cockpit/XPHeader.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-semibold",
                                                style: {
                                                    color: colors.text
                                                },
                                                children: [
                                                    "Level ",
                                                    level
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/cockpit/XPHeader.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-aeos-muted text-sm",
                                                children: "·"
                                            }, void 0, false, {
                                                fileName: "[project]/components/cockpit/XPHeader.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-aeos-muted",
                                                children: [
                                                    rank,
                                                    "-Rank Hunter"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/cockpit/XPHeader.tsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cockpit/XPHeader.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cockpit/XPHeader.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cockpit/XPHeader.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-6 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 justify-end mb-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                size: 12,
                                                className: "text-aeos-blue"
                                            }, void 0, false, {
                                                fileName: "[project]/components/cockpit/XPHeader.tsx",
                                                lineNumber: 76,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-aeos-muted uppercase tracking-wider",
                                                children: "Lifetime XP"
                                            }, void 0, false, {
                                                fileName: "[project]/components/cockpit/XPHeader.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cockpit/XPHeader.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold text-aeos-blue",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatXP"])(lifetimeXp)
                                    }, void 0, false, {
                                        fileName: "[project]/components/cockpit/XPHeader.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cockpit/XPHeader.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 justify-end mb-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                size: 12,
                                                style: {
                                                    color: colors.text
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/cockpit/XPHeader.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-aeos-muted uppercase tracking-wider",
                                                children: "To Next Level"
                                            }, void 0, false, {
                                                fileName: "[project]/components/cockpit/XPHeader.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/cockpit/XPHeader.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl font-bold",
                                        style: {
                                            color: colors.text
                                        },
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatXP"])(xpNeeded)
                                    }, void 0, false, {
                                        fileName: "[project]/components/cockpit/XPHeader.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cockpit/XPHeader.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cockpit/XPHeader.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cockpit/XPHeader.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-aeos-muted font-medium",
                                children: [
                                    "Level ",
                                    level,
                                    " → ",
                                    level + 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cockpit/XPHeader.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-semibold",
                                style: {
                                    color: colors.text
                                },
                                children: [
                                    (progress * 100).toFixed(1),
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cockpit/XPHeader.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cockpit/XPHeader.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2 rounded-full bg-[#27272A] overflow-hidden relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "xp-bar-fill h-full rounded-full",
                            style: {
                                width: `${progress * 100}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/cockpit/XPHeader.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/cockpit/XPHeader.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cockpit/XPHeader.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cockpit/XPHeader.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(XPHeader, "ZYG0FDwgYJJucaRA4wkSt2Qulic=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"]
    ];
});
_c = XPHeader;
var _c;
__turbopack_context__.k.register(_c, "XPHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/cockpit/TodaysMissions.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TodaysMissions": (()=>TodaysMissions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sword$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sword$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sword.js [app-client] (ecmascript) <export default as Sword>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
function TaskCard({ task, isMain = false, index = 0 }) {
    _s();
    const completeTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "TaskCard.useAeosStore[completeTask]": (s)=>s.completeTask
    }["TaskCard.useAeosStore[completeTask]"]);
    const uncompleteTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "TaskCard.useAeosStore[uncompleteTask]": (s)=>s.uncompleteTask
    }["TaskCard.useAeosStore[uncompleteTask]"]);
    const bosses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "TaskCard.useAeosStore[bosses]": (s)=>s.bosses
    }["TaskCard.useAeosStore[bosses]"]);
    const isDone = task.status === 'done';
    const boss = bosses.find((b)=>b.id === task.bossId);
    const handleToggle = ()=>{
        if (isDone) {
            uncompleteTask(task.id);
        } else {
            completeTask(task.id);
        }
    };
    const typeConfig = {
        Main: {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sword$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sword$3e$__["Sword"],
            color: '#0A84FF',
            label: 'MAIN QUEST',
            bg: 'rgba(10,132,255,0.08)',
            border: 'rgba(10,132,255,0.25)'
        },
        Side: {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
            color: '#BF5AF2',
            label: 'SIDE QUEST',
            bg: 'rgba(191,90,242,0.06)',
            border: 'rgba(191,90,242,0.20)'
        },
        Daily: {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
            color: '#FF9F0A',
            label: 'DAILY',
            bg: 'rgba(255,159,10,0.06)',
            border: 'rgba(255,159,10,0.20)'
        }
    };
    const config = typeConfig[task.type];
    const Icon = config.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('rounded-2xl p-5 transition-all duration-300 animate-fade-in group', isDone && 'opacity-60', 'hover:scale-[1.01] cursor-default'),
        style: {
            background: isDone ? 'rgba(24,24,27,0.4)' : config.bg,
            border: `1px solid ${isDone ? '#27272A' : config.border}`,
            animationDelay: `${index * 100}ms`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleToggle,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300', isDone ? 'bg-aeos-green border-aeos-green' : 'border-aeos-border hover:border-aeos-blue hover:bg-aeos-blue/10'),
                    title: isDone ? 'Mark as incomplete' : 'Complete task',
                    children: isDone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        size: 14,
                        className: "text-white fill-aeos-green"
                    }, void 0, false, {
                        fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-2 h-2 rounded-full bg-transparent group-hover:bg-aeos-blue/40 transition-colors"
                    }, void 0, false, {
                        fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    size: 12,
                                    style: {
                                        color: config.color
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold tracking-widest uppercase",
                                    style: {
                                        color: config.color
                                    },
                                    children: config.label
                                }, void 0, false, {
                                    fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                isMain && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-auto text-[10px] bg-aeos-blue/15 text-aeos-blue border border-aeos-blue/30 px-2 py-0.5 rounded-full font-semibold",
                                    children: "Priority"
                                }, void 0, false, {
                                    fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('text-sm font-semibold text-aeos-text leading-snug', isDone && 'line-through text-aeos-muted'),
                            children: task.title
                        }, void 0, false, {
                            fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mt-2.5",
                            children: [
                                boss && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1.5 h-1.5 rounded-full bg-aeos-red"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] text-aeos-muted truncate max-w-[180px]",
                                            children: boss.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-auto flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                            size: 11,
                                            className: "text-aeos-blue"
                                        }, void 0, false, {
                                            fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                                            lineNumber: 110,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-bold text-aeos-blue",
                                            children: [
                                                "+",
                                                task.xpReward,
                                                " XP"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/cockpit/TodaysMissions.tsx",
            lineNumber: 54,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/cockpit/TodaysMissions.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(TaskCard, "BA/js4ccb+yb8Mvv6yMIzBUZ5js=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"]
    ];
});
_c = TaskCard;
// ─── Empty State ─────────────────────────────────────────────
function EmptySlot({ label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl p-5 border border-dashed border-aeos-border/40 flex items-center gap-3 opacity-40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                size: 16,
                className: "text-aeos-muted"
            }, void 0, false, {
                fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-aeos-muted",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cockpit/TodaysMissions.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c1 = EmptySlot;
function TodaysMissions() {
    _s1();
    const getTodaysTasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "TodaysMissions.useAeosStore[getTodaysTasks]": (s)=>s.getTodaysTasks
    }["TodaysMissions.useAeosStore[getTodaysTasks]"]);
    const todayTasks = getTodaysTasks();
    const mainQuest = todayTasks.find((t)=>t.type === 'Main');
    const sideQuests = todayTasks.filter((t)=>t.type === 'Side').slice(0, 2);
    const completedToday = todayTasks.filter((t)=>t.status === 'done').length;
    const totalToday = todayTasks.length;
    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-base font-bold text-aeos-text flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sword$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sword$3e$__["Sword"], {
                                        size: 16,
                                        className: "text-aeos-blue"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    "Today's Missions"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-aeos-muted mt-0.5",
                                children: today
                            }, void 0, false, {
                                fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1.5 w-20 rounded-full bg-[#27272A] overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full rounded-full bg-aeos-blue transition-all duration-500",
                                    style: {
                                        width: `${totalToday > 0 ? completedToday / totalToday * 100 : 0}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                                    lineNumber: 162,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-aeos-muted font-medium",
                                children: [
                                    completedToday,
                                    "/",
                                    totalToday
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] font-bold text-aeos-muted uppercase tracking-widest mb-2 px-1",
                        children: "◆ Main Quest"
                    }, void 0, false, {
                        fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    mainQuest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskCard, {
                        task: mainQuest,
                        isMain: true,
                        index: 0
                    }, void 0, false, {
                        fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptySlot, {
                        label: "No main quest assigned today"
                    }, void 0, false, {
                        fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] font-bold text-aeos-muted uppercase tracking-widest mb-2 px-1",
                        children: "◇ Side Quests"
                    }, void 0, false, {
                        fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            sideQuests.length > 0 ? sideQuests.map((task, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskCard, {
                                    task: task,
                                    index: i + 1
                                }, task.id, false, {
                                    fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptySlot, {
                                label: "No side quests for today"
                            }, void 0, false, {
                                fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            sideQuests.length < 2 && sideQuests.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmptySlot, {
                                label: "Side quest slot open"
                            }, void 0, false, {
                                fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cockpit/TodaysMissions.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cockpit/TodaysMissions.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
_s1(TodaysMissions, "m+VKyPHDxj83/0eOCyc9Y4TmsiY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"]
    ];
});
_c2 = TodaysMissions;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "TaskCard");
__turbopack_context__.k.register(_c1, "EmptySlot");
__turbopack_context__.k.register(_c2, "TodaysMissions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/cockpit/NonNegotiables.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "NonNegotiables": (()=>NonNegotiables)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookA$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-a.js [app-client] (ecmascript) <export default as BookA>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
// ─── Icon map (expanded for new habits) ──────────────────────
const ICON_MAP = {
    Chess: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"],
    Code2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
    Zap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    Globe: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
    BookA: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookA$3e$__["BookA"],
    BookOpen: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
    Activity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
};
function HabitRow({ habit, index }) {
    _s();
    const toggleHabit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "HabitRow.useAeosStore[toggleHabit]": (s)=>s.toggleHabit
    }["HabitRow.useAeosStore[toggleHabit]"]);
    const incrementStreak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "HabitRow.useAeosStore[incrementStreak]": (s)=>s.incrementStreak
    }["HabitRow.useAeosStore[incrementStreak]"]);
    const decrementStreak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "HabitRow.useAeosStore[decrementStreak]": (s)=>s.decrementStreak
    }["HabitRow.useAeosStore[decrementStreak]"]);
    const Icon = ICON_MAP[habit.icon] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"];
    const isDone = habit.completedToday;
    const isHighStreak = habit.streak >= 30;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-200 animate-fade-in', isDone ? 'bg-aeos-green/8 border border-aeos-green/20' : 'bg-aeos-surface/60 border border-aeos-border hover:border-aeos-border/80'),
        style: {
            animationDelay: `${index * 60}ms`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>toggleHabit(habit.id),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200', isDone ? 'bg-aeos-green/20 hover:bg-aeos-green/30' : 'bg-[#27272A] hover:bg-aeos-blue/15 hover:border hover:border-aeos-blue/30'),
                title: isDone ? 'Mark incomplete' : 'Mark complete',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    size: 14,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('transition-colors', isDone ? 'text-aeos-green' : 'text-aeos-muted')
                }, void 0, false, {
                    fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 min-w-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('text-sm font-semibold leading-tight truncate', isDone ? 'text-aeos-green' : 'text-aeos-text'),
                    children: habit.title
                }, void 0, false, {
                    fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>decrementStreak(habit.id),
                        className: "w-5 h-5 rounded-md bg-[#27272A] border border-aeos-border hover:border-aeos-red/50 hover:bg-aeos-red/10 flex items-center justify-center transition-all duration-150 group",
                        title: "Decrement streak",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                            size: 10,
                            className: "text-aeos-muted group-hover:text-aeos-red"
                        }, void 0, false, {
                            fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('flex items-center gap-0.5 min-w-[42px] justify-center px-1.5 py-0.5 rounded-lg border', habit.streak > 0 ? isHighStreak ? 'bg-[#FF9F0A]/15 border-[#FF9F0A]/30' : 'bg-[#27272A] border-aeos-border' : 'bg-[#1C1C1E] border-aeos-border/40'),
                        children: [
                            habit.streak > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                size: 9,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(isHighStreak ? 'text-[#FF9F0A]' : 'text-aeos-muted')
                            }, void 0, false, {
                                fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('text-[11px] font-bold tabular-nums', habit.streak > 0 ? isHighStreak ? 'text-[#FF9F0A]' : 'text-aeos-subtext' : 'text-aeos-muted/50'),
                                children: habit.streak
                            }, void 0, false, {
                                fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>incrementStreak(habit.id),
                        className: "w-5 h-5 rounded-md bg-[#27272A] border border-aeos-border hover:border-aeos-blue/50 hover:bg-aeos-blue/10 flex items-center justify-center transition-all duration-150 group",
                        title: "Increment streak",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 10,
                            className: "text-aeos-muted group-hover:text-aeos-blue"
                        }, void 0, false, {
                            fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200 ml-1', isDone ? 'bg-aeos-green border-aeos-green' : 'border-aeos-border'),
                        children: isDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            size: 10,
                            className: "text-white"
                        }, void 0, false, {
                            fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                            lineNumber: 148,
                            columnNumber: 22
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cockpit/NonNegotiables.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(HabitRow, "FiowNUj6BOTdLKzuCI/kctJ1kx4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"]
    ];
});
_c = HabitRow;
function NonNegotiables() {
    _s1();
    const habits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "NonNegotiables.useAeosStore[habits]": (s)=>s.habits
    }["NonNegotiables.useAeosStore[habits]"]);
    const completedCount = habits.filter((h)=>h.completedToday).length;
    const totalCount = habits.length;
    const allDone = completedCount === totalCount;
    const pct = totalCount > 0 ? Math.round(completedCount / totalCount * 100) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl p-5 glass border-aeos-border flex flex-col gap-3 h-full animate-slide-in-right",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-base font-bold text-aeos-text flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                                        size: 16,
                                        className: "text-[#FF9F0A]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                                        lineNumber: 171,
                                        columnNumber: 13
                                    }, this),
                                    "Non-Negotiables"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('text-sm font-bold tabular-nums', allDone ? 'text-aeos-green' : 'text-aeos-subtext'),
                                children: [
                                    completedCount,
                                    "/",
                                    totalCount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-aeos-muted",
                        children: [
                            "Tap icon to complete · ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-aeos-blue/70",
                                children: "+/−"
                            }, void 0, false, {
                                fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                                lineNumber: 184,
                                columnNumber: 34
                            }, this),
                            " to adjust streak"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2.5 h-1 w-full rounded-full bg-[#27272A] overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('h-full rounded-full transition-all duration-700', allDone ? 'bg-aeos-green' : 'bg-[#FF9F0A]'),
                            style: {
                                width: `${pct}%`
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    allDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-aeos-green font-semibold mt-1.5 flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this),
                            "All done! +25 XP per habit"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                        lineNumber: 199,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                lineNumber: 168,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1.5 stagger-children",
                children: habits.map((habit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HabitRow, {
                        habit: habit,
                        index: index
                    }, habit.id, false, {
                        fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto pt-2 border-t border-aeos-border",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] text-aeos-muted text-center",
                    children: [
                        "Completion awards",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-aeos-blue font-semibold",
                            children: "+25 XP"
                        }, void 0, false, {
                            fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this),
                        ' · ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-aeos-subtext",
                            children: "streaks are independent"
                        }, void 0, false, {
                            fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/cockpit/NonNegotiables.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/cockpit/NonNegotiables.tsx",
        lineNumber: 166,
        columnNumber: 5
    }, this);
}
_s1(NonNegotiables, "pcuyc/eHZalBcIMfdyWn1iQgDiA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"]
    ];
});
_c1 = NonNegotiables;
var _c, _c1;
__turbopack_context__.k.register(_c, "HabitRow");
__turbopack_context__.k.register(_c1, "NonNegotiables");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CockpitPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cockpit$2f$XPHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cockpit/XPHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cockpit$2f$TodaysMissions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cockpit/TodaysMissions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cockpit$2f$NonNegotiables$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/cockpit/NonNegotiables.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
'use client';
;
;
;
;
;
;
function CockpitPage() {
    const now = new Date();
    const hour = now.getHours();
    const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col overflow-hidden bg-aeos-bg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-8 py-4 border-b border-aeos-border flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-lg font-bold text-aeos-text",
                                        children: [
                                            greeting,
                                            ", Hunter"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 24,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-aeos-muted flex items-center gap-1.5 mt-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                size: 11,
                                                className: "text-aeos-green"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.tsx",
                                                lineNumber: 26,
                                                columnNumber: 15
                                            }, this),
                                            "Systems online · All modules active"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-aeos-muted uppercase tracking-wider font-medium",
                                        children: now.toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-aeos-blue font-semibold",
                                        children: now.toLocaleTimeString('en-US', {
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 space-y-6 max-w-7xl mx-auto w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cockpit$2f$XPHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XPHeader"], {}, void 0, false, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cockpit$2f$TodaysMissions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TodaysMissions"], {}, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$cockpit$2f$NonNegotiables$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NonNegotiables"], {}, void 0, false, {
                                            fileName: "[project]/app/page.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/page.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = CockpitPage;
var _c;
__turbopack_context__.k.register(_c, "CockpitPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_195870e8._.js.map