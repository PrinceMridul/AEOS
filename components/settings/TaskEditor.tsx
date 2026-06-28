'use client'

import { useState } from 'react'
import { useAeosStore } from '@/lib/store'
import { Task, TaskType, TaskStatus } from '@/lib/mockData'
import { ListTodo, Plus, Trash2, CheckCircle2, Circle, Zap, Calendar, X } from 'lucide-react'
import clsx from 'clsx'

const TASK_TYPE_COLORS: Record<TaskType, { text: string; bg: string; border: string }> = {
  Main: { text: '#0A84FF', bg: '#0A84FF15', border: '#0A84FF40' },
  Side: { text: '#BF5AF2', bg: '#BF5AF215', border: '#BF5AF240' },
  Daily: { text: '#FF9F0A', bg: '#FF9F0A15', border: '#FF9F0A40' },
}

// ─── Add Task Form ────────────────────────────────────────────

function AddTaskForm({ onClose }: { onClose: () => void }) {
  const addTask = useAeosStore((s) => s.addTask)
  const bosses = useAeosStore((s) => s.bosses)

  const today = new Date().toISOString().split('T')[0]

  const [title, setTitle] = useState('')
  const [type, setType] = useState<TaskType>('Side')
  const [xpReward, setXpReward] = useState(75)
  const [bossId, setBossId] = useState<string | null>(null)
  const [date, setDate] = useState(today)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    addTask({
      title: title.trim(),
      type,
      status: 'todo',
      xpReward: Math.max(5, xpReward),
      bossId: bossId || null,
      date,
    })
    onClose()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl bg-[#0D0D0F] border border-aeos-blue/30 p-4 space-y-3 animate-fade-in"
    >
      <div className="flex items-center justify-between mb-1">
        <p className="text-xs font-bold text-aeos-blue uppercase tracking-wider">New Task</p>
        <button type="button" onClick={onClose} className="text-aeos-muted hover:text-aeos-text">
          <X size={14} />
        </button>
      </div>

      {/* Title */}
      <input
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title..."
        className="w-full bg-[#18181B] border border-aeos-border rounded-lg px-3 py-2 text-sm text-aeos-text placeholder-aeos-muted focus:outline-none focus:border-aeos-blue transition-all"
      />

      <div className="grid grid-cols-2 gap-3">
        {/* Type */}
        <div>
          <label className="block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1">Type</label>
          <div className="flex gap-1">
            {(['Main', 'Side', 'Daily'] as TaskType[]).map((t) => {
              const c = TASK_TYPE_COLORS[t]
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setType(t)}
                  className={clsx('px-2 py-1 rounded-lg text-[10px] font-bold border transition-all')}
                  style={
                    type === t
                      ? { color: c.text, background: c.bg, border: `1px solid ${c.border}` }
                      : { color: '#71717A', background: '#18181B', border: '1px solid #27272A' }
                  }
                >
                  {t}
                </button>
              )
            })}
          </div>
        </div>

        {/* XP Reward */}
        <div>
          <label className="block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1">XP Reward</label>
          <div className="relative">
            <Zap size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-aeos-blue" />
            <input
              type="number"
              min={5}
              max={500}
              value={xpReward}
              onChange={(e) => setXpReward(parseInt(e.target.value) || 50)}
              className="w-full bg-[#18181B] border border-aeos-border rounded-lg pl-7 pr-2 py-2 text-sm text-aeos-blue font-bold focus:outline-none focus:border-aeos-blue transition-all tabular-nums"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Date */}
        <div>
          <label className="block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1">Date</label>
          <div className="relative">
            <Calendar size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-aeos-muted" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-[#18181B] border border-aeos-border rounded-lg pl-7 pr-2 py-2 text-sm text-aeos-text focus:outline-none focus:border-aeos-blue transition-all"
            />
          </div>
        </div>

        {/* Boss */}
        <div>
          <label className="block text-[10px] font-semibold text-aeos-muted uppercase tracking-wider mb-1">Boss (optional)</label>
          <select
            value={bossId ?? ''}
            onChange={(e) => setBossId(e.target.value || null)}
            className="w-full bg-[#18181B] border border-aeos-border rounded-lg px-2 py-2 text-sm text-aeos-text focus:outline-none focus:border-aeos-blue transition-all appearance-none"
          >
            <option value="">None</option>
            {bosses.filter((b) => b.status === 'active').map((b) => (
              <option key={b.id} value={b.id}>
                {b.title.slice(0, 28)}…
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-1">
        <button
          type="submit"
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-aeos-blue text-xs font-semibold text-white hover:bg-blue-500 transition-all"
        >
          <Plus size={12} />
          Add Task
        </button>
      </div>
    </form>
  )
}

// ─── Task Row ────────────────────────────────────────────────

function TaskRow({ task }: { task: Task }) {
  const toggleTask = useAeosStore((s) => s.toggleTask)
  const deleteTask = useAeosStore((s) => s.deleteTask)
  const bosses = useAeosStore((s) => s.bosses)

  const boss = bosses.find((b) => b.id === task.bossId)
  const isDone = task.status === 'done'
  const c = TASK_TYPE_COLORS[task.type]

  return (
    <div
      className={clsx(
        'flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all group',
        isDone ? 'opacity-50 bg-aeos-surface/20 border-aeos-border/40' : 'bg-aeos-surface/50 border-aeos-border'
      )}
    >
      {/* Toggle */}
      <button
        onClick={() => toggleTask(task.id)}
        className="flex-shrink-0 transition-colors"
        title={isDone ? 'Uncheck' : 'Complete'}
      >
        {isDone ? (
          <CheckCircle2 size={16} className="text-aeos-green" />
        ) : (
          <Circle size={16} className="text-aeos-border hover:text-aeos-blue" />
        )}
      </button>

      {/* Type badge */}
      <span
        className="text-[10px] font-bold px-1.5 py-0.5 rounded-md border flex-shrink-0"
        style={{ color: c.text, background: c.bg, border: `1px solid ${c.border}` }}
      >
        {task.type}
      </span>

      {/* Title */}
      <p
        className={clsx(
          'flex-1 text-sm font-medium truncate',
          isDone ? 'line-through text-aeos-muted' : 'text-aeos-text'
        )}
      >
        {task.title}
      </p>

      {/* XP */}
      <div className="flex items-center gap-0.5 flex-shrink-0">
        <Zap size={11} className="text-aeos-blue" />
        <span className="text-xs font-bold text-aeos-blue tabular-nums">+{task.xpReward}</span>
      </div>

      {/* Date */}
      <span className="text-[10px] text-aeos-muted tabular-nums flex-shrink-0">{task.date}</span>

      {/* Delete */}
      <button
        onClick={() => deleteTask(task.id)}
        className="opacity-0 group-hover:opacity-100 w-6 h-6 rounded-lg flex items-center justify-center text-aeos-muted hover:text-aeos-red hover:bg-aeos-red/10 transition-all"
      >
        <Trash2 size={12} />
      </button>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────

export function TaskEditor() {
  const tasks = useAeosStore((s) => s.tasks)
  const [showAddForm, setShowAddForm] = useState(false)

  const today = new Date().toISOString().split('T')[0]
  const todayTasks = tasks.filter((t) => t.date === today)
  const otherTasks = tasks.filter((t) => t.date !== today).slice(0, 10)

  return (
    <div className="rounded-2xl glass border-aeos-border overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-aeos-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-aeos-blue/15 border border-aeos-blue/30 flex items-center justify-center">
            <ListTodo size={15} className="text-aeos-blue" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-aeos-text">Manage Tasks</h2>
            <p className="text-[11px] text-aeos-muted">Add, complete, or remove tasks</p>
          </div>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-aeos-blue/15 border border-aeos-blue/30 text-xs font-semibold text-aeos-blue hover:bg-aeos-blue/25 transition-all"
        >
          <Plus size={13} />
          Add Task
        </button>
      </div>

      <div className="p-4 space-y-4">
        {/* Add form */}
        {showAddForm && (
          <AddTaskForm onClose={() => setShowAddForm(false)} />
        )}

        {/* Today's tasks */}
        {todayTasks.length > 0 && (
          <div>
            <p className="text-[10px] font-bold text-aeos-blue uppercase tracking-widest mb-2">Today</p>
            <div className="space-y-1.5">
              {todayTasks.map((t) => <TaskRow key={t.id} task={t} />)}
            </div>
          </div>
        )}

        {/* Recent other tasks */}
        {otherTasks.length > 0 && (
          <div>
            <p className="text-[10px] font-bold text-aeos-muted uppercase tracking-widest mb-2">Recent</p>
            <div className="space-y-1.5">
              {otherTasks.map((t) => <TaskRow key={t.id} task={t} />)}
            </div>
          </div>
        )}

        {tasks.length === 0 && (
          <p className="text-sm text-aeos-muted text-center py-6">No tasks yet. Add one above.</p>
        )}
      </div>
    </div>
  )
}
