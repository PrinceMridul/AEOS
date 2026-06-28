'use client'

import { Sidebar } from '@/components/layout/Sidebar'
import { KnowledgeTable } from '@/components/vault/KnowledgeTable'
import { BookMarked, Layers } from 'lucide-react'
import { useAeosStore } from '@/lib/store'

export default function VaultPage() {
  const count = useAeosStore((s) => s.knowledgeItems.length)

  return (
    <>
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden bg-aeos-bg">
        {/* Top bar */}
        <div className="flex items-center justify-between px-8 py-4 border-b border-aeos-border flex-shrink-0">
          <div>
            <h1 className="text-lg font-bold text-aeos-text flex items-center gap-2">
              <BookMarked size={18} className="text-aeos-purple" />
              Knowledge Vault
            </h1>
            <p className="text-xs text-aeos-muted mt-0.5">
              Your curated library of papers, courses, tools, and resources.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-aeos-purple/8 border border-aeos-purple/20">
            <Layers size={12} className="text-aeos-purple flex-shrink-0" />
            <span className="text-xs text-aeos-purple font-semibold">{count} entries</span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8 max-w-7xl mx-auto w-full">
            <KnowledgeTable />
          </div>
        </div>
      </main>
    </>
  )
}
