'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Swords,
  BookMarked,
  Cpu,
  ChevronRight,
  Settings2,
} from 'lucide-react'
import clsx from 'clsx'
import { useAeosStore } from '@/lib/store'
import { calcLevel, calcRank, xpProgress, RANK_COLORS, formatXP } from '@/lib/gamification'
import { RankBadge } from '@/components/ui/RankBadge'

const NAV_ITEMS = [
  {
    href: '/',
    label: 'The Cockpit',
    sublabel: 'Home',
    icon: LayoutDashboard,
  },
  {
    href: '/missions',
    label: 'Mission Control',
    sublabel: 'Boss Battles',
    icon: Swords,
  },
  {
    href: '/vault',
    label: 'Knowledge Vault',
    sublabel: 'Research',
    icon: BookMarked,
  },
  {
    href: '/settings',
    label: 'Profile & Settings',
    sublabel: 'Edit Everything',
    icon: Settings2,
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const userProfile = useAeosStore((s) => s.userProfile)
  const { name, title, lifetimeXp } = userProfile

  const level = calcLevel(lifetimeXp)
  const rank = calcRank(level)
  const progress = xpProgress(lifetimeXp)
  const colors = RANK_COLORS[rank]

  return (
    <aside className="w-64 flex-shrink-0 flex flex-col h-screen glass border-r border-aeos-border relative z-10">
      {/* ── Logo / Brand ── */}
      <div className="px-6 py-6 border-b border-aeos-border">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-aeos-blue flex items-center justify-center shadow-lg shadow-aeos-blue/30">
            <Cpu size={18} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-black tracking-[0.15em] text-aeos-text uppercase">
              AEOS
            </h1>
            <p className="text-[10px] text-aeos-muted font-medium tracking-widest uppercase">
              AI Engineer OS
            </p>
          </div>
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <p className="text-[10px] font-semibold text-aeos-muted uppercase tracking-widest px-3 pb-2 pt-1">
          Navigation
        </p>
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          const isSettings = item.href === '/settings'

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative overflow-hidden',
                isActive
                  ? isSettings
                    ? 'bg-aeos-purple/10 text-aeos-purple border border-aeos-purple/20'
                    : 'bg-aeos-blue/10 text-aeos-blue border border-aeos-blue/20'
                  : 'text-aeos-subtext hover:text-aeos-text hover:bg-white/5 border border-transparent'
              )}
            >
              {/* Active indicator line */}
              {isActive && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-6 rounded-r-full"
                  style={{ background: isSettings ? '#BF5AF2' : '#0A84FF' }}
                />
              )}

              <Icon
                size={17}
                className={clsx(
                  'flex-shrink-0 transition-colors',
                  isActive
                    ? isSettings
                      ? 'text-aeos-purple'
                      : 'text-aeos-blue'
                    : 'text-aeos-muted group-hover:text-aeos-subtext'
                )}
              />

              <div className="flex-1 min-w-0">
                <p
                  className={clsx(
                    'text-sm font-medium leading-tight truncate',
                    isActive && (isSettings ? 'text-aeos-purple' : 'text-aeos-blue')
                  )}
                >
                  {item.label}
                </p>
                <p className="text-[10px] text-aeos-muted leading-tight">{item.sublabel}</p>
              </div>

              {isActive && (
                <ChevronRight
                  size={13}
                  className={clsx(
                    'flex-shrink-0',
                    isSettings ? 'text-aeos-purple/60' : 'text-aeos-blue/60'
                  )}
                />
              )}
            </Link>
          )
        })}
      </nav>

      {/* ── User Profile Card ── */}
      <div className="px-3 pb-4">
        <Link href="/settings" className="block">
          <div
            className="rounded-2xl p-4 space-y-3 transition-all duration-200 hover:brightness-110"
            style={{
              background: `linear-gradient(135deg, ${colors.bg}80, rgba(24,24,27,0.8))`,
              border: `1px solid ${colors.border}`,
            }}
          >
            {/* Header row */}
            <div className="flex items-center justify-between">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-aeos-text truncate max-w-[100px]">{name}</p>
                <p className="text-[10px] text-aeos-muted mt-0.5 truncate max-w-[110px]">{title}</p>
              </div>
              <RankBadge rank={rank} size="lg" />
            </div>

            {/* XP Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-aeos-muted uppercase tracking-wider">XP Progress</span>
                <span className="text-[10px]" style={{ color: colors.text }}>
                  Lv. {level}
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-[#27272A] overflow-hidden">
                <div
                  className="xp-bar-fill h-full rounded-full"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
              <p className="text-[10px] text-aeos-muted text-right">
                {formatXP(lifetimeXp)} XP
              </p>
            </div>
          </div>
        </Link>
      </div>
    </aside>
  )
}
