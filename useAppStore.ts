import { create } from 'zustand'
import { DiagnosticResult, PracticeAnswer, Difficulty } from '@/types'

interface AppState {
  // ── Diagnostic ──────────────────────────────────────────────────────────────
  diagnosticCompleted: boolean
  diagnosticAnswers: Record<string, number>      // questionId → selectedIndex
  diagnosticResult: DiagnosticResult | null

  // ── Practice ────────────────────────────────────────────────────────────────
  practiceHistory: PracticeAnswer[]
  currentDifficulty: Difficulty
  weakTopics: string[]

  // ── Actions ─────────────────────────────────────────────────────────────────
  setDiagnosticAnswer: (questionId: string, index: number) => void
  completeDiagnostic: (result: DiagnosticResult) => void
  addPracticeAnswer: (answer: PracticeAnswer) => void
  setCurrentDifficulty: (d: Difficulty) => void
  resetAll: () => void
}

const initialState = {
  diagnosticCompleted: false,
  diagnosticAnswers: {},
  diagnosticResult: null,
  practiceHistory: [],
  currentDifficulty: 'medium' as Difficulty,
  weakTopics: [],
}

export const useAppStore = create<AppState>((set) => ({
  ...initialState,

  setDiagnosticAnswer: (questionId, index) =>
    set(state => ({
      diagnosticAnswers: { ...state.diagnosticAnswers, [questionId]: index },
    })),

  completeDiagnostic: (result) =>
    set({
      diagnosticCompleted: true,
      diagnosticResult: result,
      currentDifficulty: result.recommendedDifficulty,
      weakTopics: result.weakTopics,
    }),

  addPracticeAnswer: (answer) =>
    set(state => ({
      practiceHistory: [...state.practiceHistory, answer],
    })),

  setCurrentDifficulty: (d) => set({ currentDifficulty: d }),

  resetAll: () => set(initialState),
}))
