'use client'

import { useAeosStore } from '@/lib/store'
import clsx from 'clsx'
import { CheckCircle2, Circle, Sword, Shield, Zap, ChevronRight, Lock } from 'lucide-react'
import { Task } from '@/lib/mockData'

// ─── Individual Task Card ─────────────────────────────────────

interface TaskCardProps {
  task: Task
  isMain?: boolean
  index?: number
}

function TaskCard({ task, isMain = false, index = 0 }: TaskCardProps) {
  const completeTask = useAeosStore((s) => s.completeTask)
  const uncompleteTask = useAeosStore((s) => s.uncompleteTask)
  const bosses = useAeosStore((s) => s.bosses)

  const isDone = task.status === 'done'
  const boss = bosses.find((b) => b.id === task.bossId)

  const handleToggle = () => {
    if (isDone) {
      uncompleteTask(task.id)
    } else {
      completeTask(task.id)
    }
  }

  const typeConfig = {
    Main: { icon: Sword, color: '#0A84FF', label: 'MAIN QUEST', bg: 'rgba(10,132,255,0.08)', border: 'rgba(10,132,255,0.25)' },
    Side: { icon: Shield, color: '#BF5AF2', label: 'SIDE QUEST', bg: 'rgba(191,90,242,0.06)', border: 'rgba(191,90,242,0.20)' },
    Daily: { icon: Zap, color: '#FF9F0A', label: 'DAILY', bg: 'rgba(255,159,10,0.06)', border: 'rgba(255,159,10,0.20)' },
  }

  const config = typeConfig[task.type]
  const Icon = config.icon

  return (
    <div
      className={clsx(
        'rounded-2xl p-5 transition-all duration-300 animate-fade-in group',
        isDone && 'opacity-60',
        'hover:scale-[1.01] cursor-default'
      )}
      style={{
        background: isDone ? 'rgba(24,24,27,0.4)' : config.bg,
        border: `1px solid ${isDone ? '#27272A' : config.border}`,
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex items-start gap-4">
        {/* Checkbox */}
        <button
          onClick={handleToggle}
          className={clsx(
            'mt-0.5 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300',
            isDone
              ? 'bg-aeos-green border-aeos-green'
              : 'border-aeos-border hover:border-aeos-blue hover:bg-aeos-blue/10'
          )}
          title={isDone ? 'Mark as incomplete' : 'Complete task'}
        >
          {isDone ? (
            <CheckCircle2 size={14} className="text-white fill-aeos-green" />
          ) : (
            <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-aeos-blue/40 transition-colors" />
          )}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <Icon size={12} style={{ color: config.color }} />
            <span
              className="text-[10px] font-bold tracking-widest uppercase"
              style={{ color: config.color }}
            >
              {config.label}
            </span>
            {isMain && (
              <span className="ml-auto text-[10px] bg-aeos-blue/15 text-aeos-blue border border-aeos-blue/30 px-2 py-0.5 rounded-full font-semibold">
                Priority
              </span>
            )}
          </div>

          <p
            className={clsx(
              'text-sm font-semibold text-aeos-text leading-snug',
              isDone && 'line-through text-aeos-muted'
            )}
          >
            {task.title}
          </p>

          {/* Boss link & XP reward */}
          <div className="flex items-center justify-between mt-2.5">
            {boss && (
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-aeos-red" />
                <span className="text-[11px] text-aeos-muted truncate max-w-[180px]">
                  {boss.title}
                </span>
              </div>
            )}
            <div className="ml-auto flex items-center gap-1">
              <Zap size={11} className="text-aeos-blue" />
              <span className="text-xs font-bold text-aeos-blue">+{task.xpReward} XP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Empty State ─────────────────────────────────────────────

function EmptySlot({ label }: { label: string }) {
  return (
    <div className="rounded-2xl p-5 border border-dashed border-aeos-border/40 flex items-center gap-3 opacity-40">
      <Lock size={16} className="text-aeos-muted" />
      <span className="text-sm text-aeos-muted">{label}</span>
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────

export function TodaysMissions() {
  const getTodaysTasks = useAeosStore((s) => s.getTodaysTasks)
  const todayTasks = getTodaysTasks()

  const mainQuest = todayTasks.find((t) => t.type === 'Main')
  const sideQuests = todayTasks.filter((t) => t.type === 'Side').slice(0, 2)

  const completedToday = todayTasks.filter((t) => t.status === 'done').length
  const totalToday = todayTasks.length

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="flex flex-col gap-4 animate-fade-in">
      {/* Section header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-bold text-aeos-text flex items-center gap-2">
            <Sword size={16} className="text-aeos-blue" />
            Today's Missions
          </h2>
          <p className="text-xs text-aeos-muted mt-0.5">{today}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-20 rounded-full bg-[#27272A] overflow-hidden">
            <div
              className="h-full rounded-full bg-aeos-blue transition-all duration-500"
              style={{ width: `${totalToday > 0 ? (completedToday / totalToday) * 100 : 0}%` }}
            />
          </div>
          <span className="text-xs text-aeos-muted font-medium">
            {completedToday}/{totalToday}
          </span>
        </div>
      </div>

      {/* Main Quest */}
      <div>
        <p className="text-[10px] font-bold text-aeos-muted uppercase tracking-widest mb-2 px-1">
          ◆ Main Quest
        </p>
        {mainQuest ? (
          <TaskCard task={mainQuest} isMain index={0} />
        ) : (
          <EmptySlot label="No main quest assigned today" />
        )}
      </div>

      {/* Side Quests */}
      <div>
        <p className="text-[10px] font-bold text-aeos-muted uppercase tracking-widest mb-2 px-1">
          ◇ Side Quests
        </p>
        <div className="space-y-2">
          {sideQuests.length > 0 ? (
            sideQuests.map((task, i) => (
              <TaskCard key={task.id} task={task} index={i + 1} />
            ))
          ) : (
            <EmptySlot label="No side quests for today" />
          )}
          {sideQuests.length < 2 && sideQuests.length > 0 && (
            <EmptySlot label="Side quest slot open" />
          )}
        </div>
      </div>
    </div>
  )
}
