# AEOS — AI Engineer Operating System

> A gamified productivity web application. "Apple meets Solo Leveling."

## Quick Start

### Prerequisites
- Node.js 18+ (install from https://nodejs.org)
- npm 9+

### Setup

```bash
# 1. Navigate to the project
cd C:\Users\princ\.gemini\antigravity\scratch\aeos

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Then open **http://localhost:3000** in your browser.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + Custom CSS |
| State | Zustand + Immer |
| Icons | Lucide React |
| Fonts | Inter (Google Fonts) |

## Project Structure

```
aeos/
├── app/
│   ├── layout.tsx          # Root layout (dark mode, fonts)
│   ├── globals.css         # Design tokens, animations
│   ├── page.tsx            # Home — The Cockpit
│   ├── missions/
│   │   └── page.tsx        # Mission Control — Boss Battles
│   └── vault/
│       └── page.tsx        # Knowledge Vault
├── components/
│   ├── layout/
│   │   └── Sidebar.tsx     # Navigation sidebar
│   ├── cockpit/
│   │   ├── XPHeader.tsx    # Rank + Level + XP bar
│   │   ├── TodaysMissions.tsx  # Today's tasks (Main + Side)
│   │   └── NonNegotiables.tsx  # Daily habits tracker
│   ├── missions/
│   │   ├── BossCard.tsx    # Individual boss project card
│   │   └── MissionGrid.tsx # Boss grid layout
│   ├── vault/
│   │   ├── KnowledgeTable.tsx  # Main table + filters
│   │   └── AddEntryModal.tsx   # Glassmorphic add modal
│   └── ui/
│       ├── RankBadge.tsx   # Player (E-S) + Boss (E-SSS) badges
│       ├── HPBar.tsx       # Red boss HP bar
│       └── XPBar.tsx       # Blue XP progress bar
└── lib/
    ├── gamification.ts     # Level/rank/XP math formulas
    ├── mockData.ts         # Seed data (types + initial state)
    └── store.ts            # Zustand global store
```

## Gamification Formulas

```
Level = Math.floor(sqrt(LifetimeXP / 100)) + 1
Boss HP% = ((totalTasks - completedTasks) / totalTasks) * 100

Rank Thresholds:
  Level 1-4  → E-Rank
  Level 5-9  → D-Rank  
  Level 10-19 → C-Rank
  Level 20-29 → B-Rank
  Level 30-39 → A-Rank
  Level 40+   → S-Rank

Boss Ranks: E → D → C → B → A → S → SS → SSS
```

## Features

- ✅ **The Cockpit** — Today's main quest + side quests + non-negotiables
- ✅ **Mission Control** — Boss project cards with live HP bars
- ✅ **Knowledge Vault** — Searchable/filterable table with add modal
- ✅ **XP Cascade** — Completing a task instantly updates XP → Level → Rank → Boss HP
- ✅ **Streak Tracker** — Daily habits with streak counter and flame indicator
- ✅ **Glassmorphism** — Dark glass panels throughout
- ✅ **Animations** — Shimmer XP bars, HP pulse at low health, stagger reveals
