'use client'

import { useState } from 'react'
import { useAeosStore } from '@/lib/store'
import { Habit } from '@/lib/mockData'
import {
  Code2, Zap, Globe, BookOpen, Activity,
  Crown, Flame, Plus, Minus, Check, BookA,
} from 'lucide-react'
import clsx from 'clsx'

// ─── Icon map ─────────────────────────────────────────────────

const ICON_MAP: Record<string, React.ElementType> = {
  Chess: Crown,
  Code2,
  Zap,
  Globe,
  BookA,
  BookOpen,
  Activity,
}

// ─── Single Habit Editor Row ──────────────────────────────────

interface HabitEditorRowProps {
  habit: Habit
}

function HabitEditorRow({ habit }: HabitEditorRowProps) {
  const updateStreak = useAeosStore((s) => s.updateStreak)
  const incrementStreak = useAeosStore((s) => s.incrementStreak)
  const decrementStreak = useAeosStore((s) => s.decrementStreak)

  const [inputValue, setInputValue] = useState(String(habit.streak))
  const [justSaved, setJustSaved] = useState(false)

  const Icon = ICON_MAP[habit.icon] || Activity
  const isHighStreak = habit.streak >= 30

  const commitInput = () => {
    const parsed = parseInt(inputValue, 10)
    if (!isNaN(parsed) && parsed >= 0) {
      updateStreak(habit.id, parsed)
      setJustSaved(true)
      setTimeout(() => setJustSaved(false), 1200)
    } else {
      setInputValue(String(habit.streak))
    }
  }

  const handleInputChange = (v: string) => {
    setInputValue(v)
  }

  const handleIncrement = () => {
    incrementStreak(habit.id)
    setInputValue(String(habit.streak + 1))
  }

  const handleDecrement = () => {
    decrementStreak(habit.id)
    setInputValue(String(Math.max(0, habit.streak - 1)))
  }

  return (
    <div className="flex items-center gap-4 px-4 py-3.5 rounded-xl bg-aeos-surface/50 border border-aeos-border hover:border-aeos-border/80 transition-all">
      {/* Icon + name */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className="w-8 h-8 rounded-lg bg-[#27272A] flex items-center justify-center flex-shrink-0">
          <Icon size={15} className="text-aeos-muted" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-aeos-text">{habit.title}</p>
          <p className="text-[11px] text-aeos-muted truncate">{habit.description}</p>
        </div>
      </div>

      {/* Streak badge */}
      <div
        className={clsx(
          'flex items-center gap-1 px-2 py-1 rounded-lg border',
          isHighStreak
            ? 'bg-[#FF9F0A]/10 border-[#FF9F0A]/30'
            : 'bg-[#27272A] border-aeos-border'
        )}
      >
        <Flame size={11} className={isHighStreak ? 'text-[#FF9F0A]' : 'text-aeos-muted'} />
        <span className={clsx('text-xs font-bold tabular-nums', isHighStreak ? 'text-[#FF9F0A]' : 'text-aeos-subtext')}>
          {habit.streak}d
        </span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        {/* Decrement */}
        <button
          onClick={handleDecrement}
          className="w-7 h-7 rounded-lg bg-[#27272A] border border-aeos-border hover:border-aeos-red/50 hover:bg-aeos-red/10 flex items-center justify-center transition-all group"
        >
          <Minus size={12} className="text-aeos-muted group-hover:text-aeos-red" />
        </button>

        {/* Typed input */}
        <input
          type="number"
          value={inputValue}
          min={0}
          onChange={(e) => handleInputChange(e.target.value)}
          onBlur={commitInput}
          onKeyDown={(e) => e.key === 'Enter' && commitInput()}
          className="w-16 h-7 bg-[#0D0D0F] border border-aeos-border rounded-lg text-center text-sm font-bold text-aeos-text focus:outline-none focus:border-aeos-blue focus:ring-1 focus:ring-aeos-blue/30 transition-all tabular-nums"
        />

        {/* Increment */}
        <button
          onClick={handleIncrement}
          className="w-7 h-7 rounded-lg bg-[#27272A] border border-aeos-border hover:border-aeos-blue/50 hover:bg-aeos-blue/10 flex items-center justify-center transition-all group"
        >
          <Plus size={12} className="text-aeos-muted group-hover:text-aeos-blue" />
        </button>

        {/* Save confirm flash */}
        <div
          className={clsx(
            'w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300',
            justSaved ? 'bg-aeos-green scale-100 opacity-100' : 'scale-75 opacity-0'
          )}
        >
          <Check size={11} className="text-white" />
        </div>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────

export function HabitEditor() {
  const habits = useAeosStore((s) => s.habits)

  return (
    <div className="rounded-2xl glass border-aeos-border overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-aeos-border flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-[#FF9F0A]/15 border border-[#FF9F0A]/30 flex items-center justify-center">
          <Flame size={15} className="text-[#FF9F0A]" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-aeos-text">Edit Habits & Streaks</h2>
          <p className="text-[11px] text-aeos-muted">
            Type a value directly, press Enter, or use +/− to adjust streaks
          </p>
        </div>
      </div>

      {/* Habit rows */}
      <div className="p-4 space-y-2">
        {habits.map((habit) => (
          <HabitEditorRow key={habit.id} habit={habit} />
        ))}
      </div>

      {/* Footer tip */}
      <div className="px-6 pb-4">
        <p className="text-[11px] text-aeos-muted">
          💡 Changes are instant — streak updates propagate everywhere immediately.
          Completion toggles (+25 XP) remain independent of the streak counter.
        </p>
      </div>
    </div>
  )
}
