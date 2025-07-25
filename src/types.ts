export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  category: number
}

export interface QuestionResult {
  question: Question
  userAnswer: number
  isCorrect: boolean
}

export const allTriviaQuestions: Question[] = [
  // Category 1 questions
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2,
    category: 1,
  },
  {
    id: 2,
    question: "Which country is known for the Eiffel Tower?",
    options: ["Italy", "Spain", "France", "Germany"],
    correctAnswer: 2,
    category: 1,
  },
  {
    id: 3,
    question: "What is the largest country by area?",
    options: ["China", "Canada", "Russia", "United States"],
    correctAnswer: 2,
    category: 1,
  },
  {
    id: 4,
    question: "Which continent is Egypt located in?",
    options: ["Asia", "Africa", "Europe"],
    correctAnswer: 1,
    category: 1,
  },
  // Category 2 questions
  {
    id: 5,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter"],
    correctAnswer: 1,
    category: 2,
  },
  {
    id: 6,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    category: 2,
  },
  {
    id: 7,
    question: "How many bones are in the adult human body?",
    options: ["206", "208", "210", "204"],
    correctAnswer: 0,
    category: 2,
  },
  {
    id: 8,
    question: "What gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide"],
    correctAnswer: 2,
    category: 2,
  },
  // Category 3 questions
  {
    id: 9,
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
    correctAnswer: 1,
    category: 3,
  },
  {
    id: 10,
    question: "In which year did World War II end?",
    options: ["1944", "1945", "1946"],
    correctAnswer: 1,
    category: 3,
  },
  {
    id: 11,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    correctAnswer: 1,
    category: 3,
  },
  {
    id: 12,
    question: "What year did the Titanic sink?",
    options: ["1910", "1912", "1914"],
    correctAnswer: 1,
    category: 3,
  },
  // Category 4 questions
  {
    id: 13,
    question: "Which sport is known as 'the beautiful game'?",
    options: ["Basketball", "Football/Soccer", "Tennis", "Baseball"],
    correctAnswer: 1,
    category: 4,
  },
  {
    id: 14,
    question: "How many players are on a basketball team on the court?",
    options: ["4", "5", "6"],
    correctAnswer: 1,
    category: 4,
  },
  {
    id: 15,
    question: "In which sport would you perform a slam dunk?",
    options: ["Volleyball", "Basketball", "Tennis", "Football"],
    correctAnswer: 1,
    category: 4,
  },
  {
    id: 16,
    question: "How often are the Summer Olympics held?",
    options: ["Every 2 years", "Every 4 years", "Every 3 years"],
    correctAnswer: 1,
    category: 4,
  },
]

export const categoryNames = ["Category 1", "Category 2", "Category 3", "Category 4"]