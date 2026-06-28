'use client'

import { useAeosStore } from '@/lib/store'
import { Habit } from '@/lib/mockData'
import clsx from 'clsx'
import {
  Code2,
  Zap,
  Globe,
  BookOpen,
  CheckCircle2,
  Flame,
  Activity,
  Plus,
  Minus,
  Crown,
  BookA,
} from 'lucide-react'

// ─── Icon map (expanded for new habits) ──────────────────────

const ICON_MAP: Record<string, React.ElementType> = {
  Chess: Crown,
  Code2,
  Zap,
  Globe,
  BookA,
  BookOpen,
  Activity,
}

// ─── Habit Row ────────────────────────────────────────────────

interface HabitRowProps {
  habit: Habit
  index: number
}

function HabitRow({ habit, index }: HabitRowProps) {
  const toggleHabit = useAeosStore((s) => s.toggleHabit)
  const incrementStreak = useAeosStore((s) => s.incrementStreak)
  const decrementStreak = useAeosStore((s) => s.decrementStreak)

  const Icon = ICON_MAP[habit.icon] || Activity
  const isDone = habit.completedToday
  const isHighStreak = habit.streak >= 30

  return (
    <div
      className={clsx(
        'flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-200 animate-fade-in',
        isDone
          ? 'bg-aeos-green/8 border border-aeos-green/20'
          : 'bg-aeos-surface/60 border border-aeos-border hover:border-aeos-border/80'
      )}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Done toggle button */}
      <button
        onClick={() => toggleHabit(habit.id)}
        className={clsx(
          'w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200',
          isDone
            ? 'bg-aeos-green/20 hover:bg-aeos-green/30'
            : 'bg-[#27272A] hover:bg-aeos-blue/15 hover:border hover:border-aeos-blue/30'
        )}
        title={isDone ? 'Mark incomplete' : 'Mark complete'}
      >
        <Icon
          size={14}
          className={clsx(
            'transition-colors',
            isDone ? 'text-aeos-green' : 'text-aeos-muted'
          )}
        />
      </button>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p
          className={clsx(
            'text-sm font-semibold leading-tight truncate',
            isDone ? 'text-aeos-green' : 'text-aeos-text'
          )}
        >
          {habit.title}
        </p>
      </div>

      {/* ── Inline streak counter ── */}
      <div className="flex items-center gap-1 flex-shrink-0">
        {/* Decrement */}
        <button
          onClick={() => decrementStreak(habit.id)}
          className="w-5 h-5 rounded-md bg-[#27272A] border border-aeos-border hover:border-aeos-red/50 hover:bg-aeos-red/10 flex items-center justify-center transition-all duration-150 group"
          title="Decrement streak"
        >
          <Minus size={10} className="text-aeos-muted group-hover:text-aeos-red" />
        </button>

        {/* Streak value */}
        <div
          className={clsx(
            'flex items-center gap-0.5 min-w-[42px] justify-center px-1.5 py-0.5 rounded-lg border',
            habit.streak > 0
              ? isHighStreak
                ? 'bg-[#FF9F0A]/15 border-[#FF9F0A]/30'
                : 'bg-[#27272A] border-aeos-border'
              : 'bg-[#1C1C1E] border-aeos-border/40'
          )}
        >
          {habit.streak > 0 && (
            <Flame
              size={9}
              className={clsx(isHighStreak ? 'text-[#FF9F0A]' : 'text-aeos-muted')}
            />
          )}
          <span
            className={clsx(
              'text-[11px] font-bold tabular-nums',
              habit.streak > 0
                ? isHighStreak
                  ? 'text-[#FF9F0A]'
                  : 'text-aeos-subtext'
                : 'text-aeos-muted/50'
            )}
          >
            {habit.streak}
          </span>
        </div>

        {/* Increment */}
        <button
          onClick={() => incrementStreak(habit.id)}
          className="w-5 h-5 rounded-md bg-[#27272A] border border-aeos-border hover:border-aeos-blue/50 hover:bg-aeos-blue/10 flex items-center justify-center transition-all duration-150 group"
          title="Increment streak"
        >
          <Plus size={10} className="text-aeos-muted group-hover:text-aeos-blue" />
        </button>

        {/* Completion check indicator */}
        <div
          className={clsx(
            'w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200 ml-1',
            isDone ? 'bg-aeos-green border-aeos-green' : 'border-aeos-border'
          )}
        >
          {isDone && <CheckCircle2 size={10} className="text-white" />}
        </div>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────

export function NonNegotiables() {
  const habits = useAeosStore((s) => s.habits)

  const completedCount = habits.filter((h) => h.completedToday).length
  const totalCount = habits.length
  const allDone = completedCount === totalCount
  const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0

  return (
    <div className="rounded-2xl p-5 glass border-aeos-border flex flex-col gap-3 h-full animate-slide-in-right">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-0.5">
          <h2 className="text-base font-bold text-aeos-text flex items-center gap-2">
            <Flame size={16} className="text-[#FF9F0A]" />
            Non-Negotiables
          </h2>
          <span
            className={clsx(
              'text-sm font-bold tabular-nums',
              allDone ? 'text-aeos-green' : 'text-aeos-subtext'
            )}
          >
            {completedCount}/{totalCount}
          </span>
        </div>
        <p className="text-[10px] text-aeos-muted">
          Tap icon to complete · <span className="text-aeos-blue/70">+/−</span> to adjust streak
        </p>

        {/* Progress bar */}
        <div className="mt-2.5 h-1 w-full rounded-full bg-[#27272A] overflow-hidden">
          <div
            className={clsx(
              'h-full rounded-full transition-all duration-700',
              allDone ? 'bg-aeos-green' : 'bg-[#FF9F0A]'
            )}
            style={{ width: `${pct}%` }}
          />
        </div>

        {allDone && (
          <p className="text-xs text-aeos-green font-semibold mt-1.5 flex items-center gap-1.5">
            <CheckCircle2 size={12} />
            All done! +25 XP per habit
          </p>
        )}
      </div>

      {/* Habit list */}
      <div className="flex flex-col gap-1.5 stagger-children">
        {habits.map((habit, index) => (
          <HabitRow key={habit.id} habit={habit} index={index} />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-2 border-t border-aeos-border">
        <p className="text-[10px] text-aeos-muted text-center">
          Completion awards{' '}
          <span className="text-aeos-blue font-semibold">+25 XP</span>
          {' · '}
          <span className="text-aeos-subtext">streaks are independent</span>
        </p>
      </div>
    </div>
  )
}
