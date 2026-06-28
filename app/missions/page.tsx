'use client'

import { Sidebar } from '@/components/layout/Sidebar'
import { MissionGrid } from '@/components/missions/MissionGrid'
import { Swords, Info } from 'lucide-react'

export default function MissionsPage() {
  return (
    <>
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden bg-aeos-bg">
        {/* Top bar */}
        <div className="flex items-center justify-between px-8 py-4 border-b border-aeos-border flex-shrink-0">
          <div>
            <h1 className="text-lg font-bold text-aeos-text flex items-center gap-2">
              <Swords size={18} className="text-aeos-red" />
              Mission Control
            </h1>
            <p className="text-xs text-aeos-muted mt-0.5">
              Engage your boss projects. Every completed task deals damage to boss HP.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-aeos-red/8 border border-aeos-red/20">
            <Info size={12} className="text-aeos-red flex-shrink-0" />
            <span className="text-xs text-aeos-red font-medium">
              HP = Remaining Tasks / Total Tasks
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8 max-w-7xl mx-auto w-full">
            <MissionGrid />
          </div>
        </div>
      </main>
    </>
  )
}
