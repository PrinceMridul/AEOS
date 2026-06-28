'use client'

import { calcBossHP } from '@/lib/gamification'
import clsx from 'clsx'

interface HPBarProps {
  totalTasks: number
  completedTasks: number
  showLabel?: boolean
  height?: 'sm' | 'md' | 'lg'
  showStats?: boolean
}

export function HPBar({
  totalTasks,
  completedTasks,
  showLabel = true,
  height = 'md',
  showStats = false,
}: HPBarProps) {
  const hp = calcBossHP(totalTasks, completedTasks)
  const isLow = hp < 25
  const isMid = hp >= 25 && hp <= 60
  const isDefeated = hp === 0

  const heightClass = {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-3',
  }[height]

  const barClass = isDefeated
    ? 'bg-aeos-green'
    : isLow
    ? 'hp-bar-fill-green'
    : isMid
    ? 'hp-bar-fill-orange'
    : 'hp-bar-fill'

  return (
    <div className="w-full space-y-1.5">
      {(showLabel || showStats) && (
        <div className="flex items-center justify-between">
          {showLabel && (
            <span
              className={clsx(
                'text-xs font-semibold tracking-wider uppercase',
                isDefeated
                  ? 'text-aeos-green'
                  : isLow
                  ? 'text-aeos-green'
                  : isMid
                  ? 'text-[#FF9F0A]'
                  : 'text-aeos-red'
              )}
            >
              {isDefeated ? '✓ DEFEATED' : `HP ${hp.toFixed(0)}%`}
            </span>
          )}
          {showStats && (
            <span className="text-xs text-aeos-muted">
              {completedTasks}/{totalTasks} tasks
            </span>
          )}
        </div>
      )}

      {/* Track */}
      <div
        className={clsx(
          'w-full rounded-full overflow-hidden',
          heightClass,
          isLow && !isDefeated && 'boss-low-hp',
          'bg-[#27272A]'
        )}
      >
        {/* Fill */}
        <div
          className={clsx('h-full rounded-full', barClass)}
          style={{ width: `${hp}%` }}
        />
      </div>
    </div>
  )
}
