import { useState } from "react"
import { type Category, type Question, type QuestionResult } from "./types"
import { LandingPage } from "./components/Landing"
import { Results } from "./components/Results"
import { fetchQuestions } from "./api"

export default function KingsQuiz() {
  const [showResult, setShowResult] = useState(false)
  const [gameFinished, setGameFinished] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [loadingQuestions, setLoadingQuestions] = useState(false)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(["successor", "kingdom", "approval", "prophetKing"])
  const [selectedQuestionCount, setSelectedQuestionCount] = useState(10)
  const [gameQuestions, setGameQuestions] = useState<Question[]>([])
  const [questionResults, setQuestionResults] = useState<QuestionResult[]>([])

  const currentQuestion = gameQuestions[currentQuestionIndex]

  const handleAnswerSelect = (answer: string) => {
    if (showResult) return; // Prevent double click during result
    setSelectedAnswer(answer);
    // Immediately submit
    const isCorrect = answer === currentQuestion.correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }
    // Store the result
    const result: QuestionResult = {
      question: currentQuestion,
      userAnswer: answer,
      isCorrect: isCorrect,
    };
    setQuestionResults((prev) => [...prev, result]);
    setShowResult(true);
    setTimeout(() => {
      if (currentQuestionIndex < gameQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setGameFinished(true);
      }
    }, 1000);
  };

  const handleCategoryToggle = (categoryId: Category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId)
      } else {
        return [...prev, categoryId]
      }
    })
  }

  const startGame = async () => {
    setLoadingQuestions(true)
    const fetchedQuestions = await fetchQuestions(selectedQuestionCount, selectedCategories);
    const shuffled = [...fetchedQuestions].sort(() => Math.random() - 0.5)
    setGameQuestions(shuffled)
    setLoadingQuestions(false)
    setGameStarted(true)
  }

  const resetGame = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowResult(false)
    setGameFinished(false)
    setGameStarted(false)
    setGameQuestions([])
    setQuestionResults([])
  }

  if (loadingQuestions) {
    return <div className="loading">Loading questions...</div>
  }

  if (gameFinished) {
    return (
      <Results
        score={score}
        gameQuestions={gameQuestions}
        questionResults={questionResults}
        resetGame={resetGame}
      />
    )
  }

  if (!gameStarted) {
    return (
      <LandingPage
        selectedQuestionCount={selectedQuestionCount}
        setSelectedQuestionCount={setSelectedQuestionCount}
        selectedCategories={selectedCategories}
        handleCategoryChange={handleCategoryToggle}
        startGame={startGame}
      />
    )
  }

  return (
    <div className="trivia-container">
      <div className="trivia-header">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentQuestionIndex + 1) / gameQuestions.length) * 100}%` }}
          ></div>
        </div>
        <div className="question-counter">
          Question {currentQuestionIndex + 1} of {gameQuestions.length}
        </div>
        <div className="score">Score: {score}</div>
      </div>

      <div className="question-section">
        {showResult ? (
          <div className="result-message">
            {selectedAnswer === currentQuestion.correctAnswer ? (
              <span className="correct-message">✓ Correct!</span>
            ) : (
              <span className="incorrect-message">
                ✗ Incorrect. The correct answer was {currentQuestion.correctAnswer}.
              </span>
            )}
          </div>
        ) : <h1 className="question">{currentQuestion.question}</h1>}
      </div>

      <div className="answers-section">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`answer-option ${selectedAnswer === option ? "selected" : ""} ${
              showResult
                ? option === currentQuestion.correctAnswer
                  ? "correct"
                  : selectedAnswer === option
                    ? "incorrect"
                    : ""
                : ""
            }`}
            onClick={() => handleAnswerSelect(option)}
            disabled={showResult}
          >
            <span className="option-text">{option}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
