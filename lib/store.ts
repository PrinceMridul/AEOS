// ============================================================
// AEOS Global Zustand Store (v2 — with full edit actions)
// ============================================================

import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import {
  Task,
  Boss,
  KnowledgeItem,
  Habit,
  UserProfile,
  initialUserProfile,
  initialBosses,
  initialTasks,
  initialHabits,
  initialKnowledgeItems,
} from './mockData'
import { calcLevel, calcRank, PlayerRank, BossRank } from './gamification'

// ─── Store Shape ─────────────────────────────────────────────

interface AeosState {
  // Data
  userProfile: UserProfile
  tasks: Task[]
  bosses: Boss[]
  knowledgeItems: KnowledgeItem[]
  habits: Habit[]

  // Derived getters
  getLevel: () => number
  getRank: () => PlayerRank
  getTodaysTasks: () => Task[]
  getMainQuestToday: () => Task | undefined
  getSideQuestsToday: () => Task[]

  // ── Task Actions ──────────────────────────────────────────
  completeTask: (taskId: string) => void
  uncompleteTask: (taskId: string) => void
  /** Unified toggle — completes if todo, uncompletes if done */
  toggleTask: (taskId: string) => void
  /** Add a brand-new task to the store */
  addTask: (task: Omit<Task, 'id'>) => void
  /** Delete a task by id */
  deleteTask: (taskId: string) => void

  // ── Habit Actions ─────────────────────────────────────────
  /** Toggle a habit's completedToday state, awarding/revoking XP */
  toggleHabit: (habitId: string) => void
  /** Directly set a habit's streak value (for editing) */
  updateStreak: (habitId: string, count: number) => void
  /** Increment a habit's streak by 1 */
  incrementStreak: (habitId: string) => void
  /** Decrement a habit's streak by 1, minimum 0 */
  decrementStreak: (habitId: string) => void

  // ── Profile Actions ───────────────────────────────────────
  /** Update any subset of profile fields */
  updateProfile: (fields: Partial<UserProfile>) => void

  // ── Boss Actions ──────────────────────────────────────────
  /** Update any subset of boss fields by id */
  updateBoss: (id: string, fields: Partial<Omit<Boss, 'id'>>) => void

  // ── Knowledge Vault Actions ───────────────────────────────
  addKnowledgeItem: (item: Omit<KnowledgeItem, 'id' | 'dateAdded'>) => void
  deleteKnowledgeItem: (id: string) => void
}

// ─── Store Implementation ────────────────────────────────────

export const useAeosStore = create<AeosState>()(
  immer((set, get) => ({
    // ── Initial State ──────────────────────────────────────
    userProfile: initialUserProfile,
    tasks: initialTasks,
    bosses: initialBosses,
    knowledgeItems: initialKnowledgeItems,
    habits: initialHabits,

    // ── Derived Getters ───────────────────────────────────
    getLevel: () => calcLevel(get().userProfile.lifetimeXp),
    getRank: () => calcRank(calcLevel(get().userProfile.lifetimeXp)),

    getTodaysTasks: () => {
      const today = new Date().toISOString().split('T')[0]
      return get().tasks.filter((t) => t.date === today)
    },

    getMainQuestToday: () => {
      const today = new Date().toISOString().split('T')[0]
      return get().tasks.find((t) => t.date === today && t.type === 'Main')
    },

    getSideQuestsToday: () => {
      const today = new Date().toISOString().split('T')[0]
      return get()
        .tasks.filter((t) => t.date === today && t.type === 'Side')
        .slice(0, 2)
    },

    // ── Task Actions ──────────────────────────────────────

    /**
     * Complete a task:
     * 1. Mark task as done
     * 2. Award XP to user profile
     * 3. Increment boss.completedTasks (deals damage to HP)
     * 4. Auto-defeat boss if completedTasks >= totalTasks
     */
    completeTask: (taskId) =>
      set((state) => {
        const task = state.tasks.find((t) => t.id === taskId)
        if (!task || task.status === 'done') return

        task.status = 'done'
        state.userProfile.lifetimeXp += task.xpReward

        if (task.bossId) {
          const boss = state.bosses.find((b) => b.id === task.bossId)
          if (boss && boss.status === 'active') {
            boss.completedTasks = Math.min(boss.completedTasks + 1, boss.totalTasks)
            if (boss.completedTasks >= boss.totalTasks) {
              boss.status = 'defeated'
            }
          }
        }
      }),

    /**
     * Uncomplete a task — reverses XP and boss damage
     */
    uncompleteTask: (taskId) =>
      set((state) => {
        const task = state.tasks.find((t) => t.id === taskId)
        if (!task || task.status === 'todo') return

        task.status = 'todo'
        state.userProfile.lifetimeXp = Math.max(0, state.userProfile.lifetimeXp - task.xpReward)

        if (task.bossId) {
          const boss = state.bosses.find((b) => b.id === task.bossId)
          if (boss) {
            boss.completedTasks = Math.max(0, boss.completedTasks - 1)
            if (boss.status === 'defeated') boss.status = 'active'
          }
        }
      }),

    /** Unified toggle wrapper */
    toggleTask: (taskId) => {
      const task = get().tasks.find((t) => t.id === taskId)
      if (!task) return
      if (task.status === 'todo') {
        get().completeTask(taskId)
      } else {
        get().uncompleteTask(taskId)
      }
    },

    /** Add a new task to the store */
    addTask: (task) =>
      set((state) => {
        const newTask: Task = {
          ...task,
          id: `task-${Date.now()}`,
        }
        state.tasks.push(newTask)
      }),

    /** Delete a task by id */
    deleteTask: (taskId) =>
      set((state) => {
        state.tasks = state.tasks.filter((t) => t.id !== taskId)
      }),

    // ── Habit Actions ─────────────────────────────────────

    /**
     * Toggle completedToday — awards or revokes +25 XP
     * Note: does NOT touch the numeric streak counter.
     * Streaks are managed independently via updateStreak / increment / decrement.
     */
    toggleHabit: (habitId) =>
      set((state) => {
        const habit = state.habits.find((h) => h.id === habitId)
        if (!habit) return
        habit.completedToday = !habit.completedToday
        if (habit.completedToday) {
          state.userProfile.lifetimeXp += 25
        } else {
          state.userProfile.lifetimeXp = Math.max(0, state.userProfile.lifetimeXp - 25)
        }
      }),

    /** Directly set a habit streak to an exact number (used in Settings form) */
    updateStreak: (habitId, count) =>
      set((state) => {
        const habit = state.habits.find((h) => h.id === habitId)
        if (habit) habit.streak = Math.max(0, count)
      }),

    /** Increment streak by 1 (inline cockpit control) */
    incrementStreak: (habitId) =>
      set((state) => {
        const habit = state.habits.find((h) => h.id === habitId)
        if (habit) habit.streak += 1
      }),

    /** Decrement streak by 1, clamp at 0 (inline cockpit control) */
    decrementStreak: (habitId) =>
      set((state) => {
        const habit = state.habits.find((h) => h.id === habitId)
        if (habit) habit.streak = Math.max(0, habit.streak - 1)
      }),

    // ── Profile Actions ───────────────────────────────────

    /**
     * Update any subset of user profile fields.
     * Useful for name, title, and manual XP/level adjustment from Settings.
     */
    updateProfile: (fields) =>
      set((state) => {
        Object.assign(state.userProfile, fields)
        // Clamp XP at 0
        if (state.userProfile.lifetimeXp < 0) state.userProfile.lifetimeXp = 0
      }),

    // ── Boss Actions ──────────────────────────────────────

    /**
     * Update any subset of boss fields by id.
     * Auto-recalculates status when totalTasks/completedTasks change.
     */
    updateBoss: (id, fields) =>
      set((state) => {
        const boss = state.bosses.find((b) => b.id === id)
        if (!boss) return
        Object.assign(boss, fields)
        // Clamp completedTasks within [0, totalTasks]
        boss.completedTasks = Math.min(
          Math.max(0, boss.completedTasks),
          boss.totalTasks
        )
        // Auto-update status
        if (boss.completedTasks >= boss.totalTasks) {
          boss.status = 'defeated'
        } else if (boss.status === 'defeated') {
          boss.status = 'active'
        }
      }),

    // ── Knowledge Vault Actions ───────────────────────────

    addKnowledgeItem: (item) =>
      set((state) => {
        const newItem: KnowledgeItem = {
          ...item,
          id: `k-${Date.now()}`,
          dateAdded: new Date().toISOString().split('T')[0],
        }
        state.knowledgeItems.unshift(newItem)
      }),

    deleteKnowledgeItem: (id) =>
      set((state) => {
        state.knowledgeItems = state.knowledgeItems.filter((k) => k.id !== id)
      }),
  }))
)

// ─── Convenience selector hooks ──────────────────────────────

export const useUserProfile = () => useAeosStore((s) => s.userProfile)
export const useTasks = () => useAeosStore((s) => s.tasks)
export const useBosses = () => useAeosStore((s) => s.bosses)
export const useKnowledgeItems = () => useAeosStore((s) => s.knowledgeItems)
export const useHabits = () => useAeosStore((s) => s.habits)
export const useCompleteTask = () => useAeosStore((s) => s.completeTask)
export const useUncompleteTask = () => useAeosStore((s) => s.uncompleteTask)
export const useToggleTask = () => useAeosStore((s) => s.toggleTask)
export const useToggleHabit = () => useAeosStore((s) => s.toggleHabit)
export const useUpdateProfile = () => useAeosStore((s) => s.updateProfile)
export const useUpdateBoss = () => useAeosStore((s) => s.updateBoss)
export const useUpdateStreak = () => useAeosStore((s) => s.updateStreak)
