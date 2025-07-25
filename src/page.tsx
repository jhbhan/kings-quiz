import { useState } from "react"
import "./trivia.css"
import { type Question, type QuestionResult, allTriviaQuestions } from "./types"
import { LandingPage } from "./components/Landing"
import { Results } from "./components/Results"

export default function TriviaApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [gameFinished, setGameFinished] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [selectedCategories, setSelectedCategories] = useState<number[]>([1, 2, 3, 4])
  const [selectedQuestionCount, setSelectedQuestionCount] = useState(10)
  const [gameQuestions, setGameQuestions] = useState<Question[]>([])
  const [questionResults, setQuestionResults] = useState<QuestionResult[]>([])

  const currentQuestion = gameQuestions[currentQuestionIndex]

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer
    if (isCorrect) {
      setScore(score + 1)
    }

    // Store the result
    const result: QuestionResult = {
      question: currentQuestion,
      userAnswer: selectedAnswer,
      isCorrect: isCorrect,
    }

    setQuestionResults((prev) => [...prev, result])
    setShowResult(true)

    setTimeout(() => {
      if (currentQuestionIndex < gameQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setSelectedAnswer(null)
        setShowResult(false)
      } else {
        setGameFinished(true)
      }
    }, 2000)
  }

  const handleCategoryToggle = (categoryId: number) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId)
      } else {
        return [...prev, categoryId]
      }
    })
  }

  const startGame = () => {
    // Filter questions by selected categories
    const filteredQuestions = allTriviaQuestions.filter((q) => selectedCategories.includes(q.category))

    // Shuffle and limit questions
    const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5)
    const limitedQuestions = shuffled.slice(0, Math.min(selectedQuestionCount, shuffled.length))

    setGameQuestions(limitedQuestions)
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
        <h1 className="question">{currentQuestion.question}</h1>
      </div>

      <div className="answers-section">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`answer-option ${selectedAnswer === index ? "selected" : ""} ${
              showResult
                ? index === currentQuestion.correctAnswer
                  ? "correct"
                  : selectedAnswer === index
                    ? "incorrect"
                    : ""
                : ""
            }`}
            onClick={() => handleAnswerSelect(index)}
            disabled={showResult}
          >
            <span className="option-letter">{String.fromCharCode(65 + index)}</span>
            <span className="option-text">{option}</span>
          </button>
        ))}
      </div>

      <div className="submit-section">
        {!showResult ? (
          <button className="submit-btn" onClick={handleSubmit} disabled={selectedAnswer === null}>
            Submit Answer
          </button>
        ) : (
          <div className="result-message">
            {selectedAnswer === currentQuestion.correctAnswer ? (
              <span className="correct-message">✓ Correct!</span>
            ) : (
              <span className="incorrect-message">
                ✗ Incorrect. The correct answer was {String.fromCharCode(65 + currentQuestion.correctAnswer)}.
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
