'use client'

import { PlayerRank, RANK_COLORS } from '@/lib/gamification'
import { BossRank, BOSS_RANK_COLORS } from '@/lib/gamification'
import clsx from 'clsx'

// ─── Player Rank Badge ────────────────────────────────────────

interface RankBadgeProps {
  rank: PlayerRank
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showLabel?: boolean
}

export function RankBadge({ rank, size = 'md', showLabel = false }: RankBadgeProps) {
  const colors = RANK_COLORS[rank]

  const sizeClasses = {
    sm: 'text-[10px] px-1.5 py-0.5 rounded-md',
    md: 'text-xs px-2 py-1 rounded-lg',
    lg: 'text-sm px-3 py-1.5 rounded-lg font-bold',
    xl: 'text-2xl px-5 py-2 rounded-xl font-black tracking-widest',
  }

  const glowClass = {
    E: '',
    D: '',
    C: 'rank-glow-c',
    B: 'rank-glow-b',
    A: 'rank-glow-a',
    S: 'rank-glow-s',
  }[rank]

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1 font-bold tracking-wider transition-all duration-300',
        sizeClasses[size],
        glowClass
      )}
      style={{
        color: colors.text,
        backgroundColor: colors.bg,
        border: `1px solid ${colors.border}`,
      }}
    >
      {showLabel && <span className="opacity-60 font-normal text-[9px] uppercase tracking-widest">Rank</span>}
      {rank}
    </span>
  )
}

// ─── Boss Rank Badge ──────────────────────────────────────────

interface BossRankBadgeProps {
  rank: BossRank
  size?: 'sm' | 'md' | 'lg'
}

export function BossRankBadge({ rank, size = 'md' }: BossRankBadgeProps) {
  const colors = BOSS_RANK_COLORS[rank]

  const sizeClasses = {
    sm: 'text-[10px] px-1.5 py-0.5 rounded-md',
    md: 'text-xs px-2 py-1 rounded-lg',
    lg: 'text-sm px-3 py-1.5 rounded-lg font-bold',
  }

  const isSSS = rank === 'SSS'
  const isSS = rank === 'SS'

  return (
    <span
      className={clsx(
        'inline-flex items-center font-bold tracking-wider transition-all',
        sizeClasses[size],
        isSSS && 'rank-glow-sss',
        isSS && 'rank-glow-s'
      )}
      style={{
        color: colors.text,
        backgroundColor: colors.bg,
        border: `1px solid ${colors.border}`,
      }}
    >
      {rank}
    </span>
  )
}
