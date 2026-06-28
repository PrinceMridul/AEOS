'use client'

import { useState } from 'react'
import { useAeosStore } from '@/lib/store'
import { Boss } from '@/lib/mockData'
import { BossRank } from '@/lib/gamification'
import { HPBar } from '@/components/ui/HPBar'
import { BossRankBadge } from '@/components/ui/RankBadge'
import { calcBossHP } from '@/lib/gamification'
import { Swords, ChevronDown, ChevronUp, CheckCircle2, Edit3, Save, X } from 'lucide-react'
import clsx from 'clsx'

const BOSS_RANKS: BossRank[] = ['E', 'D', 'C', 'B', 'A', 'S', 'SS', 'SSS']

// ─── Single Boss Editor Row ───────────────────────────────────

interface BossEditorRowProps {
  boss: Boss
}

function BossEditorRow({ boss }: BossEditorRowProps) {
  const updateBoss = useAeosStore((s) => s.updateBoss)
  const [isExpanded, setIsExpanded] = useState(false)
  const [draft, setDraft] = useState({
    title: boss.title,
    subtitle: boss.subtitle,
    rank: boss.rank,
    totalTasks: boss.totalTasks,
    completedTasks: boss.completedTasks,
    description: boss.description,
  })

  const hp = calcBossHP(boss.totalTasks, boss.completedTasks)
  const isDefeated = boss.status === 'defeated'

  const handleSave = () => {
    updateBoss(boss.id, {
      ...draft,
      totalTasks: Math.max(1, draft.totalTasks),
      completedTasks: Math.min(Math.max(0, draft.completedTasks), draft.totalTasks),
    })
    setIsExpanded(false)
  }

  const handleDiscard = () => {
    setDraft({
      title: boss.title,
      subtitle: boss.subtitle,
      rank: boss.rank,
      totalTasks: boss.totalTasks,
      completedTasks: boss.completedTasks,
      description: boss.description,
    })
    setIsExpanded(false)
  }

  return (
    <div className="rounded-xl border border-aeos-border overflow-hidden">
      {/* Summary row */}
      <button
        className="w-full flex items-center gap-3 px-4 py-3 bg-aeos-surface/40 hover:bg-aeos-surface/70 transition-colors text-left"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <BossRankBadge rank={boss.rank} size="sm" />
        <div className="flex-1 min-w-0">
          <p className={clsx('text-sm font-semibold truncate', isDefeated ? 'text-aeos-muted' : 'text-aeos-text')}>
            {boss.title}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex-1 max-w-[140px]">
              <HPBar totalTasks={boss.totalTasks} completedTasks={boss.completedTasks} showLabel={false} showStats={false} height="sm" />
            </div>
            <span className="text-[10px] text-aeos-muted tabular-nums">
              {boss.completedTasks}/{boss.totalTasks}
            </span>
            {isDefeated && (
              <CheckCircle2 size={12} className="text-aeos-green" />
            )}
          </div>
        </div>
        <Edit3 size={13} className="text-aeos-muted flex-shrink-0" />
        {isExpanded ? (
          <ChevronUp size={14} className="text-aeos-muted flex-shrink-0" />
        ) : (
          <ChevronDown size={14} className="text-aeos-muted flex-shrink-0" />
        )}
      </button>

      {/* Expanded editor */}
      {isExpanded && (
        <div className="px-4 pb-4 pt-3 bg-[#0D0D0F] border-t border-aeos-border space-y-3 animate-fade-in">
          {/* Title + Subtitle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1">Boss Name</label>
              <input
                value={draft.title}
                onChange={(e) => setDraft({ ...draft, title: e.target.value })}
                className="w-full bg-[#18181B] border border-aeos-border rounded-lg px-3 py-2 text-sm text-aeos-text focus:outline-none focus:border-aeos-blue transition-all"
              />
            </div>
            <div>
              <label className="block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1">Subtitle</label>
              <input
                value={draft.subtitle}
                onChange={(e) => setDraft({ ...draft, subtitle: e.target.value })}
                className="w-full bg-[#18181B] border border-aeos-border rounded-lg px-3 py-2 text-sm text-aeos-text focus:outline-none focus:border-aeos-blue transition-all"
              />
            </div>
          </div>

          {/* Rank + Tasks */}
          <div className="grid grid-cols-3 gap-3">
            {/* Rank selector */}
            <div>
              <label className="block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1">Rank</label>
              <div className="flex flex-wrap gap-1">
                {BOSS_RANKS.map((r) => (
                  <button
                    key={r}
                    onClick={() => setDraft({ ...draft, rank: r })}
                    className={clsx(
                      'text-[10px] font-bold px-1.5 py-0.5 rounded-md border transition-all',
                      draft.rank === r
                        ? 'bg-aeos-blue/15 border-aeos-blue/40 text-aeos-blue'
                        : 'bg-[#18181B] border-aeos-border text-aeos-muted hover:border-aeos-border/80'
                    )}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Total tasks */}
            <div>
              <label className="block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1">Total Tasks</label>
              <input
                type="number"
                min={1}
                value={draft.totalTasks}
                onChange={(e) => setDraft({ ...draft, totalTasks: parseInt(e.target.value) || 1 })}
                className="w-full bg-[#18181B] border border-aeos-border rounded-lg px-3 py-2 text-sm text-aeos-text focus:outline-none focus:border-aeos-blue transition-all tabular-nums"
              />
            </div>

            {/* Completed tasks */}
            <div>
              <label className="block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1">Completed</label>
              <input
                type="number"
                min={0}
                max={draft.totalTasks}
                value={draft.completedTasks}
                onChange={(e) =>
                  setDraft({ ...draft, completedTasks: Math.min(parseInt(e.target.value) || 0, draft.totalTasks) })
                }
                className="w-full bg-[#18181B] border border-aeos-border rounded-lg px-3 py-2 text-sm text-aeos-text focus:outline-none focus:border-aeos-blue transition-all tabular-nums"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1">Description</label>
            <textarea
              value={draft.description}
              onChange={(e) => setDraft({ ...draft, description: e.target.value })}
              rows={2}
              className="w-full bg-[#18181B] border border-aeos-border rounded-lg px-3 py-2 text-sm text-aeos-text focus:outline-none focus:border-aeos-blue transition-all resize-none"
            />
          </div>

          {/* Preview HP */}
          <div>
            <p className="text-[10px] text-aeos-muted mb-1 uppercase tracking-wider">HP Preview</p>
            <HPBar
              totalTasks={Math.max(1, draft.totalTasks)}
              completedTasks={Math.min(draft.completedTasks, draft.totalTasks)}
              showLabel
              showStats
              height="md"
            />
          </div>

          {/* Action buttons */}
          <div className="flex justify-end gap-2 pt-1">
            <button
              onClick={handleDiscard}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-aeos-border text-xs text-aeos-muted hover:text-aeos-text hover:bg-white/5 transition-all"
            >
              <X size={12} />
              Discard
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-aeos-blue text-xs font-semibold text-white hover:bg-blue-500 transition-all"
            >
              <Save size={12} />
              Apply Changes
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────

export function BossEditor() {
  const bosses = useAeosStore((s) => s.bosses)

  return (
    <div className="rounded-2xl glass border-aeos-border overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-aeos-border flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-aeos-red/15 border border-aeos-red/30 flex items-center justify-center">
          <Swords size={15} className="text-aeos-red" />
        </div>
        <div>
          <h2 className="text-sm font-bold text-aeos-text">Edit Boss Projects</h2>
          <p className="text-[11px] text-aeos-muted">
            Click any boss to expand and edit. HP bars update live across Mission Control.
          </p>
        </div>
      </div>

      {/* Boss rows */}
      <div className="p-4 space-y-2">
        {bosses.map((boss) => (
          <BossEditorRow key={boss.id} boss={boss} />
        ))}
      </div>
    </div>
  )
}
