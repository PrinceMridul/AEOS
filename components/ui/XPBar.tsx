'use client'

import { xpProgress, xpForLevel, calcLevel, formatXP } from '@/lib/gamification'
import clsx from 'clsx'

interface XPBarProps {
  lifetimeXp: number
  showNumbers?: boolean
  height?: 'sm' | 'md'
  animated?: boolean
}

export function XPBar({
  lifetimeXp,
  showNumbers = true,
  height = 'md',
  animated = true,
}: XPBarProps) {
  const level = calcLevel(lifetimeXp)
  const progress = xpProgress(lifetimeXp)
  const nextLevelXp = xpForLevel(level + 1)
  const xpNeeded = nextLevelXp - lifetimeXp

  const heightClass = { sm: 'h-1', md: 'h-1.5' }[height]

  return (
    <div className="w-full space-y-1.5">
      {showNumbers && (
        <div className="flex items-center justify-between text-xs">
          <span className="text-aeos-subtext">
            <span className="text-aeos-blue font-semibold">{formatXP(lifetimeXp)}</span>
            <span className="text-aeos-muted"> XP</span>
          </span>
          <span className="text-aeos-muted">
            {formatXP(xpNeeded)} to Lv.{level + 1}
          </span>
        </div>
      )}

      {/* Track */}
      <div className={clsx('w-full rounded-full bg-[#1C1C1E] overflow-hidden', heightClass)}>
        {/* Glow backing */}
        <div
          className="h-full rounded-full opacity-30 blur-sm absolute"
          style={{
            width: `${progress * 100}%`,
            background: 'linear-gradient(90deg, #0A84FF, #38B2FF)',
          }}
        />
        {/* Fill */}
        <div
          className={clsx('h-full rounded-full relative', animated && 'xp-bar-fill')}
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  )
}
