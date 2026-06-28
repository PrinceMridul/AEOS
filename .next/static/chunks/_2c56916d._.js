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
"[project]/components/ui/HPBar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "HPBar": (()=>HPBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gamification.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function HPBar({ totalTasks, completedTasks, showLabel = true, height = 'md', showStats = false }) {
    const hp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcBossHP"])(totalTasks, completedTasks);
    const isLow = hp < 25;
    const isMid = hp >= 25 && hp <= 60;
    const isDefeated = hp === 0;
    const heightClass = {
        sm: 'h-1.5',
        md: 'h-2',
        lg: 'h-3'
    }[height];
    const barClass = isDefeated ? 'bg-aeos-green' : isLow ? 'hp-bar-fill-green' : isMid ? 'hp-bar-fill-orange' : 'hp-bar-fill';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-1.5",
        children: [
            (showLabel || showStats) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    showLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('text-xs font-semibold tracking-wider uppercase', isDefeated ? 'text-aeos-green' : isLow ? 'text-aeos-green' : isMid ? 'text-[#FF9F0A]' : 'text-aeos-red'),
                        children: isDefeated ? '✓ DEFEATED' : `HP ${hp.toFixed(0)}%`
                    }, void 0, false, {
                        fileName: "[project]/components/ui/HPBar.tsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, this),
                    showStats && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-aeos-muted",
                        children: [
                            completedTasks,
                            "/",
                            totalTasks,
                            " tasks"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/HPBar.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/HPBar.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('w-full rounded-full overflow-hidden', heightClass, isLow && !isDefeated && 'boss-low-hp', 'bg-[#27272A]'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('h-full rounded-full', barClass),
                    style: {
                        width: `${hp}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ui/HPBar.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/HPBar.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/HPBar.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_c = HPBar;
var _c;
__turbopack_context__.k.register(_c, "HPBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/missions/BossCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BossCard": (()=>BossCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gamification.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$HPBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/HPBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$RankBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/RankBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skull$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/skull.js [app-client] (ecmascript) <export default as Skull>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
function BossCard({ boss, index }) {
    const hp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcBossHP"])(boss.totalTasks, boss.completedTasks);
    const isDefeated = boss.status === 'defeated';
    const isLowHP = hp < 25 && !isDefeated;
    const colors = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOSS_RANK_COLORS"][boss.rank];
    const progressPct = boss.totalTasks > 0 ? Math.round(boss.completedTasks / boss.totalTasks * 100) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 animate-fade-in relative overflow-hidden group', isDefeated ? 'opacity-50 hover:opacity-70' : 'hover:scale-[1.02] hover:shadow-xl', isLowHP && 'boss-low-hp'),
        style: {
            background: isDefeated ? 'rgba(24,24,27,0.5)' : `linear-gradient(135deg, #18181B 0%, ${colors.bg}80 100%)`,
            border: `1px solid ${isDefeated ? '#27272A' : colors.border}`,
            animationDelay: `${index * 80}ms`
        },
        children: [
            !isDefeated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-40 h-40 rounded-full opacity-5 blur-2xl pointer-events-none transition-opacity group-hover:opacity-10",
                style: {
                    background: colors.text
                }
            }, void 0, false, {
                fileName: "[project]/components/missions/BossCard.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this),
            isDefeated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center z-10 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-2 opacity-60",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            size: 32,
                            className: "text-aeos-green"
                        }, void 0, false, {
                            fileName: "[project]/components/missions/BossCard.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs font-bold text-aeos-green uppercase tracking-widest",
                            children: "Defeated"
                        }, void 0, false, {
                            fileName: "[project]/components/missions/BossCard.tsx",
                            lineNumber: 53,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/missions/BossCard.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/missions/BossCard.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-3 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$RankBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BossRankBadge"], {
                                        rank: boss.rank,
                                        size: "sm"
                                    }, void 0, false, {
                                        fileName: "[project]/components/missions/BossCard.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-aeos-muted uppercase tracking-wider font-medium",
                                        children: isDefeated ? 'Defeated' : 'Active Boss'
                                    }, void 0, false, {
                                        fileName: "[project]/components/missions/BossCard.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/missions/BossCard.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('text-sm font-bold leading-snug', isDefeated ? 'text-aeos-muted' : 'text-aeos-text'),
                                children: boss.title
                            }, void 0, false, {
                                fileName: "[project]/components/missions/BossCard.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-aeos-muted mt-0.5 truncate",
                                children: boss.subtitle
                            }, void 0, false, {
                                fileName: "[project]/components/missions/BossCard.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/missions/BossCard.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    isDefeated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                        size: 20,
                        className: "text-aeos-green flex-shrink-0 mt-1"
                    }, void 0, false, {
                        fileName: "[project]/components/missions/BossCard.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0",
                        style: {
                            background: colors.bg,
                            border: `1px solid ${colors.border}`
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$skull$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skull$3e$__["Skull"], {
                            size: 14,
                            style: {
                                color: colors.text
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/missions/BossCard.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/missions/BossCard.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/missions/BossCard.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$HPBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HPBar"], {
                    totalTasks: boss.totalTasks,
                    completedTasks: boss.completedTasks,
                    showLabel: true,
                    showStats: true,
                    height: "md"
                }, void 0, false, {
                    fileName: "[project]/components/missions/BossCard.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/missions/BossCard.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base font-bold text-aeos-text tabular-nums",
                                        children: boss.completedTasks
                                    }, void 0, false, {
                                        fileName: "[project]/components/missions/BossCard.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-aeos-muted uppercase tracking-wider",
                                        children: "Done"
                                    }, void 0, false, {
                                        fileName: "[project]/components/missions/BossCard.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/missions/BossCard.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px h-8 bg-aeos-border"
                            }, void 0, false, {
                                fileName: "[project]/components/missions/BossCard.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base font-bold text-aeos-text tabular-nums",
                                        children: boss.totalTasks
                                    }, void 0, false, {
                                        fileName: "[project]/components/missions/BossCard.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-aeos-muted uppercase tracking-wider",
                                        children: "Total"
                                    }, void 0, false, {
                                        fileName: "[project]/components/missions/BossCard.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/missions/BossCard.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-px h-8 bg-aeos-border"
                            }, void 0, false, {
                                fileName: "[project]/components/missions/BossCard.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base font-bold tabular-nums",
                                        style: {
                                            color: isDefeated ? '#30D158' : colors.text
                                        },
                                        children: [
                                            progressPct,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/missions/BossCard.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-aeos-muted uppercase tracking-wider",
                                        children: "Progress"
                                    }, void 0, false, {
                                        fileName: "[project]/components/missions/BossCard.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/missions/BossCard.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/missions/BossCard.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    !isDefeated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex items-center gap-1 text-xs text-aeos-muted hover:text-aeos-blue transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/components/missions/BossCard.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "View"
                            }, void 0, false, {
                                fileName: "[project]/components/missions/BossCard.tsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/components/missions/BossCard.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/missions/BossCard.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/missions/BossCard.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-aeos-muted leading-relaxed line-clamp-2 relative z-10 border-t border-aeos-border pt-3",
                children: boss.description
            }, void 0, false, {
                fileName: "[project]/components/missions/BossCard.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/missions/BossCard.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = BossCard;
var _c;
__turbopack_context__.k.register(_c, "BossCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/missions/MissionGrid.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "MissionGrid": (()=>MissionGrid)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$missions$2f$BossCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/missions/BossCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$swords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Swords$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/swords.js [app-client] (ecmascript) <export default as Swords>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function MissionGrid() {
    _s();
    const bosses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "MissionGrid.useAeosStore[bosses]": (s)=>s.bosses
    }["MissionGrid.useAeosStore[bosses]"]);
    const activeBosses = bosses.filter((b)=>b.status === 'active');
    const defeatedBosses = bosses.filter((b)=>b.status === 'defeated');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$swords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Swords$3e$__["Swords"], {
                                size: 16,
                                className: "text-aeos-red"
                            }, void 0, false, {
                                fileName: "[project]/components/missions/MissionGrid.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-bold text-aeos-text uppercase tracking-wider",
                                children: "Active Bosses"
                            }, void 0, false, {
                                fileName: "[project]/components/missions/MissionGrid.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs bg-aeos-red/15 text-aeos-red border border-aeos-red/30 rounded-full px-2 py-0.5 font-semibold",
                                children: activeBosses.length
                            }, void 0, false, {
                                fileName: "[project]/components/missions/MissionGrid.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/missions/MissionGrid.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    activeBosses.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",
                        children: activeBosses.map((boss, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$missions$2f$BossCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BossCard"], {
                                boss: boss,
                                index: i
                            }, boss.id, false, {
                                fileName: "[project]/components/missions/MissionGrid.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/missions/MissionGrid.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-dashed border-aeos-border p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                size: 32,
                                className: "text-aeos-muted mx-auto mb-2 opacity-40"
                            }, void 0, false, {
                                fileName: "[project]/components/missions/MissionGrid.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-aeos-muted text-sm",
                                children: "All bosses defeated. You are a legend."
                            }, void 0, false, {
                                fileName: "[project]/components/missions/MissionGrid.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/missions/MissionGrid.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/missions/MissionGrid.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            defeatedBosses.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                size: 16,
                                className: "text-aeos-green"
                            }, void 0, false, {
                                fileName: "[project]/components/missions/MissionGrid.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-bold text-aeos-muted uppercase tracking-wider",
                                children: "Defeated"
                            }, void 0, false, {
                                fileName: "[project]/components/missions/MissionGrid.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs bg-aeos-green/10 text-aeos-green border border-aeos-green/20 rounded-full px-2 py-0.5 font-semibold",
                                children: defeatedBosses.length
                            }, void 0, false, {
                                fileName: "[project]/components/missions/MissionGrid.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/missions/MissionGrid.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",
                        children: defeatedBosses.map((boss, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$missions$2f$BossCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BossCard"], {
                                boss: boss,
                                index: i
                            }, boss.id, false, {
                                fileName: "[project]/components/missions/MissionGrid.tsx",
                                lineNumber: 56,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/missions/MissionGrid.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/missions/MissionGrid.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/missions/MissionGrid.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(MissionGrid, "3gOK9k0QqCWo9BCYdLGaJkTQGA0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"]
    ];
});
_c = MissionGrid;
var _c;
__turbopack_context__.k.register(_c, "MissionGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/missions/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MissionsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$missions$2f$MissionGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/missions/MissionGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$swords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Swords$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/swords.js [app-client] (ecmascript) <export default as Swords>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
'use client';
;
;
;
;
function MissionsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                fileName: "[project]/app/missions/page.tsx",
                lineNumber: 10,
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
                                        className: "text-lg font-bold text-aeos-text flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$swords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Swords$3e$__["Swords"], {
                                                size: 18,
                                                className: "text-aeos-red"
                                            }, void 0, false, {
                                                fileName: "[project]/app/missions/page.tsx",
                                                lineNumber: 17,
                                                columnNumber: 15
                                            }, this),
                                            "Mission Control"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/missions/page.tsx",
                                        lineNumber: 16,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-aeos-muted mt-0.5",
                                        children: "Engage your boss projects. Every completed task deals damage to boss HP."
                                    }, void 0, false, {
                                        fileName: "[project]/app/missions/page.tsx",
                                        lineNumber: 20,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/missions/page.tsx",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-3 py-2 rounded-xl bg-aeos-red/8 border border-aeos-red/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                        size: 12,
                                        className: "text-aeos-red flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/missions/page.tsx",
                                        lineNumber: 26,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-aeos-red font-medium",
                                        children: "HP = Remaining Tasks / Total Tasks"
                                    }, void 0, false, {
                                        fileName: "[project]/app/missions/page.tsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/missions/page.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/missions/page.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 max-w-7xl mx-auto w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$missions$2f$MissionGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MissionGrid"], {}, void 0, false, {
                                fileName: "[project]/app/missions/page.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/missions/page.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/missions/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/missions/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = MissionsPage;
var _c;
__turbopack_context__.k.register(_c, "MissionsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_2c56916d._.js.map