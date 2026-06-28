'use client'

import { useState } from 'react'
import { useAeosStore } from '@/lib/store'
import { KnowledgeItem, KnowledgeCategory } from '@/lib/mockData'
import { AddEntryModal } from './AddEntryModal'
import {
  Plus,
  ExternalLink,
  Trash2,
  Search,
  Filter,
  BookOpen,
  FileText,
  GraduationCap,
  Wrench,
  Video,
  BookMarked,
  Database,
} from 'lucide-react'
import clsx from 'clsx'

// ─── Category Config ──────────────────────────────────────────

const CATEGORY_CONFIG: Record<
  KnowledgeCategory,
  { icon: React.ElementType; color: string; bg: string; border: string }
> = {
  Paper: { icon: FileText, color: '#FF9F0A', bg: '#FF9F0A15', border: '#FF9F0A40' },
  Course: { icon: GraduationCap, color: '#0A84FF', bg: '#0A84FF15', border: '#0A84FF40' },
  Tool: { icon: Wrench, color: '#30D158', bg: '#30D15815', border: '#30D15840' },
  Documentation: { icon: BookOpen, color: '#BF5AF2', bg: '#BF5AF215', border: '#BF5AF240' },
  Video: { icon: Video, color: '#FF3B30', bg: '#FF3B3015', border: '#FF3B3040' },
  Book: { icon: BookMarked, color: '#64D2FF', bg: '#64D2FF15', border: '#64D2FF40' },
}

const ALL_CATEGORIES: (KnowledgeCategory | 'All')[] = [
  'All',
  'Paper',
  'Course',
  'Tool',
  'Documentation',
  'Video',
  'Book',
]

// ─── Category Badge ───────────────────────────────────────────

function CategoryBadge({ category }: { category: KnowledgeCategory }) {
  const config = CATEGORY_CONFIG[category]
  const Icon = config.icon

  return (
    <span
      className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-2 py-1 rounded-lg whitespace-nowrap"
      style={{ color: config.color, background: config.bg, border: `1px solid ${config.border}` }}
    >
      <Icon size={10} />
      {category}
    </span>
  )
}

// ─── Main Component ───────────────────────────────────────────

export function KnowledgeTable() {
  const knowledgeItems = useAeosStore((s) => s.knowledgeItems)
  const deleteKnowledgeItem = useAeosStore((s) => s.deleteKnowledgeItem)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState<KnowledgeCategory | 'All'>('All')

  // Filter logic
  const filtered = knowledgeItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = activeFilter === 'All' || item.category === activeFilter
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <AddEntryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="flex flex-col gap-5 animate-fade-in">
        {/* Toolbar */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Search */}
          <div className="relative flex-1 min-w-[200px]">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-aeos-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search entries and tags..."
              className="w-full bg-aeos-surface border border-aeos-border rounded-xl pl-9 pr-4 py-2.5 text-sm text-aeos-text placeholder-aeos-muted focus:outline-none focus:border-aeos-blue focus:ring-1 focus:ring-aeos-blue/30 transition-all"
            />
          </div>

          {/* Add button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2.5 bg-aeos-blue rounded-xl text-sm font-semibold text-white hover:bg-blue-500 transition-all shadow-lg shadow-aeos-blue/20 flex-shrink-0"
          >
            <Plus size={15} />
            Add Entry
          </button>
        </div>

        {/* Category filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <Filter size={13} className="text-aeos-muted flex-shrink-0" />
          {ALL_CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat
            const config = cat !== 'All' ? CATEGORY_CONFIG[cat] : null

            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat as KnowledgeCategory | 'All')}
                className={clsx(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-150 whitespace-nowrap border flex-shrink-0',
                  isActive
                    ? cat === 'All'
                      ? 'bg-aeos-blue/15 border-aeos-blue/40 text-aeos-blue'
                      : ''
                    : 'bg-[#18181B] border-aeos-border text-aeos-muted hover:text-aeos-subtext'
                )}
                style={
                  isActive && config
                    ? {
                        color: config.color,
                        background: config.bg,
                        border: `1px solid ${config.border}`,
                      }
                    : undefined
                }
              >
                {cat !== 'All' && config && (
                  <config.icon size={11} />
                )}
                {cat === 'All' && <Database size={11} />}
                {cat}
                <span className="ml-1 opacity-60">
                  {cat === 'All'
                    ? knowledgeItems.length
                    : knowledgeItems.filter((i) => i.category === cat).length}
                </span>
              </button>
            )
          })}
        </div>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden border border-aeos-border">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <BookOpen size={32} className="text-aeos-muted mb-3 opacity-40" />
              <p className="text-sm font-semibold text-aeos-muted">No entries found</p>
              <p className="text-xs text-aeos-muted/60 mt-1">
                {searchQuery ? 'Try a different search term.' : 'Click "Add Entry" to begin.'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="aeos-table">
                <thead>
                  <tr className="bg-aeos-surface">
                    <th className="text-left">Title</th>
                    <th className="text-left">Category</th>
                    <th className="text-left">Tags</th>
                    <th className="text-left">Added</th>
                    <th className="text-left">Link</th>
                    <th className="text-left w-12"></th>
                  </tr>
                </thead>
                <tbody className="bg-aeos-bg">
                  {filtered.map((item, index) => (
                    <KnowledgeRow
                      key={item.id}
                      item={item}
                      index={index}
                      onDelete={() => deleteKnowledgeItem(item.id)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Count footer */}
        <p className="text-xs text-aeos-muted text-right">
          Showing{' '}
          <span className="text-aeos-subtext font-medium">{filtered.length}</span> of{' '}
          <span className="text-aeos-subtext font-medium">{knowledgeItems.length}</span> entries
        </p>
      </div>
    </>
  )
}

// ─── Table Row ────────────────────────────────────────────────

interface KnowledgeRowProps {
  item: KnowledgeItem
  index: number
  onDelete: () => void
}

function KnowledgeRow({ item, index, onDelete }: KnowledgeRowProps) {
  const [showDelete, setShowDelete] = useState(false)

  const dateStr = new Date(item.dateAdded).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <tr
      className="animate-fade-in group"
      style={{ animationDelay: `${index * 40}ms` }}
      onMouseEnter={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
    >
      {/* Title */}
      <td className="max-w-[260px]">
        <p className="text-sm font-medium text-aeos-text truncate leading-snug" title={item.title}>
          {item.title}
        </p>
      </td>

      {/* Category */}
      <td>
        <CategoryBadge category={item.category} />
      </td>

      {/* Tags */}
      <td>
        <div className="flex flex-wrap gap-1 max-w-[200px]">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#27272A] text-aeos-muted border border-aeos-border"
            >
              {tag}
            </span>
          ))}
          {item.tags.length > 3 && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#27272A] text-aeos-muted border border-aeos-border">
              +{item.tags.length - 3}
            </span>
          )}
        </div>
      </td>

      {/* Date */}
      <td>
        <span className="text-xs text-aeos-muted tabular-nums">{dateStr}</span>
      </td>

      {/* URL */}
      <td>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-aeos-blue hover:text-blue-400 transition-colors font-medium"
        >
          <ExternalLink size={12} />
          Open
        </a>
      </td>

      {/* Delete */}
      <td>
        <button
          onClick={onDelete}
          className={clsx(
            'w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-150',
            showDelete
              ? 'text-aeos-red bg-aeos-red/10 border border-aeos-red/30 opacity-100'
              : 'opacity-0 text-aeos-muted'
          )}
          title="Delete entry"
        >
          <Trash2 size={13} />
        </button>
      </td>
    </tr>
  )
}
