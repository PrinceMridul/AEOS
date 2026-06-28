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
"[project]/components/settings/ProfileForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ProfileForm": (()=>ProfileForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gamification.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$RankBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/RankBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// ─── Reusable input ───────────────────────────────────────────
function SettingsInput({ label, value, onChange, type = 'text', placeholder, hint, icon: Icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-xs font-semibold text-aeos-subtext uppercase tracking-wider",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/settings/ProfileForm.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        size: 14,
                        className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-aeos-muted pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/components/settings/ProfileForm.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: type,
                        value: value,
                        onChange: (e)=>onChange(e.target.value),
                        placeholder: placeholder,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('w-full bg-[#0D0D0F] border border-aeos-border rounded-xl py-2.5 text-sm text-aeos-text placeholder-aeos-muted', 'focus:outline-none focus:border-aeos-blue focus:ring-1 focus:ring-aeos-blue/30 transition-all', Icon ? 'pl-9 pr-4' : 'px-4')
                    }, void 0, false, {
                        fileName: "[project]/components/settings/ProfileForm.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/ProfileForm.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            hint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] text-aeos-muted",
                children: hint
            }, void 0, false, {
                fileName: "[project]/components/settings/ProfileForm.tsx",
                lineNumber: 50,
                columnNumber: 16
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/settings/ProfileForm.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = SettingsInput;
// ─── XP ↔ Level stepper ──────────────────────────────────────
function LevelStepper({ lifetimeXp, onXpChange }) {
    const level = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcLevel"])(lifetimeXp);
    const rank = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcRank"])(level);
    const colors = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_COLORS"][rank];
    const bumpLevel = (delta)=>{
        const newLevel = Math.max(1, level + delta);
        // Set XP to the start of that level
        onXpChange((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["xpForLevel"])(newLevel));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl p-4 space-y-4",
        style: {
            background: `${colors.bg}50`,
            border: `1px solid ${colors.border}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-aeos-muted uppercase tracking-wider mb-0.5",
                                children: "Current Level"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/ProfileForm.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-3xl font-black text-aeos-text",
                                        children: level
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/ProfileForm.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$RankBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RankBadge"], {
                                        rank: rank,
                                        size: "md"
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/ProfileForm.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/settings/ProfileForm.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/ProfileForm.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>bumpLevel(1),
                                className: "w-8 h-8 rounded-xl bg-aeos-blue/15 border border-aeos-blue/30 hover:bg-aeos-blue/25 text-aeos-blue flex items-center justify-center transition-all",
                                title: "Level up",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/components/settings/ProfileForm.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/settings/ProfileForm.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>bumpLevel(-1),
                                className: "w-8 h-8 rounded-xl bg-[#27272A] border border-aeos-border hover:border-aeos-red/40 hover:bg-aeos-red/10 text-aeos-muted hover:text-aeos-red flex items-center justify-center transition-all",
                                title: "Level down",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/components/settings/ProfileForm.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/settings/ProfileForm.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/ProfileForm.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/ProfileForm.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-xs font-semibold text-aeos-subtext uppercase tracking-wider mb-1.5",
                        children: "Lifetime XP (raw)"
                    }, void 0, false, {
                        fileName: "[project]/components/settings/ProfileForm.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                size: 14,
                                className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-aeos-blue pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/ProfileForm.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                value: lifetimeXp,
                                min: 0,
                                onChange: (e)=>{
                                    const v = parseInt(e.target.value, 10);
                                    if (!isNaN(v)) onXpChange(Math.max(0, v));
                                },
                                className: "w-full bg-[#0D0D0F] border border-aeos-border rounded-xl pl-9 pr-4 py-2.5 text-sm text-aeos-blue font-semibold placeholder-aeos-muted focus:outline-none focus:border-aeos-blue focus:ring-1 focus:ring-aeos-blue/30 transition-all"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/ProfileForm.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/ProfileForm.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-aeos-muted mt-1",
                        children: [
                            "Level formula: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                className: "text-aeos-blue/80",
                                children: "floor(√(XP / 100)) + 1"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/ProfileForm.tsx",
                                lineNumber: 125,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/ProfileForm.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/ProfileForm.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/settings/ProfileForm.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_c1 = LevelStepper;
function ProfileForm() {
    _s();
    const userProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "ProfileForm.useAeosStore[userProfile]": (s)=>s.userProfile
    }["ProfileForm.useAeosStore[userProfile]"]);
    const updateProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "ProfileForm.useAeosStore[updateProfile]": (s)=>s.updateProfile
    }["ProfileForm.useAeosStore[updateProfile]"]);
    // Local draft state — committed on Save
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(userProfile.name);
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(userProfile.title);
    const [lifetimeXp, setLifetimeXp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(userProfile.lifetimeXp);
    const [saved, setSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Sync if external store changes (e.g., task completion bumps XP)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileForm.useEffect": ()=>{
            setLifetimeXp(userProfile.lifetimeXp);
        }
    }["ProfileForm.useEffect"], [
        userProfile.lifetimeXp
    ]);
    const isDirty = name !== userProfile.name || title !== userProfile.title || lifetimeXp !== userProfile.lifetimeXp;
    const handleSave = ()=>{
        if (!name.trim()) return;
        updateProfile({
            name: name.trim(),
            title: title.trim(),
            lifetimeXp
        });
        setSaved(true);
        setTimeout(()=>setSaved(false), 2000);
    };
    const handleReset = ()=>{
        setName(userProfile.name);
        setTitle(userProfile.title);
        setLifetimeXp(userProfile.lifetimeXp);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl glass border-aeos-border overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 border-b border-aeos-border flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-xl bg-aeos-blue/15 border border-aeos-blue/30 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                            size: 15,
                            className: "text-aeos-blue"
                        }, void 0, false, {
                            fileName: "[project]/components/settings/ProfileForm.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/settings/ProfileForm.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-bold text-aeos-text",
                                children: "Hunter Profile"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/ProfileForm.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-aeos-muted",
                                children: "Edit your identity and progression"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/ProfileForm.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/ProfileForm.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/ProfileForm.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsInput, {
                                label: "Name",
                                value: name,
                                onChange: setName,
                                placeholder: "Your name",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
                            }, void 0, false, {
                                fileName: "[project]/components/settings/ProfileForm.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsInput, {
                                label: "Title",
                                value: title,
                                onChange: setTitle,
                                placeholder: "B.Tech AI Engineer",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
                                hint: "Displayed in the sidebar below your name"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/ProfileForm.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/ProfileForm.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LevelStepper, {
                        lifetimeXp: lifetimeXp,
                        onXpChange: setLifetimeXp
                    }, void 0, false, {
                        fileName: "[project]/components/settings/ProfileForm.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/ProfileForm.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pb-5 flex items-center justify-end gap-3",
                children: [
                    isDirty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleReset,
                        className: "flex items-center gap-2 px-4 py-2 rounded-xl border border-aeos-border text-sm text-aeos-muted hover:text-aeos-text hover:bg-white/5 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/components/settings/ProfileForm.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this),
                            "Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/ProfileForm.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSave,
                        disabled: !isDirty && !saved,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all shadow-lg', saved ? 'bg-aeos-green text-white shadow-aeos-green/20' : isDirty ? 'bg-aeos-blue text-white hover:bg-blue-500 shadow-aeos-blue/20' : 'bg-[#27272A] text-aeos-muted cursor-not-allowed'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/components/settings/ProfileForm.tsx",
                                lineNumber: 230,
                                columnNumber: 11
                            }, this),
                            saved ? 'Saved!' : 'Save Changes'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/ProfileForm.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/ProfileForm.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/settings/ProfileForm.tsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
}
_s(ProfileForm, "ZWSXW/4UY2B+vUDc4boTkZDtbwE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"]
    ];
});
_c2 = ProfileForm;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SettingsInput");
__turbopack_context__.k.register(_c1, "LevelStepper");
__turbopack_context__.k.register(_c2, "ProfileForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/settings/HabitEditor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "HabitEditor": (()=>HabitEditor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flame.js [app-client] (ecmascript) <export default as Flame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookA$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-a.js [app-client] (ecmascript) <export default as BookA>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// ─── Icon map ─────────────────────────────────────────────────
const ICON_MAP = {
    Chess: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"],
    Code2: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
    Zap: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
    Globe: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
    BookA: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$a$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookA$3e$__["BookA"],
    BookOpen: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
    Activity: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"]
};
function HabitEditorRow({ habit }) {
    _s();
    const updateStreak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "HabitEditorRow.useAeosStore[updateStreak]": (s)=>s.updateStreak
    }["HabitEditorRow.useAeosStore[updateStreak]"]);
    const incrementStreak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "HabitEditorRow.useAeosStore[incrementStreak]": (s)=>s.incrementStreak
    }["HabitEditorRow.useAeosStore[incrementStreak]"]);
    const decrementStreak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "HabitEditorRow.useAeosStore[decrementStreak]": (s)=>s.decrementStreak
    }["HabitEditorRow.useAeosStore[decrementStreak]"]);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(String(habit.streak));
    const [justSaved, setJustSaved] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const Icon = ICON_MAP[habit.icon] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"];
    const isHighStreak = habit.streak >= 30;
    const commitInput = ()=>{
        const parsed = parseInt(inputValue, 10);
        if (!isNaN(parsed) && parsed >= 0) {
            updateStreak(habit.id, parsed);
            setJustSaved(true);
            setTimeout(()=>setJustSaved(false), 1200);
        } else {
            setInputValue(String(habit.streak));
        }
    };
    const handleInputChange = (v)=>{
        setInputValue(v);
    };
    const handleIncrement = ()=>{
        incrementStreak(habit.id);
        setInputValue(String(habit.streak + 1));
    };
    const handleDecrement = ()=>{
        decrementStreak(habit.id);
        setInputValue(String(Math.max(0, habit.streak - 1)));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4 px-4 py-3.5 rounded-xl bg-aeos-surface/50 border border-aeos-border hover:border-aeos-border/80 transition-all",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-lg bg-[#27272A] flex items-center justify-center flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            size: 15,
                            className: "text-aeos-muted"
                        }, void 0, false, {
                            fileName: "[project]/components/settings/HabitEditor.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/settings/HabitEditor.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-aeos-text",
                                children: habit.title
                            }, void 0, false, {
                                fileName: "[project]/components/settings/HabitEditor.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-aeos-muted truncate",
                                children: habit.description
                            }, void 0, false, {
                                fileName: "[project]/components/settings/HabitEditor.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/HabitEditor.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/HabitEditor.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('flex items-center gap-1 px-2 py-1 rounded-lg border', isHighStreak ? 'bg-[#FF9F0A]/10 border-[#FF9F0A]/30' : 'bg-[#27272A] border-aeos-border'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                        size: 11,
                        className: isHighStreak ? 'text-[#FF9F0A]' : 'text-aeos-muted'
                    }, void 0, false, {
                        fileName: "[project]/components/settings/HabitEditor.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('text-xs font-bold tabular-nums', isHighStreak ? 'text-[#FF9F0A]' : 'text-aeos-subtext'),
                        children: [
                            habit.streak,
                            "d"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/HabitEditor.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/HabitEditor.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleDecrement,
                        className: "w-7 h-7 rounded-lg bg-[#27272A] border border-aeos-border hover:border-aeos-red/50 hover:bg-aeos-red/10 flex items-center justify-center transition-all group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                            size: 12,
                            className: "text-aeos-muted group-hover:text-aeos-red"
                        }, void 0, false, {
                            fileName: "[project]/components/settings/HabitEditor.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/settings/HabitEditor.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        value: inputValue,
                        min: 0,
                        onChange: (e)=>handleInputChange(e.target.value),
                        onBlur: commitInput,
                        onKeyDown: (e)=>e.key === 'Enter' && commitInput(),
                        className: "w-16 h-7 bg-[#0D0D0F] border border-aeos-border rounded-lg text-center text-sm font-bold text-aeos-text focus:outline-none focus:border-aeos-blue focus:ring-1 focus:ring-aeos-blue/30 transition-all tabular-nums"
                    }, void 0, false, {
                        fileName: "[project]/components/settings/HabitEditor.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleIncrement,
                        className: "w-7 h-7 rounded-lg bg-[#27272A] border border-aeos-border hover:border-aeos-blue/50 hover:bg-aeos-blue/10 flex items-center justify-center transition-all group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 12,
                            className: "text-aeos-muted group-hover:text-aeos-blue"
                        }, void 0, false, {
                            fileName: "[project]/components/settings/HabitEditor.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/settings/HabitEditor.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300', justSaved ? 'bg-aeos-green scale-100 opacity-100' : 'scale-75 opacity-0'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                            size: 11,
                            className: "text-white"
                        }, void 0, false, {
                            fileName: "[project]/components/settings/HabitEditor.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/settings/HabitEditor.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/HabitEditor.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/settings/HabitEditor.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(HabitEditorRow, "8YNPv5xu2YEC09RjD5VHh4hMwV8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"]
    ];
});
_c = HabitEditorRow;
function HabitEditor() {
    _s1();
    const habits = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "HabitEditor.useAeosStore[habits]": (s)=>s.habits
    }["HabitEditor.useAeosStore[habits]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl glass border-aeos-border overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 border-b border-aeos-border flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-xl bg-[#FF9F0A]/15 border border-[#FF9F0A]/30 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flame$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flame$3e$__["Flame"], {
                            size: 15,
                            className: "text-[#FF9F0A]"
                        }, void 0, false, {
                            fileName: "[project]/components/settings/HabitEditor.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/settings/HabitEditor.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-bold text-aeos-text",
                                children: "Edit Habits & Streaks"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/HabitEditor.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-aeos-muted",
                                children: "Type a value directly, press Enter, or use +/− to adjust streaks"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/HabitEditor.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/HabitEditor.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/HabitEditor.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-2",
                children: habits.map((habit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HabitEditorRow, {
                        habit: habit
                    }, habit.id, false, {
                        fileName: "[project]/components/settings/HabitEditor.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/settings/HabitEditor.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[11px] text-aeos-muted",
                    children: "💡 Changes are instant — streak updates propagate everywhere immediately. Completion toggles (+25 XP) remain independent of the streak counter."
                }, void 0, false, {
                    fileName: "[project]/components/settings/HabitEditor.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/settings/HabitEditor.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/settings/HabitEditor.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_s1(HabitEditor, "pcuyc/eHZalBcIMfdyWn1iQgDiA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"]
    ];
});
_c1 = HabitEditor;
var _c, _c1;
__turbopack_context__.k.register(_c, "HabitEditorRow");
__turbopack_context__.k.register(_c1, "HabitEditor");
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
"[project]/components/settings/BossEditor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BossEditor": (()=>BossEditor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$HPBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/HPBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$RankBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/RankBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gamification.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$swords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Swords$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/swords.js [app-client] (ecmascript) <export default as Swords>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen-line.js [app-client] (ecmascript) <export default as Edit3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const BOSS_RANKS = [
    'E',
    'D',
    'C',
    'B',
    'A',
    'S',
    'SS',
    'SSS'
];
function BossEditorRow({ boss }) {
    _s();
    const updateBoss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "BossEditorRow.useAeosStore[updateBoss]": (s)=>s.updateBoss
    }["BossEditorRow.useAeosStore[updateBoss]"]);
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: boss.title,
        subtitle: boss.subtitle,
        rank: boss.rank,
        totalTasks: boss.totalTasks,
        completedTasks: boss.completedTasks,
        description: boss.description
    });
    const hp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gamification$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calcBossHP"])(boss.totalTasks, boss.completedTasks);
    const isDefeated = boss.status === 'defeated';
    const handleSave = ()=>{
        updateBoss(boss.id, {
            ...draft,
            totalTasks: Math.max(1, draft.totalTasks),
            completedTasks: Math.min(Math.max(0, draft.completedTasks), draft.totalTasks)
        });
        setIsExpanded(false);
    };
    const handleDiscard = ()=>{
        setDraft({
            title: boss.title,
            subtitle: boss.subtitle,
            rank: boss.rank,
            totalTasks: boss.totalTasks,
            completedTasks: boss.completedTasks,
            description: boss.description
        });
        setIsExpanded(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-aeos-border overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "w-full flex items-center gap-3 px-4 py-3 bg-aeos-surface/40 hover:bg-aeos-surface/70 transition-colors text-left",
                onClick: ()=>setIsExpanded(!isExpanded),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$RankBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BossRankBadge"], {
                        rank: boss.rank,
                        size: "sm"
                    }, void 0, false, {
                        fileName: "[project]/components/settings/BossEditor.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('text-sm font-semibold truncate', isDefeated ? 'text-aeos-muted' : 'text-aeos-text'),
                                children: boss.title
                            }, void 0, false, {
                                fileName: "[project]/components/settings/BossEditor.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 max-w-[140px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$HPBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HPBar"], {
                                            totalTasks: boss.totalTasks,
                                            completedTasks: boss.completedTasks,
                                            showLabel: false,
                                            showStats: false,
                                            height: "sm"
                                        }, void 0, false, {
                                            fileName: "[project]/components/settings/BossEditor.tsx",
                                            lineNumber: 71,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/BossEditor.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-aeos-muted tabular-nums",
                                        children: [
                                            boss.completedTasks,
                                            "/",
                                            boss.totalTasks
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/settings/BossEditor.tsx",
                                        lineNumber: 73,
                                        columnNumber: 13
                                    }, this),
                                    isDefeated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 12,
                                        className: "text-aeos-green"
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/BossEditor.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/settings/BossEditor.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/BossEditor.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit3$3e$__["Edit3"], {
                        size: 13,
                        className: "text-aeos-muted flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/components/settings/BossEditor.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                        size: 14,
                        className: "text-aeos-muted flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/components/settings/BossEditor.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 14,
                        className: "text-aeos-muted flex-shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/components/settings/BossEditor.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/BossEditor.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 pb-4 pt-3 bg-[#0D0D0F] border-t border-aeos-border space-y-3 animate-fade-in",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1",
                                        children: "Boss Name"
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/BossEditor.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: draft.title,
                                        onChange: (e)=>setDraft({
                                                ...draft,
                                                title: e.target.value
                                            }),
                                        className: "w-full bg-[#18181B] border border-aeos-border rounded-lg px-3 py-2 text-sm text-aeos-text focus:outline-none focus:border-aeos-blue transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/BossEditor.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/settings/BossEditor.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1",
                                        children: "Subtitle"
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/BossEditor.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: draft.subtitle,
                                        onChange: (e)=>setDraft({
                                                ...draft,
                                                subtitle: e.target.value
                                            }),
                                        className: "w-full bg-[#18181B] border border-aeos-border rounded-lg px-3 py-2 text-sm text-aeos-text focus:outline-none focus:border-aeos-blue transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/BossEditor.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/settings/BossEditor.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/BossEditor.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1",
                                        children: "Rank"
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/BossEditor.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1",
                                        children: BOSS_RANKS.map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setDraft({
                                                        ...draft,
                                                        rank: r
                                                    }),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('text-[10px] font-bold px-1.5 py-0.5 rounded-md border transition-all', draft.rank === r ? 'bg-aeos-blue/15 border-aeos-blue/40 text-aeos-blue' : 'bg-[#18181B] border-aeos-border text-aeos-muted hover:border-aeos-border/80'),
                                                children: r
                                            }, r, false, {
                                                fileName: "[project]/components/settings/BossEditor.tsx",
                                                lineNumber: 119,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/BossEditor.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/settings/BossEditor.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1",
                                        children: "Total Tasks"
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/BossEditor.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 1,
                                        value: draft.totalTasks,
                                        onChange: (e)=>setDraft({
                                                ...draft,
                                                totalTasks: parseInt(e.target.value) || 1
                                            }),
                                        className: "w-full bg-[#18181B] border border-aeos-border rounded-lg px-3 py-2 text-sm text-aeos-text focus:outline-none focus:border-aeos-blue transition-all tabular-nums"
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/BossEditor.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/settings/BossEditor.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1",
                                        children: "Completed"
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/BossEditor.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 0,
                                        max: draft.totalTasks,
                                        value: draft.completedTasks,
                                        onChange: (e)=>setDraft({
                                                ...draft,
                                                completedTasks: Math.min(parseInt(e.target.value) || 0, draft.totalTasks)
                                            }),
                                        className: "w-full bg-[#18181B] border border-aeos-border rounded-lg px-3 py-2 text-sm text-aeos-text focus:outline-none focus:border-aeos-blue transition-all tabular-nums"
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/BossEditor.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/settings/BossEditor.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/BossEditor.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1",
                                children: "Description"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/BossEditor.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: draft.description,
                                onChange: (e)=>setDraft({
                                        ...draft,
                                        description: e.target.value
                                    }),
                                rows: 2,
                                className: "w-full bg-[#18181B] border border-aeos-border rounded-lg px-3 py-2 text-sm text-aeos-text focus:outline-none focus:border-aeos-blue transition-all resize-none"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/BossEditor.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/BossEditor.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] text-aeos-muted mb-1 uppercase tracking-wider",
                                children: "HP Preview"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/BossEditor.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$HPBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HPBar"], {
                                totalTasks: Math.max(1, draft.totalTasks),
                                completedTasks: Math.min(draft.completedTasks, draft.totalTasks),
                                showLabel: true,
                                showStats: true,
                                height: "md"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/BossEditor.tsx",
                                lineNumber: 177,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/BossEditor.tsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end gap-2 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDiscard,
                                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-aeos-border text-xs text-aeos-muted hover:text-aeos-text hover:bg-white/5 transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/BossEditor.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, this),
                                    "Discard"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/settings/BossEditor.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-aeos-blue text-xs font-semibold text-white hover:bg-blue-500 transition-all",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/BossEditor.tsx",
                                        lineNumber: 199,
                                        columnNumber: 15
                                    }, this),
                                    "Apply Changes"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/settings/BossEditor.tsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/BossEditor.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/BossEditor.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/settings/BossEditor.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(BossEditorRow, "oITtVOBpJDhq1PUauSFNaDK2wBU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"]
    ];
});
_c = BossEditorRow;
function BossEditor() {
    _s1();
    const bosses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "BossEditor.useAeosStore[bosses]": (s)=>s.bosses
    }["BossEditor.useAeosStore[bosses]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl glass border-aeos-border overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 border-b border-aeos-border flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-xl bg-aeos-red/15 border border-aeos-red/30 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$swords$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Swords$3e$__["Swords"], {
                            size: 15,
                            className: "text-aeos-red"
                        }, void 0, false, {
                            fileName: "[project]/components/settings/BossEditor.tsx",
                            lineNumber: 219,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/settings/BossEditor.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-bold text-aeos-text",
                                children: "Edit Boss Projects"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/BossEditor.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-aeos-muted",
                                children: "Click any boss to expand and edit. HP bars update live across Mission Control."
                            }, void 0, false, {
                                fileName: "[project]/components/settings/BossEditor.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/BossEditor.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/BossEditor.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-2",
                children: bosses.map((boss)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BossEditorRow, {
                        boss: boss
                    }, boss.id, false, {
                        fileName: "[project]/components/settings/BossEditor.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/settings/BossEditor.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/settings/BossEditor.tsx",
        lineNumber: 215,
        columnNumber: 5
    }, this);
}
_s1(BossEditor, "3gOK9k0QqCWo9BCYdLGaJkTQGA0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"]
    ];
});
_c1 = BossEditor;
var _c, _c1;
__turbopack_context__.k.register(_c, "BossEditorRow");
__turbopack_context__.k.register(_c1, "BossEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/settings/TaskEditor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "TaskEditor": (()=>TaskEditor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list-todo.js [app-client] (ecmascript) <export default as ListTodo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const TASK_TYPE_COLORS = {
    Main: {
        text: '#0A84FF',
        bg: '#0A84FF15',
        border: '#0A84FF40'
    },
    Side: {
        text: '#BF5AF2',
        bg: '#BF5AF215',
        border: '#BF5AF240'
    },
    Daily: {
        text: '#FF9F0A',
        bg: '#FF9F0A15',
        border: '#FF9F0A40'
    }
};
// ─── Add Task Form ────────────────────────────────────────────
function AddTaskForm({ onClose }) {
    _s();
    const addTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "AddTaskForm.useAeosStore[addTask]": (s)=>s.addTask
    }["AddTaskForm.useAeosStore[addTask]"]);
    const bosses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "AddTaskForm.useAeosStore[bosses]": (s)=>s.bosses
    }["AddTaskForm.useAeosStore[bosses]"]);
    const today = new Date().toISOString().split('T')[0];
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Side');
    const [xpReward, setXpReward] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(75);
    const [bossId, setBossId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(today);
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!title.trim()) return;
        addTask({
            title: title.trim(),
            type,
            status: 'todo',
            xpReward: Math.max(5, xpReward),
            bossId: bossId || null,
            date
        });
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "rounded-xl bg-[#0D0D0F] border border-aeos-blue/30 p-4 space-y-3 animate-fade-in",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold text-aeos-blue uppercase tracking-wider",
                        children: "New Task"
                    }, void 0, false, {
                        fileName: "[project]/components/settings/TaskEditor.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onClose,
                        className: "text-aeos-muted hover:text-aeos-text",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/components/settings/TaskEditor.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/settings/TaskEditor.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/TaskEditor.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                autoFocus: true,
                value: title,
                onChange: (e)=>setTitle(e.target.value),
                placeholder: "Task title...",
                className: "w-full bg-[#18181B] border border-aeos-border rounded-lg px-3 py-2 text-sm text-aeos-text placeholder-aeos-muted focus:outline-none focus:border-aeos-blue transition-all"
            }, void 0, false, {
                fileName: "[project]/components/settings/TaskEditor.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1",
                                children: "Type"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/TaskEditor.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1",
                                children: [
                                    'Main',
                                    'Side',
                                    'Daily'
                                ].map((t)=>{
                                    const c = TASK_TYPE_COLORS[t];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setType(t),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('px-2 py-1 rounded-lg text-[10px] font-bold border transition-all'),
                                        style: type === t ? {
                                            color: c.text,
                                            background: c.bg,
                                            border: `1px solid ${c.border}`
                                        } : {
                                            color: '#71717A',
                                            background: '#18181B',
                                            border: '1px solid #27272A'
                                        },
                                        children: t
                                    }, t, false, {
                                        fileName: "[project]/components/settings/TaskEditor.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/settings/TaskEditor.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/TaskEditor.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1",
                                children: "XP Reward"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/TaskEditor.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        size: 12,
                                        className: "absolute left-2.5 top-1/2 -translate-y-1/2 text-aeos-blue"
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/TaskEditor.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        min: 5,
                                        max: 500,
                                        value: xpReward,
                                        onChange: (e)=>setXpReward(parseInt(e.target.value) || 50),
                                        className: "w-full bg-[#18181B] border border-aeos-border rounded-lg pl-7 pr-2 py-2 text-sm text-aeos-blue font-bold focus:outline-none focus:border-aeos-blue transition-all tabular-nums"
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/TaskEditor.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/settings/TaskEditor.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/TaskEditor.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/TaskEditor.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1",
                                children: "Date"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/TaskEditor.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        size: 12,
                                        className: "absolute left-2.5 top-1/2 -translate-y-1/2 text-aeos-muted"
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/TaskEditor.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: date,
                                        onChange: (e)=>setDate(e.target.value),
                                        className: "w-full bg-[#18181B] border border-aeos-border rounded-lg pl-7 pr-2 py-2 text-sm text-aeos-text focus:outline-none focus:border-aeos-blue transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/TaskEditor.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/settings/TaskEditor.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/TaskEditor.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1",
                                children: "Boss (optional)"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/TaskEditor.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: bossId ?? '',
                                onChange: (e)=>setBossId(e.target.value || null),
                                className: "w-full bg-[#18181B] border border-aeos-border rounded-lg px-2 py-2 text-sm text-aeos-text focus:outline-none focus:border-aeos-blue transition-all appearance-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "None"
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/TaskEditor.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this),
                                    bosses.filter((b)=>b.status === 'active').map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: b.id,
                                            children: [
                                                b.title.slice(0, 28),
                                                "…"
                                            ]
                                        }, b.id, true, {
                                            fileName: "[project]/components/settings/TaskEditor.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/settings/TaskEditor.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/TaskEditor.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/TaskEditor.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-2 pt-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    className: "flex items-center gap-1.5 px-4 py-2 rounded-lg bg-aeos-blue text-xs font-semibold text-white hover:bg-blue-500 transition-all",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 12
                        }, void 0, false, {
                            fileName: "[project]/components/settings/TaskEditor.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        "Add Task"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/settings/TaskEditor.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/settings/TaskEditor.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/settings/TaskEditor.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(AddTaskForm, "2C4itNnYvuAcAMtvLhgLREYT4Oo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"]
    ];
});
_c = AddTaskForm;
// ─── Task Row ────────────────────────────────────────────────
function TaskRow({ task }) {
    _s1();
    const toggleTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "TaskRow.useAeosStore[toggleTask]": (s)=>s.toggleTask
    }["TaskRow.useAeosStore[toggleTask]"]);
    const deleteTask = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "TaskRow.useAeosStore[deleteTask]": (s)=>s.deleteTask
    }["TaskRow.useAeosStore[deleteTask]"]);
    const bosses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "TaskRow.useAeosStore[bosses]": (s)=>s.bosses
    }["TaskRow.useAeosStore[bosses]"]);
    const boss = bosses.find((b)=>b.id === task.bossId);
    const isDone = task.status === 'done';
    const c = TASK_TYPE_COLORS[task.type];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all group', isDone ? 'opacity-50 bg-aeos-surface/20 border-aeos-border/40' : 'bg-aeos-surface/50 border-aeos-border'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>toggleTask(task.id),
                className: "flex-shrink-0 transition-colors",
                title: isDone ? 'Uncheck' : 'Complete',
                children: isDone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                    size: 16,
                    className: "text-aeos-green"
                }, void 0, false, {
                    fileName: "[project]/components/settings/TaskEditor.tsx",
                    lineNumber: 178,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                    size: 16,
                    className: "text-aeos-border hover:text-aeos-blue"
                }, void 0, false, {
                    fileName: "[project]/components/settings/TaskEditor.tsx",
                    lineNumber: 180,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/settings/TaskEditor.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] font-bold px-1.5 py-0.5 rounded-md border flex-shrink-0",
                style: {
                    color: c.text,
                    background: c.bg,
                    border: `1px solid ${c.border}`
                },
                children: task.type
            }, void 0, false, {
                fileName: "[project]/components/settings/TaskEditor.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])('flex-1 text-sm font-medium truncate', isDone ? 'line-through text-aeos-muted' : 'text-aeos-text'),
                children: task.title
            }, void 0, false, {
                fileName: "[project]/components/settings/TaskEditor.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-0.5 flex-shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                        size: 11,
                        className: "text-aeos-blue"
                    }, void 0, false, {
                        fileName: "[project]/components/settings/TaskEditor.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-bold text-aeos-blue tabular-nums",
                        children: [
                            "+",
                            task.xpReward
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/TaskEditor.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/TaskEditor.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] text-aeos-muted tabular-nums flex-shrink-0",
                children: task.date
            }, void 0, false, {
                fileName: "[project]/components/settings/TaskEditor.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>deleteTask(task.id),
                className: "opacity-0 group-hover:opacity-100 w-6 h-6 rounded-lg flex items-center justify-center text-aeos-muted hover:text-aeos-red hover:bg-aeos-red/10 transition-all",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                    size: 12
                }, void 0, false, {
                    fileName: "[project]/components/settings/TaskEditor.tsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/settings/TaskEditor.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/settings/TaskEditor.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}
_s1(TaskRow, "1iXU555KtKEFVkxFpVbaWfcbzuQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"]
    ];
});
_c1 = TaskRow;
function TaskEditor() {
    _s2();
    const tasks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"])({
        "TaskEditor.useAeosStore[tasks]": (s)=>s.tasks
    }["TaskEditor.useAeosStore[tasks]"]);
    const [showAddForm, setShowAddForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const today = new Date().toISOString().split('T')[0];
    const todayTasks = tasks.filter((t)=>t.date === today);
    const otherTasks = tasks.filter((t)=>t.date !== today).slice(0, 10);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl glass border-aeos-border overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 border-b border-aeos-border flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-xl bg-aeos-blue/15 border border-aeos-blue/30 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$todo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTodo$3e$__["ListTodo"], {
                                    size: 15,
                                    className: "text-aeos-blue"
                                }, void 0, false, {
                                    fileName: "[project]/components/settings/TaskEditor.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/settings/TaskEditor.tsx",
                                lineNumber: 237,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-sm font-bold text-aeos-text",
                                        children: "Manage Tasks"
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/TaskEditor.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-aeos-muted",
                                        children: "Add, complete, or remove tasks"
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/TaskEditor.tsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/settings/TaskEditor.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/TaskEditor.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowAddForm(!showAddForm),
                        className: "flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-aeos-blue/15 border border-aeos-blue/30 text-xs font-semibold text-aeos-blue hover:bg-aeos-blue/25 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/components/settings/TaskEditor.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this),
                            "Add Task"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/TaskEditor.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/TaskEditor.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-4",
                children: [
                    showAddForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddTaskForm, {
                        onClose: ()=>setShowAddForm(false)
                    }, void 0, false, {
                        fileName: "[project]/components/settings/TaskEditor.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this),
                    todayTasks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-aeos-blue uppercase tracking-widest mb-2",
                                children: "Today"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/TaskEditor.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: todayTasks.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskRow, {
                                        task: t
                                    }, t.id, false, {
                                        fileName: "[project]/components/settings/TaskEditor.tsx",
                                        lineNumber: 265,
                                        columnNumber: 38
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/settings/TaskEditor.tsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/TaskEditor.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this),
                    otherTasks.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-aeos-muted uppercase tracking-widest mb-2",
                                children: "Recent"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/TaskEditor.tsx",
                                lineNumber: 273,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: otherTasks.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TaskRow, {
                                        task: t
                                    }, t.id, false, {
                                        fileName: "[project]/components/settings/TaskEditor.tsx",
                                        lineNumber: 275,
                                        columnNumber: 38
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/settings/TaskEditor.tsx",
                                lineNumber: 274,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/TaskEditor.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this),
                    tasks.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-aeos-muted text-center py-6",
                        children: "No tasks yet. Add one above."
                    }, void 0, false, {
                        fileName: "[project]/components/settings/TaskEditor.tsx",
                        lineNumber: 281,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/TaskEditor.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/settings/TaskEditor.tsx",
        lineNumber: 233,
        columnNumber: 5
    }, this);
}
_s2(TaskEditor, "NQauwmISpQ/5x9T05G6s/HEXgy0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAeosStore"]
    ];
});
_c2 = TaskEditor;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AddTaskForm");
__turbopack_context__.k.register(_c1, "TaskRow");
__turbopack_context__.k.register(_c2, "TaskEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/settings/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SettingsPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$settings$2f$ProfileForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/settings/ProfileForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$settings$2f$HabitEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/settings/HabitEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$settings$2f$BossEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/settings/BossEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$settings$2f$TaskEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/settings/TaskEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript) <export default as Settings2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
'use client';
;
;
;
;
;
;
;
function SettingsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                fileName: "[project]/app/settings/page.tsx",
                lineNumber: 13,
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings2$3e$__["Settings2"], {
                                                size: 18,
                                                className: "text-aeos-purple"
                                            }, void 0, false, {
                                                fileName: "[project]/app/settings/page.tsx",
                                                lineNumber: 20,
                                                columnNumber: 15
                                            }, this),
                                            "Profile & Settings"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/settings/page.tsx",
                                        lineNumber: 19,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-aeos-muted mt-0.5",
                                        children: "Edit your hunter profile, streaks, boss projects, and tasks in real-time."
                                    }, void 0, false, {
                                        fileName: "[project]/app/settings/page.tsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/settings/page.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 px-3 py-2 rounded-xl bg-aeos-purple/8 border border-aeos-purple/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                        size: 12,
                                        className: "text-aeos-purple flex-shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/app/settings/page.tsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-aeos-purple font-medium",
                                        children: "All changes propagate instantly"
                                    }, void 0, false, {
                                        fileName: "[project]/app/settings/page.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/settings/page.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/settings/page.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-8 max-w-4xl mx-auto w-full space-y-6 animate-fade-in",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                            number: "01",
                                            label: "Hunter Identity"
                                        }, void 0, false, {
                                            fileName: "[project]/app/settings/page.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$settings$2f$ProfileForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileForm"], {}, void 0, false, {
                                            fileName: "[project]/app/settings/page.tsx",
                                            lineNumber: 43,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/settings/page.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                            number: "02",
                                            label: "Habits & Streaks"
                                        }, void 0, false, {
                                            fileName: "[project]/app/settings/page.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$settings$2f$HabitEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HabitEditor"], {}, void 0, false, {
                                            fileName: "[project]/app/settings/page.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/settings/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                            number: "03",
                                            label: "Boss Projects"
                                        }, void 0, false, {
                                            fileName: "[project]/app/settings/page.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$settings$2f$BossEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BossEditor"], {}, void 0, false, {
                                            fileName: "[project]/app/settings/page.tsx",
                                            lineNumber: 55,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/settings/page.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLabel, {
                                            number: "04",
                                            label: "Task Manager"
                                        }, void 0, false, {
                                            fileName: "[project]/app/settings/page.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$settings$2f$TaskEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskEditor"], {}, void 0, false, {
                                            fileName: "[project]/app/settings/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/settings/page.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/settings/page.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/settings/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/settings/page.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = SettingsPage;
// ─── Section Label ────────────────────────────────────────────
function SectionLabel({ number, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 mb-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] font-black text-aeos-purple/60 tabular-nums tracking-widest",
                children: number
            }, void 0, false, {
                fileName: "[project]/app/settings/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 h-px bg-aeos-border"
            }, void 0, false, {
                fileName: "[project]/app/settings/page.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] font-bold text-aeos-muted uppercase tracking-widest",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/settings/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 h-px bg-aeos-border"
            }, void 0, false, {
                fileName: "[project]/app/settings/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/settings/page.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_c1 = SectionLabel;
var _c, _c1;
__turbopack_context__.k.register(_c, "SettingsPage");
__turbopack_context__.k.register(_c1, "SectionLabel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_91ee7593._.js.map