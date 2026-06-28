'use client'

import { useState } from 'react'
import { useAeosStore } from '@/lib/store'
import { KnowledgeCategory } from '@/lib/mockData'
import { X, Plus, Link2, Tag, BookOpen, AlertCircle } from 'lucide-react'
import clsx from 'clsx'

const CATEGORIES: KnowledgeCategory[] = [
  'Paper',
  'Course',
  'Tool',
  'Documentation',
  'Video',
  'Book',
]

interface AddEntryModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AddEntryModal({ isOpen, onClose }: AddEntryModalProps) {
  const addKnowledgeItem = useAeosStore((s) => s.addKnowledgeItem)

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState<KnowledgeCategory>('Paper')
  const [url, setUrl] = useState('')
  const [tagsInput, setTagsInput] = useState('')
  const [error, setError] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!title.trim()) {
      setError('Title is required.')
      return
    }
    if (!url.trim()) {
      setError('URL is required.')
      return
    }

    // Basic URL validation
    try {
      new URL(url.trim())
    } catch {
      setError('Please enter a valid URL (include https://).')
      return
    }

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim().toLowerCase())
      .filter((t) => t.length > 0)

    addKnowledgeItem({
      title: title.trim(),
      category,
      url: url.trim(),
      tags,
    })

    // Reset form
    setTitle('')
    setCategory('Paper')
    setUrl('')
    setTagsInput('')
    onClose()
  }

  return (
    /* Overlay */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center modal-overlay animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Modal */}
      <div className="w-full max-w-lg mx-4 rounded-2xl overflow-hidden animate-scale-in glass border border-aeos-border shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-aeos-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-aeos-blue/15 border border-aeos-blue/30 flex items-center justify-center">
              <BookOpen size={15} className="text-aeos-blue" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-aeos-text">Add to Knowledge Vault</h2>
              <p className="text-[11px] text-aeos-muted">Save a resource to your vault</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg hover:bg-aeos-border/60 flex items-center justify-center transition-colors text-aeos-muted hover:text-aeos-text"
          >
            <X size={15} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          {/* Title */}
          <div>
            <label className="block text-xs font-semibold text-aeos-subtext uppercase tracking-wider mb-1.5">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Attention Is All You Need"
              className="w-full bg-[#0D0D0F] border border-aeos-border rounded-xl px-4 py-2.5 text-sm text-aeos-text placeholder-aeos-muted focus:outline-none focus:border-aeos-blue focus:ring-1 focus:ring-aeos-blue/30 transition-all"
              autoFocus
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-semibold text-aeos-subtext uppercase tracking-wider mb-1.5">
              Category
            </label>
            <div className="grid grid-cols-3 gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={clsx(
                    'px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-150 border',
                    category === cat
                      ? 'bg-aeos-blue/15 border-aeos-blue/40 text-aeos-blue'
                      : 'bg-[#0D0D0F] border-aeos-border text-aeos-muted hover:border-aeos-blue/30 hover:text-aeos-subtext'
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* URL */}
          <div>
            <label className="block text-xs font-semibold text-aeos-subtext uppercase tracking-wider mb-1.5">
              URL
            </label>
            <div className="relative">
              <Link2 size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-aeos-muted" />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://arxiv.org/abs/..."
                className="w-full bg-[#0D0D0F] border border-aeos-border rounded-xl pl-9 pr-4 py-2.5 text-sm text-aeos-text placeholder-aeos-muted focus:outline-none focus:border-aeos-blue focus:ring-1 focus:ring-aeos-blue/30 transition-all"
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-xs font-semibold text-aeos-subtext uppercase tracking-wider mb-1.5">
              Tags
              <span className="text-aeos-muted font-normal normal-case tracking-normal ml-1">(comma separated)</span>
            </label>
            <div className="relative">
              <Tag size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-aeos-muted" />
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="transformers, attention, NLP"
                className="w-full bg-[#0D0D0F] border border-aeos-border rounded-xl pl-9 pr-4 py-2.5 text-sm text-aeos-text placeholder-aeos-muted focus:outline-none focus:border-aeos-blue focus:ring-1 focus:ring-aeos-blue/30 transition-all"
              />
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="flex items-center gap-2 bg-aeos-red/10 border border-aeos-red/30 rounded-xl px-3 py-2.5">
              <AlertCircle size={14} className="text-aeos-red flex-shrink-0" />
              <p className="text-xs text-aeos-red">{error}</p>
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 rounded-xl border border-aeos-border text-sm font-semibold text-aeos-muted hover:text-aeos-text hover:bg-white/5 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 rounded-xl bg-aeos-blue text-sm font-semibold text-white hover:bg-blue-500 transition-all shadow-lg shadow-aeos-blue/20 flex items-center justify-center gap-2"
            >
              <Plus size={15} />
              Add to Vault
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
