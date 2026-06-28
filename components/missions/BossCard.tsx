'use client'

import { Boss } from '@/lib/mockData'
import { calcBossHP, BOSS_RANK_COLORS } from '@/lib/gamification'
import { HPBar } from '@/components/ui/HPBar'
import { BossRankBadge } from '@/components/ui/RankBadge'
import { CheckCircle2, Skull, ChevronRight, Target } from 'lucide-react'
import clsx from 'clsx'

interface BossCardProps {
  boss: Boss
  index: number
}

export function BossCard({ boss, index }: BossCardProps) {
  const hp = calcBossHP(boss.totalTasks, boss.completedTasks)
  const isDefeated = boss.status === 'defeated'
  const isLowHP = hp < 25 && !isDefeated
  const colors = BOSS_RANK_COLORS[boss.rank]

  const progressPct = boss.totalTasks > 0
    ? Math.round((boss.completedTasks / boss.totalTasks) * 100)
    : 0

  return (
    <div
      className={clsx(
        'rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 animate-fade-in relative overflow-hidden group',
        isDefeated ? 'opacity-50 hover:opacity-70' : 'hover:scale-[1.02] hover:shadow-xl',
        isLowHP && 'boss-low-hp'
      )}
      style={{
        background: isDefeated
          ? 'rgba(24,24,27,0.5)'
          : `linear-gradient(135deg, #18181B 0%, ${colors.bg}80 100%)`,
        border: `1px solid ${isDefeated ? '#27272A' : colors.border}`,
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* Rank glow backing */}
      {!isDefeated && (
        <div
          className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-5 blur-2xl pointer-events-none transition-opacity group-hover:opacity-10"
          style={{ background: colors.text }}
        />
      )}

      {/* Defeated overlay */}
      {isDefeated && (
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="flex flex-col items-center gap-2 opacity-60">
            <CheckCircle2 size={32} className="text-aeos-green" />
            <span className="text-xs font-bold text-aeos-green uppercase tracking-widest">Defeated</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-3 relative z-10">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <BossRankBadge rank={boss.rank} size="sm" />
            <span className="text-[10px] text-aeos-muted uppercase tracking-wider font-medium">
              {isDefeated ? 'Defeated' : 'Active Boss'}
            </span>
          </div>
          <h3
            className={clsx(
              'text-sm font-bold leading-snug',
              isDefeated ? 'text-aeos-muted' : 'text-aeos-text'
            )}
          >
            {boss.title}
          </h3>
          <p className="text-xs text-aeos-muted mt-0.5 truncate">{boss.subtitle}</p>
        </div>

        {isDefeated ? (
          <CheckCircle2 size={20} className="text-aeos-green flex-shrink-0 mt-1" />
        ) : (
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
          >
            <Skull size={14} style={{ color: colors.text }} />
          </div>
        )}
      </div>

      {/* HP Bar */}
      <div className="relative z-10">
        <HPBar
          totalTasks={boss.totalTasks}
          completedTasks={boss.completedTasks}
          showLabel
          showStats
          height="md"
        />
      </div>

      {/* Stats row */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <p className="text-base font-bold text-aeos-text tabular-nums">{boss.completedTasks}</p>
            <p className="text-[10px] text-aeos-muted uppercase tracking-wider">Done</p>
          </div>
          <div className="w-px h-8 bg-aeos-border" />
          <div className="text-center">
            <p className="text-base font-bold text-aeos-text tabular-nums">{boss.totalTasks}</p>
            <p className="text-[10px] text-aeos-muted uppercase tracking-wider">Total</p>
          </div>
          <div className="w-px h-8 bg-aeos-border" />
          <div className="text-center">
            <p
              className="text-base font-bold tabular-nums"
              style={{ color: isDefeated ? '#30D158' : colors.text }}
            >
              {progressPct}%
            </p>
            <p className="text-[10px] text-aeos-muted uppercase tracking-wider">Progress</p>
          </div>
        </div>

        {!isDefeated && (
          <button className="flex items-center gap-1 text-xs text-aeos-muted hover:text-aeos-blue transition-colors">
            <Target size={12} />
            <span>View</span>
            <ChevronRight size={12} />
          </button>
        )}
      </div>

      {/* Description */}
      <p className="text-xs text-aeos-muted leading-relaxed line-clamp-2 relative z-10 border-t border-aeos-border pt-3">
        {boss.description}
      </p>
    </div>
  )
}
