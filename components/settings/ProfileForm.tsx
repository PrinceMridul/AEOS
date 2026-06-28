'use client'

import { useState, useEffect } from 'react'
import { useAeosStore } from '@/lib/store'
import { calcLevel, calcRank, xpForLevel, formatXP, RANK_COLORS } from '@/lib/gamification'
import { RankBadge } from '@/components/ui/RankBadge'
import { User, Briefcase, Zap, Save, RotateCcw, TrendingUp, ChevronUp, ChevronDown } from 'lucide-react'
import clsx from 'clsx'

// ─── Reusable input ───────────────────────────────────────────

function SettingsInput({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  hint,
  icon: Icon,
}: {
  label: string
  value: string | number
  onChange: (v: string) => void
  type?: string
  placeholder?: string
  hint?: string
  icon?: React.ElementType
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-semibold text-aeos-subtext uppercase tracking-wider">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-aeos-muted pointer-events-none" />
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={clsx(
            'w-full bg-[#0D0D0F] border border-aeos-border rounded-xl py-2.5 text-sm text-aeos-text placeholder-aeos-muted',
            'focus:outline-none focus:border-aeos-blue focus:ring-1 focus:ring-aeos-blue/30 transition-all',
            Icon ? 'pl-9 pr-4' : 'px-4'
          )}
        />
      </div>
      {hint && <p className="text-[11px] text-aeos-muted">{hint}</p>}
    </div>
  )
}

// ─── XP ↔ Level stepper ──────────────────────────────────────

function LevelStepper({
  lifetimeXp,
  onXpChange,
}: {
  lifetimeXp: number
  onXpChange: (xp: number) => void
}) {
  const level = calcLevel(lifetimeXp)
  const rank = calcRank(level)
  const colors = RANK_COLORS[rank]

  const bumpLevel = (delta: number) => {
    const newLevel = Math.max(1, level + delta)
    // Set XP to the start of that level
    onXpChange(xpForLevel(newLevel))
  }

  return (
    <div
      className="rounded-2xl p-4 space-y-4"
      style={{ background: `${colors.bg}50`, border: `1px solid ${colors.border}` }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-aeos-muted uppercase tracking-wider mb-0.5">Current Level</p>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black text-aeos-text">{level}</span>
            <RankBadge rank={rank} size="md" />
          </div>
        </div>
        {/* Level up/down stepper */}
        <div className="flex flex-col gap-1">
          <button
            onClick={() => bumpLevel(1)}
            className="w-8 h-8 rounded-xl bg-aeos-blue/15 border border-aeos-blue/30 hover:bg-aeos-blue/25 text-aeos-blue flex items-center justify-center transition-all"
            title="Level up"
          >
            <ChevronUp size={16} />
          </button>
          <button
            onClick={() => bumpLevel(-1)}
            className="w-8 h-8 rounded-xl bg-[#27272A] border border-aeos-border hover:border-aeos-red/40 hover:bg-aeos-red/10 text-aeos-muted hover:text-aeos-red flex items-center justify-center transition-all"
            title="Level down"
          >
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* XP raw input */}
      <div>
        <label className="block text-xs font-semibold text-aeos-subtext uppercase tracking-wider mb-1.5">
          Lifetime XP (raw)
        </label>
        <div className="relative">
          <TrendingUp size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-aeos-blue pointer-events-none" />
          <input
            type="number"
            value={lifetimeXp}
            min={0}
            onChange={(e) => {
              const v = parseInt(e.target.value, 10)
              if (!isNaN(v)) onXpChange(Math.max(0, v))
            }}
            className="w-full bg-[#0D0D0F] border border-aeos-border rounded-xl pl-9 pr-4 py-2.5 text-sm text-aeos-blue font-semibold placeholder-aeos-muted focus:outline-none focus:border-aeos-blue focus:ring-1 focus:ring-aeos-blue/30 transition-all"
          />
        </div>
        <p className="text-[11px] text-aeos-muted mt-1">
          Level formula: <code className="text-aeos-blue/80">floor(√(XP / 100)) + 1</code>
        </p>
      </div>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────

export function ProfileForm() {
  const userProfile = useAeosStore((s) => s.userProfile)
  const updateProfile = useAeosStore((s) => s.updateProfile)

  // Local draft state — committed on Save
  const [name, setName] = useState(userProfile.name)
  const [title, setTitle] = useState(userProfile.title)
  const [lifetimeXp, setLifetimeXp] = useState(userProfile.lifetimeXp)
  const [saved, setSaved] = useState(false)

  // Sync if external store changes (e.g., task completion bumps XP)
  useEffect(() => {
    setLifetimeXp(userProfile.lifetimeXp)
  }, [userProfile.lifetimeXp])

  const isDirty =
    name !== userProfile.name ||
    title !== userProfile.title ||
    lifetimeXp !== userProfile.lifetimeXp

  const handleSave = () => {
    if (!name.trim()) return
    updateProfile({ name: name.trim(), title: title.trim(), lifetimeXp })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const handleReset = () => {
    setName(userProfile.name)
    setTitle(userProfile.title)
    setLifetimeXp(userProfile.lifetimeXp)
  }

  return (
    <div className="rounded-2xl glass border-aeos-border overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-aeos-border flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-aeos-blue/15 border border-aeos-blue/30 flex items-center justify-center">
          <User size={15} className="text-aeos-blue" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-aeos-text">Hunter Profile</h2>
          <p className="text-[11px] text-aeos-muted">Edit your identity and progression</p>
        </div>
      </div>

      {/* Form body */}
      <div className="p-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SettingsInput
            label="Name"
            value={name}
            onChange={setName}
            placeholder="Your name"
            icon={User}
          />
          <SettingsInput
            label="Title"
            value={title}
            onChange={setTitle}
            placeholder="B.Tech AI Engineer"
            icon={Briefcase}
            hint="Displayed in the sidebar below your name"
          />
        </div>

        {/* Level / XP editor */}
        <LevelStepper
          lifetimeXp={lifetimeXp}
          onXpChange={setLifetimeXp}
        />
      </div>

      {/* Footer actions */}
      <div className="px-6 pb-5 flex items-center justify-end gap-3">
        {isDirty && (
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-aeos-border text-sm text-aeos-muted hover:text-aeos-text hover:bg-white/5 transition-all"
          >
            <RotateCcw size={13} />
            Reset
          </button>
        )}
        <button
          onClick={handleSave}
          disabled={!isDirty && !saved}
          className={clsx(
            'flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold transition-all shadow-lg',
            saved
              ? 'bg-aeos-green text-white shadow-aeos-green/20'
              : isDirty
              ? 'bg-aeos-blue text-white hover:bg-blue-500 shadow-aeos-blue/20'
              : 'bg-[#27272A] text-aeos-muted cursor-not-allowed'
          )}
        >
          <Save size={13} />
          {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>
    </div>
  )
}
