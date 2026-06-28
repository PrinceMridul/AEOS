'use client'

import { Sidebar } from '@/components/layout/Sidebar'
import { ProfileForm } from '@/components/settings/ProfileForm'
import { HabitEditor } from '@/components/settings/HabitEditor'
import { BossEditor } from '@/components/settings/BossEditor'
import { TaskEditor } from '@/components/settings/TaskEditor'
import { Settings2, Info } from 'lucide-react'

export default function SettingsPage() {
  return (
    <>
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden bg-aeos-bg">
        {/* Top bar */}
        <div className="flex items-center justify-between px-8 py-4 border-b border-aeos-border flex-shrink-0">
          <div>
            <h1 className="text-lg font-bold text-aeos-text flex items-center gap-2">
              <Settings2 size={18} className="text-aeos-purple" />
              Profile & Settings
            </h1>
            <p className="text-xs text-aeos-muted mt-0.5">
              Edit your hunter profile, streaks, boss projects, and tasks in real-time.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-aeos-purple/8 border border-aeos-purple/20">
            <Info size={12} className="text-aeos-purple flex-shrink-0" />
            <span className="text-xs text-aeos-purple font-medium">
              All changes propagate instantly
            </span>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8 max-w-4xl mx-auto w-full space-y-6 animate-fade-in">

            {/* ─ Section 1: Profile ─ */}
            <section>
              <SectionLabel number="01" label="Hunter Identity" />
              <ProfileForm />
            </section>

            {/* ─ Section 2: Habits ─ */}
            <section>
              <SectionLabel number="02" label="Habits & Streaks" />
              <HabitEditor />
            </section>

            {/* ─ Section 3: Bosses ─ */}
            <section>
              <SectionLabel number="03" label="Boss Projects" />
              <BossEditor />
            </section>

            {/* ─ Section 4: Tasks ─ */}
            <section>
              <SectionLabel number="04" label="Task Manager" />
              <TaskEditor />
            </section>

          </div>
        </div>
      </main>
    </>
  )
}

// ─── Section Label ────────────────────────────────────────────

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="text-[10px] font-black text-aeos-purple/60 tabular-nums tracking-widest">
        {number}
      </span>
      <div className="flex-1 h-px bg-aeos-border" />
      <span className="text-[10px] font-bold text-aeos-muted uppercase tracking-widest">
        {label}
      </span>
      <div className="flex-1 h-px bg-aeos-border" />
    </div>
  )
}
