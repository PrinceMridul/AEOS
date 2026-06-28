'use client'

import { useAeosStore } from '@/lib/store'
import { calcLevel, calcRank, xpProgress, xpForLevel, formatXP, RANK_COLORS } from '@/lib/gamification'
import { RankBadge } from '@/components/ui/RankBadge'
import { XPBar } from '@/components/ui/XPBar'
import { Shield, TrendingUp, Star } from 'lucide-react'

export function XPHeader() {
  const lifetimeXp = useAeosStore((s) => s.userProfile.lifetimeXp)
  const name = useAeosStore((s) => s.userProfile.name)
  const title = useAeosStore((s) => s.userProfile.title)

  const level = calcLevel(lifetimeXp)
  const rank = calcRank(level)
  const progress = xpProgress(lifetimeXp)
  const nextLevelXp = xpForLevel(level + 1)
  const xpNeeded = nextLevelXp - lifetimeXp
  const colors = RANK_COLORS[rank]

  return (
    <div
      className="rounded-2xl p-6 relative overflow-hidden animate-fade-in"
      style={{
        background: `linear-gradient(135deg, #18181B 0%, ${colors.bg}60 100%)`,
        border: `1px solid ${colors.border}`,
      }}
    >
      {/* Background glow effect */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: colors.text }}
      />

      <div className="flex items-start justify-between gap-6 relative z-10">
        {/* Left: rank + name + level */}
        <div className="flex items-start gap-4">
          {/* Big rank badge */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl"
            style={{
              background: `linear-gradient(135deg, ${colors.bg}, ${colors.bg}80)`,
              border: `2px solid ${colors.border}`,
              boxShadow: `0 0 24px ${colors.glow}`,
            }}
          >
            <span
              className="text-2xl font-black tracking-widest"
              style={{ color: colors.text }}
            >
              {rank}
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <Shield size={13} className="text-aeos-muted" />
              <span className="text-xs text-aeos-muted uppercase tracking-widest font-medium">Hunter Profile</span>
            </div>
            <h2 className="text-xl font-bold text-aeos-text">{name}</h2>
            <p className="text-xs text-aeos-muted mt-0.5">{title}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-semibold" style={{ color: colors.text }}>
                Level {level}
              </span>
              <span className="text-aeos-muted text-sm">·</span>
              <span className="text-xs text-aeos-muted">{rank}-Rank Hunter</span>
            </div>
          </div>
        </div>

        {/* Right: XP stats */}
        <div className="flex items-start gap-6 flex-shrink-0">
          <div className="text-right">
            <div className="flex items-center gap-1.5 justify-end mb-0.5">
              <TrendingUp size={12} className="text-aeos-blue" />
              <span className="text-[10px] text-aeos-muted uppercase tracking-wider">Lifetime XP</span>
            </div>
            <p className="text-2xl font-bold text-aeos-blue">{formatXP(lifetimeXp)}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1.5 justify-end mb-0.5">
              <Star size={12} style={{ color: colors.text }} />
              <span className="text-[10px] text-aeos-muted uppercase tracking-wider">To Next Level</span>
            </div>
            <p className="text-2xl font-bold" style={{ color: colors.text }}>
              {formatXP(xpNeeded)}
            </p>
          </div>
        </div>
      </div>

      {/* XP Bar */}
      <div className="mt-6 relative z-10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-aeos-muted font-medium">
            Level {level} → {level + 1}
          </span>
          <span className="text-xs font-semibold" style={{ color: colors.text }}>
            {(progress * 100).toFixed(1)}%
          </span>
        </div>

        {/* Bar track */}
        <div className="h-2 rounded-full bg-[#27272A] overflow-hidden relative">
          <div
            className="xp-bar-fill h-full rounded-full"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
