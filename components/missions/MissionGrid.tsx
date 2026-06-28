'use client'

import { useAeosStore } from '@/lib/store'
import { BossCard } from './BossCard'
import { Swords, Shield, Trophy } from 'lucide-react'

export function MissionGrid() {
  const bosses = useAeosStore((s) => s.bosses)

  const activeBosses = bosses.filter((b) => b.status === 'active')
  const defeatedBosses = bosses.filter((b) => b.status === 'defeated')

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Active Bosses */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Swords size={16} className="text-aeos-red" />
          <h2 className="text-sm font-bold text-aeos-text uppercase tracking-wider">
            Active Bosses
          </h2>
          <span className="text-xs bg-aeos-red/15 text-aeos-red border border-aeos-red/30 rounded-full px-2 py-0.5 font-semibold">
            {activeBosses.length}
          </span>
        </div>

        {activeBosses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {activeBosses.map((boss, i) => (
              <BossCard key={boss.id} boss={boss} index={i} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-aeos-border p-8 text-center">
            <Trophy size={32} className="text-aeos-muted mx-auto mb-2 opacity-40" />
            <p className="text-aeos-muted text-sm">All bosses defeated. You are a legend.</p>
          </div>
        )}
      </div>

      {/* Defeated Bosses */}
      {defeatedBosses.length > 0 && (
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Shield size={16} className="text-aeos-green" />
            <h2 className="text-sm font-bold text-aeos-muted uppercase tracking-wider">
              Defeated
            </h2>
            <span className="text-xs bg-aeos-green/10 text-aeos-green border border-aeos-green/20 rounded-full px-2 py-0.5 font-semibold">
              {defeatedBosses.length}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {defeatedBosses.map((boss, i) => (
              <BossCard key={boss.id} boss={boss} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
