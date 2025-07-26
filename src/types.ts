export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface QuestionResult {
  question: Question
  userAnswer: string
  isCorrect: boolean
}
export type Category = "successor" | "kingdom" | "approval" | "prophetKing"

export const categoryNamesMap: Record<Category, string> = {
  "successor": "Succession",
  "kingdom": "Which Kingdom?",
  "approval": "Good or Bad",
  "prophetKing": "Who's your prophet?"
}