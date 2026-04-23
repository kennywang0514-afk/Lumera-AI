# Lumera AI — JAMB Mathematics Preparation

Adaptive exam preparation for JAMB Mathematics. Built with Next.js 14, React, TypeScript, and Tailwind CSS.

---

## Quick Start

```bash
# 1. Navigate into the project
cd lumera-ai

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in your browser
open http://localhost:3000
```

No environment variables, no database, no authentication required. Everything runs locally.

---

## App Flow

```
/ (Landing)
  └── /subjects          → Select Mathematics
       └── /diagnostic   → 10-question calibration quiz
            └── /results → Score, topic breakdown, recommendations
                 ├── /practice   → Adaptive question-by-question practice
                 └── /dashboard  → Progress overview across all sessions
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Landing page
│   ├── subjects/           # Subject selection
│   ├── diagnostic/         # 10-question diagnostic quiz
│   ├── results/            # Diagnostic results + recommendations
│   ├── practice/           # Adaptive practice engine
│   └── dashboard/          # Progress dashboard
│
├── components/
│   ├── layout/
│   │   └── Nav.tsx         # Top navigation bar
│   ├── ui/
│   │   ├── Button.tsx      # Primary / ghost button variants
│   │   ├── Card.tsx        # Surface card component
│   │   └── ProgressBar.tsx # Animated progress indicator
│   └── quiz/
│       ├── QuestionCard.tsx    # Question display with metadata
│       ├── AnswerOption.tsx    # Selectable answer with state styles
│       └── ExplanationPanel.tsx # 4-part post-answer explanation
│
├── data/
│   ├── diagnosticQuestions.ts  # 10 calibration questions
│   └── practiceQuestions.ts    # 20 practice questions (easy/medium/hard)
│
├── store/
│   └── useAppStore.ts      # Zustand global state
│
├── types/
│   └── index.ts            # All shared TypeScript types
│
└── utils/
    ├── adaptiveEngine.ts   # Difficulty adjustment + question selection
    ├── scoring.ts          # Diagnostic result computation
    └── cn.ts               # className utility
```

---

## Feature Summary

### Diagnostic Quiz
- 10 questions covering Statistics, Algebra, Geometry, Indices, Sequences, Trigonometry, and Numbers
- One question at a time with correct/incorrect feedback
- Computes topic-level accuracy and recommends a starting difficulty

### Results Page
- Score and percentage
- Strong topics (≥70% accuracy) and weak topics (<60%)
- Recommended starting difficulty: Foundational / Intermediate / Advanced

### Adaptive Practice
- Selects questions weighted toward weak topics (70% bias)
- Difficulty adjusts automatically:
  - 3 of last 5 correct → promote difficulty
  - 2 of last 5 incorrect → demote difficulty
- Full 4-part explanations after every answer:
  1. Direct solution
  2. Concept explanation
  3. Method to remember
  4. Common mistake

### Progress Dashboard
- Combined stats from diagnostic + practice
- Per-topic accuracy bars
- Current difficulty level and correct streak

---

## Design System

| Token              | Value      | Usage                    |
|--------------------|------------|--------------------------|
| `brand-bg`         | `#0B0D17`  | Page background          |
| `brand-surface`    | `#12141F`  | Subtle surface           |
| `brand-surface2`   | `#1A1D2E`  | Card backgrounds         |
| `brand-accent`     | `#C9A96E`  | Primary accent (gold)    |
| `brand-text`       | `#E6E1D3`  | Body text (warm white)   |
| `brand-textMuted`  | `#7A8299`  | Secondary text           |
| `brand-success`    | `#4DAA84`  | Correct answers          |
| `brand-error`      | `#CC6B67`  | Incorrect answers        |

Fonts: **Cormorant Garamond** (headings) + **DM Sans** (body) via Google Fonts.

---

## Extending the App

To add more subjects: add entries to `src/app/subjects/page.tsx` and create new question files under `src/data/`. The adaptive engine and scoring utilities are subject-agnostic.

To add more questions: append to `src/data/practiceQuestions.ts`. Follow the `Question` type in `src/types/index.ts`.
