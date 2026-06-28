// ============================================================
// AEOS Gamification Math Engine
// ============================================================

export type PlayerRank = 'E' | 'D' | 'C' | 'B' | 'A' | 'S'
export type BossRank = 'E' | 'D' | 'C' | 'B' | 'A' | 'S' | 'SS' | 'SSS'

/**
 * Level Formula: Math.floor(sqrt(LifetimeXP / 100)) + 1
 */
export function calcLevel(lifetimeXp: number): number {
  return Math.floor(Math.sqrt(lifetimeXp / 100)) + 1
}

/**
 * XP required to START a given level (inverse of calcLevel)
 * Level N starts at XP = (N-1)^2 * 100
 */
export function xpForLevel(level: number): number {
  return (level - 1) * (level - 1) * 100
}

/**
 * XP progress within the current level (0 to 1 float)
 */
export function xpProgress(lifetimeXp: number): number {
  const level = calcLevel(lifetimeXp)
  const currentLevelStart = xpForLevel(level)
  const nextLevelStart = xpForLevel(level + 1)
  const progress = (lifetimeXp - currentLevelStart) / (nextLevelStart - currentLevelStart)
  return Math.min(Math.max(progress, 0), 1)
}

/**
 * XP needed to reach the next level from current XP
 */
export function xpToNextLevel(lifetimeXp: number): number {
  const level = calcLevel(lifetimeXp)
  return xpForLevel(level + 1) - lifetimeXp
}

/**
 * Player Rank based on level
 * Level 1-4 → E, 5-9 → D, 10-19 → C, 20-29 → B, 30-39 → A, 40+ → S
 */
export function calcRank(level: number): PlayerRank {
  if (level >= 40) return 'S'
  if (level >= 30) return 'A'
  if (level >= 20) return 'B'
  if (level >= 10) return 'C'
  if (level >= 5) return 'D'
  return 'E'
}

/**
 * Boss HP percentage (remaining)
 * HP% = ((totalTasks - completedTasks) / totalTasks) * 100
 */
export function calcBossHP(totalTasks: number, completedTasks: number): number {
  if (totalTasks === 0) return 0
  return Math.max(0, ((totalTasks - completedTasks) / totalTasks) * 100)
}

/**
 * Boss HP color based on percentage
 */
export function bossHPColor(hp: number): string {
  if (hp > 60) return '#FF3B30'   // danger red
  if (hp > 30) return '#FF9F0A'   // orange
  return '#30D158'                  // green (almost dead)
}

/**
 * Rank color mapping for player ranks
 */
export const RANK_COLORS: Record<PlayerRank, { text: string; bg: string; border: string; glow: string }> = {
  E: { text: '#A1A1AA', bg: '#27272A', border: '#3F3F46', glow: 'transparent' },
  D: { text: '#30D158', bg: '#30D15815', border: '#30D15840', glow: '#30D15830' },
  C: { text: '#0A84FF', bg: '#0A84FF15', border: '#0A84FF40', glow: '#0A84FF30' },
  B: { text: '#BF5AF2', bg: '#BF5AF215', border: '#BF5AF240', glow: '#BF5AF230' },
  A: { text: '#FF9F0A', bg: '#FF9F0A15', border: '#FF9F0A40', glow: '#FF9F0A30' },
  S: { text: '#FFD60A', bg: '#FFD60A15', border: '#FFD60A40', glow: '#FFD60A60' },
}

/**
 * Boss Rank color mapping (E through SSS)
 */
export const BOSS_RANK_COLORS: Record<BossRank, { text: string; bg: string; border: string }> = {
  E: { text: '#A1A1AA', bg: '#27272A', border: '#3F3F46' },
  D: { text: '#30D158', bg: '#30D15815', border: '#30D15840' },
  C: { text: '#0A84FF', bg: '#0A84FF15', border: '#0A84FF40' },
  B: { text: '#BF5AF2', bg: '#BF5AF215', border: '#BF5AF240' },
  A: { text: '#FF9F0A', bg: '#FF9F0A15', border: '#FF9F0A40' },
  S: { text: '#FFD60A', bg: '#FFD60A15', border: '#FFD60A40' },
  SS: { text: '#FF6B6B', bg: '#FF6B6B15', border: '#FF6B6B40' },
  SSS: { text: '#FF3B30', bg: '#FF3B3015', border: '#FF3B3060' },
}

/**
 * Format XP number with commas
 */
export function formatXP(xp: number): string {
  return xp.toLocaleString()
}
