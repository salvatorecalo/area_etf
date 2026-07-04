import { create } from "zustand/react";

export type SubjectKeys = "chim" | "fis1" | "fis2" | "alg" | "inf" | "disp" | "tds" | "appl" | "emf" | "esd" | "ctrl";

export type MyformModel = Record<SubjectKeys, number>

export interface CourseConfig {
    name: string;
    iselt: number;
    desc: string;
    coeff: Record<SubjectKeys, number>;
}

interface QuizStoreProp {
    scores: MyformModel,
    setCourseScore: (course: string, score: number) => void,
    clearCourseScore: () => void
}

export const useQuizStore = create<QuizStoreProp>((set) => ({
    scores: {
        chim: 0, fis1: 0, fis2: 0, alg: 0, inf: 0,
        disp: 0, tds: 0, appl: 0, emf: 0, esd: 0, ctrl: 0
    },
    setCourseScore: (course: string, score) => set((state) => ({
        scores: { ...state.scores, [course]: score }
    })),
    clearCourseScore: () => set({
        scores: {
            chim: 0, fis1: 0, fis2: 0, alg: 0, inf: 0,
            disp: 0, tds: 0, appl: 0, emf: 0, esd: 0, ctrl: 0
        }
    })
}));