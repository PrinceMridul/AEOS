'use client'

import { Sidebar } from '@/components/layout/Sidebar'
import { XPHeader } from '@/components/cockpit/XPHeader'
import { TodaysMissions } from '@/components/cockpit/TodaysMissions'
import { NonNegotiables } from '@/components/cockpit/NonNegotiables'
import { Activity } from 'lucide-react'

export default function CockpitPage() {
  const now = new Date()
  const hour = now.getHours()
  const greeting =
    hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'

  return (
    <>
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden bg-aeos-bg">
        {/* Top bar */}
        <div className="flex items-center justify-between px-8 py-4 border-b border-aeos-border flex-shrink-0">
          <div>
            <h1 className="text-lg font-bold text-aeos-text">{greeting}, Hunter</h1>
            <p className="text-xs text-aeos-muted flex items-center gap-1.5 mt-0.5">
              <Activity size={11} className="text-aeos-green" />
              Systems online · All modules active
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-aeos-muted uppercase tracking-wider font-medium">
              {now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-xs text-aeos-blue font-semibold">
              {now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-auto">
          <div className="p-8 space-y-6 max-w-7xl mx-auto w-full">
            {/* XP Header — full width */}
            <XPHeader />

            {/* Two-column: Missions + Non-Negotiables */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-6">
              <TodaysMissions />
              <NonNegotiables />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
